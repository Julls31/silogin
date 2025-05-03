import React from "react";

function TermsAndConditions() {
  return (
    <>
      <div className="bg-base-100 mx-auto max-w-screen-xl min-h-screen px-4 lg:py-8">
      <h3 className="font-bold text-lg text-red-500 mb-4">
              Syarat dan Ketentuan Penggunaan e-Catalogue
            </h3>
            <div className=" space-y-2 overflow-y-auto ">
              <p>
                Dalam rangka meningkatkan transparansi, keamanan, dan kenyamanan
                transaksi antara Penyedia/Vendor dan Pengguna
                (Lembaga/Kementerian/Perangkat Daerah - L/K/PD) melalui platform
                e-Catalogue, berikut adalah syarat dan ketentuan yang wajib
                dibaca dan disetujui sebelum melanjutkan penggunaan situs:
              </p>

              <h4 className="font-semibold mt-3">1. Ketentuan Umum</h4>
              <ul className="list-disc ml-6">
                <li>
                  Setiap Penyedia/Vendor dan Pengguna (L/K/PD) diwajibkan untuk
                  membaca dan memahami seluruh isi Syarat dan Ketentuan sebelum
                  melakukan transaksi melalui e-Catalogue.
                </li>
                <li>
                  Persetujuan terhadap Syarat dan Ketentuan dilakukan dengan
                  memberikan tanda centang (checklist) sebagai konfirmasi bahwa
                  yang bersangkutan telah membaca dan memahami seluruh isi
                  ketentuan ini.
                </li>
              </ul>

              <h4 className="font-semibold mt-3">
                2. Isi Syarat dan Ketentuan
              </h4>
              <ul className="list-[lower-alpha] ml-6">
                <li>
                  Pengguna (L/K/PD) hanya dapat membeli barang dari
                  Penyedia/Vendor yang telah terdaftar dalam e-Catalogue dan
                  telah memberikan jaminan asuransi atas barang yang ditawarkan.
                </li>
                <li>
                  Penyedia/Vendor wajib memberikan jaminan asuransi atas setiap
                  barang yang ditawarkan di etalase e-Catalogue, dengan
                  menggunakan layanan konsorsium Asuransi SiLogin. <br />
                  <a href="#" className="text-blue-600 underline">
                    Lihat informasi selengkapnya tentang Asuransi SiLogin
                  </a>
                </li>
                <li>
                  Penyedia/Vendor bertanggung jawab membayar premi asuransi dan
                  wajib menyerahkan e-cover note / e-polis asuransi kepada
                  Pengguna pada saat serah terima barang.
                </li>
                <li>
                  Pengguna (L/K/PD) wajib memastikan bahwa barang yang diterima
                  telah disertai dengan salinan e-cover note / e-polis sebagai
                  bukti jaminan asuransi.
                </li>
              </ul>

              <h4 className="font-semibold mt-3">3. Pernyataan Persetujuan</h4>
              <p>
                Dengan ini saya menyatakan telah membaca, memahami, dan
                menyetujui seluruh ketentuan transaksi dalam e-Catalogue serta
                berkomitmen untuk mematuhi seluruh ketentuan yang berlaku.
              </p>         
            </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
