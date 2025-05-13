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
import * as styles from "./reserveStyle";

const Reserve = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    dateSelected: null,
    timeSelected: "",
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
    <Box id={id} sx={styles.reserveContainer}>
      <Box sx={styles.formBox}>
        <Typography sx={styles.titleBox}>Reservá tu experiencia.</Typography>
        <Typography sx={styles.subTitleStyle}>
          Completá el formulario y te responderemos lo antes posible. <br />
          También puedes escribirnos directamente por WhatsApp.
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <form onSubmit={handleSubmit}>
            <Box sx={styles.formGrid}>
              <Box>
                <Typography sx={styles.label}>Nombre completo</Typography>
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
                <Typography sx={styles.label}>Email o WhatsApp</Typography>
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
                <Typography sx={styles.label}>Fecha de reserva</Typography>
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
                <Typography sx={styles.label}>Comentarios</Typography>
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
              <Box sx={{ gridRow: { xs: 5 , md:2}, gridColumn: { lg: "2" } }}>
                <Typography sx={styles.label}>Cantidad de personas</Typography>
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
                <Typography sx={styles.label}>Seleccione un horario</Typography>
                <Select
                  name="timeSelected"
                  value={formData.timeSelected}
                  onChange={handleChangeForm}
                  sx={styles.textFieldStyle }
                  required
                >
                  <MenuItem value="mañana" sx={styles.textFieldStyle}>
                    De 10:00 a 14:00
                  </MenuItem>
                  <MenuItem value="tarde" sx={styles.textFieldStyle}>
                    De 13:00 a 19:00
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
