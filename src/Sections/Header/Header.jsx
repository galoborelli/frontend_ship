import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import { HashLink } from "react-router-hash-link";

import * as styles from "./headerStyles"; // Importa los estilos

const titles = [
  { label: "HOME", id: "hero" },
  { label: "GALLERY", id: "carrousel" },
  { label: "HOW IT WORKS", id: "how-it-works" },
  { label: "CONTACT US", id: "footer" },
  { label: "LET'S START", id: "reserve" },
];

const Header = () => {
  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.navBox}>
          {titles.map(({ label, id }) => (
            <Button
              key={label}
              component={HashLink}
              smooth
              to={`/#${id}`}
              sx={styles.navButton}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
