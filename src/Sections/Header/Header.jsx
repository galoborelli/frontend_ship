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
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import WhatsAppButton from "../../Components/WhatsappButton";
import * as styles from "./headerStyles";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "@Redux/actions/lenguageActions";
import i18n from "../../i18n";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // Para el menú de idiomas
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.language);

  const handleLanguageChange = (lang) => {
    dispatch(changeLanguage(lang));
    i18n.changeLanguage(lang);
  };

  const burguerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const languages = [
    { label: "ES", value: "es" },
    { label: "EN", value: "en" },
    { label: "DEU", value: "deu" },
    { label: "PT", value: "pt" },
  ];

  const titles = [
    { label: t("header.home"), id: "hero" },
    { label: t("header.gallery"), id: "carrousel" },
    { label: t("header.howItWorks"), id: "how-it-works" },
    { label: t("header.contactUs"), id: "ship" },
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
                        {languages.map(({ label, value }) => (
                          <Button
                            key={value}
                            onClick={() => handleLanguageChange(value)}
                            style={{
                              marginTop:"2.5rem",
                              fontWeight:
                                currentLanguage === value ? "bold" : "normal",
                            }}
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
              {titles.map(({ label, id }) => {
                const isExternalPage = id === "ship"; // O cualquier otro que deba tener <Route path="/algo" />
                const Component = isExternalPage ? Link : HashLink;
                const to = isExternalPage ? `/${id}` : `/#${id}`;

                return (
                      <Button
                      key={label}
                      component={Component}
                      to={to}
                      smooth={!isExternalPage}
                      onClick={burguerMenu}
                      sx={styles.navButton}
                    >
                      {label}
                    </Button>
                  );
                })}
              <Box>
                <Button
                  aria-controls="language-menu"
                  aria-haspopup="true"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  LANGUAGE
                </Button>
                <Menu
                  id="language-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  {languages.map(({ label, value }) => (
                    <MenuItem
                      key={value}
                      selected={currentLanguage === value}
                      onClick={() => {
                        handleLanguageChange(value);
                        setAnchorEl(null);
                      }}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <WhatsAppButton />
    </>
  );
};

export default Header;
