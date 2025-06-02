import { useEffect, useState } from "react";

import { Box, Typography, Button, Divider } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import { motion } from "framer-motion";
import * as styles from "./reserveStyles";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "@Components/Loader";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loaderActive } from "@Redux/actions/loaderActions";

const ReserveSuccess = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const reserveId = queryParams.get('reserve_id');
  const [bookingData, setBookingData] = useState(null);
  const isLoading = useSelector((state) => state.loader.isLoadingById["id"]);

  
  useEffect(() => {
    const fetchData = async () => {
    dispatch(loaderActive({ id:"id", value: true }));
    try {
    if (reserveId) {
      // Llamar a tu API para obtener datos de la reserva con este id
      
      const response = await axios.get([`${import.meta.env.VITE_API_URL}/api/reserves/${reserveId}`]);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setBookingData(response.data);
    }
    } catch (error) {
      console.error("Error fetching reservation:", error);
    } finally {
      dispatch(loaderActive({ id:"id", value: false }));
    }
  };
    fetchData();
  }, [reserveId, dispatch]);

 

  if(isLoading || !bookingData) return <Loader id="id" />

  return (
    <Box sx={styles.container}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={styles.card}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        >
          <CheckCircleIcon sx={styles.iconSuccess} />
        </motion.div>

        <Typography sx={styles.title}>¡Reserva exitosa!</Typography>

        <Typography sx={styles.description}>
          Gracias por tu reserva, <strong>{bookingData.name}</strong>. Tu turno ha sido confirmado.
        </Typography>

        <Divider sx={{ width: "100%", my: 2 }} />

        <Box sx={styles.detailsBox}>
          <Box sx={styles.detailRow}>
            <CalendarTodayIcon sx={styles.detailIcon} />
            <Typography>
              <strong>Fecha:</strong> {bookingData.date_selected}
            </Typography>
          </Box>
          <Box sx={styles.detailRow}>
            <AccessTimeIcon sx={styles.detailIcon} />
            <Typography>
              <strong>Horario:</strong> {bookingData.time_selected /* o aquí el label formateado */}
            </Typography>
          </Box>
          <Box sx={styles.detailRow}>
            <PeopleIcon sx={styles.detailIcon} />
            <Typography>
              <strong>Personas:</strong> {bookingData.quantity}
            </Typography>
          </Box>
          {bookingData.message && (
            <Box sx={styles.detailRow}>
              <MessageIcon sx={styles.detailIcon} />
              <Typography>
                <strong>Mensaje:</strong> {bookingData.message}
              </Typography>
            </Box>
          )}
        </Box>

        <Typography sx={styles.tip}>
          * Recuerda llegar 10 minutos antes.
        </Typography>

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
