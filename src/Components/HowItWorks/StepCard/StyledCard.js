
export const cardContainer = {
  display: "flex",
  flexDirection: "column", // ✅ mejor estructura para móvil
  alignItems: "center",
  width: { xs: "100%", sm: "48%", md: "30%" }, // ✅ se adapta mejor en pantallas medianas
  borderRadius: 2,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
  overflow: "hidden",
 
};


export const numberStyle = {
  position: "absolute",
  top: {xs:'10%',lg:"20%"}, // Centra verticalmente el punto de referencia del elemento
  left: "50%", // Centra horizontalmente el punto de referencia del elemento
  zIndex: 1,
  color: "black",
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra del texto
  fontSize: "6rem",
  padding: "2px 8px",
  borderRadius: 1,
};


export const imageStyle = {
  width: "100%",
  height: "auto", // ✅ importante: que se adapte
  maxHeight: {xs:300,sm:300,lg:500}, // ✅ limitar el alto máximo si querés
  objectFit: "cover", // o "cover" si preferís recortar
  borderRadius: 1,
  opacity: 0.5,
};


export const textContainer = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  bottom: {xs:5,lg:130},
  width: "100%",
  color: "black",
  padding: 2,
  marginTop: 2,
  textAlign: "center",
};
