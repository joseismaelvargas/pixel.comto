import "./style/contacto.css"
import { motion } from "framer-motion"

import React, { useRef } from 'react';
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';


export const Contactos=()=>{
    const { register, handleSubmit ,formState:{errors},reset,setValue} = useForm();
    const form = useRef();

    const sendEmail = (e) => {
    
      
       
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
             console.log('SUCCESS!');
         reset()
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

    <form ref={form}class="formthend" onSubmit={handleSubmit(sendEmail)}>

       <label for="">Nombre Completo</label>
       <input type="text"  name="user_name" {...register("user_name",
        {required:"Agregue su nombre",
        minLength:{value:4,message:"Agregue un nombre valido"}
        }
      )
        }></input>
        {errors.user_name&&<p className="error">{errors.user_name.message}</p>}
       
       <label for="">Correo Electronico*</label>
       <input type="email" name="user_email" {...register("user_email",{
        required:"Agregue su email",
        pattern: { value: /^\S+@\S+$/i, message: "Correo inválido" },
       })}></input>
       {errors.user_email&&<p className="error">{errors.user_email.message}</p>}
       <label htmlFor="">Asunto</label>
       <input type="text" name="message"{...register("user_asunto",{
        required:"Agregue Asunto",
        minLength:{value:4 ,message:"Agruege mas contexto"}
       })} />
            {errors.user_asunto&&<p className="error">{errors.user_asunto.message}</p>}
       <label for="">¿Como podemos ayudar?</label>
        <textarea type="text" placeholder="Ingrese Mensaje" className="mensaje" name="message" {...register("message",{
          required:"Agregue el mensaje por favor",
          minLength:{value:6,message:"Agregue mas contexto al mensaje"}
        })}></textarea>
        {errors.message&&<p className="error">{errors.message.message}</p>}
     
       <button type="submit">ENVIAR</button>
    </form>
       </motion.section>
</>
    )
}