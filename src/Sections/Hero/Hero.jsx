import React from "react";
import { Box, Button, Typography } from "@mui/material";
import * as styles from "./heroStyles";
import { HashLink } from "react-router-hash-link";
import { useTranslation, Trans } from "react-i18next";

const Hero = ({ id }) => {
  const { t } = useTranslation();

  return (
    <Box id={id} sx={styles.heroContainer}>
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
  );
};

export default Hero;
