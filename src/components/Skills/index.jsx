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
          <h2 class="mb-0">Compétences</h2>
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
                        <Card.Body className="d-flex flex-row-reverse justify-content-center justify-content-around  p-4">
                          <Card.Title>{skill.name}</Card.Title>
                          <Image
                            src={`images/skills/${skill.image}`}
                            alt={skill.name}
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
