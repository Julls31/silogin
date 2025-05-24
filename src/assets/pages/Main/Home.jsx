import React, { useEffect } from "react";
import Intro from "../../components/Home/Intro";
import About from "../../components/Home/About";
import Services from "../../components/Home/Services";
import Contact from "../../components/Home/Contact";
import { Link, useLocation } from "react-router-dom";
import Product from "../../components/Home/Product";
import Policy from "../../components/Home/Policy";
import Polis from "../../components/Home/Polis";

const NAVBAR_HEIGHT = 60;

function Home() {

  const location = useLocation();

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  useEffect(() => {
    if (location.state?.scrollToSection) {
      const id = location.state.scrollToSection;
      const scrollToSection = () => {
        const section = document.getElementById(id);
        if (section) {
          const yOffset = -NAVBAR_HEIGHT;
          const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };

      // Tunggu sampai transition Framer Motion selesai (estimasi 300ms)
      const timeout = setTimeout(scrollToSection, 100);

      return () => clearTimeout(timeout);
    }
  }, [location.state]);
  
  return (
    <>
      {/* Intro Full Width */}
      <div id="home" className="">
        <Intro />
      </div>

      {/* About */}
      <div id="about" className="bg-base-100">
        <div className="max-w-screen-lg mx-auto px-4 my-10">
          <About />
        </div>
      </div>

      {/* Product */}
      <div id="product" className="bg-base-100">
        <div className="max-w-screen-xl mx-auto px-4 my-10">
          <Product />
        </div>
      </div>

      {/* Policy */}
      <div className="bg-base-100">
        <div className="max-w-screen-lg mx-auto px-4">
          <Policy />
        </div>
      </div>

      {/* Services */}
      <div id="services" className="bg-base-100">
        <div className="max-w-screen-xl mx-auto px-4 my-10">
          <Services />
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="bg-base-100">
        <div className="max-w-screen-xl mx-auto px-4 my-10">
          <Contact />
        </div>
      </div>

      {/* Polis */}
      <div className="bg-base-100">
        <div className="max-w-screen-lg mx-auto px-4 my-10">
          <Polis />
        </div>
      </div>

      {/* Floating Button */}
      <Link to="/kalkulatorpremi">
        <button className="fixed bottom-16 right-4 z-50 btn btn-sm btn-outline btn-primary">
          <span className="hidden sm:inline">Kalkulator Premi</span>
          <i className="fa fa-calculator sm:hidden"></i>
        </button>
      </Link>
    </>
  );
}

export default Home;
