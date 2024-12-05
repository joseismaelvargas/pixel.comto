import "./main.css"
import { motion } from 'framer-motion';
export const Pixelinit=()=>{
    return(
        <>
        <section className="secctioninicial container-fluid">
     
        <div className="pixel">
        <motion.h1
            className="title"
            initial={{ opacity: 0, y: -50 }}  
            animate={{ opacity: 1, y: 0 }}    
            transition={{ duration: 2 }}      
          >
            Pixel <br />Creatividad<br /> Integral
          </motion.h1>

          <motion.p
            className="parrafos"
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }} 
            transition={{ duration: 2, delay: 0.5 }}  
          >
            Transformamos ideas en experiencias visuales <br />memorables.
          </motion.p>

          <motion.button
            className="estilobutton"
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }}    
            transition={{ duration: 1.5, type: "spring", stiffness: 200 }} 
          >
            Comenzemos
          </motion.button>
        </div>

        <motion.div
          className="imgmain"
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }}   
          transition={{ duration: 2 }}      
        >
          <img className="imgmain" src="/img/hero-banner.png" alt="imgpixel" />
        </motion.div>
   
        
    


        </section>
        </>
    )
}