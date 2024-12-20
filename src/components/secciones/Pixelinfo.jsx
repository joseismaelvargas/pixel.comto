import "./main.css"
import { Link, useNavigate } from "react-router-dom"
export const Pixelinfo=()=>{
    return(
        <>
        <section className="sectioninfo container-fluid " >
            
            

             <div className="boxfather">
                <div className="boxson">
                <span className="material-symbols-outlined">
            rocket_launch
            </span>
            <p id="title-caja">Creatividad sin límites</p>
          <p className="roboto-thininfo ">En Pixel, cada proyecto es abordado con una mente abierta y un enfoque creativo, buscando siempre superar las expectativas y ofrecer resultados únicos y originales.</p>
                </div>

                <div className="boxson">
                <span className="material-symbols-outlined">
            chat_bubble
            </span>
          <p  id="title-caja">Enfoque centrado en el cliente</p>
          <p className="roboto-thininfo ">Valoramos la comunicación trasparente colaboración estrechaNos comprometemos entender sus necesidades y objetivos para ofrecer souciones personalizadas que impulsen su éxito.</p>
                </div>
                <div className="boxson">
                <span className="material-symbols-outlined">
            work
            </span>
          <p  id="title-caja">Trabajo en equipo</p>
  
         <p  className="roboto-thininfo">Nuestro equipo está compuesto por diseñadores y expertos en branding altamente capacitados y apasionados por su trabajo. Nos esforzamos por mantener los más altos estándares de calidad en cada proyecto que emprendemos.</p>

                </div>

             </div>
          <div className="secctionpixel">
            <img src="./img/about-banner.png" alt="imgpixel" width={"350px"} className="imgpix" />
          
           <div className="pixelinfo">
           <h1 >En Pixel, crecemos <br></br> contigo. Tu éxito es <br></br>nuestro éxito   </h1>
            <p class="roboto-thinpixel ">¿Estás listo para llevar la imagen de tu marca al siguiente nivel? ¡Haz clic en el botón "Ver más" a continuación para descubrir cómo podemos crear un logotipo que refleje la esencia de tu negocio!</p>
            <Link end to="/equipo"> 
            <button class="verMas" >VER MAS</button></Link>
           </div>

          </div>

        </section>
        </>
    )
}