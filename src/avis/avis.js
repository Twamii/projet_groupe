import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const avisClients = [
  {
    id: 1,
    nom: "Alice Dupont",
    avis: "Super produit ! Très satisfait de mon achat. Je recommande vivement.",
    note: 5,
    date: "2025-03-18",
  },
  {
    id: 2,
    nom: "Bob Martin",
    avis: "Le produit est bon, mais la livraison a pris un peu plus de temps que prévu.",
    note: 3,
    date: "2025-03-17",
  },
  {
    id: 3,
    nom: "Claire Bernard",
    avis: "Pas du tout ce à quoi je m'attendais. Très déçue par la qualité.",
    note: 1,
    date: "2025-03-16",
  },
  {
    id: 4,
    nom: "David Lefevre",
    avis: "Bon rapport qualité/prix. Rien à redire.",
    note: 4,
    date: "2025-03-15",
  },
  {
    id: 5,
    nom: "Eva Petit",
    avis: "Très bon service client, et produit conforme à la description.",
    note: 5,
    date: "2025-03-14",
  },
];

function Avis() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container id="avis">
      <Row>
        <Col className="text-center py-5">
          <h2><b>Les Avis</b></h2>
          <p className="py-3">
            Découvrez ce que mes apprenants pensent de mes cours ! ⭐ Grâce à
            leurs témoignages, plongez dans leur expérience et voyez comment mes
            cours les ont aidés à progresser en français. Leur motivation
            et leurs réussites sont ma plus belle récompense ! 💬✨
          </p>
          <Slider {...settings} className="py-3">
            {avisClients.map((avis) => (
              <div key={avis.id} className="avis-slide">
                <h3>{avis.nom}</h3>
                <p>{avis.avis}</p>
                <div>
                  <strong>Note: </strong>
                  {avis.note} / 5
                </div>
                <div className="date">
                  <em>{avis.date}</em>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
}

export default Avis;
