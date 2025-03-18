import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image1 from "../images/image1.png";
import Image2 from "../images/image2.png";
import Image3 from "../images/image3.png";
import Image4 from "../images/image4.png";

function Testimoney() {
  return (
    <Container className="text-center py-5">
      <h1 className="py-5">
        <b>Nos Avis</b>
      </h1>
      <p>
        Découvrez ce que mes apprenants pensent de mes cours ! ⭐ Grâce à leurs
        témoignages, plongez dans leur expérience et voyez comment nos
        formations les ont aidés à progresser en français. Leur motivation et
        leurs réussites sont notre plus belle récompense ! 💬✨
      </p>
      <Row>
        <Col
          sm={12}
          md={4}
          lg={3}
          className="mb-4 d-flex align-items-center justify-content-center"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image1} />
            <Card.Body>
              <Card.Title className="fw-bold">Jane Burden</Card.Title>
              <Card.Text>
                J'adore les cours d'Elinah ! Ils sont instructifs et m'ont
                redonné confiance en moi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          sm={12}
          md={4}
          lg={3}
          className="mb-4 d-flex align-items-center justify-content-center"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title className="fw-bold">Theo BootStrap</Card.Title>
              <Card.Text>
                J'adore les cours d'Elinah ! Ils sont instructifs et m'ont
                redonné confiance en moi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          sm={12}
          md={4}
          lg={3}
          className="mb-4 d-flex align-items-center justify-content-center"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image3} />
            <Card.Body>
              <Card.Title className="fw-bold">Mélina CatWarrior</Card.Title>
              <Card.Text>
                J'adore les cours d'Elinah ! Ils sont instructifs et m'ont
                redonné confiance en moi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          sm={12}
          md={4}
          lg={3}
          className="mb-4 d-flex align-items-center justify-content-center"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image4} />
            <Card.Body>
              <Card.Title className="fw-bold">Alicia Cintre</Card.Title>
              <Card.Text>
                J'adore les cours d'Elinah ! Ils sont instructifs et m'ont
                redonné confiance en moi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimoney;
