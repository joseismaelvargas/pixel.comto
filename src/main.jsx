import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import "swiper/css/pagination"; // Estilos para la paginación; 
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
