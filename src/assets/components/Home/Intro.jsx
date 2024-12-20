import React from "react";

function Intro() {
  return (
    <section className="container mx-auto py-12 px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Gambar Kiri */}
        <div className="hidden lg:block w-1/3">
          <img
            src="/image/women_silogin.png"
            alt="women with silogin"
            className="w-full object-contain"
          />
        </div>

        {/* Konten Tengah */}
        <div className="w-full lg:w-[40%] text-center lg:-mt-24 space-y-6">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Solusi Pendaftaran, Penutupan, Klaim Asuransi
          </h1>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            siLogin memberikan solusi asuransi komprehensif dan mudah
            diakses bagi Kementerian, Lembaga Pemerintah, dan Supplier.
            Melindungi risiko pembelian produk, pengiriman, dan tanggung
            jawab produk.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="btn btn-primary rounded-3xl">
              <i className="fa fa-arrow-right"/> Get Started
            </button>
            <button className="btn btn-outline btn-primary rounded-3xl">
              <i className="fa-regular fa-circle-play text-lg" />View Demo
            </button>
          </div>
        </div>

        {/* Gambar Kanan */}
        <div className="hidden lg:block lg:-mr-16 w-1/3">
          <img
            src="/image/women red 2 1.png"
            alt="women in red holding laptop"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
