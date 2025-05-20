import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="bg-base-100 lg:p-8 pt-8 rounded-lg">
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

          {/* Konten Kartu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "fa fa-phone",
                title: "Telepon",
                content:
                  "Hubungi kami di [0821-2176-3671]. Layanan telepon kami tersedia Senin s/d Jum’at jam 09.00 s/d 18.00 WIB",
              },
              {
                icon: "fa-regular fa-envelope",
                title: "Email",
                content:
                  "Kirim pertanyaan atau keluhan Anda ke [info@silogin.id]. Tim kami akan merespons maksimal 1x24 jam.",
              },
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
            ].map((card, index) => (
              <div
                key={index}
                className="p-6 border rounded-2xl bg-white flex flex-col"
              >
                {/* Card Header */}
                <div className="flex-1 mb-4 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-700">
                    <i className={`${card.icon} mr-2`} />{" "}
                    <span className="text-red-600">{card.title}</span>
                  </h3>
                </div>

                {/* Card Content */}
                <div className="flex-1">
                  <p className="text-gray-600 mb-8 sm:leading-relaxed sm:text-justify leading-normal text-center md:leading-normal md:text-left">
                    {card.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
