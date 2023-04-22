import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Header() {
  return (
    <div className="py-4">
      <Navbar className="header-navbar fixed-top" expand="lg">
        <Container>
          <Navbar.Brand href="#a-propos" className="text-uppercase text-light">
            <span class="brand-name bg-gradient p-1 rounded-3">Alain</span>{" "}
            Sengimana
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#a-propos" className="link-text">
                À propos
              </Nav.Link>
              <Nav.Link href="#competences" className="link-text">
                Compétences
              </Nav.Link>
              <Nav.Link href="#portfolio" className="link-text">
                Portfolio
              </Nav.Link>
              <Tippy content="Accéder au formulaire de contact.">
                <Nav.Link href="#contact" className="link-text">
                  Contact
                </Nav.Link>
              </Tippy>
            </Nav>
            <ul class="list-inline mb-0 social-links">
              <Tippy content="LinkedIn">
                <li class="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/asengimana"
                    target="_blank"
                    rel="noreferrer"
                    class="text-decoration-none"
                  >
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                </li>
              </Tippy>
              <Tippy content="GitHub">
                <li class="list-inline-item">
                  <a
                    href="https://github.com/asengimana"
                    target="_blank"
                    rel="noreferrer"
                    class="text-decoration-none"
                  >
                    <i class="fab fa-github-square fa-2x"></i>
                  </a>
                </li>
              </Tippy>
              <Tippy content="Twitter">
                <li class="list-inline-item">
                  <a
                    href="https://twitter.com/match4d"
                    target="_blank"
                    rel="noreferrer"
                    class="text-decoration-none"
                  >
                    <i class="fab fa-twitter-square fa-2x"></i>
                  </a>
                </li>
              </Tippy>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
