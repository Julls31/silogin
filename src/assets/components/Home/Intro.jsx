import React from "react";

function Intro() {
  return (
    <section className="container mx-auto pt-12 px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Gambar Kiri */}
        <div className="w-full lg:w-1/3">
          <img
            src="/image/women_silogin.png"
            alt="women with silogin"
            className="w-2/3 mx-auto lg:w-full object-contain"
          />
        </div>

        {/* Konten Tengah */}
        <div className="w-full lg:w-[40%] text-center lg:-mt-24 space-y-6">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Program Asuransi <span className="text-red-600">SiLogin</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-base leading-relaxed">
            Program Asuransi yang memberikan perlindungan asuransi dengan cepat
            dan mudah bagi Penyedia / Vendor dalam bertransaksi atas pembelian
            barang oleh Pemerintah (Lembaga / Kementerian / Pemerintah Daerah -
            LKPD) di e catalogue melalui sistem aplikasi SiLogin
          </p>
          {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn btn-primary rounded-3xl w-full sm:w-auto">
              <i className="fa fa-arrow-right" /> Get Started
            </button>
            <button className="btn btn-outline rounded-3xl border-[#DB1F26] text-[#DB1F26] hover:text-[#DB1F26] hover:bg-[#f0f4f7] hover:border-[#DB1F26] w-full sm:w-auto">
              <i className="fa-regular fa-circle-play text-lg" /> View Demo
            </button>
          </div> */}
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
