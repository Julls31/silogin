import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-gray-800">
      <h1 className="text-8xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg mb-6 text-gray-600">
        Halaman yang anda cari tidak ada.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
      >
        Beranda
      </Link>
    </div>
  );
}

export default NotFound;
