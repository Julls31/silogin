import React from "react";

function Services() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-base-100 lg:p-8 pt-8 rounded-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-gray-500 uppercase mb-8 tracking-wide">
            our services
          </h2>
          <h1 className="text-3xl font-semibold text-gray-600 mt-2">
            Jenis Layanan Yang Ada Pada{" "}
            <span className="text-red-600">SILOGIN</span>
          </h1>
        </div>

        {/* Content Section with Background */}
        <section
          className="py-12 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url(/image/table_bg.png)", paddingTop: "6rem", paddingBottom: "6rem", paddingLeft:"2rem", paddingRight:"2rem" }}
        >
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-6 border rounded-lg bg-white flex flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700">
                  ASURANSI <span className="text-red-600">KARGO</span>
                </h3>
                <p className="text-gray-600 text-sm mt-4">
                  Jenis asuransi yang dirancang untuk melindungi pengirim dan/atau
                  penerima barang dari risiko kerugian atau kerusakan pada barang
                  yang dikirim.
                </p>
              </div>
              <img
                src="/image/kargo.png"
                alt="Asuransi Kargo"
                className="w-auto h-40 -mr-6 hidden md:block"
              />
            </div>

            {/* Card 2 */}
            <div className="p-6 border rounded-lg bg-white flex flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700">
                  ASURANSI <span className="text-red-600">BARANG</span>
                </h3>
                <p className="text-gray-600 text-sm mt-4">
                  Jenis asuransi yang melindungi pemilik barang dari risiko
                  kerugian atau kerusakan pada barang tersebut.
                </p>
              </div>
              <img
                src="/image/barang.png"
                alt="Asuransi Barang"
                className="w-28 h-auto hidden md:block"
              />
            </div>

            {/* Card 3 */}
            <div className="p-6 border rounded-lg bg-white flex flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700">
                  ASURANSI <span className="text-red-600">GARANSI</span>
                </h3>
                <p className="text-gray-600 text-sm mt-4">
                  Jenis asuransi yang menawarkan perlindungan finansial kepada
                  konsumen atas kerugian atau kerusakan pada barang atau jasa yang
                  dibeli.
                </p>
              </div>
              <img
                src="/image/garansi.png"
                alt="Asuransi Garansi"
                className="h-40 -mr-6 hidden md:block"
              />
            </div>

            {/* Card 4 */}
            <div className="p-6 border rounded-lg bg-white flex flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700">
                  KEMUDAHAN <span className="text-red-600">KLAIM</span>
                </h3>
                <p className="text-gray-600 text-sm mt-4">
                  Proses pengajuan klaim asuransi yang mudah, cepat dan efisien,
                  menggunakan SILOGIN.
                </p>
              </div>
              <img
                src="/image/klaim.png"
                alt="Kemudahan Klaim"
                className="h-40 -mr-6 hidden md:block"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
