import React from "react";
import { Box, Button,Typography } from "@mui/material";
import * as styles from "./heroStyles"; // Importa los estilos
import { HashLink } from "react-router-hash-link";



const Hero = ({ id }) => {
  return (
    <Box id={id} sx={styles.heroContainer}>
      <Box sx={styles.contentBox}>
       
        <Typography sx={styles.title}>
          <h1>
            Planea tu propia <br />
            Aventura{" "}
          </h1>
        </Typography>
       
        <p>Pacta un punto de inicio y comienza a disfrutar</p>
      
        <Box sx={styles.buttonsBox}>
          
          <Button sx={styles.primaryButton}
            component={HashLink}
            smooth
            to='#reserve'>
            Comenzar inscripción
          </Button>
          
          <Button sx={styles.secondaryButton}>Whatsapp</Button>
        </Box>
      </Box>

    </Box>
  );
};

export default Hero;
