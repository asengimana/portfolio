import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import portrait from "../../assets/portrait.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
export default function Profile() {
  return (
    <div>
      <section id="a-propos" className="my-5 profile">
        <Container>
          <Row className="gy-4 align-items-center">
            <Col md="8">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__pulse" : ""
                    }
                  >
                    <h1>
                      Bonjour, je suis <b className="fw-bold">Alain</b>,
                      <br />{" "}
                      <b className="fw-bold">Développeur web Freelance</b>
                    </h1>
                    <h2 className="fw-light">Bienvenue sur mon Portfolio</h2>
                  </div>
                )}
              </TrackVisibility>
              <Tippy content="Accéder au formulaire de contact.">
                <Button
                  href="#contact"
                  className="mt-5 contact-button bg-gradient"
                >
                  Me contacter
                </Button>
              </Tippy>
            </Col>
            <Col md="4">
              <Image src={portrait} fluid rounded className="portrait-image" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
