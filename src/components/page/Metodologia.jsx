import "./style/metodologia.css"
import { Pixelinfo } from "../secciones/Pixelinfo"
import { motion } from "framer-motion"
export const Metodologia=()=>{
    return(
        <>
         <motion.section className=" seccionmetodologia "
         initial={{ opacity: 0, y: -50 }}  
         animate={{ opacity: 1, y: 0 }}    
         transition={{ duration: 2 }}    >  
             <h1 className="container text-start title-meto">Asi es como nuestros servicios te van ayudar</h1>
            <h4 className="container parrafo-meto">Cada estrategia de contenido que creamos está basada en un método
            probado para atraer, conectar y convertir.<br></br> <strong>¡Generamos posicionamiento digital que te diferencie de tu competencia!</strong></h4>
            <div>
                <div>
              
                </div>
            </div>
         </motion.section>
         <Pixelinfo></Pixelinfo>
          
        </>
    )
}