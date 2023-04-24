import React from "react";
import { Col, Container, Row, Card, Image } from "react-bootstrap";
import skills from "../../data/skills.json";
import "animate.css";
import TrackVisibility from "react-on-screen";
export default function Skills() {
  return (
    <div>
      <section className="py-5 competences" id="competences">
        <Container>
          <h2 className="mb-0">Compétences</h2>
          <h3 className="fw-light fs-5 text-white">
            Langages, frameworks & bibliothèques
          </h3>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__bounce" : ""}
              >
                <Row className="align-items-center gy-4 mt-4">
                  {skills.map((skill, index) => (
                    <Col
                      sm="6"
                      md="4"
                      lg="2"
                      key={`${index}-${skill.id}`}
                      className="skills_skill"
                    >
                      <Card className="rounded-4 skills-card">
                        <Card.Body className="d-flex flex-row-reverse align-items-center justify-content-between  p-3">
                          <Card.Title className="skill-title">
                            {skill.name}
                          </Card.Title>
                          <Image
                            src={`images/skills/${skill.image}`}
                            alt={skill.name}
                            className="skill-image"
                          />
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
