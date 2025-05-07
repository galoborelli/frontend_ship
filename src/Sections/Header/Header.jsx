import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import * as styles from "./headerStyles"; // Importa los estilos

let titles = ["HOME", "GALLERY", "HOW IT WORKS", "CONTACT US", "LET'S START"];

const Header = () => {
  return (
    <>
      <AppBar sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.navBox}>
            {titles.map((title) => (
              <Button
                key={title}
                variant="h4" // Aunque es un Button, puedes usar variant para la tipografía inicial
                sx={styles.navButton}
              >
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
