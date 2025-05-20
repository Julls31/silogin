import React from "react";
import { Link } from "react-router-dom";

function FAQVendor() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-gray-800">
        <h1 className="text-6xl font-bold text-yellow-500 mb-4">🚧</h1>
        <h2 className="text-2xl font-semibold mb-2">
          Fitur dalam tahap pengembangan
        </h2>
        <p className="text-lg mb-6 text-gray-600 text-center">
          Halaman ini masih dalam proses pengembangan. Silakan kembali lagi
          nanti.
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </>
  );
}

export default FAQVendor;
