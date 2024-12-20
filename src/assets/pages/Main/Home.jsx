import React from "react";
import Intro from "../../components/Home/Intro";
import About from "../../components/Home/About";
import Services from "../../components/Home/Services";

function Home() {
  return (
    <>
      <div className="bg-base-100">
              <div className="max-w-screen-xl mx-auto px-4 my-10">
                  <Intro />
        </div>
      </div>
      <div className="bg-base-200">
        <div className="max-w-screen-lg mx-auto px-4 my-10">
                  <About />
        </div>
        <div className="bg-base-100">
        <div className="max-w-screen-lg mx-auto px-4 my-10">
                  <Services />
          </div>
          </div>
      </div>
    </>
  );
}

export default Home;
