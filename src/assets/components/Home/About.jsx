import React from "react";

function About() {
  return (
    <div className="container mx-auto lg:px-4">
      <div className="lg:p-8 pt-4 rounded-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-gray-500 uppercase mb-8 tracking-wide">
            About Us
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
            <div className="text-gray-700 text-lg leading-relaxed text-justify px-4 md:px-0">
              <p>
                Hadirnya sistem eCatalogue dan ePurchasing platform digital
                memudahkan pengadaan barang dan jasa oleh pemerintah Indonesia.
              </p>
              <p className="mt-4">
                Produk siLogin memberikan solusi asuransi komprehensif dan mudah
                diakses bagi Kementerian, Lembaga Pemerintah, dan Supplier.
              </p>
              <p className="mt-4">
                Layanan asuransi digital ini melindungi konsumen dari risiko
                pembelian produk, pengiriman, dan tanggung jawab produk. siLogin
                juga menyediakan layanan 24/7 untuk penutupan asuransi,
                pembayaran premi, pengajuan klaim, dan alarm center.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
