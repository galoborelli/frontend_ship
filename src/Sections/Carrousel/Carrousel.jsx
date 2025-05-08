import React, { useState } from "react";
import cardImage from "@assets/hero-image.png";
import { IconButton, Box, Typography, Button } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import * as styles from "./carrouselStyles"; // Importa todos los estilos

let images = [cardImage, cardImage, cardImage];

const Carrousel = ({ id }) => {
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
          {/* Botones de navegación */}
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
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 5, lg: 5 },
            justifyItems: "center",
          }}
        >
          <Typography variant="h6" component="div" sx={styles.titleStyle}>
            Viaja por el corazon de Mayorca
          </Typography>
          <Typography>
            <li style={styles.listItemStyle}>Para grupos de 6 a 8 personas.</li>
            <li style={styles.listItemStyle}>
              Equipado con música, toldo y refrigerador
            </li>
            <li style={styles.listItemStyle}>
              Navegación libre por las calas del Mediterráneo
            </li>
          </Typography>
          <Typography component="p" style={styles.listItemStyle}>
            ¿Dudas?
          </Typography>
          <Button sx={styles.whatsappButton}>Contactanos por WhatsApp</Button>
        </Box>
      </Box>
    </>
  );
};

export default Carrousel;
