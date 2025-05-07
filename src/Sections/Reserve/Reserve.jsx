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
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import * as styles from "./reserveStyle";

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    dateSelected: null,
    coment: "",
    quantity: "",
    terms: false,
  });

  const handleChangeForm = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, contact, dateSelected, coment, quantity, terms } = formData;
    if (!terms) return alert("Debe aceptar los términos y condiciones");
    const data = {
      name,
      contact,
      dateSelected: dateSelected?.toISOString() || null,
      coment,
      quantity,
    };
    console.log(data);
  };

  return (
    <Box sx={styles.reserveContainer}>
      <Box sx={styles.formBox}>
        <Typography sx={styles.titleBox}>Reservá tu experiencia</Typography>
        <Typography sx={styles.subTitleStyle}>
          Completá el formulario y te responderemos lo antes posible. <br />
          También puedes escribirnos directamente por WhatsApp.
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <form onSubmit={handleSubmit}>
            <Box sx={styles.formGrid}>
              <TextField
                sx={styles.textFieldStyle}
                name="name"
                label="*Nombre completo"
                placeholder="e.g. Max Steel"
                value={formData.name}
                onChange={handleChangeForm}
                required
              />
              <TextField
                sx={styles.textFieldStyle}
                name="quantity"
                type="number"
                label="*Cantidad de personas"
                placeholder="min. 2 max. 8"
                value={formData.quantity}
                onChange={handleChangeForm}
                required
              />
              <TextField
                sx={styles.textFieldStyle}
                name="contact"
                label="*Email o WhatsApp"
                placeholder="e.g. +54 9 221 4567890"
                value={formData.contact}
                onChange={handleChangeForm}
                required
              />
              <TextField
                sx={styles.textFieldStyle}
                name="coment"
                label="Sección de comentarios"
                multiline
                minRows={4}
                placeholder="e.g. Nos encontramos en..."
                value={formData.coment}
                onChange={handleChangeForm}
              />
              
                <Typography>*Fecha deseada</Typography>
                <Box sx={styles.datePickerStyle}>
                  <DatePicker
                    sx={styles.textFieldStyle}
                    value={formData.dateSelected}
                    onChange={handleChangeForm}
                    renderInput={(params) => <TextField {...params} />}
                  />
                
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
            label="Acepto términos y condiciones"
          />
          <Button
            sx={styles.sendButton}
            endIcon={<span>➔</span>}
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Reserve;
