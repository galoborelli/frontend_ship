import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import WhatsAppButton from "../../Components/WhatsappButton";
import * as styles from "./headerStyles";
import { motion, AnimatePresence } from "framer-motion";


const titles = [
  { label: "HOME", id: "hero" },
  { label: "GALLERY", id: "carrousel" },
  { label: "HOW IT WORKS", id: "how-it-works" },
  { label: "CONTACT US", id: "footer" },
  { label: "LET'S START", id: "reserve" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));


  const burguerMenu = () => {
    setMenuOpen(!menuOpen);
  }

  
  return (
    <>
      <AppBar sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          {isMobile ? (
            <>
              {/*Icono de hamburguesa con logica para abrir y cerrar menu */}
              <IconButton
                color="inherit"
                edge="start"
                onClick={burguerMenu}
                sx={{ zIndex: 1301, top: "20px" }}
              >
                <MenuIcon />
              </IconButton>
              {/*Menu Desplegable*/}
              <Drawer
                anchor="left"
                open={menuOpen}
                onClose={burguerMenu}
                ModalProps={{
                  keepMounted: true,
                  onBackdropClick: () => burguerMenu,
                }}
                PaperProps={{ sx: styles.drawerPaper }}
              >
                {/* Usamos AnimatePresence para animar la entrada/salida del contenido */}
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      key="drawer-content"
                      initial={{ x: -100, opacity: 0 }} // Comienza desde la izquierda y oculto
                      animate={{ x: 0, opacity: 1 }} // Se desliza hacia su posición y aparece
                      exit={{ x: -100, opacity: 0 }} // Al cerrarse, se va hacia la izquierda y se desvanece
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >

                      {/* 🔺 Botón de cierre dentro del Drawer */}
                      <Box sx={styles.drawerHeader}>
                        <IconButton onClick={burguerMenu}>
                          <CloseIcon />
                        </IconButton>
                      </Box>
                      
                      <List>
                        {/* Itero en un map los titulos de las secciones y se muestran como botones */}
                        {titles.map(({ label, id }, index) => (
                          <motion.div
                            key={label}
                            initial={{ opacity: 0, x: -20 }} // Cada ítem comienza desplazado a la izquierda
                            animate={{ opacity: 1, x: 0 }} // Se mueve a su lugar con opacidad
                            transition={{ delay: 0.05 * index }} // Aparecen en cascada
                          >
                            <ListItem disablePadding>
                              <ListItemButton
                                component={HashLink}
                                smooth
                                to={`/#${id}`}
                                onClick={burguerMenu}
                              >
                                <ListItemText primary={label} />
                              </ListItemButton>
                            </ListItem>
                          </motion.div>
                        ))}
                      </List>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Drawer>
            </>
          ) : (
            // Si no es móvil, muestra los botones de navegación
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
          )}
        </Toolbar>
      </AppBar>
      <WhatsAppButton />
    </>
  );
};

export default Header;
