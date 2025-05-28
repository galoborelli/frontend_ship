import { Box, Typography } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";
import { motion, AnimatePresence } from "framer-motion";
import { keyframes } from "@emotion/react";
import { useSelector } from "react-redux";

// Animación de rotación con Emotion
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

// Estilo del fondo del loader
const loaderBackdrop = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(4px)", // suaviza el fondo
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1300,
};

// Estilo del icono
const loaderIcon = {
  fontSize: "6rem",
  color: "white",
  animation: `${rotate} 2s linear infinite`,
};

const Loader = ({ id }) => {
  const isLoading = useSelector((state) => state.loader.isLoadingById[id]);
  if (!isLoading) return null;
  console.log("Loader")
  return (
    <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={loaderBackdrop}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{ textAlign: "center" }}
          >
            <SyncIcon sx={loaderIcon} />
            <Typography
              variant="h6"
              color="white"
              mt={2}
              sx={{ fontWeight: 300, letterSpacing: 1 }}
            >
              Cargando, por favor espera...
            </Typography>
          </motion.div>
        </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
