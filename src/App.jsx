import { Routes, Route,Link } from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import NotFound from "./Pages/NotFound/index.jsx";
import ReserveSuccess from "./Pages/ReserveSuccess/ReserveSuccess.jsx";
import ReserveError from "./Pages/ReserveError/ReserveError.jsx";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/success" element={<ReserveSuccess />} />
          <Route path="/error" element={<ReserveError />} />
        </Routes>
    </>
  );
}

export default App;
