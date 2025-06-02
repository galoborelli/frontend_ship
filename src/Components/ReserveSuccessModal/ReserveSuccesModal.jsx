import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import * as styles from './successStyle';
import { useSelector } from 'react-redux';
export default function ReservaConfirmadaModal({ open, onClose }) {
    const reserve = useSelector((state) => state.booking.reservationData);
    
    if(!reserve){
       return null;
    }
    
    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-reserva-titulo"
        aria-describedby="modal-reserva-descripcion"
        sx={{
          backdropFilter: 'blur(4px)', // borroso de fondo
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // fondo oscuro translúcido
        }}
      >
        <Box sx={styles.modalStyle}>
          <Typography id="modal-reserva-titulo" variant="h6" component="h2" sx={styles.titleStyle}>
            ¡Reserva confirmada!
          </Typography>
          <Typography id="modal-reserva-descripcion"  sx={styles.textStyle} >
            Nombre: {reserve.name} <br />
            Fecha: {reserve.date_selected} <br />
            Hora: {reserve.time_selected} <br />
            Monto: ${reserve.amount}
          </Typography>
          <Button onClick={onClose} sx={{ mt: 3 }} fullWidth variant="contained">
            Cerrar
          </Button>
        </Box>
      </Modal>
    );
  }
  