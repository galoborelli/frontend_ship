

  export const buttonStyle = {
 
   backgroundColor: "white",
   color: "black",
   borderRadius: 8,
   zIndex: 2,
   whiteSpace: "nowrap",
   transition: "transform 0.3s ease, box-shadow 0.3s ease",
   "&:hover": {
     transform: "scale(1.25)",
     boxShadow: 6,
     backgroundColor: "white",
   },
 };



 export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: 8,
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: 2,
  zIndex: 3,
};