import React from "react";
import { Card, Col, Container, Row, Button, Badge } from "react-bootstrap";
import works from "../../data/works.json";

import "animate.css";
import TrackVisibility from "react-on-screen";
export default function Works() {
  return (
    <div>
      <section className="py-5 works" id="portfolio">
        <Container>
          <h2 class="mb-0 text-white">Portfolio</h2>
          <h3 class="fw-light fs-5 text-white">Projets perso et pro</h3>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__flash" : ""}
              >
                <Row className="gy-4 gy-md-0 mt-4">
                  {works.map((work, index) => (
                    <Col sm="6" md="5" lg="4" key={`${index}-${work.id}`}>
                      <Card className="work-card">
                        <Card.Img
                          variant="top"
                          src={`images/works/${work.image}`}
                          className="work-image"
                          alt={work.title}
                        />
                        <Card.Body>
                          <Card.Title>{work.title}</Card.Title>
                          <Card.Text>{work.description}</Card.Text>
                          <p className="languages">
                            {work.languages.map((language, index) => (
                              <Badge
                                className="language-badge"
                                bg="success"
                                key={index}
                              >
                                {language}
                              </Badge>
                            ))}
                          </p>
                          <Button className="read-more-button contact-button">
                            <Card.Link href={work.workURL} target="_blank">
                              {work.workURLText}
                            </Card.Link>
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>
    </div>
  );
}
