import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container } from "react-bootstrap";
import kush from "../../image/kush.webp";
import itech from "../../image/iTech.webp";
import zeddie from "../../image/ZEDEKIAH ELECTRONIC.webp";

import "./OurPartners.css"; // Link the CSS

const OurPartners = () => {
  return (
    <Container fluid className="partners-container my-5">
      <h2 className="partners-heading">Our Partners</h2>
      <Carousel indicators={false} controls={false} interval={2000} pause={false}>
        <Carousel.Item>
          <div className="partner-item">
            <img src={itech} alt="Itech logo" className="partner-img" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="partner-item">
            <img src={kush} alt="kush data" className="partner-img" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="partner-item">
            <img src={zeddie} alt="ZEDEKIAH ELECTRONIC" className="partner-img" />
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default OurPartners;
