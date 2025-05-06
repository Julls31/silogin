import React, { useState, useEffect } from "react";

function PrivacyPolicy() {
  const [currentTab, setCurrentTab] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentTab]);
  return (
    <>
      <div className="max-w-screen-xl min-h-screen mx-auto py-10 2xl:py-12">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-1/4">
              <div className="flex flex-col py-6">
                {[
                  "0. Umum",
                  "1. Informasi Pribadi Yang Dapat Kami Kumpulkan",
                  "2. Penggunaan Informasi Pribadi",
                  "3. Pengungkapan Informasi Pribadi",
                  "4. Tautan Ke Situs Lain",
                  "5. Penyimpanan Informasi Pribadi",
                  "6. Hak Anda",
                  "7. Kebijakan Cache",
                  "8. Pengakuan Dan Persetujuan",
                  "9. Notifikasi (Pemberitahuan)",
                  "10. Perubahan Dalam Kebijakan Privasi Kami",
                  "11. Cara Menghubungi Kami",
                ].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTab(index)}
                    className={`text-left py-2 px-4 border-b ${
                      currentTab === index
                        ? "border-red-600"
                        : "border-transparent"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-3/4">
              <div className="content p-4">
                {currentTab === 0 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 0 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">
                      Kebijakan Privasi
                    </h1>
                    <p>
                      SiLogin berkomitmen untuk melindungi dan menghormati
                      kerahasiaan informasi pribadi pengguna (“Anda”) saat
                      mengakses dan menggunakan aplikasi, situs web
                      (https://silogin.id/ beserta subdomainnya), fitur,
                      teknologi, konten dan produk yang kami sediakan
                      (selanjutnya secara bersama-sama disebut sebagai
                      “Platform”)
                      <br />
                      <br />
                      Kami membangun aplikasi asuransi sebagai aplikasi Gratis.
                      Layanan ini disediakan oleh SiLogin tanpa biaya dan
                      dimaksudkan untuk digunakan sesuai ketentuan yang berlaku.
                      Kebijakan Privasi ini mengatur landasan dasar mengenai
                      bagaimana kami menggunakan informasi pribadi yang kami
                      kumpulkan dan atau Anda berikan. Kebijakan Privasi ini
                      berlaku bagi seluruh pengguna Platform, kecuali diatur
                      pada Kebijakan Privasi yang terpisah. Mohon membaca
                      Kebijakan Privasi Kami dengan seksama sehingga Anda dapat
                      memahami pendekatan dan cara Kami dalam menggunakan
                      informasi tersebut.
                      <br />
                      <br />
                      Jika menggunakan layanan pada platform kami maka Anda
                      telah menyetujui pengumpulan dan penggunaan informasi
                      terkait dengan syarat dan ketentuan SiLogin. Kami tidak
                      akan menggunakan atau membagikan informasi Anda kepada
                      siapa pun kecuali sebagaimana dijelaskan dalam Kebijakan
                      Privasi ini.
                      <br />
                      <br />
                      Kebijakan Privasi ini mencakup hal-hal sebagai berikut:
                    </p>
                  </div>
                )}
                {currentTab === 1 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 1 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">
                      Informasi Pribadi Yang Dapat Kami Kumpulkan
                    </h1>
                    <p>Pengumpulan Informasi Pribadi berupa:</p>

                    <ol className="list-[lower-alpha] ml-4 mt-4 space-y-4">
                      <li>
                        <strong>Informasi yang Anda berikan.</strong> Anda dapat
                        memberikan informasi pribadi kepada Kami melalui
                        formulir elektronik pada sistem SiLogin maupun melalui
                        komunikasi lainnya seperti telepon atau surat
                        elektronik. Informasi ini mencakup data yang Anda isi
                        saat melakukan pendaftaran sebagai Penyedia atau Vendor
                        pada platform Kami, termasuk saat mengajukan
                        perlindungan asuransi untuk transaksi e-catalogue.
                        Informasi yang dapat Anda berikan meliputi: nama
                        perusahaan, nama penanggung jawab, Nomor Induk Berusaha
                        (NIB), alamat, alamat email, nomor telepon yang dapat
                        dihubungi, serta data administratif
                        lainnya yang diperlukan untuk keperluan validasi dan
                        pemberian perlindungan asuransi. Kami dapat meminta Anda
                        melakukan verifikasi untuk memastikan keakuratan
                        informasi tersebut.
                      </li>

                      <li>
                        <strong>
                          Informasi yang Kami kumpulkan secara otomatis.
                        </strong>{" "}
                        Saat Anda mengakses atau menggunakan Platform SiLogin,
                        Kami dapat mengumpulkan informasi teknis dan perilaku
                        penggunaan secara otomatis, termasuk:
                        <ol className="list-[lower-roman] ml-4 mt-2 space-y-3">
                          <li>
                            Informasi teknis seperti alamat Protokol Internet
                            (IP address), jenis dan versi peramban (browser),
                            sistem operasi, pengaturan zona waktu, dan perangkat
                            yang digunakan untuk mengakses sistem.
                          </li>
                          <li>
                            Informasi aktivitas saat menggunakan platform,
                            seperti halaman atau menu yang diakses, waktu
                            kunjungan, aktivitas klik, proses unggah dokumen,
                            transaksi yang diajukan, status klaim, serta waktu
                            respons sistem.
                          </li>
                          <li>
                            Data transaksi atau histori penggunaan sistem,
                            termasuk data pengajuan perlindungan, jumlah nilai
                            transaksi yang diasuransikan, dokumen pendukung, dan
                            riwayat pengajuan klaim.
                          </li>
                        </ol>
                      </li>

                      <li>
                        <strong>Informasi dari sumber lain.</strong> Kami juga
                        dapat menerima informasi dari pihak ketiga yang bekerja
                        sama dengan Kami, seperti lembaga Pemerintah (K/L/PD),
                        penyedia sistem e-catalogue, pihak asuransi mitra,
                        penyedia layanan verifikasi, maupun penyedia pembayaran.
                        Informasi ini digunakan untuk mempercepat proses
                        verifikasi, pemberian perlindungan, dan pemrosesan
                        klaim. Kami akan mengambil langkah yang wajar untuk
                        memastikan keabsahan informasi tersebut dan memastikan
                        sesuai dengan peraturan perundang-undangan yang berlaku
                        di Indonesia.
                      </li>
                    </ol>
                  </div>
                )}
                {currentTab === 2 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 2 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">
                      Penggunaan Informasi Pribadi
                    </h1>
                    <p>
                      Setiap kali Anda memberikan informasi saat menggunakan
                      layanan SiLogin, dan apabila terjadi kesalahan pada sistem
                      atau aplikasi, Kami dapat mengumpulkan data dan informasi
                      melalui layanan pihak ketiga dalam bentuk Data Log.
                      <br />
                      <br />
                      Data Log ini dapat mencakup informasi seperti alamat
                      Protokol Internet (IP) perangkat Anda, nama perangkat,
                      versi sistem operasi, konfigurasi aplikasi saat
                      menggunakan layanan, waktu dan tanggal penggunaan, serta
                      statistik penggunaan lainnya. Informasi Pribadi Anda dapat
                      digunakan untuk hal-hal berikut:
                    </p>

                    <ol className="list-[lower-alpha] ml-4 mt-4 space-y-4">
                      <li>
                        <strong>Informasi yang Anda berikan.</strong> Kami akan
                        menggunakan informasi ini:
                        <ol className="list-[lower-roman] ml-4 mt-2 space-y-3">
                          <li>
                            Untuk memenuhi kewajiban Kami dalam menyediakan
                            informasi, status perlindungan, dan layanan klaim
                            kepada Anda sebagai Penyedia/Vendor.
                          </li>
                          <li>
                            Untuk menyediakan informasi terkait produk asuransi
                            yang disediakan melalui SiLogin, termasuk layanan
                            perlindungan transaksi e-catalogue, baik dari Kami
                            maupun mitra asuransi. Kami dapat menghubungi Anda
                            secara elektronik terkait produk dan layanan
                            tambahan yang relevan dengan kebutuhan bisnis Anda,
                            selama Anda telah memberikan persetujuan.
                          </li>
                          <li>
                            Untuk memberikan notifikasi atau pembaruan atas
                            perubahan layanan, ketentuan perlindungan, atau
                            informasi kebijakan yang relevan.
                          </li>
                          <li>
                            Untuk memastikan tampilan dan fungsi sistem SiLogin
                            berjalan optimal di perangkat Anda.
                          </li>
                        </ol>
                      </li>

                      <li>
                        <strong>
                          Informasi yang Kami kumpulkan secara otomatis.
                        </strong>{" "}
                        Kami akan menggunakan informasi ini:
                        <ol className="list-[lower-roman] ml-4 mt-2 space-y-3">
                          <li>
                            Untuk mengelola dan meningkatkan sistem SiLogin,
                            termasuk pemecahan masalah, pengujian performa,
                            analisis data, dan pengembangan sistem asuransi yang
                            lebih efisien.
                          </li>
                          <li>
                            Untuk menyesuaikan tampilan dan fungsi layanan agar
                            sesuai dengan perangkat pengguna.
                          </li>
                          <li>
                            Untuk mendukung fitur interaktif yang terdapat dalam
                            layanan, seperti proses pengajuan klaim atau unggah
                            dokumen.
                          </li>
                          <li>
                            Sebagai bagian dari upaya Kami dalam menjaga
                            keamanan sistem dan mencegah penyalahgunaan.
                          </li>
                          <li>
                            Untuk memahami efektivitas komunikasi dan informasi
                            layanan yang Kami tampilkan, serta menampilkan
                            konten yang lebih relevan dengan kebutuhan Anda.
                          </li>
                          <li>
                            Untuk memberikan saran atau rekomendasi layanan
                            perlindungan asuransi lainnya yang relevan bagi Anda
                            sebagai pengguna SiLogin.
                          </li>
                        </ol>
                      </li>

                      <li>
                        <strong>
                          Informasi yang Kami terima dari sumber lain.
                        </strong>{" "}
                        Kami dapat menggabungkan informasi ini dengan informasi
                        yang Anda berikan dan yang Kami kumpulkan secara
                        langsung. Data gabungan ini digunakan untuk tujuan
                        verifikasi, pemrosesan perlindungan, penanganan klaim,
                        serta perbaikan mutu layanan SiLogin, sesuai dengan
                        ketentuan hukum yang berlaku.
                      </li>
                    </ol>
                  </div>
                )}
                {currentTab === 3 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 3 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">
                      Pengungkapan Informasi Pribadi
                    </h1>
                    <p>
                      SiLogin dapat mengungkapkan informasi pribadi Anda kepada
                      pihak ketiga dalam kondisi terbatas dan sesuai ketentuan
                      hukum yang berlaku:
                    </p>

                    <ol className="list-[lower-roman] ml-4 mt-4 space-y-4">
                      <li>
                        Kami dapat mengungkapkan informasi pribadi Anda kepada
                        entitas yang berada dalam satu grup usaha dengan
                        SiLogin, termasuk perusahaan induk dan afiliasi yang
                        memiliki keterkaitan operasional atau penyediaan layanan
                        asuransi.
                      </li>

                      <li>
                        Kami dapat mengungkapkan informasi pribadi Anda kepada
                        pihak ketiga dalam situasi berikut:
                        <ol className="list-decimal list-outside ml-4 mt-4 space-y-3">
                          <li>
                            Dalam hal terjadinya proses penggabungan, akuisisi,
                            penjualan bisnis, atau restrukturisasi, informasi
                            pribadi dapat dibagikan kepada pihak yang
                            berkepentingan sebagai bagian dari proses transaksi.
                          </li>
                          <li>
                            Apabila seluruh atau sebagian besar aset SiLogin
                            diakuisisi oleh pihak lain, informasi pribadi
                            pengguna dapat menjadi bagian dari aset yang
                            dialihkan secara sah.
                          </li>
                          <li>
                            Jika diwajibkan oleh hukum, atau untuk melaksanakan
                            syarat dan ketentuan layanan kami, termasuk
                            perlindungan hak hukum SiLogin, mitra asuransi,
                            Penyedia/Vendor, atau pihak lain yang terkait. Ini
                            termasuk pertukaran informasi dengan instansi
                            pemerintah atau lembaga penegak hukum, serta
                            organisasi lainnya untuk tujuan pencegahan penipuan,
                            pelanggaran sistem, dan pengurangan risiko hukum
                            atau keuangan.
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                )}
                {currentTab === 4 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 4 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">
                      Tautan ke Situs Lain
                    </h1>
                    <p>
                      Platform SiLogin dapat, dari waktu ke waktu, menyediakan
                      tautan ke situs web milik mitra resmi, penyedia asuransi,
                      penyedia layanan pembayaran, atau instansi pemerintah yang
                      bekerja sama dengan SiLogin. Harap diperhatikan bahwa
                      situs-situs tersebut memiliki kebijakan privasi
                      masing-masing yang berada di luar kendali SiLogin.
                      <br />
                      <br />
                      Kami tidak bertanggung jawab atas isi, pengelolaan data,
                      atau perlakuan terhadap informasi pribadi yang dilakukan
                      oleh situs pihak ketiga tersebut. Kami sangat menyarankan
                      Anda untuk membaca dan memahami kebijakan privasi yang
                      berlaku di situs yang Anda kunjungi sebelum memberikan
                      informasi pribadi apa pun.
                    </p>
                  </div>
                )}
                {currentTab === 5 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 5 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">
                      Penyimpanan Informasi Pribadi
                    </h1>
                    <p>
                      Seluruh informasi yang Anda berikan kepada kami disimpan
                      di server aman kami. Kami akan menyimpan informasi pribadi
                      selama Anda menggunakan layanan kami, dan dapat
                      memperbarui informasi pribadi secara berkala untuk tujuan
                      kepatuhan terhadap peraturan perundang-undangan yang
                      berlaku.
                    </p>
                  </div>
                )}
                {currentTab === 6 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 6 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">Hak Anda</h1>
                    <p>
                      Anda memiliki hak untuk meminta kami untuk tidak memproses
                      informasi pribadi Anda untuk tujuan pemasaran. Kami akan
                      biasanya menginformasikan kepada Anda (sebelum
                      mengumpulkan data Anda) jika kami bermaksud menggunakan
                      data Anda untuk tujuan tersebut atau jika kami bermaksud
                      mengungkapkan informasi Anda kepada pihak ketiga untuk
                      tujuan tersebut. Anda dapat menggunakan hak Anda untuk
                      mencegah pemrosesan tersebut dengan menghubungi kami.
                    </p>
                  </div>
                )}
                {currentTab === 7 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 7 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">
                      Kebijakan Cache
                    </h1>
                    <p>
                      Kami dapat menggunakan cache untuk meningkatkan kecepatan
                      akses dan pengalaman pengguna. Data yang disimpan dalam
                      cache hanya digunakan untuk keperluan teknis dan tidak
                      digunakan untuk tujuan lain.
                    </p>
                  </div>
                )}
                {currentTab === 8 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 8 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">
                      Pengakuan Dan Persetujuan
                    </h1>
                    <p>
                      Dengan menggunakan layanan kami, Anda mengakui bahwa Anda
                      telah membaca dan memahami kebijakan privasi ini, dan Anda
                      menyetujui pengumpulan, penggunaan, dan pengungkapan
                      informasi pribadi Anda sebagaimana diuraikan dalam
                      kebijakan ini.
                    </p>
                  </div>
                )}
                {currentTab === 9 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 9 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">
                      Notifikasi (Pemberitahuan)
                    </h1>
                    <p>
                      Kami dapat mengirimkan pemberitahuan tentang perubahan
                      kebijakan privasi ini ke alamat email yang Anda berikan
                      kepada kami. Kami juga dapat mengirimkan pemberitahuan
                      melalui aplikasi kami atau dengan cara lain yang kami
                      anggap sesuai.
                    </p>
                  </div>
                )}
                {currentTab === 10 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 10 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">
                      Perubahan Dalam Kebijakan Privasi Kami
                    </h1>
                    <p>
                      Kami dapat memperbarui kebijakan privasi ini dari waktu ke
                      waktu. Kami akan memberitahukan setiap perubahan kepada
                      Anda dengan memposting kebijakan privasi baru di situs web
                      kami. Anda disarankan untuk meninjau kebijakan privasi ini
                      secara berkala untuk setiap perubahan.
                    </p>
                  </div>
                )}
                {currentTab === 11 && (
                  <div
                    className={`content fade-in-out ${
                      currentTab === 11 ? "fade-in" : "fade-out"
                    }`}
                  >
                    <h1 className="text-xl font-semibold mb-4">
                      Cara Menghubungi Kami
                    </h1>
                    <p>
                      Jika Anda memiliki pertanyaan tentang kebijakan privasi
                      ini, atau ingin menggunakan hak Anda, silakan menghubungi
                      kami melalui informasi kontak yang tersedia di situs web
                      kami.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom-blue w-full"></div>
    </>
  );
}

export default PrivacyPolicy;
