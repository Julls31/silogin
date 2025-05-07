import React from "react";
import Slider from "react-slick";
import "./../../../css/intro.css";

function Intro() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
  };

  const desktopSlides = [
    "/image/slider/slider1.jpg",
    "/image/slider/slider2.jpg",
    "/image/slider/slider3.jpg",
  ];

  const mobileSlides = [
    "/image/slider/slider1mobile.jpg",
    "/image/slider/slider2mobile.jpg",
    "/image/slider/slider3mobile.jpg",
  ];

  const slides =
    window.innerWidth <= 768 ? mobileSlides : desktopSlides;

  return (
    <section className="w-full py-8 relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`slide-${index + 1}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Intro;
