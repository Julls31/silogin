import React from "react";
import Slider from "react-slick";

function Intro() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    "/image/slide1.svg",
    "/image/slide2.svg",
    "/image/slide3.svg",
  ];

  return (
    <section className="mx-auto pt-12 px-4 max-w-screen-xl">
      <Slider {...settings}>
        {slides.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`slide-${index + 1}`}
              className="w-full object-contain"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Intro;
