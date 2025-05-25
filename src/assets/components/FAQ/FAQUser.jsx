import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function FAQUser() {
  const faqData = [
    {
      title: "Pengertian SiLogin",
      questions: [
        {
          question: "Apa itu SiLogin Asuransi?",
          answer:
            "SiLogin Asuransi adalah program asuransi yang dirancang untuk memberikan perlindungan yang cepat dan mudah bagi Penyedia/Vendor dalam bertransaksi atas pembelian barang oleh pemerintah L/K/PD melalui sistem e-catalogue yang terintegrasi dengan aplikasi SiLogin.",
        },
        {
          question:
            "Apa yang membuat SiLogin berbeda dari program asuransi lainnya?",
          answer:
            "SiLogin secara khusus terintegrasi dengan sistem e-catalogue pemerintah, menjadikannya lebih efisien dan otomatis dalam memberikan perlindungan asuransi untuk transaksi tersebut.",
        },
        {
          question: "Apakah SiLogin merupakan perusahaan asuransi?",
          answer:
            "SiLogin adalah sistem aplikasi yang memfasilitasi proses asuransi. Perlindungan asuransi disediakan oleh perusahaan asuransi yang bekerja sama dengan sistem SiLogin.",
        },
        {
          question:
            "Bagaimana SiLogin memastikan keamanan data transaksi dan klaim?",
          answer:
            "SiLogin menerapkan standar keamanan data yang tinggi untuk melindungi informasi transaksi dan klaim pengguna.",
        },
        {
          question: "Apakah SiLogin tersedia 24/7?",
          answer:
            "Sistem SiLogin dapat diakses 24 jam sehari, 7 hari seminggu untuk pengajuan klaim dan pengecekan status.",
        },
        {
          question: "Dalam hal apa saja perlindungan asuransi SiLogin berlaku?",
          answer:
            "Perlindungan asuransi SiLogin berlaku sesuai dengan jenis polis yang dipilih atau berlaku, seperti Asuransi Kargo atau Asuransi MPAR, yang umumnya melindungi terhadap risiko kerusakan atau kehilangan barang selama proses pengiriman.",
        },
        {
          question:
            "Apakah semua produk yang dibeli melalui e-catalogue otomatis diasuransikan oleh SiLogin?",
          answer:
            "Tidak semua produk mungkin otomatis diasuransikan. Vendor perlu memesan kontrak asuransi yang telah disediakan melalui sistem setelah pembelian di e-catalogue.",
        },
        {
          question:
            "Bagaimana cara menghubungi tim dukungan SiLogin jika saya memiliki pertanyaan lebih lanjut?",
          answer:
            "Informasi kontak tim dukungan SiLogin biasanya tersedia di website atau dalam email notifikasi yang Anda terima.",
        },
      ],
    },
    {
      title: "Fitur Website SiLogin",
      questions: [
        {
          question: "Bagaimana cara mengakses website SiLogin?",
          answer:
            "Anda dapat mengakses website SiLogin melalui alamat silogin.id pada peramban web Anda.",
        },
        {
          question: "Siapa saja yang dapat memiliki akun di website SiLogin?",
          answer:
            "L/K/PD dan Penyedia/Vendor yang bertransaksi melalui e-catalogue dan menggunakan asuransi SiLogin dapat memiliki akun.",
        },
        {
          question: "Apa saja fitur utama yang tersedia di website ini?",
          answer:
            "Website ini menyediakan fitur utama seperti:\n• Login: Akses akun terdaftar untuk L/K/PD dan Vendor.\n• Daftar Akun L/K/PD: Pendaftaran bagi L/K/PD untuk berpartisipasi dalam program asuransi.\n• Klaim Asuransi Kargo & MPAR: Pengajuan klaim atas kerugian atau kerusakan barang berdasarkan nomor polis dan kategori asuransi yang ditetapkan.",
        },
        {
          question: "Apa fungsi dari fitur Login di website SiLogin?",
          answer:
            "Fitur Login memungkinkan pengguna terdaftar (L/K/PD dan Vendor) untuk mengakses akun mereka dan berbagai fitur terkait, seperti melihat detail transaksi asuransi dan melacak status klaim.",
        },
        {
          question: "Bagaimana cara mendaftar akun sebagai L/K/PD?",
          answer:
            "Proses pendaftaran untuk L/K/PD biasanya dilakukan melalui koordinasi dengan pihak SiLogin atau administrator e-catalogue. Silakan hubungi pihak terkait untuk informasi lebih lanjut.",
        },
        {
          question:
            "Bagaimana saya mengetahui jika barang pembelian saya sudah ada asuransinya?",
          answer:
            "Anda akan menerima email berisi penjelasan apakah barang Anda mendapatkan perlindungan asuransi sesuai yang berlaku.",
        },
        {
          question: "Bagaimana cara klaim asuransi barang saya?",
          answer:
            "Masuk ke website SiLogin.id, pilih menu customer care, isi nomor polis dan formulir klaim dengan lengkap.",
        },
        {
          question: "Berapa lama waktu klaim saya disetujui?",
          answer:
            "Sistem SiLogin akan menganalisis klaim secara otomatis. Proses selanjutnya dilakukan oleh pihak asuransi.",
        },
        {
          question:
            "Bagaimana saya mengetahui sudah sampai mana klaim saya berjalan?",
          answer:
            "Lacak status klaim melalui link di email atau melalui website SiLogin.",
        },
        {
          question:
            "Bagaimana saya mengetahui bahwa klaim saya disetujui atau tidak?",
          answer:
            "Anda akan menerima notifikasi email dari SiLogin berupa Surat Konfirmasi Ganti Rugi (SKGR).",
        },
        {
          question:
            "Apakah saya akan menerima email pemberitahuan jika klaim saya disetujui?",
          answer:
            "Ya, setiap transaksi melalui SiLogin akan mendapat pemberitahuan otomatis melalui email.",
        },
        {
          question: "Bagaimana cara pembayaran klaim yang telah saya ajukan?",
          answer:
            "Pembayaran klaim yang telah disetujui akan masuk ke rekening vendor sesuai dengan formulir yang telah diisi dengan benar saat proses klaim.",
        },
        {
          question:
            "Bagaimana cara melihat riwayat transaksi asuransi saya di website?",
          answer:
            "Setelah login, Anda dapat mengakses menu 'Riwayat Transaksi' untuk melihat daftar transaksi asuransi Anda.",
        },
        {
          question:
            "Apakah saya bisa mengunduh dokumen polis asuransi melalui website?",
          answer:
            "Ya, setelah polis diterbitkan, Anda dapat mengunduhnya melalui akun Anda di website.",
        },
        {
          question: "Apakah ada panduan penggunaan website SiLogin?",
          answer:
            "Panduan penggunaan atau FAQ tersedia di bagian 'Bantuan' atau 'FAQ' di website SiLogin.",
        },
        {
          question:
            "Bagaimana cara memberikan umpan balik atau mengajukan pertanyaan terkait website SiLogin?",
          answer:
            "Anda dapat menggunakan formulir kontak di website atau mengirim email ke alamat dukungan SiLogin.",
        },
        {
          question:
            "Apakah ada fitur notifikasi di website selain melalui email?",
          answer:
            "Informasi mengenai fitur notifikasi lainnya dapat Anda lihat setelah login ke akun Anda.",
        },
        {
          question:
            "Apakah website SiLogin mendukung berbagai jenis perangkat (desktop, mobile)?",
          answer:
            "Ya, website SiLogin dirancang agar responsif dan dapat diakses melalui berbagai jenis perangkat.",
        },
        {
          question: "Siapa saja yang bisa menggunakan sistem SiLogin?",
          answer:
            "Semua vendor atau L/K/PD yang telah melakukan pembelian dan pembayaran barang melalui e-catalogue secara online dapat menggunakan sistem SiLogin.",
        },
      ],
    },

    {
      title: "Pemesanan Kontrak Asuransi",
      questions: [
        {
          question:
            "Bagaimana cara memesan kontrak asuransi SiLogin setelah pembelian di e-catalogue?",
          answer:
            "Setelah pembelian disetujui di e-catalogue, akan ada opsi atau notifikasi untuk memesan kontrak asuransi yang akan diteruskan ke sistem SiLogin.",
        },
        {
          question:
            "Apakah saya bisa memilih jenis asuransi yang berbeda untuk setiap transaksi?",
          answer:
            "Jenis asuransi yang tersedia mungkin telah ditentukan berdasarkan jenis barang atau ketentuan yang berlaku dalam e-catalogue. Informasi ini akan jelas tertera saat pemesanan kontrak.",
        },
        {
          question:
            "Apa informasi yang perlu saya perhatikan saat memesan kontrak asuransi?",
          answer:
            "Pastikan detail pembelian barang di e-catalogue sesuai dengan informasi yang akan digunakan untuk kontrak asuransi.",
        },
        {
          question:
            "Apakah ada batas waktu untuk memesan kontrak asuransi setelah transaksi di e-catalogue?",
          answer:
            "Sebaiknya pemesanan kontrak asuransi dilakukan segera setelah transaksi pembelian di e-catalogue disetujui. Informasi mengenai batas waktu jika ada akan tertera pada sistem.",
        },
        {
          question:
            "Apa yang terjadi jika saya tidak memesan kontrak asuransi?",
          answer:
            "Jika kontrak asuransi tidak dipesan, maka transaksi pembelian barang tersebut tidak akan mendapatkan perlindungan asuransi dari SiLogin.",
        },
        {
          question:
            "Apakah saya akan menerima konfirmasi setelah berhasil memesan kontrak asuransi?",
          answer:
            "Ya, Anda akan menerima notifikasi melalui email setelah berhasil melakukan pemesanan kontrak asuransi.",
        },
        {
          question:
            "Bagaimana cara melihat detail kontrak asuransi yang telah saya pesan?",
          answer:
            "Detail kontrak asuransi biasanya akan terlampir pada email notifikasi atau dapat diakses melalui akun Anda di website SiLogin.",
        },
        {
          question: "Apakah premi asuransi dihitung secara otomatis?",
          answer:
            "Ya, premi asuransi akan dihitung secara otomatis berdasarkan detail pembelian dan jenis perlindungan yang berlaku.",
        },
        {
          question: "Kapan perlindungan asuransi mulai berlaku?",
          answer:
            "Perlindungan Asuransi Kargo dimulai saat pengisian tanggal pengiriman pada system e-catalogue. Perlindungan Asuransi MPAR dimulai saat pengisian tanggal BAST pada system e-catalogue.",
        },
      ],
    },
    {
      title: "Penerbitan Cover Note dan Polis Asuransi",
      questions: [
        {
          question: "Apa itu Cover Note Kargo dan Cover Note MPAR?",
          answer:
            "Cover Note adalah surat keterangan sementara yang memberikan informasi dasar mengenai perlindungan asuransi sebelum polis asuransi diterbitkan. Cover Note Kargo berlaku untuk asuransi pengiriman barang, sedangkan Cover Note MPAR berlaku untuk jenis asuransi Aset atau Moveable Property All Risk.",
        },
        {
          question:
            "Kapan saya akan menerima Cover Note setelah melakukan pembayaran?",
          answer:
            "Setelah pembayaran premi Anda berhasil diverifikasi, sistem SiLogin akan secara otomatis mengirimkan Cover Note melalui email.",
        },
        {
          question: "Apa saja informasi yang tercantum dalam Cover Note?",
          answer:
            "Cover Note biasanya mencantumkan informasi seperti nama tertanggung (Vendor), nomor kontrak asuransi, jenis perlindungan, nilai pertanggungan, dan periode pertanggungan.",
        },
        {
          question:
            "Apakah Cover Note memiliki kekuatan hukum yang sama dengan Polis Asuransi?",
          answer:
            "Cover Note merupakan bukti awal adanya perlindungan asuransi. Polis asuransi akan memberikan detail yang lebih lengkap mengenai syarat dan ketentuan.",
        },
        {
          question: "Apa itu Polis Asuransi Kargo dan Polis Asuransi MPAR?",
          answer:
            "Polis Asuransi adalah dokumen resmi yang berisi rincian lengkap mengenai perjanjian asuransi, termasuk hak dan kewajiban pihak tertanggung dan perusahaan asuransi. Polis Kargo dan Polis MPAR spesifik untuk jenis perlindungan tersebut.",
        },
        {
          question: "Kapan Polis Asuransi MPAR akan dikirimkan kepada saya?",
          answer:
            "Polis Asuransi akan dikirimkan oleh sistem SiLogin setelah tanggal Berita Acara Serah Terima (BAST) barang dimasukkan ke dalam sistem e-catalogue.",
        },
        {
          question:
            "Mengapa Polis Asuransi MPAR baru diterbitkan setelah tanggal BAST?",
          answer:
            "Penerbitan polis MPAR setelah tanggal BAST menandakan bahwa proses pengiriman barang telah selesai dan risiko utama yang diasuransikan dimulai.",
        },
        {
          question: "Dalam format apa Polis Asuransi akan dikirimkan?",
          answer:
            "Polis Asuransi umumnya akan dikirimkan dalam format digital (PDF) melalui email.",
        },
        {
          question:
            "Apa yang harus saya lakukan jika tidak menerima Cover Note atau Polis Asuransi sesuai jadwal?",
          answer:
            "Periksa folder spam atau junk email Anda. Jika tetap tidak ditemukan, segera hubungi tim dukungan SiLogin.",
        },
        {
          question: "Apakah saya bisa meminta salinan fisik Polis Asuransi?",
          answer:
            "Kebijakan mengenai pengiriman salinan fisik Polis Asuransi dapat berbeda-beda. Anda dapat mengajukan permintaan kepada tim dukungan SiLogin.",
        },
      ],
    },
    {
      title: "Pengajuan Klaim Asuransi",
      questions: [
        
          {
            question: "Bagaimana cara mengajukan klaim asuransi SiLogin?",
            answer:
              "Anda dapat mengajukan klaim melalui website silogin.id, pilih menu Customer Care/Klaim, dan isi formulir dengan nomor polis Anda.",
          },
          {
            question: "Dokumen apa saja yang dibutuhkan saat mengajukan klaim?",
            answer:
              "Dokumen yang dibutuhkan antara lain nomor polis asuransi, form laporan kronologi klaim yang lengkap, bukti foto kerusakan barang (minimal 3, maksimal 5), serta Invoice dan Quotation (jika ada).",
          },
          {
            question:
              "Informasi apa saja yang perlu saya isi dalam form laporan kronologi klaim?",
            answer:
              "Anda perlu mengisi email pelapor, nama pelapor, nomor handphone, NIK atau NIP, data barang, kronologi kejadian, estimasi nominal klaim, tanggal kejadian, deskripsi laporan kejadian, dan mengunggah bukti foto.",
          },
          {
            question:
              "Bagaimana jika saya tidak memiliki semua dokumen yang diminta saat pengajuan awal?",
            answer:
              "Anda tetap dapat menyimpan formulir klaim yang belum lengkap dan melanjutkannya di lain waktu melalui link yang dikirimkan ke email Anda.",
          },
          {
            question: "Berapa ukuran maksimal untuk foto bukti kerusakan yang dapat diunggah?",
            answer: "Ukuran maksimal per foto yang dapat diunggah adalah 2MB.",
          },
          {
            question: "Apa yang terjadi setelah saya Submit form pengajuan klaim?",
            answer:
              "Anda akan menerima notifikasi email mengenai status pengajuan klaim yang telah Anda kirimkan.",
          },
          {
            question: "Bagaimana cara mengetahui status pengajuan klaim saya?",
            answer:
              "Anda dapat melacak status klaim melalui link yang dikirimkan ke email Anda atau melalui website SiLogin.",
          },
          {
            question: "Berapa lama proses verifikasi dan persetujuan klaim asuransi?",
            answer:
              "Proses verifikasi dan persetujuan klaim akan dilakukan oleh pihak asuransi setelah laporan Anda diverifikasi oleh sistem SiLogin. Jangka waktunya dapat bervariasi tergantung kompleksitas klaim dan ketentuan perusahaan asuransi.",
          },
          {
            question: "Apa itu Klaim Garansi dalam sistem SiLogin?",
            answer:
              "Klaim Garansi adalah kategori klaim yang akan ditentukan oleh Customer Care berdasarkan laporan yang Anda ajukan sesuai dengan ketentuan yang berlaku.",
          },
          {
            question:
              "Apakah saya akan menerima pemberitahuan email mengenai perkembangan status klaim saya?",
            answer:
              "Ya, Anda akan selalu menerima notifikasi email terkait proses persetujuan atau perbaikan klaim yang sedang Anda ajukan.",
          },
          {
            question:
              "Apa yang harus saya lakukan jika ada permintaan perbaikan atau penambahan dokumen klaim?",
            answer:
              "Ikuti instruksi yang diberikan melalui email untuk melakukan perbaikan atau menambahkan dokumen yang diperlukan.",
          },
          {
            question: "Bagaimana jika klaim saya ditolak?",
            answer:
              "Anda akan menerima notifikasi email mengenai penolakan klaim beserta alasannya. Anda dapat mempelajari lebih lanjut mengenai ketentuan penolakan dalam polis asuransi atau menghubungi tim dukungan SiLogin untuk klarifikasi.",
          },
          {
            question: "Apakah saya bisa mengajukan banding jika klaim saya ditolak?",
            answer:
              "Informasi mengenai proses banding jika klaim ditolak akan tercantum dalam polis asuransi atau dapat Anda tanyakan kepada tim dukungan SiLogin.",
          },
          {
            question: "Siapa yang akan melakukan peninjauan dan menyetujui klaim saya?",
            answer:
              "Peninjauan dan persetujuan klaim akan dilakukan oleh pihak perusahaan asuransi yang bekerja sama dengan SiLogin.",
          },
          {
            question: "Apa itu Surat Konfirmasi Ganti Rugi (SKGR)?",
            answer:
              "SKGR adalah notifikasi email yang Anda terima jika pengajuan klaim Anda telah ditinjau dan disetujui oleh pihak asuransi.",
          },
          {
            question: "Apa yang harus saya lakukan setelah menerima notifikasi SKGR?",
            answer:
              "Anda akan diarahkan untuk menuju link Form persetujuan SKGR yang terlampir dalam email.",
          },
          {
            question: "Bisakah saya menolak SKGR yang telah diterbitkan?",
            answer:
              "Ya, Anda memiliki opsi untuk menyetujui atau menolak SKGR berdasarkan hasil analisa dan peninjauan pihak asuransi.",
          },
          {
            question: "Apa yang terjadi jika saya menolak SKGR?",
            answer:
              "Jika Anda menolak SKGR, Anda perlu memberikan alasan penolakan dan melakukan banding lebih lanjut dengan pihak asuransi.",
          },
          {
            question: "Bagaimana cara menyetujui SKGR?",
            answer:
              "Anda dapat menyetujui SKGR dengan menekan tombol setuju pada form yang tersedia dan mengisi data bank penerima klaim.",
          },
          {
            question:
              "Informasi bank apa saja yang perlu saya isi pada form persetujuan SKGR?",
            answer:
              "Anda perlu mengisi Nama Bank, Cabang Bank, Nomor Rekening, dan Nama Penerima.",
          },
          {
            question: "Apa yang terjadi setelah sayaSubmit form persetujuan SKGR?",
            answer:
              "Anda akan menerima notifikasi email bahwa pengajuan klaim Anda telah selesai dibayarkan berdasarkan data bank yang telah Anda input.",
          },
          {
            question:
              "Berapa lama waktu yang dibutuhkan hingga pembayaran klaim masuk ke rekening saya setelah SKGR disetujui?",
            answer:
              "Waktu pembayaran dapat bervariasi tergantung pada kebijakan perusahaan asuransi dan proses transfer bank. Informasi perkiraan waktu pembayaran biasanya akan tercantum dalam notifikasi email.",
          },
          {
            question:
              "Apa yang harus saya lakukan jika pembayaran klaim tidak kunjung masuk ke rekening saya?",
            answer:
              "Periksa kembali data bank yang telah Anda input. Jika sudah benar, segera hubungi tim dukungan SiLogin dengan menyertakan bukti persetujuan SKGR.",
          },
          {
            question: "Apakah saya akan menerima rincian pembayaran klaim?",
            answer:
              "Rincian pembayaran klaim mungkin akan disertakan dalam notifikasi email atau dapat Anda tanyakan kepada tim dukungan SiLogin.",
          }
        
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="p-4 mx-auto min-h-screen py-24 md:px-12">
      <h1 className="text-2xl font-bold mb-6">FAQ L/K/PD</h1>

      {faqData.map((section, idx) => (
        <div
          key={idx}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-semibold">
            {section.title}
          </div>
          <div className="collapse-content">
            {section.questions.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus border border-primary bg-base-100 rounded-box mb-2"
              >
                <input type="checkbox" />
                <div className="collapse-title text-md font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content whitespace-pre-line text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQUser;
