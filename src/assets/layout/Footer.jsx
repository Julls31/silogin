import React from "react";

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo */}
          <div className="mb-6">
            <img
              src="/image/logo1.png"
              alt="Logo"
              className="w-32 h-auto"
            />
          </div>

          {/* Social Media */}
           {/* Social Media */}
           <div className="flex flex-col items-center">
            <h6 className="text-lg font-bold mb-4">Follow Us</h6>
            <div className="flex space-x-6 text-2xl">
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
                className="hover:text-blue-400 transition duration-200"
              >
                <i className="fab fa-twitter"></i>
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

          {/* Legal Links */}
          <div className="mb-6">
            <h6 className="text-lg font-bold mb-2">Legal</h6>
            <nav className="flex flex-col space-y-2">
              <a
                href="/terms-and-conditions"
                className="link link-hover"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy-policy"
                className="link link-hover"
              >
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-4 mt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} siLogin All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
