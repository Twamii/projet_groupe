import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Calendar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container className="text-center">
      <Row>
        <h2><b>Réservez un cours</b></h2>
        <Col>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/tory-esch0/30min?primary_color=ffd900"
            style={{ minWidth: '320px', height: '700px' }} 
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Calendar;
