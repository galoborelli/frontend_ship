// heroStyles.js
export const heroContainer = {

  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "80vh",
  width: "100vw",
  display: "flex",
  flexWrap: "wrap", // Corregido el error tipográfico
  flexDirection: "column",
  justifyContent: "center", // Centra verticalmente
  alignItems: "flex-start", // Alinea los contenidos a la izquierda
  gap: 3,
  marginBottom: { xs: 6, md: 10 },
  overflow: "hidden", // Evita el desbordamiento de contenido en pantallas pequeñas
};

export const heroImage = {
  backgroundSize: "cover",
  position: "absolute",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  
  height: "80vh",
  width: "100vw",
  
  overflow: "hidden", // Evita el desbordamiento de contenido en pantallas pequeñas
}



export const contentBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Centra verticalmente
  alignItems: "flex-start", // Alinea los textos a la izquierda
  height: "100%", // Toma todo el alto del viewport
  width: "100%", // Asegura que ocupe todo el ancho disponible
  position: "relative",
  px: { xs: 2, sm: 4, md: 6, lg: 8 }, // Padding horizontal responsivo
  ml: { xs: 2, sm: 4, md: 6, lg: 8 }, // Margen izquierdo responsivo
};

export const buttonsBox = {
  display: "flex",
  flexWrap: "wrap", // ✅ permite que los botones salten abajo si no entran
  gap: 2,
  justifyContent: { xs: "flex-start", sm: "flex-start" }, // ✅ buen alineamiento en mobile
  width: "100%",
  marginTop: { xs: 2, sm: 3, md: 4 }, // Espacio entre el párrafo y los botones
};

export const primaryButton = {
  borderRadius: 5,
  border: "0.5px solid white",
  backgroundColor: "transparent",
  px: { xs: 1.5, sm: 6.5 }, // ✅ padding horizontal adaptativo
  py: 1,
  marginRight: 2,
  color: "white",
  whiteSpace: "nowrap", // ✅ evita que el texto se corte en dos líneas
  maxWidth: "100%", // ✅ evita que el botón desborde su contenedor
  "&:hover": {color:"white", opacity: 0.8 }, 
};

export const secondaryButton = {
  border: "0.5px solid green",
  borderRadius: 5,
  backgroundColor: "transparent",
  px: {  sm: 6.5 },
  py: 1,
  color: "green",
  whiteSpace: "nowrap",
  maxWidth: "100%",
  "&:hover": {
    opacity: 0.8,
  },
};

export const title = {
  fontSize: { xs: "2rem", sm: "3.5rem", md: "6rem" },
  color: "white",
  fontWeight: 700,
  textAlign: "left",
  lineHeight: 1.2,
  marginBottom: { xs: 1, sm: 1.5, md: 2 }, // Espacio entre el título y el párrafo
};
