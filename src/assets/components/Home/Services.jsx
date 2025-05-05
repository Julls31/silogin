import React from "react";

function Services() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-base-100 lg:p-8 pt-8 rounded-lg">
          <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-gray-500 uppercase mb-8 tracking-wide">
            layanan
          </h2>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 mt-2">
            Layanan Yang Ada Pada <span className="text-red-600">SILOGIN</span>
          </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 3 */}
            <div className="p-6 border rounded-lg bg-white flex flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-700">
                  KEMUDAHAN <span className="text-red-600">PEMBELIAN</span>
                </h3>
                <p className="text-gray-600 mt-4 w-[90%]">
                  Jenis asuransi yang menawarkan perlindungan finansial kepada
                  konsumen atas kerugian atau kerusakan pada barang atau jasa
                  yang dibeli.
                </p>
              </div>
              <img
                src="/image/kemudahan-pembelian.png"
                alt="Asuransi Garansi"
                className="h-40 -mr-6 hidden lg:block"
              />
            </div>

            {/* Card 4 */}
            <div className="p-6 border rounded-lg bg-white flex flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-700">
                  KEMUDAHAN <span className="text-red-600">KLAIM</span>
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
        
      </div>
    </div>
  );
}

export default Services;
