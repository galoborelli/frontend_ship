

export const cardContainer = {
  display: "flex",
  justifyContent: "space-between", // 👈 clave para distribuir el contenido verticalmente
  alignItems: "center", // opcional, para centrar horizontalmente
  width: { xs: "100%", sm: "auto", md: "30%" },
  borderRadius: 2,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
  overflow: "hidden",
  maxHeight: 450, // Ajusta este valor según tu diseño
  margin: 1, // Añadimos un margen alrededor de cada card
};

export const numberStyle = {
  position: "absolute",
  top: "20%", // Centra verticalmente el punto de referencia del elemento
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
  height: "100%", // Ajusta la altura según necesites
  objectFit: "cover",
  borderRadius: 1, // Para que la imagen también tenga los bordes redondeados
  opacity: 0.5, // 👈 Ajusta la transparencia (0 = transparente, 1 = opaco)
};

export const textContainer = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  bottom: 130,
  width: "100%",
  color: "black",
  padding: 2,
  marginTop: 2,
  textAlign: "center",
};
