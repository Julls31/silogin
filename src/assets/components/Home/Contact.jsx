import React from "react";

function Contact() {
  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <div className="bg-base-200 lg:p-8 pt-8 rounded-lg">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-lg font-semibold text-gray-500 uppercase mb-8 tracking-wide">
              Kontak
            </h2>
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 mt-2">
              Kami selalu siap membantu anda!
            </h1>
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 mt-2">
              Hubungi kami melalui salah satu saluran berikut:
            </h1>
          </div>

          {/* Content Section with Background */}
          <section
            className="bg-cover bg-center rounded-lg py-0 px-0 md:py-24 md:px-8"
            style={{ backgroundImage: "url(/image/table_bg.png)" }}
          >
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/** Array of card data */}
              {[
                {
                  icon: "fa fa-phone",
                  title: "Telepon",
                  content:
                    "Hubungi kami di [0821-2176-3671]. Layanan telepon kami tersedia Senin s/d Jum’at.",
                },
                {
                  icon: "fa-regular fa-envelope",
                  title: "Email",
                  content:
                    "Kirim pertanyaan atau keluhan Anda ke [info@silogin.id]. Tim kami akan merespons maksimal 1x24 jam.",
                },
                // {
                //   icon: "fa-regular fa-message",
                //   title: "Live Chat",
                //   content:
                //     "Kunjungi situs web kami di [silogin.id] dan klik ikon live chat untuk bantuan instan.",
                // },
                {
                  icon: "fa fa-chart-simple",
                  title: "Media Sosial",
                  content:
                    "DM kami di [Instagram, Facebook, atau Twitter: @silogin.id].",
                },
                {
                  icon: "fa-brands fa-whatsapp",
                  title: "Chat WhatsApp",
                  content:
                    "Chat langsung via Whatsapp di nomor [0821-2176-3671].",
                },
                // {
                //   icon: "fa fa-location-dot",
                //   title: "Kunjungi Langsung",
                //   content:
                //     "Alamat kantor: [Jl. Raya Ragunan No.29 A, RT.8/RW.6, Jati Padang, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12540] Jam operasional: [Senin s/d Jum’at 08:00 s/d 17:00]",
                // },
              ].map((card, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-2xl bg-white flex flex-col"
                >
                  {/* Card Header */}
                  <div className="flex-1 mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">
                      <i className={`${card.icon} mr-2`} /> <span className="text-red-600">{card.title}</span> 
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1">
                    <p className="text-gray-600 mb-8">{card.content}</p>
                  </div>

                  {/* Card Footer */}
                  {/* <div className="flex justify-start">
                    <button className="btn btn-sm btn-primary">
                      Hubungi Kami <i className="fa fa-arrow-right" />
                    </button>
                  </div> */}
                </div>
              ))}
            </div>
          </section>
          {/* <div className="flex justify-center mt-8 lg:mt-4">
            <button className="btn btn-primary rounded-3xl">
              <i className="fa fa-arrow-right" />
              Ke website siLogin
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
