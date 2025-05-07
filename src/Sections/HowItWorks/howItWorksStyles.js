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
  alignSelf: "center",
  width: "100%",
  height: "100%",
  justifyContent: "space-between", // Distribuye las tarjetas con espacio entre ellas
  gap: 2,
  flexWrap: "wrap", // Permite envolver en pantallas pequeñas
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
