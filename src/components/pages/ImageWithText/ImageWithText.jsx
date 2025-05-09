import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";

const ImageWithText = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="py-5">
      <Row className="align-items-stretch">
        {/* Image Section */}
        <Col
          md={6}
          className="d-flex align-items-center p-0"
          data-aos="fade-right"
        >
          <img
            src={`${process.env.PUBLIC_URL}/CATECH LOGO.PNG`} // Updated to use the public folder path
            alt="Catech Solutions and Graphics"
            className="img-fluid w-100 h-100 object-fit-cover rounded-start shadow-lg"
            style={{ maxHeight: "100%" }}
          />
        </Col>

        {/* Text Section */}
        <Col
          md={6}
          className="p-5 text-white d-flex flex-column justify-content-center"
          style={{ backgroundColor: "#017020" }} // Using Catech green for the background
          data-aos="fade-left"
        >
          <h2 className="mb-3">About Catech Solutions & Graphics</h2>
          <p className="mb-3">
            At Catech Solutions and Graphics, we bring creativity and technology together to provide top-notch services in design, system development, IT consultancy, and media production.
          </p>
          <p className="mb-4">
            From branding and digital art to custom systems and multimedia solutions, we are passionate about helping individuals and businesses thrive through innovation.
          </p>
          <button className="btn" style={{ backgroundColor: "#ff9900", borderColor: "#ff9900" }}> {/* Orange button */}
            Learn More
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageWithText;
