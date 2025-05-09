import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: {lg:'16px', xs:'8px'},
        zIndex: 1000,
      }}
    >
      <IconButton
        sx={{
          backgroundColor: "#25D366",
          color: "white",
          "&:hover": {
            backgroundColor: "#1ebd5a",
          },
          width: 56,
          height: 56,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
        href="https://wa.me/549XXXXXXXXXX" // reemplazá con tu número
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </IconButton>
    </Box>
  );
};

export default WhatsAppButton;
