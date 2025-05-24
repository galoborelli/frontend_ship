

// carrouselStyles.js
export const carrouselContainer = {
  display: "flex",
  width: "75%",
  height: "40%",
  gap: { md: 5 },
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: { xs: "column", md: "row", lg: "row" },
  margin: "0 auto",
  marginBottom: { xs: 5, md: 5 },
  padding: {  md: 2 },
  flexWrap: "wrap",
};




export const imageContainer = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: { xs: "300px", sm: "400px", lg: "750px" },
  maxHeight: "700px",
  margin: "0 auto",
  borderRadius: 2,
  marginRight: { xs: 0, md: 5, lg: 35 },
  maxWidth: {
    xs: "100%",
    sm: "80%",
    md: "600px",
  },
  backgroundColor: "transparent", // evita bordes blancos si hay espacios
};

export const imageSlider = {
  display: "flex",
  width: "100%",
  height: "100%",
  borderRadius: 2,
  transition: "transform 0.5s ease-in-out",
};

export const imageStyle = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  objectPosition: "center",
  flexShrink: 0,
  borderRadius: 2,
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
  fontSize: {xs:"2rem",lg:"3.5rem"},
};

export const listItemStyle = {
  marginBottom: {xs:"10px",lg:"8px"},
  color: "#333", // gris oscuro suave
  fontSize: { xs: "1rem", md: "1.3rem", lg: "1.5rem" }, // ajustado a un tamaño legible
  listStyleType: "disc", 
  listStylePosition: "inside", 
  "&::marker": {
    color: "#000", // bullet negro
  },
};



export const doubtsStyle = {
  marginTop: {lg:"55px",},
  marginBottom: "8px",
  color: "black",
  fontWeight: "bold",
  fontSize: "1.2rem",
}

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
