// headerStyles.js
export const appBar = {
  position: "fixed",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  boxShadow: "none", // sin sombra
};

export const toolbar = {
  display: "flex",
  justifyContent: "space-between",
  color: "white",
};

export const navBox = {
  display: "flex",
  gap: 3,
};

export const navButton = {
  fontWeight: "bold",
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
