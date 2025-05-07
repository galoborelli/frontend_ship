import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "./styleFooter";

const Footer = () => {
  return (
    <Box sx={styles.footerContainer}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
        <Typography variant="h6" sx={styles.title}>
          Contact us
        </Typography>
        <Grid
          container
          spacing={5}
          justifyContent="space-between"
          sx={styles.gridContainer}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={styles.subtitle}>
              Location:
            </Typography>
            <Typography variant="body1" sx={styles.bodyText}>
              <em>Mallorca, Spain</em>
              <br />
              <em>(Pick-up spot to be arranged after booking)</em>
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={styles.subtitle}>
              Availability:
            </Typography>
            <Typography variant="body1" sx={styles.bodyText}>
              <em>Every day – 2 turns:</em>
              <br />
              <em>10:00–14:00 / 13:00–19:00</em>
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={styles.subtitle}>
              Email:
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
                <Typography variant="body1">fer_sobame_la_rata</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <FacebookIcon />
                <Typography variant="body1">fer_sobame_la_rata</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
