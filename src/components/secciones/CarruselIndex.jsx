import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay,Pagination} from 'swiper/modules'; 
import { motion } from 'framer-motion';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
export const CarruselIndex=()=>{
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [animationKey, setAnimationKey] = useState(0);
    return(
        <>
        <section className="container-fluid seccionIndex">
        <Swiper modules={[Autoplay, Navigation,Pagination]}
              slidesPerView={1} 
              spaceBetween={50} 
            
            autoplay={{
                delay:4000
            }}
            loop={true}
            navigation
            pagination={{
                clickable: true,
              }}
              onSlideChange={() => setAnimationKey((prev) => prev + 1)}
              className='swiper-index'
      >
            <SwiperSlide className='pixel1'>
            <div className="pixel">
        <motion.h1 
         key={`h1-${animationKey}`}
            className="yusei-magic-regulartitle"
            initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }}     
            transition={{ duration: 1.5}}      
          >
            Pixel <br />Creatividad<br /> Integral
          </motion.h1>

          <motion.p
          key={`p-${animationKey}`}
            className=" saira-condensed-thin-carruselIndex text-start"
            initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }}   
            transition={{ duration: 1.5, delay: 0.5 }}  
          >
            Transformamos ideas en experiencias visuales memorables.<br />
            Llega mas rapido Multiplicate de manera exitosa<br /> 
          </motion.p>

          <motion.button
          onClick={() => scrollToSection("#contacto")}
          style={{ cursor: "pointer" }}
           key={`buttton-${animationKey}`}
            className="estilobutton"
            initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }}   
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }} 
          >
           Contactanos
          </motion.button>
        </div>

        <motion.div
           key={`img-${animationKey}`}
          className="imgmain"
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }}   
          transition={{ duration: 1.5}}      
        >
          <img className="imgmain" src="/img/hero-banner.png" alt="imgpixel" />
        </motion.div>
            </SwiperSlide>
            <SwiperSlide className='pixel2'>
              <div className='container'>

              <motion.h1
              key={`h1-${animationKey}`}
            className="yusei-magic-regulartitle"
            initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }}      
            transition={{ duration: 1.5 }}      
          >
          Aplicaciones a<br /> medidas
          </motion.h1>
          <motion.p
            key={`p-${animationKey}`}
            className=" saira-condensed-thin-carruselIndex"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }}     
            transition={{ duration: 0.5, delay: 0.5 }}  
          >
          Ayudamos al crecimiento <br />
          de tu negocio.
          <br />
          Multiplicamos tu sitio,tus <br />
          Servicios y tu negocio .
          </motion.p>
          <motion.button
         
         key={`buttton-${animationKey}`}
         onClick={() => scrollToSection("#contacto")}
              style={{ cursor: "pointer" }}
            className="estilobutton"
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }}    
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }} 
          >
           Contactanos
          </motion.button>
         
              </div>
           
            </SwiperSlide>
            <SwiperSlide className='pixel3'>
              <div className='pixel-content container'>
            <motion.h1
            key={`h1-${animationKey}`}
            className="yusei-magic-regulartitle"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }}       
            transition={{ duration: 1.6}}      
          >
          Comercio <br />Electronico
          </motion.h1>
         
          <motion.p
            className=" saira-condensed-thin-carruselIndex"
            key={`p-${animationKey}`}
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }}   
            transition={{ duration: 1.6, delay: 0.5 }}  
          >
            Amplia tus Orizontes Multiplica <br />tus clientes  y posibilidades, <br />facilita las compras y da seguimientos <br />a los pedidos y  ordenes.Has crecer tu negocio <br /> con nosotros
          </motion.p>
          <motion.button
          onClick={() => scrollToSection("#contacto")}
          style={{ cursor: "pointer" }}
            key={`button-${animationKey}`}
            className="estilobutton"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }}      
            transition={{ duration: 1.5, type: "spring", stiffness: 200 }} 
          >
           Contactanos
          </motion.button>
              </div>
            </SwiperSlide>
        </Swiper>
        </section>
        </>
    )
}