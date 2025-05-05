// src/assets/layout/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4">
        <Navbar />
      </div>
      <main className="max-w-screen-xl mx-auto px-4 py-8">{children}</main>
      <div className="bg-base-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
