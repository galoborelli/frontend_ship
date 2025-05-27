import { green, grey } from "@mui/material/colors";

export const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width:"100vw",
  backgroundColor: "#f9fafb",
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
  left:{xs:"0"},
  gap: "1.5rem",
  position: "relative",
};

export const iconSuccess = {
  fontSize: "5rem",
  color: green[600],
};

export const title = {
  fontSize: "2.4rem",
  fontWeight: 700,
  color: "#222",
  textAlign: "center",
};

export const description = {
  textAlign: "center",
  color: grey[800],
  fontSize: "1.15rem",
  lineHeight: 1.5,
};

export const detailsBox = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export const detailRow = {
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  color: grey[900],
  fontWeight: 500,
  fontSize: "1.1rem",
};

export const detailIcon = {
  color: green[400],
  fontSize: "1.6rem",
};

export const tip = {
  marginTop: "1.5rem",
  fontSize: "0.9rem",
  fontStyle: "italic",
  color: grey[600],
  textAlign: "center",
};

export const button = {
  marginTop: "2rem",
  alignSelf: "flex-start",
  fontWeight: "bold",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  backgroundColor: "green",
  textTransform: "none",
  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  "&:hover": {
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
  },
};
