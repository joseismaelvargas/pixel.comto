import "./style/contacto.css"
import { motion } from "framer-motion"
export const Contactos=()=>{
    return(
        <>
       <motion.section initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }}   
          transition={{ duration: 2 }} className="form">
       <div>
        <h1 style={{fontSize:"50px",
        color: "rgb(14, 14, 75)"}}>Escalamos Tu,<br></br> marca juntos </h1>
    <img src="img/contact.png" alt=""></img>
    </div>
  
    <form action=""  class="formthend">
       <label for="">Nombre</label>
       <input type="text" placeholder="Ej:Jose maria"></input>
       <label for="">Telefono</label>
       <input type="text"placeholder="Ej:382344"></input>
       <label for="">Correo Electronico*</label>
       <input type="text" placeholder="Ej:maria.com"></input>
       <label for="">Como podemos ayudar?</label>
       <input type="text" placeholder="INGRESA COMENTARIO"></input>
       <button>ENVIAR</button>
    </form>
       </motion.section>
</>
    )
}