import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import * as styles from "./modalStyles";
import cardImage from "@assets/hero-image.png"


let images = [cardImage, cardImage, cardImage];

const ModalCarrousel = () => {
        
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
    <Box sx={styles.carrouselContainer}>
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
    </Box>
    </>
            
 
    )      
}

export default ModalCarrousel
