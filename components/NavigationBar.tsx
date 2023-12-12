import { Container, Navbar, NavLink } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-bg fixed-top">
      <Container>
        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <a href="#" className="navbar-brand mx-auto mx-lg-0">
          <span>Gian </span>
          <i className="bi-heart brand-icon"></i>
          <span> Ave</span>
        </a>

        <Navbar.Collapse id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#home">
                Homepage
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#our_story">
                Our Story
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#thewedding">
                The Wedding
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#people">
                People
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#gallery">
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#RSVP">
                RSVP
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#contact_us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
