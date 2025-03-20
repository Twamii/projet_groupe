import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Tarif() {
  return (
    <Container id="action4">
      <Row className="text-center">
        <h2 >
          <b>Tarification</b>
        </h2>
        <p className="py-3">
          Des cours adaptés à votre budget et à vos besoins Mes cours de
          français en ligne sont conçus pour s’adapter à votre rythme et à vos
          objectifs. Que vous souhaitiez progresser à votre propre vitesse ou
          bénéficier d’un accompagnement personnalisé.
        </p>
        <Col xs={12} sm={12} md={4} className="text-center">
          <Card className="moneyboard border-3 mt-3 colorcard">
            <Card.Body>
              <Card.Title>Cours à l'unité</Card.Title>
              <Card.Subtitle className="mb-2 py-3 prix">
                <span className=" fw-bold prix">Prix : 25€</span>
                <br />
                /cours
              </Card.Subtitle>
              <Card.Text>
                La réservation inclus un cours particulier de 60 minutes ainsi
                que des corrections et retours personnalisés
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item className="disabled">
                  Dapibus ac facilisis in
                </ListGroup.Item>
                <ListGroup.Item className="disabled">
                  Vestibulum at eros
                </ListGroup.Item>
              </ListGroup>
              <Button className="py-2 mt-4">Réserver</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4} className="text-center ms-auto">
          <Card className="moneyboard border-3 mt-3 colorcard">
            <Card.Body>
              <Card.Title>Forfait 5 leçons</Card.Title>
              <Card.Subtitle className="mb-2 prix py-3">
                <span className=" fw-bold prix">Prix : 110€</span>
                <br />
                /forfaits
              </Card.Subtitle>
              <Card.Text>
                La réservation inclus un cours particulier de 60 minutes ainsi
                que des corrections et retours personnalisés
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className="disabled">
                  Vestibulum at eros
                </ListGroup.Item>
              </ListGroup>
              <Button className="py-2 mt-4">Réserver</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4} className="text-center ms-auto">
          <Card className="moneyboard border-3 mt-3 colorcard">
            <Card.Body>
              <Card.Title>Forfait 10 leçons</Card.Title>
              <Card.Subtitle className="mb-2 prix py-3">
                <span className=" fw-bold prix">Prix : 110€</span>
                <br />
                /forfaits
              </Card.Subtitle>
              <Card.Text>
                La réservation inclus un cours particulier de 60 minutes ainsi
                que des corrections et retours personnalisés
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Button className="py-2 mt-4">Réserver</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Tarif;
