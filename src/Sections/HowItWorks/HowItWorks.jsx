import StepCard from "@Components/HowItWorks/StepCard/StepCard";
import { Box, Typography, CardMedia } from "@mui/material";
import cardImage from "@assets/hero-image.png";
import arrowImage2 from "@assets/flecha-01.png";
import * as styles from "./howItWorksStyles"; // Estilos actualizados
import { useTranslation } from "react-i18next"; // Importa useTranslation para manejar los idiomas
import { useDispatch, useSelector } from "react-redux";
import { loaderActive, loaderStop } from "@Redux/actions/loaderActions";




const HowItWorks = ({ id }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loader.isLoadingById["test"]);



  const steps = [
    {
      number: "1",
      title: t("howItWorks.steps.0.title"),
      description: t("howItWorks.steps.0.description"),
      image: cardImage,
    },
    {
      number: "2",
      title: t("howItWorks.steps.1.title"),
      description: t("howItWorks.steps.1.description"),
      image: cardImage,
    },
    {
      number: "3",
      title: t("howItWorks.steps.2.title"),
      description: t("howItWorks.steps.2.description"),
      image: cardImage,
    },
  ];

  
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
      <div>
        <p>Estado: {isLoading ? "Cargando..." : "Listo"}</p>
        <button onClick={() => dispatch(loaderActive("test"))}>Activar</button>
        <button onClick={() => dispatch(loaderStop("test"))}>Detener</button>
      </div>
    </Box>
  );
};

export default HowItWorks;