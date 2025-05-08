// headerStyles.js
export const appBar = {
  position: "fixed",
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  boxShadow: "none", // sin sombra
};

export const toolbar = {
  display: "flex",
  width: "90%",
  justifyContent: "space-around",
  color: "white",
};

export const navBox = {
  display: "flex",
  flexWrap: "nowrap", // ✅ Evita saltos de línea
  width: "100%",
  justifyContent: { xs: "flex-start", sm: "space-around" }, // ✅ En mobile, alinea a la izquierda
  gap: { xs: 1, sm: 3 }, // ✅ Espacio entre botones
};


export const navButton = {
  fontWeight: "bold",
  fontSize: { xs: "0.65rem", sm: "0.85rem", md: "1rem" }, // ✅ Tamaño de fuente adaptable
  px: { xs: 1, sm: 2, md: 3 }, // ✅ Padding horizontal reducido en mobile
  whiteSpace: "nowrap", // ✅ Evita que el texto se divida
  color: "rgba(172, 164, 164, 0.8)",
  position: "relative",
  overflow: "hidden",
  transition: "color 0.3s ease",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0%",
    height: "2px",
    backgroundColor: "white",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
};

