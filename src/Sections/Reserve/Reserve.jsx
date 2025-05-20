import {useState} from "react";
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
import { useTranslation } from "react-i18next";
import * as styles from "./reserveStyle";
import {  useDispatch } from "react-redux";
import { createReserve} from "../../redux/actions/reserveActions";
import { parseISO } from "date-fns";
import { useMediaQuery } from "@mui/material";
const Reserve = ({ id }) => {

  const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
  
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date_selected: null,
    time_selected: "1",
    coment: "",
    quantity: "",
    terms: false
  });





  // Convierte el string ISO de Redux a objeto Date o null para DatePicker
  const dateValue = formData.date_selected ? parseISO(formData.date_selected) : null;

  const handleChangeForm = (e) => {
    const { name, value, checked, type } = e.target;

    let newValue;
    if (type === "checkbox") {
      newValue = checked;
    } else {
      newValue = value;
    }

   setFormData({
    ...formData,
    [name]: newValue,
   });
  };

  // Maneja el cambio de fecha, guardando en Redux la fecha formateada como string ISO (YYYY-MM-DD)
  const handleDateChange = (newDate) => {
    const formattedDate = newDate ? newDate.toISOString().split("T")[0] : "";
    setFormData({
      ...formData,
      date_selected: formattedDate,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.terms) return alert(t("reserve.terms"));
    console.log(formData);
    dispatch(createReserve(formData));
  };

  return (
  
  <Box id={id} sx={styles.reserveContainer}>
      {isMobile ?         <Card sx={styles.cardStyle}>
          <CardMedia
            component="img"
            image={cardImage}
            alt="Imagen de experiencia"
            sx={styles.cardImageStyle}
          />
        </Card>: null}
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
                  value={dateValue  }
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      sx: styles.textFieldStyle,
                      required: true,
                    },
                  }}
                />
              </Box>

              <Box sx={{ gridRow: { xs: "6", lg: "3" }, gridColumn: { lg: "2" } }}>
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

              <Box sx={{ gridRow: { xs: 5, md: 2 }, gridColumn: { lg: "2" } }}>
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
        {isMobile ? null : <Card sx={styles.cardStyle}>
          <CardMedia
            component="img"
            image={cardImage}
            alt="Imagen de experiencia"
            sx={styles.cardImageStyle}
          />
        </Card>}

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
          <Button sx={styles.sendButton} endIcon={<span>➔</span>} onClick={handleSubmit}>
            {t("reserve.submit")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Reserve;
