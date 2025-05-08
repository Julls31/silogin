import React from "react";

function Product() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-base-100 lg:p-8 pt-8 rounded-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-gray-500 uppercase mb-8 tracking-wide">
            produk
          </h2>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 mt-2">
            Jenis Produk Yang Ditawarkan <span className="text-red-600">SILOGIN</span>
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="p-6 border rounded-lg bg-white flex flex-col md:flex-row">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-700 text-center md:text-left">
                ASURANSI <span className="text-red-600">PENGIRIMAN</span>
              </h3>
              <p className="text-gray-600 mt-4 sm:leading-relaxed sm:text-justify leading-normal text-center md:leading-normal md:text-left">
                Asuransi ini menjamin risiko kerusakan atau kehilangan
                terhadap barang selama dalam pengiriman, dari sejak barang itu
                dikirimkan oleh Penyedia / vendor hingga diterima oleh
                Pengguna.
              </p>
            </div>
            <img
              src="/image/kargo.png"
              alt="Asuransi Kargo"
              className="w-auto h-40 -mr-6 hidden lg:block"
            />
          </div>

          {/* Card 2 */}
          <div className="p-6 border rounded-lg bg-white flex flex-col md:flex-row">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-700 text-center md:text-left">
                ASURANSI{" "}
                <span className="text-red-600">
                  MOVEABLE PROPERTY ALL RISKS (MPAR)
                </span>
              </h3>
              <p className="text-gray-600 mt-4 md:w-[90%] sm:leading-relaxed sm:text-justify leading-normal text-center md:leading-normal md:text-left">
                Asuransi ini menjamin kerusakan atau kehilangan terhadap
                barang yang dipertanggungkan selama masa pertanggungan
                asuransi atas semua risiko, kecuali yang dikecualikan dalam
                polis asuransi.
              </p>
            </div>
            <img
              src="/image/garansi.png"
              alt="Asuransi Barang"
              className="w-auto h-44 -mr-6 hidden lg:block"
            />
          </div>
        </div>

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center gap-6 items-center mt-8">
          <img
            src="/image/aswata.png"
            alt="aswata"
            className="h-24 md:h-48 object-contain"
          />
          <img
            src="/image/fpg.png"
            alt="fpg"
            className="h-24 md:h-48 object-contain"
          />
          <img
            src="/image/tripa.png"
            alt="tripa"
            className="h-24 md:h-48 object-contain"
          />
          <img
            src="/image/tugu.png"
            alt="tugu"
            className="h-24 md:h-48 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
