import React from "react";
import {
  Col,
  Container,
  Form,
  Image,
  Row,
  Button,
  Alert,
} from "react-bootstrap";
import contact from "../../assets/contact.jpg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();
  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);

          setShow(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <section id="contact" className="py-5 contact">
        <Container>
          <h2 className="mb-0 text-white">Un projet de création web ?</h2>
          <h3 className="fw-light fs-5 text-white">
            Si vous souhaitez discuter d'un projet ou si vous avez simplement
            une question, veuillez remplir le formulaire ci-dessous.
          </h3>
          <Row className="gy-4 mt-4 contact-row">
            <Col md="5">
              <Image src={contact} fluid rounded className="contact-image" />
            </Col>
            <Col className="offset-md-1" md="6">
              <Alert variant="success" show={show}>
                <Alert.Heading>Message envoyé avec succès !</Alert.Heading>
              </Alert>
              <Form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col className="col-12 my-2">
                    <Form.Group className="mb-1">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nom"
                        name="user_name"
                        id="user_name"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12 my-2">
                    <Form.Group className="mb-1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="user_email"
                        id="user_email"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12 my-2">
                    <Form.Group className="mb-1">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        id="message"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12 my-2">
                    <Button
                      className="w-100 bg-gradient contact-button"
                      type="submit"
                    >
                      Envoyer
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
