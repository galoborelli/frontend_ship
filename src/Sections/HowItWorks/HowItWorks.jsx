import StepCard from "@Components/HowItWorks/StepCard/StepCard";
import { Box, Typography, CardMedia } from "@mui/material";
import cardImage from "@assets/hero-image.png";
import arrowImage2 from "@assets/flecha-01.png";
import * as styles from "./howItWorksStyles"; // Estilos actualizados

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
    <Box id={id} sx={styles.container}>
      <Typography variant="h1" component="h2" sx={styles.title}>
        ¿How it works?
      </Typography>
      <Box sx={styles.stepsBox}>
        {steps.map((step) => (
          <StepCard key={step.number} {...step} />
        ))}
      </Box>
      <Box sx={styles.containerImage1}>
        <CardMedia
          sx={styles.imageStyle}
          component="img"
          image={arrowImage2}
          alt="Flecha"
        />
      </Box>
    </Box>
  );
};

export default HowItWorks;
