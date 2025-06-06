import { Box, Modal, IconButton, useMediaQuery, useTheme } from "@mui/material"; // Agregué useMediaQuery, useTheme para responsividad
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import ModalCarrousel from "../ModalCarrousel/ModalCarrousel";
import ModalList from "@Components/ModalList/ModalList";

const CustomModal = ({ open, onClose, modalType }) => {
  const theme = useTheme(); // Hook para acceder al tema
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detectar pantallas pequeñas

  const renderContent = () => {
    switch (modalType) {
      case "about":
        return <ModalCarrousel />;
      case "features":
        return <ModalList />;
      case "routes":
        return <ModalCarrousel />;
      default:
        return null;
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Box
          sx={{
            position: 'relative', // Este Box es el ancla para el botón de cierre
            bgColor:"none", // Fondo blanco para el contenido del modal
            borderRadius: '8px',
            //boxShadow: 24,
            p: isSmallScreen ? 2 : 8, // Padding adaptado a pantallas pequeñas
            outline: 'none', // Quita el contorno azul al enfocar

            // Dimensiones para el contenido del modal
            width: isSmallScreen ? '95vw' : 'auto', // Ancho relativo al viewport en móvil, auto en desktop
            maxWidth: '900px', // Ancho máximo en desktop
            maxHeight: '90vh', // Altura máxima
            overflowY: 'auto', // Habilita scroll vertical si el contenido es muy largo
            display: 'flex', // Para centrar el contenido si es más pequeño que el box
            flexDirection: 'column',
            alignItems: 'center', // Centra el carrusel/lista horizontalmente
            justifyContent: 'center', // Centra verticalmente si es necesario
          }}
        >
          {/* Botón de cierre */}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: isSmallScreen ? 8 : 16, // Posición adaptable
              right: isSmallScreen ? 8 : 16, // Posición adaptable
              color: 'grey.300',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              },
              zIndex: 1300,
            }}
          >
            <CloseIcon sx={{ color: 'white' }} />
          </IconButton>

          {/* Renderiza el contenido: ModalCarrousel o ModalList */}
          {renderContent()}
        </Box>
      </motion.div>
    </Modal>
  );
};

export default CustomModal;