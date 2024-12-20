import { Pixelinit } from "../secciones/Pixelinit.jsx"
import { Carrusel } from "../secciones/Carrusel.jsx"
import { Contactos } from "./Contactos.jsx"
import { CarruselIndex } from "../secciones/CarruselIndex.jsx"
import { Portafolio } from "../secciones/Portafolio.jsx"

export const Index=()=>{
    return(
        <>
        <main>
            <CarruselIndex></CarruselIndex>
            

           <Pixelinit></Pixelinit>
            <Portafolio></Portafolio>
           <Carrusel></Carrusel>
           <Contactos></Contactos>
      
        </main>
          
        </>
    )
}