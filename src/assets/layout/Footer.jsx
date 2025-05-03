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
            <h6 className="text-lg font-semibold text-red-500">
              BEKERJA SAMA DENGAN
            </h6>
            <ul className="text-sm">
              <li>
                <a
                  href="https://lkpp.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/image/lkpp.png"
                    alt="LKPP"
                    className="h-16 lg:-ml-2 object-contain"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://katalog.inaproc.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/image/inaproc.png"
                    alt="INAPROC"
                    className="h-8 object-contain"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Services */}
          <div className="lg:ml-8 text-center lg:text-left">
            <h6 className="text-lg font-semibold text-red-500 mb-2">
              CUSTOMER CARE
            </h6>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-center lg:justify-start items-center gap-2 hover:text-red-500">
                <i className="fas fa-phone-alt text-gray-700"></i>
                0821 2176 3671
              </li>
              <li className="flex justify-center lg:justify-start items-center gap-2 hover:text-red-500">
                <i className="fab fa-whatsapp text-gray-700"></i>
                0821 2176 3671
              </li>
              <li className="flex justify-center lg:justify-start items-center gap-2 hover:text-red-500">
                <i className="fas fa-envelope text-gray-700"></i>
                info@silogin.id
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:ml-16">
            <h6 className="text-lg font-semibold text-red-500 mb-2">KETENTUAN HUKUM</h6>
            <ul className="space-y-1 text-sm">
              <li>
                <button
                  onClick={() => handleScrollToTop("/privacy-policy")}
                  className="hover:text-red-500"
                >
                  Kebijakan Privasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToTop("/terms-and-conditions")}
                  className="hover:text-red-500"
                >
                  Syarat & Ketentuan
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => handleScrollToTop("/sitemap")}
                  className="hover:text-red-500"
                >
                  Sitemap
                </button>
              </li> */}
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
            © {new Date().getFullYear()}{" "}
            <span className="text-red-500">siLogin</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
