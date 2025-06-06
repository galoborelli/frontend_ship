import React, { useState } from "react";
import cardImage from "@assets/hero-image.png";
import { IconButton, Box, Typography, Button } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import * as styles from "./carrouselStyles"; // Importa todos los estilos
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";



let images = [cardImage, cardImage, cardImage];

const Carrousel = ({ id }) => {
    const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);


  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

 
  
  return (
    <>
      <Box id={id} sx={styles.carrouselContainer}>
        <Box sx={styles.imageContainer}>
          <Box
            sx={{
              ...styles.imageSlider,
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                style={styles.imageStyle}
                key={index}
              />
            ))}
          </Box>
          <IconButton onClick={goToPrev} sx={styles.prevButton}>
            <ArrowBackIosNewRoundedIcon />
          </IconButton>
          <IconButton onClick={goToNext} sx={styles.nextButton}>
            <ArrowForwardIosRoundedIcon />
          </IconButton>
        </Box>

        <Box
  sx={{
    flex: 1,
    minWidth: 0,
    ml: { md: 6, lg: 15 },
    marginTop: { xs: 15, md: 0 },
    display: "flex",
    flexDirection: "column",
    gap: { xs: 2 },
    justifyItems: "center",
  }}
>
  <Typography variant="h6" component="div" sx={styles.titleStyle}>
    {t("carrousel.title")}
  </Typography>

  <Box component="ul" sx={{ paddingLeft: 2, margin: 0 }}>
    {t("carrousel.features", { returnObjects: true }).map((feature, index) => (
      <Box component="li" key={index} sx={styles.listItemStyle}>
        {feature}
      </Box>
    ))}
  </Box>

  <Box sx={styles.buttonContainer}>
    <Typography component="p" sx={styles.doubtsStyle}>
      {t("carrousel.contactUs")}
    </Typography>

    <Box sx={styles.buttonsRow}>
      <Button sx={styles.whatsappButton}>
        {t("carrousel.whatsappButton")}
      </Button>
      <Button component={HashLink} to="/ship#ship" smooth sx={styles.aboutButton}>
        Acerca de nuestro barco...
      </Button>
    </Box>
  </Box>
</Box>
 </Box>
    </>
  );
};

export default Carrousel;