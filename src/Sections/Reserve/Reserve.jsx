import { useEffect, useState } from "react";

import cardImage from "@assets/hero-image.png";

import {
    TextField,
    FormControlLabel,
    Checkbox,
    Typography,
    Box,
    Button,
    Card,
    IconButton,
    CardMedia,
    MenuItem,
    Select,
    useMediaQuery,
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { useTranslation } from "react-i18next";

import * as styles from "./reserveStyle";

import { useDispatch, useSelector } from "react-redux";
import { createReserveCard, createReserveCash } from "@Redux/actions/reserveActions";
import { loaderActive } from "@Redux/actions/loaderActions";
import { parseISO } from "date-fns";

import axios from "axios";

import Loader from "@Components/Loader";

function formatHour(hourString) {
    return hourString.slice(0, -3); // elimina los últimos 3 caracteres ":00"
  }

const Reserve = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loader.isLoadingById["id"]);
    

    // ESTADOS
    const [formData, setFormData] = useState({
        id_reserve: "",
        name: "",
        contact: "",
        date_selected: null,
        time_selected: "1",
        message: "",
        quantity: "",
        status: "",
        amount: 100,
        method_payment: "",
        terms: false,
    });
    const [dateAvailability, setDateAvailability] = useState([]);
    const dateValue = formData.date_selected ? parseISO(formData.date_selected) : null;
    const [selected, setSelected] = useState("cash");

    // FUNCIONES
    const fetchAvailability = async (formattedDate) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/reserves/${formattedDate}/`);
            console.log("Disponibilidad:", response.data);
            setDateAvailability(response.data);
        } catch (error) {
            console.error("Error fetching availability:", error);
            alert(error.message || "Error al obtener la disponibilidad.");
            setDateAvailability([]);
        }
    };

    const handleChangeForm = (e) => {
        const { name, value, checked, type } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newValue });
        console.log(formData);
    };

    const handleDateChange = (newDate) => {
        const formattedDate = newDate
          ? newDate.toLocaleDateString("en-CA") // yyyy-mm-dd
          : "";
        setFormData({ ...formData, date_selected: formattedDate });
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!formData.terms) {
          return alert(t("reserve.terms"));
        }
        
        if (formData.method_payment === "cash") {
            const response = await dispatch(createReserveCash(formData));
            console.log(response);
            
        } else if (formData.method_payment === "card") {    
            const checkoutUrl = await dispatch(createReserveCard(formData));
            if (checkoutUrl) {
              window.location.href = checkoutUrl;
            }
          }
      };
      


    // useEffect para obtener la disponibilidad de horarios en el dia seleccionado
    useEffect(() => {
        const loadAvailability = async () => {
          dispatch(loaderActive({ id: "id", value: true }));
          try {
            if (formData.date_selected) {
              await fetchAvailability(formData.date_selected);
            }
          } catch (error) {
            console.error("Error fetching availability:", error);
          } finally {
            dispatch(loaderActive({ id: "id", value: false }));
          }
        };
      
        loadAvailability();
      }, [formData.date_selected, dispatch]);
      
    

    return (
        <>
        {isLoading && <Loader id="id" />}

        {!isLoading && (
        
        
            <Box id="id" sx={styles.reserveContainer}>
            {isMobile ? (
                <Card sx={styles.cardStyle}>
                    <CardMedia component="img" image={cardImage} alt="Imagen de experiencia" sx={styles.cardImageStyle} />
                </Card>
            ) : null}

            <Box sx={styles.formBox}>
                <Typography sx={styles.titleBox}>{t("reserve.title")}</Typography>
                <Typography
                    sx={styles.subTitleStyle}
                    dangerouslySetInnerHTML={{ __html: t("reserve.subtitle") }}
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <form >
                        <Box sx={styles.formGrid}>
                            <Box>
                                <Typography sx={styles.label}>{t("reserve.name")}</Typography>
                                <TextField
                                    sx={styles.textFieldStyle}
                                    name="name"
                                    placeholder="e.g. Max Steel"
                                    value={formData.name || ""}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </Box>

                            <Box>
                                <Typography sx={styles.label}>{t("reserve.contact")}</Typography>
                                <TextField
                                    sx={styles.textFieldStyle}
                                    name="contact"
                                    placeholder="e.g. +34 123 23 23 23"
                                    value={formData.contact || ""}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </Box>

                            <Box>
                                <Typography sx={styles.label}>{t("reserve.date")}</Typography>
                                <DatePicker
                                    value={dateValue}
                                    onChange={handleDateChange}
                                    slotProps={{
                                        textField: {
                                            sx: styles.textFieldStyle,
                                            required: true,
                                        },
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    gridRow: { xs: "6", lg: "3" },
                                    gridColumn: { lg: "2" },
                                }}
                            >
                                <Typography sx={styles.label}>{t("reserve.message")}</Typography>
                                <TextField
                                    sx={styles.textFieldStyle}
                                    name="message"
                                    multiline
                                    minRows={4}
                                    placeholder="e.g. Alguna petición especial..."
                                    value={formData.message || ""}
                                    onChange={handleChangeForm}
                                />
                            </Box>

                            <Box
                                sx={{
                                    gridRow: { xs: 5, md: 2 },
                                    gridColumn: { lg: "2" },
                                }}
                            >
                                <Typography sx={styles.label}>{t("reserve.quantity")}</Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                        border: "1px solid black",
                                        borderRadius: "12px",
                                        width: "100%",
                                        maxWidth: "500px",
                                        mt: "0.5rem",
                                        p: 2, // padding en los 4 lados
                                        gap: 2, // espacio entre los botones y el número
                                        backgroundColor: "#fafafa",
                                    }}
                                >
                                    <IconButton
                                        onClick={() =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                quantity: Math.max(2, Number(prev.quantity || 2) - 1),
                                            }))
                                        }
                                        sx={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "8px",
                                            backgroundColor: "#f0f0f0",
                                        }}
                                    >
                                        
                                    </IconButton>

                                    <Box
                                        sx={{
                                            color: "grey",
                                            minWidth: "32px",
                                            textAlign: "center",
                                            fontSize: "1.3rem",
                                            fontWeight: "bold",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {formData.quantity || 2}
                                    </Box>

                                    <IconButton
                                        onClick={() =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                quantity: Math.min(8, Number(prev.quantity || 2) + 1),
                                            }))
                                        }
                                        sx={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "8px",
                                            backgroundColor: "#f0f0f0",
                                        }}
                                    >
                                        +
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={styles.label}>{t("reserve.time")}</Typography>
                                <Select
                                    name="time_selected"
                                    value={formData.time_selected || ""}
                                    onChange={handleChangeForm}
                                    sx={styles.textFieldStyle}
                                    required
                                    disabled={dateAvailability.length === 0 && formData.date_selected}
                                >
                                   {dateAvailability.length > 0 &&
                                    dateAvailability.map((schedule) => (
                                    <MenuItem key={schedule.id} value={schedule.id}>
                                    {`${formatHour(schedule.init_hour)} a ${formatHour(schedule.end_hour)}`}
                                    </MenuItem>
                                    ))
                                    }
                                    {dateAvailability.length === 0 && formData.date_selected && (
                                        <MenuItem disabled value="">
                                            {t("reserve.noAvailability")}
                                        </MenuItem>
                                    )}
                                    {!formData.date_selected && (
                                        <MenuItem disabled value="">
                                            {t("reserve.selectDate")}
                                        </MenuItem>
                                    )}
                                </Select>
                            </Box>
                            <Box sx={styles.paymentMethodBox}>
                            <Typography sx={styles.label}>Método de pago</Typography>
                            
                            <Box sx={{ display: "flex", gap: 2 }}>
                            <Button
                                fullWidth
                                onClick={() => {
                                    setSelected("card");
                                    setFormData((prev) => ({ ...prev, method_payment: "card" }));
                                }}
                                startIcon={<CreditCardIcon />}
                                sx={styles.paymentButton(selected === "card", false)}
                                >
                                <Typography variant="body1">Pagar con tarjeta</Typography>
                                </Button>

                                <Button
                                fullWidth
                                onClick={() => {
                                    setSelected("cash");
                                    setFormData((prev) => ({ ...prev, method_payment: "cash" }));
                                }}
                                startIcon={<AttachMoneyIcon />}
                                sx={styles.paymentButton(selected === "cash", true)}
                                >
                                <Typography variant="body1">Pagar en efectivo</Typography>
                                </Button>
                            </Box>
                            </Box>

                        </Box>
                    </form>
                </LocalizationProvider>
            </Box>

            <Box sx={styles.rightBox}>
                {!isMobile && (
                    <Card sx={styles.cardStyle}>
                        <CardMedia
                            component="img"
                            image={cardImage}
                            alt="Imagen de experiencia"
                            sx={styles.cardImageStyle}
                        />
                    </Card>
                )}

                <Box sx={styles.sendButtonBox}>
                    <FormControlLabel
                        sx={styles.termsLabel}
                        control={
                            <Checkbox
                                name="terms"
                                checked={formData.terms || false}
                                onChange={handleChangeForm}
                                required
                            />
                        }
                        label={t("reserve.terms")}
                    />

                    <Button
                        sx={styles.sendButton}
                        endIcon={<span>➔</span>}
                       onClick={handleSubmit}
                    >
                        {t("reserve.submit")}
                    </Button>
                </Box>
            </Box>
        </Box>
        )}
     </>
   );
};

export default Reserve;