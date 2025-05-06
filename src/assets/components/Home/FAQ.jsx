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
            faq
          </h2>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 mt-2">
            Beberapa pertanyaan yang sering ditanyakan
          </h1>
        </div>

        {/* Desktop Layout */}
        {/* <section
          className="bg-cover bg-center rounded-lg py-0 px-0 md:py-24 md:px-8"
          style={{ backgroundImage: "url(/image/table_bg.png)" }}
        > */}
          <div className="hidden lg:flex relative gap-8">
            {/* Questions Card */}
            <div
              className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-1/2 h-full overflow-y-auto relative z-10 mt-6 transform transition-all duration-500 ease-in-out"
              style={{ transform: "translateX(6rem)" }}
            >
              <ul>
                {questions.map((question, index) => (
                  <li
                    key={index}
                    className={`p-4 mb-2 flex items-center justify-between rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${
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
                      } transition-transform duration-300 ease-in-out transform`}
                    >
                      &gt;
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Answers Card */}

            <div
              className={`bg-gray-100 shadow-lg p-8 pl-20 rounded-lg w-full lg:w-[500px] min-h-[440px] -mt-4 transition-opacity duration-500 ease-in-out transform ${
                activeQuestion === null
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-600 mb-4">
                {activeQuestion + 1}. {questions[activeQuestion]}
              </h3>
              <p className="text-gray-500">{answers[activeQuestion]}</p>
            </div>
          </div>
        {/* </section> */}

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {questions.map((question, index) => (
            <div
              key={index}
              className="collapse collapse-arrow border border-gray-200 bg-gray-100 rounded-lg mb-2"
            >
              <input
                type="checkbox"
                checked={activeQuestion === index}
                onChange={() =>
                  setActiveQuestion(activeQuestion === index ? -1 : index)
                }
              />
              <div className="collapse-title text-lg font-medium flex items-center gap-2">
                <i
                  className={`fa fa-circle ${
                    activeQuestion === index ? "text-red-500" : "text-red-300"
                  }`}
                />
                {question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-500">{answers[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
