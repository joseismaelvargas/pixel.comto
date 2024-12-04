import "./style/equipos.css"
import { motion } from "framer-motion"
export const Equipo=()=>{
    return(
        <>
       <section className="SobreElequipo container text-center">

      <motion.h1 style={{ fontWeight:"bold", fontSize:" 55px"}}
           
            initial={{ opacity: 0, y: -50 }}  
            animate={{ opacity: 1, y: 0 }}    
            transition={{ duration: 2 }}      
          >
           Sobre el Equipo
          </motion.h1>
      <motion.p className="roboto-thin" initial={{ opacity: 0, y: -50 }}  
            animate={{ opacity: 1, y: 0 }}    
            transition={{ duration: 2 }}    >Nuestro equipo está formado por una mezcla diversa de talentosos diseñadores gráficos, estrategas de branding y expertos en marketing, todos unidos por su pasión por la creatividad y la innovación. Nos enorgullece trabajar juntos para ofrecer soluciones visuales excepcionales que impulsen el crecimiento y el reconocimiento de nuestros clientes en el mercado.</motion.p>
    
    </section>
    <section className="diseñadores container">
      <motion.img initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }}   
          transition={{ duration: 2 }}  className="img"  src="img/feature-1.png" alt=""  ></motion.img>
      
      <div className="parrafo">
        <motion.h1 style={{fontSize:"35px",
        fontWeight:"bold"}}initial={{ opacity: 0, y: -50 }}  
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 2 }}    >Diseñadores Creativos y Apasionados</motion.h1>
        
        <motion.p initial={{ opacity: 0, y: -50 }}  
            animate={{ opacity: 1, y: 0 }}    
            transition={{ duration: 2 }}    >Cada miembro de nuestro equipo aporta su propia perspectiva única y experiencia en diversas áreas del diseño gráfico yla creatividad visual. Desde ilustración hasta diseño de interfaces de usuario, estamos constantemente explorando nuevas técnicas y tendencias para ofrecer soluciones visuales frescas y emocionantes que resuenen con nuestra audiencia y la de nuestros clientes.

        </motion.p>
       </div>
 

    </section>
    <section className="estrategas container">
    
      <div className="parrafo">
        <h1 style={{fontSize:"40px",fontWeight:"bold"}}>Estrategas de Marca Expertos en su Campo</h1>
        <p>Nuestros estrategas de marca son los arquitectos detrás de las identidades visuales sólidas y cohesivas que creamos para nuestros clientes. Con un profundo entendimiento del mercado y las audiencias objetivo, trabajan en estrecha colaboración con nuestros diseñadores para desarrollar  estrategias de branding que transmitan mensajes claros y auténticos. Ya sea que se trate de crear una nueva marca desde cero o revitalizar una existente, nuestros estrategas de marca están comprometidos a garantizar que cada aspecto de la identidad visual refleje la visión y los valores de nuestros clientes.</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
        <img  className="img"src="img/feature-2.png" alt="img"></img>
    </section>
    

        
        </>
    )
}