import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const ReserveSuccess = () => {
    const bookingForm = useSelector((state) => state.booking.bookingForm);
    return (
        <div>
            {console.log(bookingForm)}
            {bookingForm && (
            <Box>
            <Typography variant="h4">Reserva exitosa</Typography>
            <Typography variant="body1">Gracias por tu reserva, {bookingForm.name}. Tu reserva ha sido confirmada.</Typography>
            <Typography variant="body1">Fecha de reserva: {bookingForm.date_selected}</Typography>
            <Typography variant="body1">Horario: {bookingForm.time_selected}</Typography>
            <Typography variant="body1">Numero de personas: {bookingForm.quantity}</Typography>
            <Typography variant="body1">Mensaje: {bookingForm.message}</Typography>
            </Box>
            )}
        </div>
    );
}

export default ReserveSuccess;
