import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MonAccueil from "../images/accueil.jpg";
import Image from 'react-bootstrap/Image';

function ResponsiveExample() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className="py-3 text-center">
          <h1 id="action1"><b>Apprenez le français en ligne, facilement et efficacement</b></h1>
          <p className="py-3">
            Progressez en français depuis chez vous avec des cours interactifs
            et adaptés à votre niveau ! Que vous soyez débutant ou avancé,
            bénéficiez d'un apprentissage dynamique et efficace avec une
            professeure expérimentée !
          </p>
          <div className="a text-center">
            <button className="b mx-auto me-4">Réserve un cours !</button>
            <button className="b mx-auto"><a href="#action6">Contactez-moi !</a></button>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
        <Image src={MonAccueil} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveExample;
