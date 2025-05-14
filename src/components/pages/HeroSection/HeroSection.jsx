import React, { useEffect } from "react";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,  Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-router-dom";

// Images
import coverPremier from "../../image/BannerWithIzzoh.webp";
import broiler from "../../image/bannerWithPhone2.webp";
import layer from "../../image/webBanner6.webp";
import cover3 from "../../image/bannerWithPhone9.webp";
import cover4 from "../../image/bannerWith👍.webp";
import eggs from "../../image/webBannerG.webp";
import two from "../../image/banner👍4.webp";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const slides = [
    coverPremier,
    two,
    eggs,
    cover3,
    cover4,
    broiler,
    layer,
  ];

  return (
    <div>
      <Carousel
        controls={false}
        indicators={true}
        interval={4500}
        pause={false}
        slide={true}
      >
        {slides.map((image, idx) => (
          <Carousel.Item key={idx} className="carousel-item">
            {/* 👇 image obeys fixed size */}
            <img src={image} alt={`Slide ${idx}`} />

            <div className="overlay"></div>

            <Container data-aos="fade-up" className="text-center">
              <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center">
                {/* <Button
                  as={Link}
                  to="/shop"
                  
                  className="hero-btn"
                >
                 HIRE US! Today!
                </Button> */}
              </div>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
