import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

function Contact() {
  return (
    <Container className="text-center py-5">
      <h1>
        <b>Contactez-moi</b>
      </h1>
      <Row className="py-5">
        <Col
          xs={12}
          md={6}
          className="mb-4 d-flex align-items-center justify-content-center"
        >
          <Card style={{ width: "25rem", height: "30rem" }} className="rounded border-3">
            <Card.Body>
              <Card.Title className="mt-5">
                <b>Restons en contact</b>
              </Card.Title>
              <Card.Text className="mt-5">
                Vous avez des questions sur les cours, les tarifs ou la
                réservation ? N'hésitez pas à me contacter, je serai ravie de
                vous répondre et vous aider à choisir la formule qui vous
                convient le mieux.
              </Card.Text>
              <ListGroup variant="flush" className="mt-5">
                <ListGroup.Item>contact@company.com</ListGroup.Item>
                <ListGroup.Item>00.00.00.00</ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  1 rue du quelque part au mans, 72000 Le Mans
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          md={6}
          className="mb-4 d-flex align-items-center justify-content-center"
        >
          <Card className="py-3 px-3 mt-4 border-3" style={{ width: "30rem" }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="email" placeholder="McGarden" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="password" placeholder="Léa" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="email" placeholder="00.00.00.00.00" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="password" placeholder="email@email.com" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit" className="mb-3">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
