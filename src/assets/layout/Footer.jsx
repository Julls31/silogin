import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <footer className="text-base-content py-10">
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center md:text-left px-8">
          {/* Collaboration Section */}
          <div>
            <h6 className="font-semibold text-red-500">BEKERJASAMA DENGAN</h6>
            <div className="flex flex-wrap justify-center md:justify-start">
              <a
                href="https://lkpp.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/image/lkpp.png"
                  alt="LKPP"
                  className="h-14 object-contain lg:-ml-2"
                />
              </a>
              <a
                href="https://katalog.inaproc.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/image/inaproc.png"
                  alt="INAPROC"
                  className="h-8 object-contain mt-3 lg:mt-0"
                />
              </a>
            </div>
          </div>

          {/* Help Section */}
          <div className="lg:ml-16">
            <h6 className="font-semibold text-red-500 mb-2">PANDUAN</h6>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/panduan-pembeli">
                  <button className="hover:text-red-500">
                    Panduan Pembeli
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/panduan-penyedia">
                  <button className="hover:text-red-500">
                    Panduan Penyedia
                  </button>
                </Link>
              </li>
              <li>
                <button className="hover:text-red-500">FAQ Pembeli</button>
              </li>
              <li>
                <button className="hover:text-red-500">FAQ Penyedia</button>
              </li>
            </ul>
          </div>

          {/* Customer Services */}
          <div className="lg:ml-8 text-center lg:text-left">
            <h6 className="font-semibold text-red-500 mb-2">CUSTOMER CARE</h6>
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
            <h6 className="font-semibold text-red-500 mb-2">KETENTUAN HUKUM</h6>
            <ul className="space-y-1 text-sm">
              <li>
                <button
                  onClick={() => handleScrollToTop("/syarat-ketentuan")}
                  className="hover:text-red-500"
                >
                  Syarat & Ketentuan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToTop("/kebijakan-privasi")}
                  className="hover:text-red-500"
                >
                  Kebijakan Privasi
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:ml-8">
            <h6 className="font-semibold text-red-500 mb-2">IKUTI KAMI</h6>
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

        {/* Konsorsium Section */}
        <h6 className="flex justify-center font-semibold text-red-500 mb-2 mt-8 uppercase text-center">
          Konsorsium Pialang Asuransi Program Asuransi Silogin
        </h6>
        <div className="flex flex-wrap justify-center gap-6 items-center mb-8">
          <a
            href="https://grm-risk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/image/grm.png"
              alt="GRM"
              className="h-14 md:h-20 object-contain"
            />
          </a>
          <a
            href="https://www.kokonutbrokers.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/image/kokonut.png"
              alt="Kokonut"
              className="h-14 md:h-20 object-contain"
            />
          </a>
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
