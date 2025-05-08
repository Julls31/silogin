import React from "react";

function Policy() {
  return (
    <div className="container mx-auto lg:px-4">
      <div className="lg:p-8 pt-4 rounded-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 mt-2">
            Kebijakan Produk Asuransi
          </h1>
        </div>
        <p className="text-lg leading-relaxed text-center px-4 md:px-0 py-4 lg:py-0">
          Kode seleksi KBKI 2015 Barang yang dapat dijamin dalam program
          Asuransi <span className="font-semibold text-red-600">SiLogin</span> saat ini meliputi:
        </p>

        {/* Konten */}
        <div className="flex flex-col md:flex-row items-center bg-base-100 py-4">
          {/* Image */}
          <div className="flex-shrink-0 p-4 lg:pr-8 mb-4 md:mb-0 md:ml-16 md:mr-16">
            <img
              src="/image/kebijakan.png"
              alt="SiLogin Tagline"
              className="w-48 max-w-md mx-auto -scale-x-100"
            />
          </div>

          {/* Description */}
          <div className="flex-grow text-gray-700 leading-relaxed text-justify px-4 md:px-0 py-4 lg:py-2 md:mr-6 lg:mr-0">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
              <div>
                <h3 className="text-xl font-semibold text-red-600 text-center md:text-left">
                  Seksi 2
                </h3>
                <p className="text-center md:text-left">
                  Produk makanan, minuman & tembakau; tekstil, pakaian & produk kulit
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600 text-center md:text-left">
                  Seksi 3
                </h3>
                <p className="text-center md:text-left">
                  Barang lainnya yang dapat diangkut, kecuali produk logam, mesin dan perlengkapannya
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600 text-center md:text-left">
                  Seksi 4
                </h3>
                <p className="text-center md:text-left">
                  Produk logam, mesin dan perlengkapannya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;
