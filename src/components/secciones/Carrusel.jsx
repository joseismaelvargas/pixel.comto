import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; 
import { Link,useNavigate } from 'react-router-dom';

import "./Carrusel.css"
export const Carrusel=()=>{
    return(
        <>
        <section className='container seccion-carrusel'>
            <h1 className="text-center  saira-condensed-thin">Nuestros Servicios </h1>
            <Swiper modules={[Autoplay, Navigation]}
              slidesPerView={1} 
              spaceBetween={30} 
            
            autoplay={{
                delay:3000
            }}
            loop={true}
              

                  
  
            >
               
                <SwiperSlide className='swiper-slide'>
                <div className='boxswiper'>
                   <span className='saira-condensed-thinspan'>Consultoria Tecnologica</span>
                 <hr 
                  />
                 <p className='yusei-magic-regular'>Ofrecemos un servicio integral de aplicaciones de gestión empresarial con Odoo, diseñado para optimizar los procesos de su empresa. Nuestro equipo de desarrolladores expertos personaliza e implementa Odoo, adaptando cada módulo a sus necesidades específicas. Desde la integración de CRM y contabilidad hasta la automatización de procesos, garantizamos soluciones robustas que mejoran la eficiencia y fomentan el crecimiento estratégico.</p>
                 <Link end to="/contacto" className='solicitar'>
                 <a>Solicitar Informacion...</a></Link>
                
      </div>
     <img src="https://www.lombaoestudios.com/sites/default/files/styles/720x480/public/2023-01/bitmap-copy-2%403x.png?itok=uHCIkLHr" alt="Consultoría Tecnológica" className='img-carrusel' />
             </SwiperSlide>
  <SwiperSlide className="swiper-slide">
    <div className="boxswiper">
      <span className='saira-condensed-thinspan'>Marketing Digital</span>
      <hr />
      <p className='yusei-magic-regular'>
     Nos encargamos de tus redes por ti.Si te falta tiempo nosotros lo hacemos por ti tenemos diferentes planes contactanos que seguro habra uno para ti .
      </p>
      <Link end to="/contacto" className='solicitar'>
      <a>Solicitar Informacion...</a></Link>
    </div>
    <img src="https://www.lombaoestudios.com/sites/default/files/styles/720x480/public/2023-01/Servicio%20de%20Marketing%20Digital.jpg?itok=rv21GbQY" alt="Marketing Digital" className='img-carrusel' />
  </SwiperSlide>
  <SwiperSlide>
  <div className="boxswiper">
      <span className='saira-condensed-thinspan'> Diseño personalizado</span>
      <hr />
      <p className='yusei-magic-regular'>
      Haz que tu eCommerce destaque con un diseño único y hecho a tu medida. Nuestro equipo se encarga de crear una tienda que refleje la identidad de tu marca y brinde una experiencia excepcional a tus clientes.
      </p>
      <Link end to="/contacto" className='solicitar'>
      <a>Solicitar Informacion...</a></Link>
    </div>
    <img src="https://www.lombaoestudios.com/sites/default/files/styles/720x480/public/2023-01/blog.png?itok=0PUxUEyl" alt="Marketing Digital" className='img-carrusel' />

  </SwiperSlide>
  <SwiperSlide>
  <div className="boxswiper">
      <span className='saira-condensed-thinspan'> Soporte post desarrollo</span>
      <hr />
      <p className='yusei-magic-regular'>
      No te dejamos solo después del desarrollo. Nuestro compromiso es que tu plataforma funcione perfectamente en todo momento. Por eso, ofrecemos un servicio de soporte post desarrollo adaptado a tus necesidades.
      </p>
      <Link end to="/contacto" className='solicitar'>
      <a>Solicitar Informacion...</a></Link>
    </div>
    <img src="https://www.lombaoestudios.com/sites/default/files/styles/720x480/public/2023-01/gestion.png?itok=iSMgzn5K" alt="Marketing Digital" className='img-carrusel' />

  </SwiperSlide>
</Swiper>

        </section>
        </>
    )
}