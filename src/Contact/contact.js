import { Container, Row, Col, Card, Button, Form, ListGroup } from "react-bootstrap";

function Contact() {
  return (
    <Container id="action6" className="text-center py-5">
      <h2>
        <b>Contactez-moi</b>
      </h2>
      <Row className="py-5">
        <Col
          xs={12}
          md={6}
          className="mb-4 d-flex align-items-center justify-content-center"
        >
          <Card className="rounded border-3 contactcard">
            <Card.Body>
              <Card.Title className="mt-5 titrecontact">
                <b>Restons en contact</b>
              </Card.Title>
              <Card.Text className="mt-5">
                Vous avez des questions sur les cours, les tarifs ou la réservation ? N'hésitez pas à me contacter, je serai ravie de vous répondre et vous aider à choisir la formule qui vous convient le mieux.
              </Card.Text>
              <ListGroup variant="flush" className="mt-5">
                <ListGroup.Item>contact@company.com</ListGroup.Item>
                <ListGroup.Item>00.00.00.00</ListGroup.Item>
                <ListGroup.Item>1 rue du quelque part au Mans, 72000 Le Mans</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={12}
          md={6}
          className="mb-4 d-flex align-items-center justify-content-center"
        >
          <Card>
            <Form className="contactform">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="McGarden" className="formtext" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="Léa" className="formtext" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="tel" placeholder="00.00.00.00.00" className="formtext" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email@email.com" className="formtext" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} className="formtext" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mb-3">
                Soumettre
              </Button>

            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
