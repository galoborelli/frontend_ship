
import SyncIcon from '@mui/icons-material/Sync';
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const loaderBox = {
  position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // ✅ opacidad solo en el fondo
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1300
  };


const loaderIcon = {
  position:"absolute",
  fontSize: "6rem",
  color: "white",
  animation: `${rotate} 2s linear infinite`,
};




const Loader = () => {
  return (
    <Box sx={loaderBox}>
      <SyncIcon sx={loaderIcon} />
    </Box>
  );
};




export default Loader;
