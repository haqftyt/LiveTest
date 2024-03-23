import React from "react";
import './Food.css'
import { Container, Row, Col,Card } from "react-bootstrap";
const Food = () => {
  return (
    <section id="food">
      <Container>
        <h2 className="fw-bold">Food Menu</h2>
        <Row className="Row">
          <Col  className="Col">
            <Card style={{ width: "250px"}}className="Card">
              <Card.Img  className="cardimg" variant="top" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg" />
              <Card.Body>
                <Card.Title>Samosa</Card.Title>
                <Card.Text>6₹ (Per Piece)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="Col" >
            <Card style={{ width: "250px"}} className="Card">
              <Card.Img className="cardimg" variant="top" src="https://t3.ftcdn.net/jpg/05/21/56/86/360_F_521568693_EySDD5bxINHfYDzlrYXZpKoHXgVC8UI7.jpg" />
              <Card.Body>
                <Card.Title>Chola Poori</Card.Title>
                <Card.Text>35₹ (1 Set)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="Col">
            <Card style={{ width: "250px"}}className="Card">
              <Card.Img  className="cardimg" variant="top" src="https://www.chefspencil.com/wp-content/uploads/Idli-1.jpg" />
              <Card.Body>
                <Card.Title>Idly</Card.Title>
                <Card.Text>12₹ (2 Piece)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="Col">
            <Card style={{ width: "250px"}}className="Card">
              <Card.Img className="cardimg" variant="top" src="https://www.kannammacooks.com/wp-content/uploads/buhari-hotel-chennai-chicken-biryani-recipe-1-4.jpg" />
              <Card.Body>
                <Card.Title>Briyani</Card.Title>
                <Card.Text>50₹ (1 Kg)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="Col">
            <Card style={{ width: "250px"}}className="Card">
              <Card.Img  className="cardimg"variant="top" src="https://static.toiimg.com/thumb/63841432.cms?imgsize=1151127&width=800&height=800" />
              <Card.Body>
                <Card.Title>Dosa</Card.Title>
                <Card.Text>35₹(Per Piece)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="Col">
            <Card style={{ width: "250px"}}className="Card">
              <Card.Img className="cardimg" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Medu_Vadas.JPG" />
              <Card.Body>
                <Card.Title>Medu Vadas</Card.Title>
                <Card.Text >6₹(Per Piece)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="Col">
            <Card style={{ width: "250px"}}className="Card">
              <Card.Img  className="cardimg"variant="top" src="https://myfoodstory.com/wp-content/uploads/2021/05/Curd-Rice-2.jpg" />
              <Card.Body>
                <Card.Title>Curd Rice</Card.Title>
                <Card.Text>25₹(Per Piece)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="Col">
            <Card style={{ width: "250px"}}className="Card">
              <Card.Img className="cardimg" variant="top" src="https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2021/09/potato-parotta-recipe-kerala-paratha-recipe.jpg?resize=768%2C720&ssl=1" />
              <Card.Body>
                <Card.Title>Parotta</Card.Title>
                <Card.Text>12₹(Per Piece)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Food;
