import React from "react";
import { Col, Container, Row, Navbar } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
export default function Footer() {
  return (
    <div className="py-5 footer">
      <Container>
        <Row className="gy-4 align-items-center">
          <Col md="4">
            <Navbar.Brand
              href="#a-propos"
              className="text-uppercase text-light"
            >
              <span class="brand-name bg-gradient p-1 rounded-3">Alain</span>{" "}
              Sengimana
            </Navbar.Brand>
          </Col>
          <Col className="col-md-4 text-md-center">
            <ul class="list-unstyled mb-0">
              <li>© 2023</li>
            </ul>
          </Col>
          <Col className="col-md-4 text-md-end social-links">
            <ul class="list-inline mb-0">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}
