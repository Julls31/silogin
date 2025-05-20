// src/assets/layout/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* Navbar (Static, No Animation) */}
      <div className="max-w-screen-xl mx-auto px-4">
        <Navbar />
      </div>

      {/* Page Content (Animated) */}
      <main className="mx-auto py-8">
        <Outlet />
      </main>

      {/* Footer (Static, No Animation) */}
      <div className="bg-base-200">
        <div className="max-w-screen-xl mx-auto px-4">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
