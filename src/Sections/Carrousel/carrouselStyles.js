

// carrouselStyles.js
export const carrouselContainer = {
  display: "flex",
  width: "75%",
  height: "40%",
  gap: { xs: 4, md: 5 },
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: { xs: "column", md: "row", lg: "row" },
  margin: "0 auto",
  marginBottom: { xs: 5, md: 10 },
  padding: { xs: 2, md: 5 },
  flexWrap: "wrap",
};





export const imageContainer = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "100%",
  maxHeight: "700px",
  margin: "0 auto",
  borderRadius: 2,
  marginRight: { xs: 0, md: 5, lg: 35 },
  maxWidth: {
    xs: "90%", // En pantallas extra pequeñas ocupa el 90% del ancho
    sm: "80%", // En pantallas pequeñas ocupa el 80% del ancho
    md: "600px", // En pantallas medianas y grandes un máximo de 600px
  },
};


export const imageSlider = {
  display: "flex",
  width: "100%",
  height: "100%",
  transition: "transform 0.5s ease-in-out", 
};

export const imageStyle = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "contain", // ✅ Muestra toda la imagen sin recortes
  objectPosition: "center", // Centra la imagen en el contenedor
  flexShrink: 0,
};



export const navButton = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  bgcolor: "rgba(0, 0, 0, 0.3)",
  color: "white",
  "&:hover": {
    bgcolor: "rgba(0, 0, 0, 0.5)",
  },
  zIndex: 1,
};

export const prevButton = {
  ...navButton,
  left: 16,
};

export const nextButton = {
  ...navButton,
  right: 16,
};

export const titleStyle = {
  fontWeight: "bold",
  mb: "2rem",
  color: "black",
  fontSize: "3.5rem",
};

export const listItemStyle = {
  marginBottom: "8px",
  color: "black",
  fontWeight: "bold",
  fontSize: "1.2rem",
};

export const whatsappButton = {
  borderRadius: 5,
  backgroundColor: "black",
  color: "white",
  maxWidth: "300px",
  pading: 2,
  "&:hover": {
    backgroundColor: "green",
    opacity: 0.8,
  },
};
