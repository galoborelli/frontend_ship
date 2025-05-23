import { useState } from "react";
import cardImage from "@assets/hero-image.png";
import {
    TextField,
    FormControlLabel,
    Checkbox,
    Typography,
    Box,
    Button,
    Card,
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

const Reserve = ({ id }) => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        date_selected: null,
        time_selected: "1",
        coment: "",
        quantity: "",
        terms: false,
    });
    const [dateAvailability, setDateAvailability] = useState([]);
    const [loadingAvailability, setLoadingAvailability] = useState(false);
    const [availabilityError, setAvailabilityError] = useState(null);

    const dateValue = formData.date_selected ? parseISO(formData.date_selected) : null;

    const handleChangeForm = (e) => {
        const { name, value, checked, type } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const fetchAvailability = async (formattedDate) => {
        setLoadingAvailability(true);
        setAvailabilityError(null);
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/reserves/${formattedDate}/`);
            console.log("Disponibilidad:", response.data);
            setDateAvailability(response.data);
        } catch (error) {
            console.error("Error fetching availability:", error);
            setAvailabilityError(error.message || "Error al obtener la disponibilidad.");
            setDateAvailability([]);
        } finally {
            setLoadingAvailability(false);
        }
    };

    const handleDateChange = (newDate) => {
        const formattedDate = newDate
          ? newDate.toLocaleDateString("en-CA") // yyyy-mm-dd
          : "";
        setFormData({ ...formData, date_selected: formattedDate });
      
        if (formattedDate) {
          fetchAvailability(formattedDate);
        } else {
          setDateAvailability([]);
        }
      };
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.terms) return alert(t("reserve.terms"));
        console.log(formData);
        dispatch(createReserve(formData));
    };

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
                                    placeholder="e.g. +54 9 221 4567890"
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
                                <Typography sx={styles.label}>{t("reserve.comments")}</Typography>
                                <TextField
                                    sx={styles.textFieldStyle}
                                    name="coment"
                                    multiline
                                    minRows={4}
                                    placeholder="e.g. Alguna petición especial..."
                                    value={formData.coment || ""}
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
                                <TextField
                                    sx={styles.textFieldStyle}
                                    name="quantity"
                                    type="number"
                                    placeholder="min. 2 max. 8"
                                    value={formData.quantity || ""}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </Box>

                            <Box>
                                <Typography sx={styles.label}>{t("reserve.time")}</Typography>
                                <Select
                                    name="time_selected"
                                    value={formData.time_selected || ""}
                                    onChange={handleChangeForm}
                                    sx={styles.textFieldStyle}
                                    required
                                    disabled={loadingAvailability || availabilityError || (dateAvailability.length === 0 && formData.date_selected)}
                                >
                                    {loadingAvailability && (
                                        <MenuItem disabled value="">
                                            {t("reserve.loadingAvailability")}
                                        </MenuItem>
                                    )}
                                    {availabilityError && (
                                        <MenuItem disabled value="">
                                            {t("reserve.availabilityError")}
                                        </MenuItem>
                                    )}
                                    {!loadingAvailability && !availabilityError && dateAvailability.length > 0 &&
                                        dateAvailability.map((schedule) => (
                                         
                                            <MenuItem key={schedule.id} value={schedule.id}>
                                                {schedule.type === "mañana" ? t("reserve.morning") : t("reserve.afternoon")}
                                            </MenuItem>
                                        ))}
                                    {!loadingAvailability && !availabilityError && dateAvailability.length === 0 && formData.date_selected && (
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