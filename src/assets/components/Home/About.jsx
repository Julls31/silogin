import React from "react";

function About() {
  return (
    <div className="container mx-auto lg:px-4">
      <div className="lg:p-8 pt-4 rounded-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-gray-500 uppercase mb-8 tracking-wide">
            Tentang
          </h2>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600">
            Apa Itu <span className="text-red-600">SILOGIN</span> ?
          </h1>
        </div>

        {/* Konten dengan background */}
        <section
          className="bg-cover bg-center rounded-lg py-0 px-0 md:py-24 md:px-8"
          style={{ backgroundImage: "url(/image/table_bg.png)" }}
        >
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-base-200">
            {/* Image */}
            <div className="text-center">
              <img
                src="/image/siLoginTagline.png"
                alt="SiLogin Tagline"
                className="w-full max-w-md mx-auto px-4 lg:px-0"
              />
            </div>

            {/* Description */}
            <div className="text-gray-700 text-lg leading-relaxed text-justify px-4 md:px-0 py-4 lg:py-0">
              <p>
              Program Asuransi yang memberikan perlindungan asuransi dengan
                cepat dan mudah bagi Penyedia / Vendor dalam bertransaksi atas
                pembelian barang oleh Pemerintah (Lembaga / Kementerian /
                Pemerintah Daerah - LKPD) di e-catalogue melalui sistem aplikasi
                <strong className="text-red-600"> SiLogin</strong>.
              </p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Tujuan Asuransi SILOGIN:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Perlindungan keuangan negara</li>
                  <li>Penjaminan kualitas pengadaan</li>
                  <li>Peningkatan efisiensi sistem</li>
                  <li>Standarisasi perlindungan</li>
                  <li>Optimalisasi e-catalogue</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
