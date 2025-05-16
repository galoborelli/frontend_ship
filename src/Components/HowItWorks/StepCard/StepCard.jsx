import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import * as styles from './StyledCard';



const StepCard = ({ number, title, description, image }) => {
  
  return (
    <Card sx={styles.cardContainer}>
      
      <CardMedia
        component="img"
        sx={styles.imageStyle}
        image={image}
        alt={title}
      />
      <Box sx={styles.textContainer}>
      <Typography sx={styles.numberStyle}>{number}</Typography>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: "bold",
            mb: 0.5,
            textShadow: "2px 2px 4px rgba(12, 12, 12, 0.8)",
            fontSize: { xs: "2rem", sm: "2.5rem", lg: "3.5rem" }
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{fontSize: { xs: "1rem", sm: "0.5rem", lg: "1rem" }, textShadow: "2px 2px 8px rgba(0, 0, 0, 1)", }}>{description}</Typography>
      </Box>
    </Card>
  );
};

export default StepCard;
