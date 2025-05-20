import StepCard from "@Components/HowItWorks/StepCard/StepCard";
import { Box, Typography, CardMedia } from "@mui/material";
import arrowImage2 from "@assets/flecha-01.png";
import * as styles from "./howItWorksStyles"; 
import { useTranslation } from "react-i18next"; // Importa useTranslation para manejar los idiomas
import Loader from "@Components/Loader/Loader";
import { useSelector } from "react-redux";


const HowItWorks = ({ id }) => {
  const { t } = useTranslation();

  const isLoading = useSelector(state => state.loader.isLoadingById['images']);
  const { images } = useSelector(state => state.images);
  const imagesHowItWorks = images?.filter(img => img.section === "how-it-works");

  const hasEnoughImages = imagesHowItWorks && imagesHowItWorks.length > 0;

  if (isLoading || !hasEnoughImages) {
    return <Loader />;
  }
console.log(imagesHowItWorks)
  
  const stepsTranslations = t("howItWorks.steps", { returnObjects: true });

  //  construimos dinámicamente el array steps, combinando texto e imágenes
  const steps = stepsTranslations.map((step, index) => ({
    number: (index + 1).toString(),
    title: step.title,
    description: step.description,
    image: imagesHowItWorks[index % imagesHowItWorks.length].image_url, // por si hay menos imágenes que pasos, se repite
  }));

// 2. Intercambiar el orden de imagenes
if (steps.length >= 3) {
  
  const newImagesOrder = [
    steps[0].image,  
    steps[2].image,  
    steps[1].image   
  ];

  // Asignar el nuevo orden de imágenes
  steps[0].image = newImagesOrder[2];
  steps[1].image = newImagesOrder[1];
  steps[2].image = newImagesOrder[0];
}

  return (
    <Box id={id} sx={styles.container}>
      <Typography variant="h1" component="h2" sx={styles.title}>
        {t("howItWorks.title")}
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