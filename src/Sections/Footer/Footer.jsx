import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "./styleFooter";
import { useTranslation } from "react-i18next";

const Footer = ({ id }) => {
  const { t } = useTranslation();

  return (
    <Box id={id} sx={styles.footerContainer}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
        <Typography variant="h6" sx={styles.title}>
          {t("footer.contactUs")}
        </Typography>
        <Grid
          container
          spacing={5}
          justifyContent="space-between"
          sx={styles.gridContainer}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={styles.subtitle}>
              {t("footer.location")}
            </Typography>
            <Typography variant="body1" sx={styles.bodyText}>
              <em>Mallorca, Spain</em>
              <br />
              <em>{t("footer.pickupSpot")}</em>
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={styles.subtitle}>
              {t("footer.availability")}
            </Typography>
            <Typography variant="body1" sx={styles.bodyText}>
              <em>{t("footer.everyDay")}</em>
              <br />
              <em>{t("footer.turns")}</em>
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={styles.subtitle}>
              {t("footer.email")}
            </Typography>
            <Typography variant="body1" sx={styles.bodyText}>
              book@mallorcaboatfun.com
            </Typography>
            <Stack
              direction={{ xs: "row", sm: "row" }}
              spacing={2}
              sx={styles.socialIcons}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <InstagramIcon />
                <Typography variant="body1">
                  {t("footer.social.instagram")}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <FacebookIcon />
                <Typography variant="body1">
                  {t("footer.social.facebook")}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
