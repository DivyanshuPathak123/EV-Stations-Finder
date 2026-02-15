import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import viteLogo from "/vite.svg";

function TopNav() {
  return (
    <Navbar className="bg-body-tertiary" fixed="top" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={viteLogo} className="logo" alt="Vite logo" /> EV Stations
          Finder
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/stations">Nearby EV Stations</Nav.Link>
            <Nav.Link href="/vehicles">EV Vehicles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
