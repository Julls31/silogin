import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleScrollToTop = (path) => {
    // Navigasi ke rute yang sesuai
    navigate(path);

    // Animasi scroll ke atas
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="container mx-auto px-4">
        {/* Centered Logo and Social Media */}
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div>
            <img src="/image/siLoginTagline.png" alt="Logo" className="w-48 h-auto" />
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h6 className="text-lg font-bold mb-4">Follow Us</h6>
            <div className="flex justify-center space-x-6 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition duration-200"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition duration-200"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition duration-200"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition duration-200"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Legal Links and Copyright */}
        <div className="border-t border-gray-300 pt-4 mt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} siLogin. All rights reserved.
          </p>
          <nav className="mt-2 space-x-4">
            <button
              onClick={() => handleScrollToTop("/terms-and-conditions")}
              className="text-gray-500 hover:text-red-500 focus:outline-none"
            >
              Terms & Conditions
            </button>
            <span className="text-gray-500">•</span>
            <button
              onClick={() => handleScrollToTop("/privacy-policy")}
              className="text-gray-500 hover:text-red-500 focus:outline-none"
            >
              Privacy Policy
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
