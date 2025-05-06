import React from "react";

function TermsAndConditions() {
  return (
    <>
      <div className="bg-base-100 mx-auto max-w-screen-xl min-h-screen px-4 lg:py-8">
        <h3 className="font-bold text-lg text-red-500 mb-4">
          Syarat dan Ketentuan Program Asuransi SiLogin
        </h3>
        <div className=" space-y-2 overflow-y-auto ">
          <p>
            Dalam rangka meningkatkan transparansi, keamanan, dan kenyamanan
            transaksi antara Penyedia/Vendor dan Pengguna
            (Lembaga/Kementerian/Perangkat Daerah - L/K/PD) melalui platform
            SiLogin, Program asuransi SiLogin merupakan pilihan yang dikelola
            oleh konsorsium pialang asuransi SiLogin
          </p>

          <h4 className="font-semibold mt-3">1. Ketentuan Umum</h4>
          <ul className="list-disc ml-6">
            <li>
              Setiap Penyedia/Vendor dan Pengguna (L/K/PD) diwajibkan untuk
              membaca dan memahami seluruh isi Syarat dan Ketentuan melalui
              website SiLogin.
            </li>
            <li>
              Persetujuan terhadap Syarat dan Ketentuan ini merupakan
              kesepakatan dan merupakan perjanjian yang sah antara
              Penyedia/Vendor dan Pengguna (L/K/PD)
            </li>
          </ul>

          <h4 className="font-semibold mt-3">2. Isi Syarat dan Ketentuan</h4>
          <ul className="list-[lower-alpha] ml-6">
            <li>
              Penyedia/Vendor dapat memberikan jaminan asuransi atas barang yang
              ditawarkan kepada Pengguna dengan menggunakan layanan konsorsium
              SiLogin.
            </li>
            <li>
              Penyedia/Vendor bertanggung jawab membayar premi asuransi atas
              barang yang ditawarkan.
            </li>

            <li>
              Pengguna (L/K/PD) wajib memastikan bahwa barang yang diterima
              telah disertai bukti jaminan asuransi.
            </li>
          </ul>

          <h4 className="font-semibold mt-3">3. Pernyataan Persetujuan</h4>
          <p>
            Dengan ini saya menyatakan telah membaca, memahami, dan menyetujui
            seluruh ketentuan transaksi dalam SiLogin serta berkomitmen untuk
            mematuhi seluruh ketentuan yang berlaku.
          </p>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
