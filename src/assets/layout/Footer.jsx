import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [toastMessage, setToastMessage] = useState("");

  const handleScrollToTop = (path, label) => {
    if (currentPath === path) {
      showToast(`Anda sedang di halaman ${label}`);
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  return (
    <footer className="text-base-content py-10 relative text-base md:text-xs lg:text-base">
      {/* Toast notification */}
      {toastMessage && (
        <div className="toast toast-center">
          <div className="alert bg-red-500 text-white">{toastMessage}</div>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/image/siLogin_eKatalog.png" alt="Logo" className="w-48 h-auto" />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center md:text-left px-8">
          {/* BEKERJASAMA */}
          <div>
            <h6 className="font-semibold text-red-500 text-base md:text-xs lg:text-base">BEKERJASAMA DENGAN</h6>
            <div className="flex flex-wrap justify-center md:justify-start">
              <a href="https://lkpp.go.id" target="_blank" rel="noopener noreferrer">
                <img src="/image/lkpp.png" alt="LKPP" className="h-16 lg:h-14 md:h-12 object-contain md:-ml-2" />
              </a>
              <a href="https://katalog.inaproc.id/" target="_blank" rel="noopener noreferrer">
                <img src="/image/inaproc.png" alt="INAPROC" className="h-10 lg:h-8 md:h-6 object-contain mt-3 md:mt-0" />
              </a>
            </div>
          </div>

          {/* PANDUAN */}
          <div className="lg:ml-8">
            <h6 className="font-semibold text-red-500 mb-2 text-base md:text-xs lg:text-base">PANDUAN</h6>
            <ul className="space-y-1 text-base md:text-xs lg:text-base">
              <li>
                <button onClick={() => handleScrollToTop("/panduan-lkpd", "Panduan L/K/PD")} className="hover:text-red-500">
                  Panduan L/K/PD
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToTop("/panduan-penyedia", "Panduan Penyedia")} className="hover:text-red-500">
                  Panduan Penyedia
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToTop("/faq-lkpd", "FAQ L/K/PD")} className="hover:text-red-500">
                  FAQ L/K/PD
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToTop("/faq-penyedia", "FAQ Penyedia")} className="hover:text-red-500">
                  FAQ Penyedia
                </button>
              </li>
            </ul>
          </div>

          {/* CUSTOMER CARE */}
          <div className="lg:ml-8 text-center md:text-left">
            <h6 className="font-semibold text-red-500 mb-2 text-base md:text-xs lg:text-base">CUSTOMER CARE</h6>
            <ul className="space-y-2 text-base md:text-xs lg:text-base text-gray-700">
              <li className="flex justify-center md:justify-start items-center gap-2 hover:text-red-500">
                <i className="fas fa-phone-alt text-gray-700"></i> 0821 2176 3671
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2 hover:text-red-500">
                <i className="fab fa-whatsapp text-gray-700"></i> 0821 2176 3671
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2 hover:text-red-500">
                <i className="fas fa-envelope text-gray-700"></i> customercare@cso.silogin.id
              </li>
            </ul>
          </div>

          {/* KETENTUAN HUKUM */}
          <div className="lg:ml-8">
            <h6 className="font-semibold text-red-500 mb-2 text-base md:text-xs lg:text-base">KETENTUAN HUKUM</h6>
            <ul className="space-y-1 text-base md:text-xs lg:text-base">
              <li>
                <button onClick={() => handleScrollToTop("/syarat-ketentuan", "Syarat & Ketentuan")} className="hover:text-red-500">
                  Syarat & Ketentuan
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToTop("/kebijakan-privasi", "Kebijakan Privasi")} className="hover:text-red-500">
                  Kebijakan Privasi
                </button>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="lg:ml-8">
            <h6 className="font-semibold text-red-500 mb-2 text-base md:text-xs lg:text-base">IKUTI KAMI</h6>
            <div className="flex justify-center md:justify-start space-x-4 md:space-x-2 lg:space-x-4">
              <a href="http://facebook.com/sl.asuransi/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://x.com/siloginofficial" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <i className="fab fa-x-twitter text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/silogin/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://www.youtube.com/@Sistem_SiLogin" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Konsorsium */}
        <h6 className="flex justify-center font-semibold text-red-500 mb-2 mt-8 uppercase text-center text-base md:text-xs lg:text-base">
          Konsorsium Pialang Asuransi Program Asuransi Silogin
        </h6>
        <div className="flex flex-wrap justify-center gap-6 items-center mb-8">
          <a href="https://grm-risk.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="/image/grm.png" alt="GRM" className="h-20 object-contain" />
          </a>
          <a href="https://www.kokonutbrokers.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="/image/kokonut.png" alt="Kokonut" className="h-20 object-contain" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-base md:text-xs lg:text-base text-gray-500">
            © {new Date().getFullYear()} <span className="text-red-500">siLogin</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
