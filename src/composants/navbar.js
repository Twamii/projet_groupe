import { Container, Nav, Navbar } from "react-bootstrap";
import monLogo from "../images/logo.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={monLogo}
            alt="logo"
            style={{ width: "30px", height: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 text-center">
            <Nav.Link href ="/#home">
              Accueil
            </Nav.Link>
            <Nav.Link href="#presentation">Présentation</Nav.Link>
            <Nav.Link href="#cours">Cours</Nav.Link>
            <Nav.Link href="#tarification">Tarifs</Nav.Link>
            <Nav.Link href="#avis">Témoignages</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
