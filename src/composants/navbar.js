import { Container, Nav, Navbar } from 'react-bootstrap';
import monLogo from '../images/logo.png';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="#">
            <img
                src={monLogo}
                alt='logo'
                style={{ width: '30px', height: 'auto' }}
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-center">
            <Nav.Link href="#action1">Accueil</Nav.Link>
            <Nav.Link href="#action2">Présentation</Nav.Link>
            <Nav.Link href="#action3">Cours</Nav.Link>
            <Nav.Link href="#action4">Tarifs</Nav.Link>
            <Nav.Link href="#action5">Témoignages</Nav.Link>
            <Nav.Link href="#action6">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;