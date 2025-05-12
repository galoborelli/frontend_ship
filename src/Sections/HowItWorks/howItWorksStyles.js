
export const container = {
  mt: 4,
  px: 2, // ✅ Padding lateral seguro para evitar desbordes
  paddingTop: 10,
  borderRadius: 2,
  width: "100%",
  maxHeight: "40%",
  position: "relative",
  boxSizing: "border-box", // ✅ Garantiza que el padding no cause desborde
  left:'0%'
};

export const title = {
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  marginBottom: "10rem",
  display: "flex",
  justifyContent: "center",
  color: "black",
};

export const stepsBox = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  rowGap: 6,
  width: "100%",
  boxSizing: "border-box", // ✅ importante para evitar desborde en combinación con gap
};

export const containerImage1 = {
  display: "flex",
  alignItems: "center",
  width: "100%",
};

export const imageStyle = {
  width: "100%", // ✅ Que no sobrepase el contenedor
  maxWidth: { xs: "200px", sm: "300px", md: "350px" }, // ✅ Escala según breakpoint
  height: "auto",
  marginLeft: { xs: "30%", sm: "30%", md: "80%" }, // ✅ En xs no hay desplazamiento
  transform: { xs: "none", sm: "translateX(-50%)" }, // ✅ Solo se aplica desplazamiento en pantallas más grandes
};
