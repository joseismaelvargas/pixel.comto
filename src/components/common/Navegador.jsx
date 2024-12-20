import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
import "./navegador.css"

function Navegador() {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src='./img/logo.png' width={"230px"}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link d-flex ms-auto">
            <NavLink className={"navegadores"} end to="/">inicio</NavLink>
            <NavLink className={"navegadores"} end to="/metodologia">Metodologia </NavLink>
            <NavLink className={"navegadores"} end to="/equipo">Nuestro Equipo</NavLink>
            <NavLink
            end to="/#contacto"
              className="navegadores"
              onClick={() => scrollToSection("#contacto")}
              style={{ cursor: "pointer" }}
            >
              Contáctenos
            </NavLink>
           
          
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;