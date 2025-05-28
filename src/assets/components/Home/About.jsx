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
          <div className="flex flex-wrap items-center justify-center space-x-3">
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600">
              Apa Itu
            </h1>
            <img
              src="/image/siLogin_eKatalog.png"
              alt="SiLogin Tagline"
              className="h-10 w-auto mt-4"
            />
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600">
              ?
            </h1>
          </div>
        </div>
        <p className="text-gray-700 text-lg text-justify md:text-center px-4 md:px-0 py-4 lg:py-0">
          Program Asuransi yang memberikan perlindungan asuransi dengan cepat
          dan mudah bagi Penyedia / Vendor dalam bertransaksi atas pembelian
          barang oleh Pemerintah (Lembaga / Kementerian / Pemerintah Daerah -
          L/K/PD) di e-katalog melalui sistem aplikasi
          <strong className="text-red-600"> SiLogin</strong>.
        </p>

        {/* Konten dengan background */}
        {/* <section
          className="bg-cover bg-center rounded-lg py-0 px-0 md:py-24 md:px-8"
          style={{ backgroundImage: "url(/image/table_bg.png)" }}
        > */}
        <div className="flex flex-col md:flex-row items-center lg:items-start bg-base-100 py-4">
          {/* Image */}
          <div className="flex-shrink-0 p-4 lg:pl-0 md:mr-16 md:ml-10 lg:ml-36">
            <img
              src="/image/laptop.webp"
              alt="SiLogin Tagline"
              className="w-full md:w-60 max-w-md"
            />
          </div>

          {/* Description */}
          <div className="text-gray-700 text-lg leading-relaxed flex-grow px-4 md:px-0 py-4 lg:pt-8">
            <h3 className="text-xl font-semibold text-center md:text-left mb-4 text-gray-800 flex items-center justify-center md:justify-start gap-3">
              Tujuan Asuransi
              <img
                src="/image/siLogin_eKatalog.png"
                alt="SiLogin Tagline"
                className="h-8 w-auto mt-2"
              />
            </h3>

            <ul className="text-gray-600">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-red-600 text-xl mt-1"></i>
                <span>Perlindungan keuangan negara</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-red-600 text-xl mt-1"></i>
                <span>Penjaminan kualitas pengadaan</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-red-600 text-xl mt-1"></i>
                <span>Peningkatan efisiensi sistem</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-red-600 text-xl mt-1"></i>
                <span>Standarisasi perlindungan</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-red-600 text-xl mt-1"></i>
                <span>Optimalisasi e-katalog</span>
              </li>
            </ul>
          </div>
        </div>

        {/* </section> */}
      </div>
    </div>
  );
}

export default About;
