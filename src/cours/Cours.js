import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function Cours() {
  const courses = [
    {
      emoji: "🆕",
      title: "Débutants",
      description:
        "Un cours conçu pour ceux qui commencent de zéro, avec des leçons sur l'alphabet, les salutations, et les bases de la grammaire.",
    },
    {
      emoji: "📖",
      title: "Grammaire",
      description:
        "Un programme détaillé pour maîtriser les règles essentielles, telles que les conjugaisons, les accords et les temps verbaux.",
    },
    {
      emoji: "🗣️",
      title: "Expression orale",
      description:
        "Des exercices interactifs et des mises en situation pour gagner en fluidité et en confiance à l’oral.",
    },
    {
      emoji: "💼",
      title: "Français pro",
      description:
        "Un cours axé sur la communication en milieu professionnel, incluant la rédaction d’emails, la prise de parole en réunion et le vocabulaire spécifique.",
    },
    {
      emoji: "✍️",
      title: "Atelier d’écriture",
      description:
        "Un cours pour améliorer son style et enrichir son vocabulaire en travaillant sur différents types de textes (récits, essais, articles).",
    },
  ];

  return (
    <Container className="py-5" id="cours">
      <Row>
        <Col className="text-center ms-auto">
          <h2 className="titlecours">
            <b>Mais les cours, c'est quoi ?</b>
          </h2>
          <p className="py-3">
            Mon site de cours de français en ligne propose une large gamme de
            formations adaptées à tous les niveaux, du débutant au confirmé. Que
            vous souhaitiez apprendre les bases, améliorer votre grammaire,
            enrichir votre vocabulaire ou perfectionner votre expression orale,
            mes cours interactifs et progressifs vous accompagneront dans votre
            apprentissage.
          </p>
          <ListGroup
            as="ol"
            numbered
            className="text-start cours py-3"
          >
            {courses.map((course, index) => (
              <ListGroup.Item as="li" key={index} className="cours2 py-3 mt-2">
                {course.emoji} <b>{course.title}</b>: {course.description}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Cours;
