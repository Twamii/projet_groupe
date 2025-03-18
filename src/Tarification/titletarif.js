import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Titletarif() {
  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <h1>
            <b>Tarification</b>
          </h1>
          <p className="py-3">
            Des cours adaptés à votre budget et à vos besoins Mes cours de
            français en ligne sont conçus pour s’adapter à votre rythme et à vos
            objectifs. Que vous souhaitiez progresser à votre propre vitesse ou
            bénéficier d’un accompagnement personnalisé.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Titletarif;
