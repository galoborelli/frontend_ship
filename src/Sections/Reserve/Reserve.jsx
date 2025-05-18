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
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useTranslation } from "react-i18next"; // Importa el hook de traducción
import * as styles from "./reserveStyle";
import axios from "axios";


const Reserve = ({ id }) => {
  const { t } = useTranslation(); // Utiliza el hook de traducción

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date_reserve: '',
    time_reserve: "",
    coment: "",
    cuantity: "",
    terms: false,
  });

  const formatToISODate = (date) => {
    return new Date(date).toISOString().split('T')[0]; // "YYYY-MM-DD"
  };

  const handleChangeForm = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
      
    });
    console.log(formData);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, contact, dateSelected, timeSelected, coment, quantity, terms } = formData;
    if (!terms) return alert(t("reserve.terms"));
    const data = {
      name,
      contact,
      date_reserve: dateSelected ? formatToISODate(dateSelected) : null,
      time_reserve: timeSelected,
      cuantity: quantity,
      coment,
    };
    console.log(data);
    try {
      const url = import.meta.env.VITE_API_URL.replace(/\/$/, '');
      if (formData) {
        const response = await axios.post(`${url}/api/reserves/`, data);
        console.log(response.data);
      }
    }  catch (error) {
      console.error(error.response?.data || error, 'Error al enviar la reserva');
    }
  };

  return (
    <Box id={id} sx={styles.reserveContainer}>
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
                  value={formData.name}
                  onChange={handleChangeForm}
                  required
                />
              </Box>

              <Box>
                <Typography sx={styles.label}>
                  {t("reserve.contact")}
                </Typography>
                <TextField
                  sx={styles.textFieldStyle}
                  name="contact"
                  placeholder="e.g. +54 9 221 4567890"
                  value={formData.contact}
                  onChange={handleChangeForm}
                  required
                />
              </Box>

              <Box>
                <Typography sx={styles.label}>{t("reserve.date")}</Typography>
                <DatePicker
                  value={formData.dateSelected}
                  onChange={(newDate) =>
                    setFormData({ ...formData, dateSelected: newDate })
                  }
                  slotProps={{
                    textField: {
                      sx: styles.textFieldStyle,
                    },
                  }}
                />
              </Box>

              <Box
                sx={{ gridRow: { xs: "6", lg: "3" }, gridColumn: { lg: "2" } }}
              >
                <Typography sx={styles.label}>
                  {t("reserve.comments")}
                </Typography>
                <TextField
                  sx={styles.textFieldStyle}
                  name="coment"
                  multiline
                  minRows={4}
                  placeholder="e.g. Alguna petición especial..."
                  value={formData.coment}
                  onChange={handleChangeForm}
                />
              </Box>

              <Box sx={{ gridRow: { xs: 5, md: 2 }, gridColumn: { lg: "2" } }}>
                <Typography sx={styles.label}>
                  {t("reserve.quantity")}
                </Typography>
                <TextField
                  sx={styles.textFieldStyle}
                  name="quantity"
                  type="number"
                  placeholder="min. 2 max. 8"
                  value={formData.quantity}
                  onChange={handleChangeForm}
                  required
                />
              </Box>

              <Box>
                <Typography sx={styles.label}>{t("reserve.time")}</Typography>
                <Select
                  name="timeSelected"
                  value={formData.timeSelected}
                  onChange={handleChangeForm}
                  sx={styles.textFieldStyle}
                  required
                >
                  <MenuItem value="1" sx={styles.textFieldStyle}>
                    {t("reserve.morning")}
                  </MenuItem>
                  <MenuItem value="2" sx={styles.textFieldStyle}>
                    {t("reserve.afternoon")}
                  </MenuItem>
                </Select>
              </Box>
            </Box>
          </form>
        </LocalizationProvider>
      </Box>

      <Box sx={styles.rightBox}>
        <Card sx={styles.cardStyle}>
          <CardMedia
            component="img"
            image={cardImage}
            alt="Imagen de experiencia"
            sx={styles.cardImageStyle}
          />
        </Card>

        <Box sx={styles.sendButtonBox}>
          <FormControlLabel
            sx={styles.termsLabel}
            control={
              <Checkbox
                name="terms"
                checked={formData.terms}
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
