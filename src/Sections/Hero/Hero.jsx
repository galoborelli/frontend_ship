import {React} from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import * as styles from "./heroStyles";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Loader from "@Components/Loader";

const Hero = ({ id }) => {
  const { t } = useTranslation();

  const isLoading = useSelector(state => state.loader.isLoadingById['images']);
  const { images } = useSelector(state => state.images);

  const imageHero = images?.filter((img) => img.title === "hero-image");

  return (
    isLoading ? ( <Loader/> )
    : (
      <Box id={id} sx={styles.heroContainer}>

      {imageHero?.length > 0 ? (
        <CardMedia component="img" image={imageHero[0].image_url} sx={styles.heroImage} />
      ) : (
        <div>No hay imágenes disponibles</div> // o dejalo vacío si preferís
      )}

      <Box sx={styles.contentBox}>
        <Typography variant="h1" component="h1" sx={styles.title}>
          {t("hero.title_line1")} <br />
          {t("hero.title_line2")}
        </Typography>

        <Typography variant="body1" sx={styles.subtitle}>
          {t("hero.subtitle")}
        </Typography>

        <Box sx={styles.buttonsBox}>
          <Button
            sx={styles.primaryButton}
            component={HashLink}
            smooth
            to="#reserve"
          >
            {t("hero.primaryButton")}
          </Button>

          <Button sx={styles.secondaryButton}>
            {t("hero.secondaryButton")}
          </Button>
        </Box>
      </Box>
    </Box>  
    )
    
  );
};

export default Hero;