import { red, grey, green } from "@mui/material/colors";

export const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width:"100vw",
  backgroundColor: "#f9fafb",
  padding: "1rem",
};

export const card = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: "2.5rem",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  width: "100%",
  maxWidth: "520px",
  gap: "1.5rem",
  position: "relative",
};

// Card para error (misma estructura con cambio de colores)
export const cardError = {
  ...card,
  border: `2px solid ${red[300]}`,
};

export const iconSuccess = {
  fontSize: "5rem",
  color: green[600],
};

export const iconError = {
  fontSize: "5rem",
  color: red[500],
};

export const title = {
  fontSize: "2.4rem",
  fontWeight: 700,
  color: "#222",
  textAlign: "center",
};

export const titleError = {
  ...title,
  color: red[700],
};

export const description = {
  textAlign: "center",
  color: grey[800],
  fontSize: "1.15rem",
  lineHeight: 1.5,
};

export const descriptionError = {
  ...description,
  color: grey[900],
};

export const tip = {
  marginTop: "1.5rem",
  fontSize: "0.9rem",
  fontStyle: "italic",
  color: grey[600],
  textAlign: "center",
};

export const tipError = {
  ...tip,
  color: red[400],
};

export const button = {
  marginTop: "2rem",
  alignSelf: "center",
  fontWeight: "bold",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  textTransform: "none",
  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  "&:hover": {
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
  },
};
