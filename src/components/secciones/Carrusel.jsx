import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; 

import "./Carrusel.css"
export const Carrusel=()=>{
    return(
        <>
        <section className='container'>
            <h1 className="text-center  saira-condensed-thin">Nuestros Servicios </h1>
            <Swiper modules={[Autoplay, Navigation]}
              slidesPerView={1} 
              spaceBetween={30} 
         
  
            >
               
                <SwiperSlide className='swiper-slide'>
                <div className='boxswiper'>
                   <span className='saira-condensed-thinspan'>Consultoria Tecnologica</span>
                 <hr 
                  />
                 <p className='yusei-magic-regular'>Ofrecemos un servicio integral de aplicaciones de gestión empresarial con Odoo, diseñado para optimizar los procesos de su empresa. Nuestro equipo de desarrolladores expertos personaliza e implementa Odoo, adaptando cada módulo a sus necesidades específicas. Desde la integración de CRM y contabilidad hasta la automatización de procesos, garantizamos soluciones robustas que mejoran la eficiencia y fomentan el crecimiento estratégico. Con un enfoque en la innovación, estamos comprometidos a impulsar su éxito empresarial.</p>
      </div>
     <img src="https://www.lombaoestudios.com/sites/default/files/styles/720x480/public/2023-01/bitmap-copy-2%403x.png?itok=uHCIkLHr" alt="Consultoría Tecnológica" className='img-carrusel' />
             </SwiperSlide>
  <SwiperSlide className="swiper-slide">
    <div className="boxswiper">
      <span className="title-carrusel">Marketing Digital</span>
      <hr />
      <p className='roboto-thincarrusel'>
      Ofrecemos un servicio integral de aplicaciones de gestión empresarial con Odoo, diseñado para optimizar los procesos de su empresa. Nuestro equipo de desarrolladores expertos personaliza e implementa Odoo, adaptando cada módulo a sus necesidades específicas. Desde la integración de CRM y contabilidad hasta la automatización de procesos, garantizamos soluciones robustas que mejoran la eficiencia y fomentan el crecimiento estratégico. Con un enfoque en la innovación, estamos comprometidos a impulsar su éxito empresarial.
      </p>
    </div>
    <img src="ruta-de-la-imagen" alt="Marketing Digital" />
  </SwiperSlide>
</Swiper>

        </section>
        </>
    )
}