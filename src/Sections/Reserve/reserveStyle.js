export const reserveContainer = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "flex-start",
  width: "85%",
  gap: "2rem",
  padding: "2rem",
  backgroundgcolor: "#white",
};

export const formBox = {
  flex: 1,
};

export const titleBox = {
  fontWeight: "bold",
  color: "#333",
  fontSize: "1.8rem",
};

export const subTitleStyle = {
  marginTop: "0.5rem",
  fontSize: "1rem",
  color: "#555",
};

export const formGrid = {
  display: "grid",
  rowGap: { xs: "1rem", sm: "1rem" }, // espacio entre filas
  columnGap: { xs: "0rem", sm: "1rem" }, // espacio entre columnas
  marginTop: "2rem",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "1fr 1fr",
  },
};


export const rightBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mt: { xs: 4, sm: 0 },
 // ml: { sm: 4 },
};

export const cardStyle = {
  position: "relative",
  width: "300px" ,
  height: " 500px" ,
  overflow:"hidden" ,
  borderRadius: 4 ,
  transform: "rotate(10deg)",
  marginBottom: "2rem",
};

export const cardImageStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",

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
    border: "1px solid black",
    borderRadius: "8px",
  },
};
