import React from "react";

function Services() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-base-100 lg:p-8 pt-8 rounded-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-gray-500 uppercase mb-8 tracking-wide">
            layanan
          </h2>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 mt-2">
            Jenis Produk Asuransi <span className="text-red-600">SILOGIN</span>
          </h1>
        </div>

        {/* Content Section with Background */}
        <section
          className="bg-cover bg-center rounded-lg py-0 px-0 md:py-24 md:px-8"
          style={{ backgroundImage: "url(/image/table_bg.png)" }}
        >
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-6 border rounded-lg bg-white flex flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-700">
                  ASURANSI <span className="text-red-600">PENGIRIMAN</span>
                </h3>
                <p className="text-gray-600 mt-4">
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
                <h3 className="text-lg font-semibold text-gray-700">
                  ASURANSI{" "}
                  <span className="text-red-600">
                  MOVEABLE PROPERTY ALL RISKS (MPAR)
                  </span>
                </h3>
                <p className="text-gray-600 mt-4 w-[90%]">
                  Asuransi ini menjamin kerusakan atau kehilangan terhadap
                  barang yang dipertanggungkan selama masa pertanggungan
                  asuransi atas semua risiko, kecuali yang dikecualikan dalam
                  polis asuransi.
                </p>
              </div>
              <img
                src="/image/barang.png"
                alt="Asuransi Barang"
                className="w-28 h-auto hidden lg:block"
              />
            </div>

            {/* Card 3 */}
            <div className="p-6 border rounded-lg bg-white flex flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-700">
                  ASURANSI <span className="text-red-600">GARANSI</span>
                </h3>
                <p className="text-gray-600 mt-4 w-[90%]">
                  Jenis asuransi yang menawarkan perlindungan finansial kepada
                  konsumen atas kerugian atau kerusakan pada barang atau jasa
                  yang dibeli.
                </p>
              </div>
              <img
                src="/image/garansi.png"
                alt="Asuransi Garansi"
                className="h-40 -mr-6 hidden lg:block"
              />
            </div>

            {/* Card 4 */}
            <div className="p-6 border rounded-lg bg-white flex flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-700">
                  KEMUDAHAN <span className="text-red-600">PELAYANAN</span>
                </h3>
                <p className="text-gray-600 mt-4">
                  Proses pengajuan klaim asuransi yang mudah, cepat dan efisien,
                  menggunakan SILOGIN.
                </p>
              </div>
              <img
                src="/image/klaim.png"
                alt="Kemudahan Klaim"
                className="h-40 -mr-6 hidden lg:block"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
