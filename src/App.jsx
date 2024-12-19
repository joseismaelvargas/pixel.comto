
import { Index } from "./components/page/Index.jsx"
import { Contactos } from "./components/page/Contactos.jsx";
import { Footer } from "./components/common/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Equipo } from "./components/page/Equipo.jsx";
import { Metodologia } from "./components/page/Metodologia.jsx";

import Navegador from "./components/common/Navegador.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <>
   <BrowserRouter>

   <Navegador></Navegador>   

   <Routes>
    <Route path="/" element={<Index></Index>}></Route>
    
    <Route path="/equipo" element={<Equipo></Equipo>}></Route>
    <Route path="/metodologia" element={<Metodologia></Metodologia>}></Route>
   </Routes>
    <Footer></Footer> 
   </BrowserRouter>

  
   
      </>
  )
}

export default App