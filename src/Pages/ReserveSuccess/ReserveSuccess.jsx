import { useSelector } from "react-redux";
import { Box, Typography, Button, Divider } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import { motion } from "framer-motion";
import * as styles from "./reserveStyles";

const ReserveSuccess = () => {
  const bookingForm = useSelector((state) => state.booking.bookingForm);

  if (!bookingForm) return null;

  return (
    <Box sx={styles.container}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={styles.card}
      >
        {/* Icono con animación de pop */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        >
          <CheckCircleIcon sx={styles.iconSuccess} />
        </motion.div>

        <Typography sx={styles.title}>¡Reserva exitosa!</Typography>

        <Typography sx={styles.description}>
          Gracias por tu reserva, <strong>{bookingForm.name}</strong>. Tu turno ha sido confirmado.
        </Typography>

        <Divider sx={{ width: "100%", my: 2 }} />

        {/* Datos con iconos para mejor visual */}
        <Box sx={styles.detailsBox}>
          <Box sx={styles.detailRow}>
            <CalendarTodayIcon sx={styles.detailIcon} />
            <Typography>
              <strong>Fecha:</strong> {bookingForm.date_selected}
            </Typography>
          </Box>
          <Box sx={styles.detailRow}>
            <AccessTimeIcon sx={styles.detailIcon} />
            <Typography>
              <strong>Horario:</strong> {bookingForm.time_selected}
            </Typography>
          </Box>
          <Box sx={styles.detailRow}>
            <PeopleIcon sx={styles.detailIcon} />
            <Typography>
              <strong>Personas:</strong> {bookingForm.quantity}
            </Typography>
          </Box>
          {bookingForm.message && (
            <Box sx={styles.detailRow}>
              <MessageIcon sx={styles.detailIcon} />
              <Typography>
                <strong>Mensaje:</strong> {bookingForm.message}
              </Typography>
            </Box>
          )}
        </Box>

        <Typography sx={styles.tip}>
          * Recuerda llegar 10 minutos antes para una mejor atención.
        </Typography>

        {/* Botón con animación delay para aparecer después */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <HashLink smooth to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={styles.button}>
              Volver al inicio
            </Button>
          </HashLink>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ReserveSuccess;
