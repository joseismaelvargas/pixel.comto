import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
import "./navegador.css"

function Navegador() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src='./img/logo.png' width={"230px"}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link d-flex ms-auto">
            <NavLink className={"navegadores"} end to="/">inicio</NavLink>
            <NavLink className={"navegadores"} href="#link">Nosotros </NavLink>
            <NavLink className={"navegadores"} end to="/equipo">Nuestro Equipo</NavLink>
            <NavLink className={"navegadores"} end to="/contacto">Contacto</NavLink>
            <button class="buttonnav">Iniciar Sesion</button>
          
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;