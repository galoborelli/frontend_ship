export const cardContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: { xs: "90%", sm: "48%", md: "30%" }, // ✅ mejor en mobile
  mx: "auto", // ✅ centra en mobile
  borderRadius: 2,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
  overflow: "hidden",
  my: 1, // Margen vertical para separación entre cards
};

export const numberStyle = {
  position: "absolute",
  top: { xs: "8%", lg: "25%" },
  left: "50%",
  transform: "translateX(-50%)", // ✅ centra horizontalmente con precisión
  zIndex: 1,
  color: "black",
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
  fontSize: { xs: "3rem", sm: "4rem", lg: "6rem" }, // ✅ más chico en mobile
};

export const imageStyle = {
  width: "auto",
  height: "auto",
  aspectRatio: "16/9", // ✅ mantiene proporción visual
  maxHeight: { xs: 220, sm: 300, lg: 650 },
  objectFit: "cover",
  borderRadius: 1,
  opacity: 0.5,
};

export const textContainer = {
  position: "absolute",
  bottom: { xs: 16, sm: 24, lg: 130 },
  width: "100%",
  color: "black",
  px: 2,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
