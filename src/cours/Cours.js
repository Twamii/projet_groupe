import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import './Cours.css';

function Cours() {
  return (
    <Container className="py-5">
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="text-center ms-auto"
        >
          <h1 className="titlecours">
            <b>Mais les cours, c'est quoi ?</b>
          </h1>
          <p className="py-3">
            Mon site de cours de français en ligne propose une large gamme de
            formations adaptées à tous les niveaux, du débutant au confirmé. Que
            vous souhaitiez apprendre les bases, améliorer votre grammaire,
            enrichir votre vocabulaire ou perfectionner votre expression orale,
            mes cours interactifs et progressifs vous accompagneront dans votre
            apprentissage.
          </p>
          <ListGroup as="ol" numbered className="text-start cours py-3">
            <ListGroup.Item as="li" className="cours2 py-3">
              🆕 <b>Débutants</b> : Un cours conçu pour ceux qui commencent de
              zéro, avec des leçons sur l'alphabet, les salutations, et les
              bases de la grammaire.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="cours2 py-3 mt-2">
              📖 <b>Grammaire</b> : Un programme détaillé pour maîtriser les
              règles essentielles, telles que les conjugaisons, les accords et
              les temps verbaux.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="cours2 py-3 mt-2">
              🗣️<b>Expression orale</b> : Des exercices interactifs et des mises
              en situation pour gagner en fluidité et en confiance à l’oral.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="cours2 py-3 mt-2">
              💼 <b>Français pro</b> : Un cours axé sur la communication en
              milieu professionnel, incluant la rédaction d’emails, la prise de
              parole en réunion et le vocabulaire spécifique.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="cours2 py-3 mt-2">
              ✍️ <b>Atelier d’écriture</b> : Un cours pour améliorer son style
              et enrichir son vocabulaire en travaillant sur différents types de
              textes (récits, essais, articles).
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Cours;
