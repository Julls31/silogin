import React, { useState } from "react";

function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const questions = [
    "Bagaimana cara menghubungi Customer Care?",
    "Berapa lama waktu tanggapan untuk email atau pesan?",
    "Bagaimana cara melaporkan masalah atau keluhan?",
    "Apakah ada panduan penggunaan produk/layanan?",
    "Bagaimana cara melacak status laporan saya?",
  ];

  const answers = [
    "Anda dapat menghubungi Customer Care melalui email atau telepon.",
    "Kami berusaha memberikan tanggapan secepat mungkin. Biasanya, Anda akan mendapatkan balasan dalam waktu maksimal 1x24 jam.",
    "Silakan gunakan formulir pengaduan yang tersedia di aplikasi kami.",
    "Panduan dapat ditemukan di menu 'Bantuan' pada aplikasi.",
    "Anda dapat memantau status laporan melalui dashboard pengguna.",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-base-100 lg:p-8 pt-8 rounded-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-gray-500 uppercase mb-8 tracking-wide">
            Case Studies
          </h2>
          <h1 className="text-3xl font-semibold text-gray-600 mt-2">
            Beberapa pertanyaan yang sering ditanyakan
          </h1>
        </div>

        {/* FAQ Section */}
        <div className="relative flex lg:gap-8">
          {/* Questions Card */}
          <div
            className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-1/2 h-[370px] overflow-y-auto relative z-10 my-4"
            style={{ transform: "translateX(6rem)" }}
          >
            <ul>
              {questions.map((question, index) => (
                <li
                  key={index}
                  className={`p-4 mb-2 flex items-center justify-between rounded-lg cursor-pointer ${
                    activeQuestion === index
                      ? "bg-red-100 text-red-500"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => setActiveQuestion(index)}
                >
                  {/* Question with Circle Icon */}
                  <span className="flex items-center gap-2">
                    <i
                      className={`fa fa-circle ${
                        activeQuestion === index
                          ? "text-red-500"
                          : "text-red-300"
                      }`}
                    />
                    {question}
                  </span>

                  {/* Arrow Icon */}
                  <span
                    className={`${
                      activeQuestion === index
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    &gt;
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Answers Card */}
          <div className="bg-gray-100 shadow-lg p-8 pl-24 rounded-lg w-full lg:w-1/2 min-h-[400px]">
            <h3 className="text-xl font-semibold text-gray-600 mb-4">
              {activeQuestion + 1}. {questions[activeQuestion]}
            </h3>
            <p className="text-gray-500">{answers[activeQuestion]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
