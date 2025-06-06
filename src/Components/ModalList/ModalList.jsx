import { Box, List, ListItem, Typography, Divider } from "@mui/material";
import * as styles from "./styleModal";

// Importa los íconos de Material UI que usarás
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import SailingIcon from '@mui/icons-material/Sailing';
import GroupIcon from '@mui/icons-material/Group';
import StraightenIcon from '@mui/icons-material/Straighten';
import SpaIcon from '@mui/icons-material/Spa';
import SpeedIcon from '@mui/icons-material/Speed';
import PowerIcon from '@mui/icons-material/Power';


const ModalList = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ color: "black" }}>
        {/* Ícono para el título principal con color 'primary' del tema */}
        <DirectionsBoatFilledIcon color="primary" sx={{ verticalAlign: 'middle', mr: 1 }} /> Especificaciones del Barco
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <List sx={{ color: "black", '& .MuiListItem-root': { margin: 2 } }}>
        <ListItem>
          <Typography variant="subtitle1" fontWeight="bold">
            {/* Ícono para "Tipo de embarcación" con un color azul personalizado */}
            <SailingIcon sx={{ color: '#007BFF', verticalAlign: 'middle', mr: 0.5 }} /> Tipo de embarcación:
          </Typography>
          <Typography variant="body1" sx={{ ml: 1 }}>
            Catamarán a motor
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="subtitle1" fontWeight="bold">
            {/* Ícono para "Capacidad máxima" con el color 'action' del tema */}
            <GroupIcon color="action" sx={{ verticalAlign: 'middle', mr: 0.5 }} /> Capacidad máxima:
          </Typography>
          <Typography variant="body1" sx={{ ml: 1 }}>
            6 pasajeros + capitán
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="subtitle1" fontWeight="bold">
            {/* Ícono para "Dimensiones" con el color 'warning.main' del tema */}
            <StraightenIcon sx={{ color: 'warning.main', verticalAlign: 'middle', mr: 0.5 }} /> Dimensiones:
          </Typography>
          <Typography variant="body1" sx={{ ml: 1 }}>
            12 metros de largo x 6 metros de ancho
          </Typography>
        </ListItem>

        <ListItem sx={{ alignItems: 'flex-start' }}> {/* Alinea los elementos al inicio si hay varias líneas */}
          <Typography variant="subtitle1" fontWeight="bold" sx={{ flexShrink: 0 }}> {/* Evita que el título se reduzca */}
            {/* Ícono para "Comodidades" con el color 'success.main' del tema */}
            <SpaIcon sx={{ color: 'success.main', verticalAlign: 'middle', mr: 0.5 }} /> Comodidades:
          </Typography>
          <Typography variant="body1" sx={{ ml: 1, flexGrow: 1 }}> {/* Permite que este texto crezca y envuelva */}
            Cabina con baño, cubierta superior, sistema de sonido, heladera, mesa comedor
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="subtitle1" fontWeight="bold">
            {/* Ícono para "Velocidad de crucero" con un color naranja rojizo personalizado */}
            <SpeedIcon sx={{ color: '#FF4500', verticalAlign: 'middle', mr: 0.5 }} /> Velocidad de crucero:
          </Typography>
          <Typography variant="body1" sx={{ ml: 1 }}>
            20 nudos
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="subtitle1" fontWeight="bold">
            {/* Ícono para "Potencia del motor" con el color 'error.main' del tema */}
            <PowerIcon sx={{ color: 'error.main', verticalAlign: 'middle', mr: 0.5 }} /> Potencia del motor:
          </Typography>
          <Typography variant="body1" sx={{ ml: 1 }}>
            2 motores de 200 HP
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default ModalList;