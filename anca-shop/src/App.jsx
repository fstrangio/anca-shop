import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Home from "./componentes/Home/Home";
import Alimento from "./componentes/Alimento/Alimento";
import Ropa from "./componentes/Ropa/Ropa";
import Error404 from "./componentes/Error404/Error404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alimento/:producto?" element={<Alimento />} />
          <Route path="/ropa/:producto?" element={<Ropa />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App