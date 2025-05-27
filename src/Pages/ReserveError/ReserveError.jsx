import { Box, Typography, Button, Divider } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import * as styles from "./styleError";

const ReserveError = () => {
  return (
    <Box sx={styles.container}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={styles.cardError}
      >
        {/* Icono de error animado */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        >
          <ErrorOutlineIcon sx={styles.iconError} />
        </motion.div>

        <Typography sx={styles.titleError}>¡Algo salió mal!</Typography>

        <Typography sx={styles.descriptionError}>
          No pudimos completar tu reserva. Puede haber ocurrido un error con la conexión o los datos ingresados.
        </Typography>
        <Divider sx={{ width: "100%", my: 2, borderColor: "#e0e0e0", borderBottomWidth: "1px" }}/>
        <Typography sx={styles.tipError}>
          Por favor, revisa los datos e intenta nuevamente. Si el problema persiste, contáctanos.
        </Typography>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <HashLink smooth to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="error" sx={styles.button}>
              Volver al inicio
            </Button>
          </HashLink>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ReserveError;
