import React from 'react'
import{Container,Row,Col} from 'react-bootstrap';
import './About.css'
const About = () => {
  return (
    <section id="about" className='pad'>
        <Container>
      <Row>
        <Col className='Col imgblock'>
        <img
              alt=""
              src="https://png.pngtree.com/png-clipart/20230206/ourmid/pngtree-tasty-emoji-icon-in-yellow-png-image_6585504.png"
              width="350"
            />
        </Col>
        <Col xs='12'className='Col'>
            <h3>About Us</h3>
            <p><b>Tasty Mealoo</b> was established in the year 2000. we has been continuing our quality and services in the food for the past 24 years.
            The Aim and Quote of our management is hustle,
            loyality,respect with customers.Delicious Food for your deserving ones....
            A healthy diet is essential for good health and nutrition.Good,Better and Best Food.</p>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default About