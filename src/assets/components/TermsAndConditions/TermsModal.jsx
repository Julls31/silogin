import React, { useEffect, useState } from "react";

const TermsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("hasSeenTerms");
    const accepted = localStorage.getItem("hasAcceptedTerms") === "true";

    if (!seen || !accepted) {
      setIsOpen(true);
    } else {
      setHasSeen(true);
      setIsChecked(true); // 👈 restore checkbox from storage
    }
  }, []);

  const handleAccept = () => {
    if (!isChecked) return;

    setIsOpen(false);
    localStorage.setItem("hasSeenTerms", "true");
    localStorage.setItem("hasAcceptedTerms", "true");
    setHasSeen(true);
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    localStorage.setItem("hasAcceptedTerms", checked ? "true" : "false");
  };

  const reopenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <dialog id="terms_modal" className="modal modal-open">
          <div className="modal-box max-w-4xl">
            <h3 className="font-bold text-lg text-red-500 mb-4">
              Syarat dan Ketentuan Penggunaan e-Catalogue
            </h3>
            <div className="text-sm space-y-2 overflow-y-auto max-h-[60vh]">
              <p>
                Dalam rangka meningkatkan transparansi, keamanan, dan kenyamanan
                transaksi antara Penyedia/Vendor dan Pengguna
                (Lembaga/Kementerian/Perangkat Daerah - L/K/PD) melalui platform
                e-Catalogue, berikut adalah syarat dan ketentuan yang wajib
                dibaca dan disetujui sebelum melanjutkan penggunaan situs:
              </p>

              <h4 className="font-semibold mt-3">1. Ketentuan Umum</h4>
              <ul className="list-disc ml-6">
                <li>
                  Setiap Penyedia/Vendor dan Pengguna (L/K/PD) diwajibkan untuk
                  membaca dan memahami seluruh isi Syarat dan Ketentuan sebelum
                  melakukan transaksi melalui e-Catalogue.
                </li>
                <li>
                  Persetujuan terhadap Syarat dan Ketentuan dilakukan dengan
                  memberikan tanda centang (checklist) sebagai konfirmasi bahwa
                  yang bersangkutan telah membaca dan memahami seluruh isi
                  ketentuan ini.
                </li>
              </ul>

              <h4 className="font-semibold mt-3">
                2. Isi Syarat dan Ketentuan
              </h4>
              <ul className="list-[lower-alpha] ml-6">
                <li>
                  Pengguna (L/K/PD) hanya dapat membeli barang dari
                  Penyedia/Vendor yang telah terdaftar dalam e-Catalogue dan
                  telah memberikan jaminan asuransi atas barang yang ditawarkan.
                </li>
                <li>
                  Penyedia/Vendor wajib memberikan jaminan asuransi atas setiap
                  barang yang ditawarkan di etalase e-Catalogue, dengan
                  menggunakan layanan konsorsium Asuransi SiLogin. <br />
                  <a href="#" className="text-blue-600 underline">
                    Lihat informasi selengkapnya tentang Asuransi SiLogin
                  </a>
                </li>
                <li>
                  Penyedia/Vendor bertanggung jawab membayar premi asuransi dan
                  wajib menyerahkan e-cover note / e-polis asuransi kepada
                  Pengguna pada saat serah terima barang.
                </li>
                <li>
                  Pengguna (L/K/PD) wajib memastikan bahwa barang yang diterima
                  telah disertai dengan salinan e-cover note / e-polis sebagai
                  bukti jaminan asuransi.
                </li>
              </ul>

              <h4 className="font-semibold mt-3">3. Pernyataan Persetujuan</h4>
              <p>
                Dengan ini saya menyatakan telah membaca, memahami, dan
                menyetujui seluruh ketentuan transaksi dalam e-Catalogue serta
                berkomitmen untuk mematuhi seluruh ketentuan yang berlaku.
              </p>

              <h4 className="font-semibold mt-3">4. Konfirmasi Persetujuan</h4>
              <div className="flex items-start space-x-3 mt-4">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="peer absolute opacity-0 w-4 h-4"
                  />
                  <div className="w-4 h-4 rounded border border-gray-400 flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors">
                    {isChecked && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <label htmlFor="acceptTerms" className="text-sm cursor-pointer">
                  Saya telah membaca dan memahami Syarat dan Ketentuan ini.
                </label>
              </div>
            </div>

            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={handleAccept}
                disabled={!isChecked}
              >
                Setuju dan Lanjutkan
              </button>
            </div>
          </div>
        </dialog>
      )}

      {/* Floating Button */}
      {hasSeen && !isOpen && (
        <button
          onClick={reopenModal}
          className="fixed bottom-4 right-4 z-50 btn btn-sm btn-outline btn-primary"
        >
          {/* Teks untuk desktop */}
          <span className="hidden sm:inline">Syarat & Ketentuan</span>
          {/* Icon untuk mobile/tablet */}
          <i className="fa fa-file-contract sm:hidden"></i>
        </button>
      )}
    </>
  );
};

export default TermsModal;
