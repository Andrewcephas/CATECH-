import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.css";

import one from "../../image/1.jpeg";
import two from "../../image/2.jpeg";
import three from "../../image/3.jpeg";
import four from "../../image/4.jpeg";
import five from "../../image/5.jpeg";
import six from "../../image/6.jpeg";
import seven from "../../image/7.jpeg";
import eight from "../../image/8.jpeg";
import nine from "../../image/9.jpeg";
import ten from "../../image/10.jpeg";

const images = [one, two, three, four, five, six, seven, eight, nine, ten];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="gallery-section py-5">
      <Container>
        <h2 className="text-center mb-5 catech-heading">Our Gallery</h2>
        <Row>
          {images.map((src, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={3}
              className="mb-4 d-flex justify-content-center"
              data-aos="zoom-in"
            >
              <div className="gallery-img-wrapper">
                <img src={src} alt={`Gallery ${index + 1}`} className="img-fluid rounded shadow" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
