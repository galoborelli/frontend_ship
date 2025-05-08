// howItWorksStyles.js
export const container = {
  mt: 4,
  mb: 1,
  paddingTop: 10,
  borderRadius: 2,
  width: "100%",
  maxHeight: "40%",
  position: "relative",
};

export const title = {
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  marginBottom: "10rem",
  display: "flex",
  justifyContent: "center",
  color: "black",
  
};

export const stepsBox = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center", // centrado en mobile
  gap: 4, // un poco más de espacio entre cards
  rowGap: 6, // espacio vertical mayor si se apilan
};

export const containerImage1 = {
  display: "flex",
  justifyContent: "flex-start", // Alinea los hijos al inicio
  alignItems: "center",
  marginTop: 4,
  marginBottom: 4,
  width: "100%",
};

export const imageStyle = {
  width: "auto",
  height: "auto",
  maxWidth: "500px",
  maxHeight: "500px",
  marginLeft: "60%", // Desplaza la imagen hacia el 60% del ancho del contenedor
  transform: "translateX(-50%)", // La centra sobre ese punto
};
