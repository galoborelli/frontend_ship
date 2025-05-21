
export const reserveContainer = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "flex-start",
  width: "70%",
  gap: "2rem",
  padding: "2rem",
  margin: "0 auto",
  marginTop: {xs:14,lg:20},
  backgroundColor: "white",
  borderRadius: 4,
  
};

export const formBox = {
  flex: 1,

};

export const titleBox = {
  fontWeight: "bold",
  color: "#333",
  fontSize: {xs: "1.5rem", sm: "2rem",lg: "4rem"},
};

export const subTitleStyle = {
  marginTop: "0.5rem",
  fontSize: {xs:"1rem",lg:"1.5rem"},
  color: "#555",
};

export const formGrid = {
  display: 'grid',
  gap: '16px', 
  rowGap: "2rem", // espacio entre pares de inputs
  columnGap: "2rem", // espacio entre columnas
  marginTop: "2rem",
  gridTemplateColumns: {
    xs: "1fr",
    md: "1fr 1fr",
  }
  
};



export const rightBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mt: { xs: 5, sm: 0 },
  backgroundColor: "white",
  borderRadius: 4,
  position: "relative",
  left:{md: "-50px",xs:"0"}, // mueve el contenedor 50px a la izquierda
};

export const cardStyle = {
  position: "relative",
  backgroundColor: "transparent",
  width: "300px",
  height: "500px",
  overflow: "hidden",
  borderRadius: 4,
  boxShadow: "none",
  transform: {
    lg: "rotate(10deg) translateY(-40%)",
    xs: "rotate(3deg) translateY(0%)",
  },
  marginBottom: "2rem",
};

export const cardImageStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: 4,
  backgroundColor: "transparent",
};


export const sendButtonBox = {
  fontSize: "12px",
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const sendButton = {
  color: "white",
  backgroundColor: "black",
};

export const termsLabel = {
  color: "#333",
  marginBottom: "1.5rem",
};


export const textFieldStyle = {
  width: "100%",
  maxWidth: "500px",
  "& .MuiOutlinedInput-root": {
    border: "1px solid black !important",
    borderRadius: "12px !important",
    "& .Mui-focused .MuiOutlinedInpuºt-notchedOutline": {
        borderColor: 'black', // 👈 esto quita el azul
        boxShadow: 'none',
    },
  },
};


export const label = {
  color: "black",
  
}