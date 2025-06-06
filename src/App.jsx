import { Routes, Route,Link } from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import NotFound from "./Pages/NotFound/index.jsx";
import ReserveSuccess from "./Pages/ReserveSuccess/ReserveSuccess.jsx";
import ReserveError from "./Pages/ReserveError/ReserveError.jsx";
import Ship from "./Pages/Ship/Ship.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loaderActive } from "@Redux/actions/loaderActions";
import getImages from "@Redux/actions/bannersImages";

function App() {

const dispatch = useDispatch();

useEffect(() => {
  const fetchData = async () => {
    dispatch(loaderActive({ id: "screen", value: true }));

    try {
      await dispatch(getImages());
    } catch (error) {
      console.error("Error al cargar imágenes:", error);
    } finally {
      dispatch(loaderActive({ id: "screen", value: false }));
    }
  };

  fetchData();
}, [dispatch]);


  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/success" element={<ReserveSuccess />} />
          <Route path="/error" element={<ReserveError />} />
          <Route path="/ship" element={<Ship />} />
        </Routes>
    </>
  );
}

export default App;
