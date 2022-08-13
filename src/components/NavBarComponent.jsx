import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


export default function NavbarComponent() {
    return (
      <Navbar bg="success" variant="light" expand="sm" sticky="top">
        <Navbar.Brand as={Link} to="/">
         Mini Brand Checklist
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-menu" />
      </Navbar>
    );
  }