
import { Index } from "./components/page/Index.jsx"
import { Contactos } from "./components/page/Contactos.jsx";
import { Footer } from "./components/common/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegador from "./components/common/Navegador.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 

  return (
    <>
   
  
   <BrowserRouter>
   <Navegador></Navegador>
   <Routes>
    <Route path="/" element={<Index></Index>}></Route>
    <Route path="/contacto" element={<Contactos></Contactos>}></Route>
   </Routes>
    <Footer></Footer> 
   </BrowserRouter>
   
      </>
  )
}

export default App