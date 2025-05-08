import React from "react";

function Polis() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="bg-base-100 lg:p-8 pt-8 rounded-lg">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-lg font-semibold text-gray-500 uppercase mb-8 tracking-wide">
              polis
            </h2>
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 mt-2">
              Wording Polis Asuransi
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-center px-4 md:px-0 py-0">
            Dokumen tertulis yang menjelaskan secara rinci syarat, ketentuan,
            jaminan (pertanggungan), pengecualian, dan prosedur klaim dari suatu
            produk asuransi. Ini adalah bagian utama dari polis asuransi yang
            menjadi dasar hubungan hukum antara pihak tertanggung (nasabah) dan
            penanggung (perusahaan asuransi).
          </p>

          {/* Form Input */}
          <div className="mt-12 px-4 md:px-0">
            <form className="flex flex-col md:flex-row items-center gap-4 w-full">
              {/* Nomor Polis */}
              <div className="flex flex-col w-full ">
                <label className="text-gray-700 mb-2 font-semibold text-center md:text-left">
                  Nomor Polis
                </label>
                <input
                  type="text"
                  placeholder="Masukkan Nomor Polis"
                  className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col w-full ">
                <label className="text-gray-700 mb-2 font-semibold text-center md:text-left">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Masukkan Email"
                  className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col w-full md:w-auto">
                <label className="text-transparent mb-2 font-semibold">
                  Submit
                </label>
                <button
                  type="submit"
                  className="flex items-center justify-center bg-red-600 text-white rounded-lg p-3 hover:bg-red-700 transition duration-300 w-full md:w-auto"
                >
                  <i className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Polis;
