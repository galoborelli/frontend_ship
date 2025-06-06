export const carrouselContainer = {
    display: "flex",
    width: { xs: "90%", sm: 500, md: 600 },
    maxWidth: "900px",
    height: "auto",
    gap: { md: 5 },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: { xs: "column", md: "row", lg: "row" },
    margin: "0 auto",
    padding: { md: 2 },
    flexWrap: "wrap",
  };
  
  
  
  
  export const imageContainer = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: { xs: "300px", sm: "400px", lg: "750px" },
    maxHeight: "100%",
    borderRadius: 12,
    maxWidth: {
      xs: "100%",
      sm: "80%",
      md: "750px",
    },
    backgroundColor: "transparent", // evita bordes blancos si hay espacios
  };
  
  export const imageSlider = {
    display: "flex",
    width: "100%",
    height: "100%",
    borderRadius: 12,
    transition: "transform 0.5s ease-in-out",
  };
  
  export const imageStyle = {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    objectPosition: "center",
    flexShrink: 0,
    borderRadius: 12,
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
  