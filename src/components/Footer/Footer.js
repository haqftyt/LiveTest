import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  let year = new Date();
  return (
    <footer>
      <Container className="py-2">
        <Row>
          <Col lg={3}>
            <div className="fw-bold">
              <img
                alt=""
                src="https://png.pngtree.com/png-clipart/20230206/ourmid/pngtree-tasty-emoji-icon-in-yellow-png-image_6585504.png"
                width="70"
              />{" "}
              Tasty Mealoo
            </div>
            <p>
              Copyright &copy; haqftyt {year.getFullYear()}
              &nbsp;.
            </p>
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              width="150"
              />
          </Col>
          <Col className="py-3">
            <p className="fw-bold">Restaraunt</p>
              <p>Home</p>
              <p>Food Menu</p>
              <p>Location</p>
          </Col>
          <Col className="py-3">
          <p className="fw-bold">Services</p>
              <p>Marriage Orders</p>
              <p>Catering and Foods</p>
              <p>Bulk Orders</p></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
