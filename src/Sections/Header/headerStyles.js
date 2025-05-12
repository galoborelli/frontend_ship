// headerStyles.js

export const appBar = {
  position: "fixed",
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  boxShadow: "none",
};

export const toolbar = {
  display: "flex",
  width: "90%",
  justifyContent: "space-between",
  color: "white",
};

export const navBox = {
  display: "flex",
  flexWrap: "nowrap",
  width: "100%",
  justifyContent: { xs: "flex-start", sm: "space-around" },
  gap: { xs: 1, sm: 3 },
};

export const navButton = {
  fontWeight: "bold",
  fontSize: { xs: "0.65rem", sm: "0.85rem", md: "1rem" },
  px: { xs: 1, sm: 2, md: 3 },
  whiteSpace: "nowrap",
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

export const drawerPaper = {
  backgroundColor: "white",
  boxShadow: "none",
  backdropFilter: "blur(10px)",
  transition: "transform 0.3s ease-in-out",
};


export const drawerHeader = {
  display: "flex",
  justifyContent: "flex-end",
  p: 2,
};

