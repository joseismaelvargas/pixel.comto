import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navegador.css"

function Navegador() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src='./img/logo.png' width={"230px"}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link d-flex ms-auto">
            <Nav.Link href="#home">inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros </Nav.Link>
            <Nav.Link href='#link'>Nuestro Equipo</Nav.Link>
            <Nav.Link href='#link'>Contacto</Nav.Link>
            <button class="buttonnav">SERVICIOS</button>
          
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;