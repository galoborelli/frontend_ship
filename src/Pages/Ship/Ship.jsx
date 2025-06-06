import { Box, CardMedia, Button, Grow, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import * as styles from "./styleShip"
import { HashLink } from "react-router-hash-link"
import CustomModal from "@Components/CustomModal/CustomModal.jsx"
import Header from "@Sections/Header/Header"

const Ship = () => {
  const [video, setVideo] = useState("")
  const [show, setShow] = useState(false)
  const [modalType, setModalType] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/videos`)
        setVideo(response.data[0].video_url)
      } catch (error) {
        console.error("Error al cargar el video:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
        <Header/>
      {/* VIDEO DE FONDO */}
      <CardMedia
        component="video"
        src={video}
        autoPlay
        muted
        loop
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* BOTONES CENTRALES */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { lg: 6, xs: 2 },
          zIndex: 2,
        }}
      >
  <Grow in={true} timeout={1000}>
    <Box sx={{ zIndex: 2 }}>
    <Button variant="contained" color="white" sx={styles.buttonStyle} onClick={() => {setShow(true); setModalType("about")}}>
      Acerca de nuestro barco
    </Button>
    </Box>
  </Grow>
  <Grow in={true} timeout={1300}>
    <Box sx={{ zIndex: 2 }}>
    <Button variant="contained" color="white" sx={styles.buttonStyle} onClick={() => {setShow(true); setModalType("features")}}>
      Características
    </Button>
    </Box>
  </Grow>
  <Grow in={true} timeout={1600}>
    <Box sx={{ zIndex: 2 }}>
    <Button variant="contained" color="white" sx={styles.buttonStyle} onClick={() => {setShow(true); setModalType("routes")}}>
      Rutas para navegar
    </Button>
    </Box>
  </Grow>
      </Box>

      {/* Modal */}
      {show && (
        <CustomModal open={show} onClose={() => setShow(false)} modalType={modalType} />
      )}
    </Box>
  )
}

export default Ship
