import { Pixelinit } from "../secciones/Pixelinit.jsx"
import { Carrusel } from "../secciones/Carrusel.jsx"
import { Contactos } from "./Contactos.jsx"
import { CarruselIndex } from "../secciones/CarruselIndex.jsx"

export const Index=()=>{
    return(
        <>
        <main>
            <CarruselIndex></CarruselIndex>
           <Pixelinit></Pixelinit> 
           <Carrusel></Carrusel>
           <Contactos></Contactos>
      
        </main>
          
        </>
    )
}