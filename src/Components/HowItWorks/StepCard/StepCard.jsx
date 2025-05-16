import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import * as styles from './StyledCard';
import { useSelector } from "react-redux";



const StepCard = ({ number, title, description, image }) => {
  
  return (
    <Card sx={styles.cardContainer}>
      <Box sx={styles.numberStyle}>{number}</Box>
      <CardMedia
        component="img"
        sx={styles.imageStyle}
        image={image}
        alt={title}
      />
      <Box sx={styles.textContainer}>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: "bold",
            mb: 0.5,
            top: 50,
            textShadow: "2px 2px 4px rgba(12, 12, 12, 0.6)",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Card>
  );
};

export default StepCard;
