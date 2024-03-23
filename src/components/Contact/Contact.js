import React from "react";
import "./Contact.css";
import {Container, Form,Button} from 'react-bootstrap';
const Contact = () => {
  return (
    <section id="contact">
      <h2 className="fw-bold">Contact Us</h2>
      <Container className="Container">
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label  className="label">Name</Form.Label>
          <Form.Control type="text" placeholder="your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label  className="label">Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="label">Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Write your Queries" />
        </Form.Group>
        <Button variant="success" className="button"> Submit</Button>
      </Form>
      </Container>
    </section>
  );
};

export default Contact;
