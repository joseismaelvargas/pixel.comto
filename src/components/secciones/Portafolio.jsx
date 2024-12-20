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
            <h3 className='text-start saira-condensed-thinspancontacto'>Indentidas Visual</h3>
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
                         {/*  */}
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
            


        </section>
        </>
    )
}