import React from "react";
import Intro from "../../components/Home/Intro";
import About from "../../components/Home/About";
import Services from "../../components/Home/Services";
import Contact from "../../components/Home/Contact";
import FAQ from "../../components/Home/FAQ";
import { Link } from "react-router-dom";
import Product from "../../components/Home/Product";
import Policy from "../../components/Home/Policy";
import Polis from "../../components/Home/Polis";

function Home() {
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
