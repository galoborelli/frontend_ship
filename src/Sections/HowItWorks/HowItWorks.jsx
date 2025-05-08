import StepCard from "@Components/HowItWorks/StepCard/StepCard";
import { Box, Typography, Container, Card, CardMedia } from "@mui/material";
import  cardImage  from "@assets/hero-image.png";
import arrowImage2 from '@assets/flecha-01.png'
import * as styles from "./howItWorksStyles"; // Importa los estilos

const steps = [
  {
    number: "1",
    title: "Elige el día",
    description: "De 10:00 a 14:00 · 13:00 a 19:00",
    image: cardImage,
  },
  {
    number: "2",
    title: "Reserva",
    description: "Llena el formulario aquí",
    image: cardImage,
  },
  {
    number: "3",
    title: "Navega",
    description: "Rápido, fácil y sin preocupaciones",
    image: cardImage,
  },
];

const HowItWorks = ({ id }) => {
  return (
    <Container id={id} maxWidth="100%" sx={styles.container}>
      <Typography variant="h1" component="h2" sx={styles.title}>
        ¿How it works?
      </Typography>
      <Box sx={styles.stepsBox}>
        {steps.map((step) => (
          // Mirar cuando haga actualizacion a dinamico
          <StepCard
            key={step.number}
            {...step}
            sx={{
              width: { xs: "100%", sm: "48%", md: "30%" }, // Responsive width
              minWidth: "250px",
              maxWidth: "100%",
            }}
          />
        ))}
      </Box>
      <Box sx={styles.containerImage1}>
        <CardMedia
          sx={styles.imageStyle}
          component="img" // Especifica que renderizará un elemento <img>
          image={arrowImage2} // Pasa la ruta de la imagen a la prop 'image'
          alt="Flecha" // Texto alternativo para la imagen
        />
      </Box>
    </Container>
  );
};

export default HowItWorks;
