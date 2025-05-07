export const reserveContainer = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "flex-start",
  gap: "2rem",
  padding: "2rem",
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
  gap: "1rem",
  marginTop: "2rem",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "1fr 1fr",
  },
  gridTemplateRows: "auto auto auto",
};

export const datePickerContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

export const datePickerStyle = {
  transform: "scale(0.85)",
  transformOrigin: "top left",
  maxHeight: "360px",
  overflow: "hidden",
  borderRadius: 4,
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};

export const rightBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mt: { xs: 4, sm: 0 },
  ml: { sm: 4 },
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
  maxWidth: "400px",
}