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

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useTranslation } from "react-i18next";
import * as styles from "./reserveStyle";
import { useDispatch } from "react-redux";
import { createReserve } from "@Redux/actions/reserveActions";
import { parseISO } from "date-fns";
import axios from "axios";


function formatHour(hourString) {
    // hourString: "8:00:00"
    return hourString.slice(0, -3); // elimina los últimos 3 caracteres ":00"
  }

const Reserve = ({ id }) => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const { t } = useTranslation();
    const dispatch = useDispatch();

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
        terms: false,
    });
    const [dateAvailability, setDateAvailability] = useState([]);
    const dateValue = formData.date_selected ? parseISO(formData.date_selected) : null;

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
    };

    const handleDateChange = (newDate) => {
        const formattedDate = newDate
          ? newDate.toLocaleDateString("en-CA") // yyyy-mm-dd
          : "";
        setFormData({ ...formData, date_selected: formattedDate });
      };
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.terms) return alert(t("reserve.terms"));
        console.log(formData);
        const checkoutUrl = await dispatch(createReserve(formData));
        if(checkoutUrl){window.location.href = checkoutUrl;}
    };

    
    // useEffect para obtener la disponibilidad de horarios en el dia seleccionado
    useEffect(() => {
    if(formData.date_selected) {
    fetchAvailability(formData.date_selected);
    }
    }, [formData.date_selected]);


    return (
        <Box id={id} sx={styles.reserveContainer}>
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
                    <form onSubmit={handleSubmit}>
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
                                        –
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
                                            {t("reserve.noAvailability")}                                        </MenuItem>
                                    )}
                                    {!formData.date_selected && (
                                        <MenuItem disabled value="">
                                            {t("reserve.selectDate")}
                                        </MenuItem>
                                    )}
                                </Select>
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
    );
};

export default Reserve;