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
import { useTranslation } from "react-i18next"; // Importa useTranslation para manejar los idiomas
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "@Redux/actions/lenguageActions";
import i18n from "../../i18n";


const Header = () => {
  const { t } = useTranslation(); // Función para acceder a las traducciones
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const currentLanguage  = useSelector((state) => state.language.language);


  const handleLanguageChange = (lang) => {
    dispatch(changeLanguage(lang))
    i18n.changeLanguage(lang)
  }

  const burguerMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const languages = [
    { label: "ES", value: "es" },
    { label: "EN", value: "en" },
  ];  
  const titles = [
    { label: t("header.home"), id: "hero" },
    { label: t("header.gallery"), id: "carrousel" },
    { label: t("header.howItWorks"), id: "how-it-works" },
    { label: t("header.contactUs"), id: "footer" },
    { label: t("header.letsStart"), id: "reserve" },
    
  ];

  return (
    <>
      <AppBar sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={burguerMenu}
                sx={{ zIndex: 1301, top: "20px" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={menuOpen}
                onClose={burguerMenu}
                ModalProps={{
                  keepMounted: true,
                  onBackdropClick: burguerMenu,
                }}
                PaperProps={{ sx: styles.drawerPaper }}
              >
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      key="drawer-content"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Box sx={styles.drawerHeader}>
                        <IconButton onClick={burguerMenu}>
                          <CloseIcon />
                        </IconButton>
                      </Box>

                      <List>
                        {titles.map(({ label, id }, index) => (
                          <motion.div
                            key={label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * index }}
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
                        {languages.map(({label,value})=>(
                                    <Button 
                                    onClick={() => handleLanguageChange(value)}
                                    style={{ fontWeight: currentLanguage === value ? 'bold' : 'normal' }}
                                    >
                                    {label}
                                    </Button>

                             ))}
                      </List>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Drawer>
            </>
          ) : (
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
            {languages.map(({label,value})=>(
                <Button 
                onClick={() => handleLanguageChange(value)}
                style={{ fontWeight: currentLanguage === value ? 'bold' : 'normal' }}
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
