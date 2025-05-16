export const cardContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: { xs: 220, sm: 300, lg: 450 },  // igual que el maxHeight que usabas para la imagen
  width: { xs: "90%", sm: "48%", md: "27%" }, // ✅ mejor en mobile
  mx: "auto", // ✅ centra en mobile
  borderRadius: 2,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
  overflow: "hidden",
  my: 1, // Margen vertical para separación entre cards
};


export const imageStyle = {
  width: "100%",           // ocupa todo el ancho del card
  height: "100%",          // ocupa toda la altura del card
  objectFit: "cover",      // cubre sin deformar, recortando si es necesario
  borderRadius: 1,         // mantiene bordes redondeados
  opacity: 0.50,              // opacidad completa para ver la imagen claramente (ajusta si quieres transparencia)
  aspectRatio: "16/9",     // mantiene la proporción
};


export const textContainer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  color: "black",
  px: 2,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 4,
  alignItems: "center",
  transform: "translate(-49%, -50%)",
};


export const numberStyle = {
  left: "48%",
  zIndex: 1,
  color: "black",
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
  fontSize: { xs: "3rem", sm: "4rem", lg: "6rem" }, // ✅ más chico en mobile
};
