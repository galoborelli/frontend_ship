// heroStyles.js
export const heroContainer = {
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0) 100%), url(https://st4.depositphotos.com/1993283/23704/i/450/depositphotos_237042516-stock-photo-yacht-sea-top-view-aerail.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 3,
  marginBottom: { xs: 6, md: 10 },
};

export const contentBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Centra verticalmente
  alignItems: "flex-start", // Alinea los textos a la izquierda
  height: "100%", // Toma todo el alto del viewport
  maxWidth: "1200px", // Limita el ancho máximo del contenido
  px: { xs: 2, sm: 4, md: 6, lg: 8 }, // Padding horizontal responsivo
  mx: "auto",
};

export const buttonsBox = {
  display: "flex",
  gap: 5,
};

export const primaryButton = {
  borderRadius: 5,
  border: "0.5px solid white",
  backgroundColor: "transparent",
  color: "white",
  "&:hover": { opacity: 0.8 },
};

export const secondaryButton = {
  border: "0.5px solid green",
  borderRadius: 5,
  backgroundColor: "transparent",
  color: "green",
  "&:hover": {
    opacity: 0.8,
  },
};
