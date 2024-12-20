import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay,Pagination} from 'swiper/modules'; 
import { motion } from 'framer-motion';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./portafolio.css"
export const Portafolio=()=>{

  
  
    return(
        <>
        <section className="portafolio container-fluid">  
            <h1 className="text-center saira-condensed-thinspancontacto">Portafolio</h1>
           <div className='menuportafolio accordion'id="accordionExample" >
            <h4   className="text-start saira-condensed-thinspanportafolio"
    data-bs-toggle="collapse"
    data-bs-target="#collapseExample2"
    aria-expanded="false"
    aria-controls="collapseExample2">
   Indentidad Visual
  </h4>
       <h4 className="text-start saira-condensed-thinspanportafolio"
    data-bs-toggle="collapse"
    data-bs-target="#collapseExample"
    aria-expanded="true"
    aria-controls="collapseExample">
   Sitios web
 </h4>


  
  
  <h4   className="text-start saira-condensed-thinspanportafolio"
    data-bs-toggle="collapse"
    data-bs-target="#collapseExample3"
    aria-expanded="false"
    aria-controls="collapseExample3">
   Aplicaciones Moviles
  </h4>
    </div>
    <div className="collapse" id="collapseExample3" data-bs-parent="#accordionExample3">
    <div className='container-fluid proyectos-padre'>
               
               <div className='proyecto'>
                 <img src="https://www.lombaoestudios.com/sites/default/files/styles/560x480/public/portfolio/Crecer%20Saludable%20Mockup%20apk%20m%C3%B3vil_Crecer%20Saludables.png?itok=b4FkEOM8" className='imgproyecto' alt="logo" />
                 <div className='overlay'>
                   <div className='divoverlay'>
                    <h4 className='saira-condensed-thin-overlay'>SADUNGA
                    </h4>
                 <h4 className='saira-condensed-thin-overlay'>APP MOVILES</h4>   
                   </div>
                    </div>
                    </div>
              
                    <div className='proyecto'>
                 <img src="https://www.lombaoestudios.com/sites/default/files/styles/560x480/public/portfolio/aplicacion_movil_codigo_de_familia.png?itok=cX3oRSiD" className='imgproyecto' alt="logo" />
                 <div className='overlay'>
                   <div className='divoverlay'>
                    <h4 className='saira-condensed-thin-overlay'>CRECER SALUDABLE</h4>
                 <h4 className='saira-condensed-thin-overlay'>APP MOVILES</h4>   
                   </div>
                    </div>
                    </div>

                    <div className='proyecto'>
                 <img src="https://www.lombaoestudios.com/sites/default/files/styles/560x480/public/portfolio/aplicacion_movil_preponiendo.png?itok=SyojrdKA" className='imgproyecto' alt="logo" />
                 <div className='overlay'>
                   <div className='divoverlay'>
                    <h4 className='saira-condensed-thin-overlay'>PREPONIENDO</h4>
                 <h4 className='saira-condensed-thin-overlay'>APP MOVILES</h4>   
                   </div>
                    </div>
                    </div>

                    <div className='proyecto'>
                 <img src="https://www.lombaoestudios.com/sites/default/files/styles/560x480/public/portfolio/ILEX_Asesoramiento.png?itok=xoBRnz5K"className='imgproyecto' alt="logo" />
                 <div className='overlay'>
                   <div className='divoverlay'>
                    <h4 className='saira-condensed-thin-overlay'>IBEX ASESORAMIENTO</h4>
                 <h4 className='saira-condensed-thin-overlay'>APP MOVILES</h4>   
                   </div>
                    </div>
                    </div>
                    <div className='proyecto'>
                 <img src="https://www.lombaoestudios.com/sites/default/files/styles/560x480/public/portfolio/aplicacion_movil_codigo_de_familia.png?itok=cX3oRSiD"className='imgproyecto' alt="logo" />
                 <div className='overlay'>
                   <div className='divoverlay'>
                    <h4 className='saira-condensed-thin-overlay'>CODIGO DE FAMILIAS</h4>
                 <h4 className='saira-condensed-thin-overlay'>APP MOVILES</h4>   
                   </div>
                    </div>
                    </div>
       </div>
</div>
 

<div className="collapse " id="collapseExample" data-bs-parent="#accordionExample"
 >
     <div className='container-fluid proyectos-padre'>
               
               <div className='proyecto'>
                 <img src="https://www.lombaoestudios.com/sites/default/files/styles/560x480/public/portfolio/Interfaz%201.jpg?itok=kG45ynUa" className='imgproyecto' alt="logo" />
                 <div className='overlay'>
                   <div className='divoverlay'>
                    <h4 className='saira-condensed-thin-overlay'>SADUNGA WEB
                    </h4>
                 <h4 className='saira-condensed-thin-overlay'>SITIOS WEB</h4>   
                   </div>
                    </div>
                    </div>
              
                    <div className='proyecto'>
                 <img src="https://www.lombaoestudios.com/sites/default/files/styles/560x480/public/portfolio/sitio_web_los_portales.png?itok=wPfxq4ai" className='imgproyecto' alt="logo" />
                 <div className='overlay'>
                   <div className='divoverlay'>
                    <h4 className='saira-condensed-thin-overlay'>L.O</h4>
                 <h4 className='saira-condensed-thin-overlay'>SITIOS WEB</h4>   
                   </div>
                    </div>
                    </div>

                    <div className='proyecto'>
                 <img src="https://www.lombaoestudios.com/sites/default/files/styles/560x480/public/portfolio/Medidas%20para%20el%20Sitio%20Web%20de%20Lombao%20Red%20Derecho%20Ibero%20PC_Derecho%20Ibero.png?itok=bxwL_R9g" className='imgproyecto' alt="logo" />
                 <div className='overlay'>
                   <div className='divoverlay'>
                    <h4 className='saira-condensed-thin-overlay'>MINJUS</h4>
                 <h4 className='saira-condensed-thin-overlay'>SITIOS WEB</h4>   
                   </div>
                    </div>
                    </div>

                    <div className='proyecto'>
                 <img src=" https://www.lombaoestudios.com/sites/default/files/styles/560x480/public/portfolio/sitio_web_excelencias_en_casa.png?itok=Ui3Ltdwp"className='imgproyecto' alt="logo" />
                 <div className='overlay'>
                   <div className='divoverlay'>
                    <h4 className='saira-condensed-thin-overlay'>AGUA Y SANAMIENTOS</h4>
                 <h4 className='saira-condensed-thin-overlay'>SITIOS WEB</h4>   
                   </div>
                    </div>
                    </div>
                    <div className='proyecto'>
                 <img src="https://www.lombaoestudios.com/sites/default/files/styles/560x480/public/portfolio/Imagenes%20de%20Sitios%20Web%20de%20Lombao_Plataforma%20Habana_0.png?itok=7d6z_0gU"className='imgproyecto' alt="logo" />
                 <div className='overlay'>
                   <div className='divoverlay'>
                    <h4 className='saira-condensed-thin-overlay'>HENLACE HABANA</h4>
                 <h4 className='saira-condensed-thin-overlay'>SITIOS WEB</h4>   
                   </div>
                    </div>
                    </div>
       </div>
</div>

<div className="collapse show" id="collapseExample2"     data-bs-parent="#accordionExample2">
   
            <div className='container-fluid proyectos-padre'>
               
                    <div className='proyecto'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bykS3vEchUHrLAx6YIWz6euaShUfkURkeA&s" className='imgproyecto' alt="logo" />
                      <div className='overlay'>
                        <div className='divoverlay'>
                         <h4 className='saira-condensed-thin-overlay'>SAYFI REAL
                         </h4>
                      <h4 className='saira-condensed-thin-overlay'>IDENTIDAD VISUAL</h4>   
                        </div>
                         </div>
                         </div>
                   
                         <div className='proyecto'>
                      <img src="https://img.freepik.com/vector-premium/vector-libre-hermoso-elemento-diseno-colibri-volador-pancartas-carteles-folletos-folletos_1009653-1.jpg" className='imgproyecto' alt="logo" />
                      <div className='overlay'>
                        <div className='divoverlay'>
                         <h4 className='saira-condensed-thin-overlay'>COLIBRI</h4>
                      <h4 className='saira-condensed-thin-overlay'>IDENTIDAD VISUAL</h4>   
                        </div>
                         </div>
                         </div>

                         <div className='proyecto'>
                      <img src="https://img.freepik.com/vector-premium/plantillas-diseno-vectores-logotipo-belleza-inicial_63220-234.jpg?semt=ais_hybrid" className='imgproyecto' alt="logo" />
                      <div className='overlay'>
                        <div className='divoverlay'>
                         <h4 className='saira-condensed-thin-overlay'>GALERA</h4>
                      <h4 className='saira-condensed-thin-overlay'>IDENTIDAD VISUAL</h4>   
                        </div>
                         </div>
                         </div>

                         <div className='proyecto'>
                      <img src=" https://img.freepik.com/vector-gratis/logo-abstracto-colorido-letra-s_1017-1763.jpg?t=st=1734667133~exp=1734670733~hmac=7f47d6294e7acdcae00001ea72da0549132a691d1c10ea14f2c839948e1c7934&w=740"className='imgproyecto' alt="logo" />
                      <div className='overlay'>
                        <div className='divoverlay'>
                         <h4 className='saira-condensed-thin-overlay'>LOREM IPSUM</h4>
                      <h4 className='saira-condensed-thin-overlay'>IDENTIDAD VISUAL</h4>   
                        </div>
                         </div>
                         </div>
                         <div className='proyecto'>
                      <img src=" https://img.freepik.com/vector-gratis/logo-triangulo-geometrico_1043-89.jpg?semt=ais_hybrid"className='imgproyecto' alt="logo" />
                      <div className='overlay'>
                        <div className='divoverlay'>
                         <h4 className='saira-condensed-thin-overlay'>AMTRACK</h4>
                      <h4 className='saira-condensed-thin-overlay'>IDENTIDAD VISUAL</h4>   
                        </div>
                         </div>
                         </div>
            </div>
            
</div>
{/* example 3 */}

         

        
  

        </section>
        </>
    )
}