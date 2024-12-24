import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/layout/Navbar";
import Footer from "./assets/layout/Footer";
import Home from "./assets/pages/Main/Home";
import Privacy from "./assets/pages/Privacy";
import TermAndCondition from "./assets/pages/TermAndCondition";

function App() {
  return (
    <div className="bg-base-100">
      <Routes>
        {/* Route khusus login tanpa layout */}
        <Route path="/login" />

        {/* Route lainnya dengan layout */}
        <Route
          path="/*"
          element={
            <>
              <div className="max-w-screen-xl mx-auto px-4">
                <Navbar />
              </div>
              <div className="max-w-screen-xl mx-auto px-4">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" />
                  <Route path="/services" />
                  <Route path="/contact" />
                  <Route path="/privacy-policy" element={<Privacy />} />
                  <Route
                    path="/terms-and-conditions"
                    element={<TermAndCondition />}
                  />
                </Routes>
              </div>
              <div className="max-w-screen-xl mx-auto">
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
