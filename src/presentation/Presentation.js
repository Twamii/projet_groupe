import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MaPresentation from "../images/presentation.png";
import Image from "react-bootstrap/Image";

function Presentations() {
  return (
    <Container className="py-5" id="action2">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className="text-center ms-auto">
          <h2>
            <b>Elinah Dubois</b>
          </h2>
          <p className="py-3">
            Passionnée par l'enseignement du français, je mets mon
            expertise et mon enthousiasme au service de mes élèves. Grâce à une
            approche bienveillante et interactive, j'accompagne chaque
            apprenant vers une progression efficace et durable.
          </p>
          <h2>
            <b>Philosophie d'enseignement</b>
          </h2>
          <p className="py-3">
            Progressez en français depuis chez vous avec des cours interactifs
            et adaptés à votre niveau ! Que vous soyez débutant ou avancé,
            bénéficiez d'un apprentissage dynamique et efficace avec une
            professeure expérimentée !
          </p>
          <div className="d-flex justify-content-center flex-wrap">
            <div className="cercle rounded-circle d-flex align-items-center justify-content-center">
              Bienveillance
            </div>
            <div className="cercle rounded-circle d-flex align-items-center justify-content-center">
              Pédagogie
            </div>
            <div className="cercle rounded-circle d-flex align-items-center justify-content-center">
              Patience
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={3}
          lg={3}
          className="text-center order-lg-first ms-auto"
        >
          <Image
            src={MaPresentation}
            fluid
            style={{ width: "400px", height: "auto" }}
            className="py-3"
          />
          <h2 className="py-3">
            <b>Mes diplômes</b>
          </h2>
          <p>
            Master en Didactique du Français Langue Étrangère (FLE) CAPES de
            Lettres Modernes DAEFLE (Diplôme d'Aptitude à l'Enseignement du FLE)
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Presentations;
