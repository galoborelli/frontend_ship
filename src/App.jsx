import { Routes, Route,Link } from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import NotFound from "./Pages/NotFound/index.jsx";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
