import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleScrollToTop = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            src="/image/siLoginTagline.png"
            alt="Logo"
            className="w-48 h-auto"
          />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left px-8">
          {/* Collaboration Section */}
          <div>
            <h6 className="text-lg font-semibold text-red-500 mb-2">
              BEKERJA SAMA DENGAN
            </h6>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="https://lkpp.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  LKPP (Lembaga Kebijakan Barang/Jasa)
                </a>
              </li>
              <li>
                <a
                  href="https://e-katalog.lkpp.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  E Catalogue
                </a>
              </li>
              <li>
                <a
                  href="https://inaproc.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  INAPROC
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Services */}
          <div className="lg:ml-8">
            <h6 className="text-lg font-semibold text-red-500 mb-2">
              CUSTOMER SERVICES
            </h6>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-red-500">0821 2176 3671</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:ml-16">
            <h6 className="text-lg font-semibold text-red-500 mb-2">LEGAL</h6>
            <ul className="space-y-1 text-sm">
              <li>
                <button
                  onClick={() => handleScrollToTop("/privacy")}
                  className="hover:text-red-500"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToTop("/terms")}
                  className="hover:text-red-500"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToTop("/sitemap")}
                  className="hover:text-red-500"
                >
                  Sitemap
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:ml-8">
            <h6 className="text-lg font-semibold text-red-500 mb-2">
              SOCIAL MEDIA
            </h6>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <i className="fab fa-x-twitter text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="text-red-500">siLogin</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
