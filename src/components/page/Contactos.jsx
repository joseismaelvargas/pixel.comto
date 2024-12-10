import "./style/contacto.css"
import { motion } from "framer-motion"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contactos=()=>{
 
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_0hiib5a', 'template_ixeaf0s', form.current, {
          publicKey: 'YsSHDf_TbSF18GkGC',
        })
        .then(
          () => {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Email Enviado",
                showConfirmButton: false,
                timer: 1500
              });
              form.current.reset()
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
  
 
    return(
        <>
       <motion.section initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }}   
          transition={{ duration: 2 }} className="form">
       <div>
        <h1 style={{fontSize:"50px",
        color: "rgb(14, 14, 75)"}}>Escalamos Tu,<br></br>marca juntos</h1>
    <img src="img/contact.png" alt="imgcontacto" className="imgcontacto"></img>
    </div>
    <form class="formthend" onSubmit={sendEmail} ref={form} >
  
       <label for="" >Nombre</label>
       <input type="text" placeholder="Ej:Edward" name="user_name"></input>
       
       <label for="">Correo Electronico*</label>
       <input type="text" placeholder="Ej:Edward@gmail.com" name="user_email"></input>
       <label for="">¿Como podemos ayudar?</label>
       <textarea type="text" placeholder="Ingrese Mensaje" className="mensaje" name="message"></textarea>
       <button type="submit">ENVIAR</button>
    </form>
       </motion.section>
</>
    )
}