import React, { useState } from "react";
import Swal from 'sweetalert2';

function Calculator() {
  const [kodeBarang, setKodeBarang] = useState("");
  const [nilaiBarang, setNilaiBarang] = useState("");
  const [hasil, setHasil] = useState(null);
  const [loading, setLoading] = useState(false);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nilai = parseInt(nilaiBarang.replace(/[^\d]/g, ""));
    if (!kodeBarang || isNaN(nilai)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Kode barang atau nilai tidak valid.',
      });
      return;
    }

    setLoading(true);
    setHasil(null);

    const endpoint = "/api/v1/premium-calculation-landing";
    const payload = {
      code: kodeBarang,
      total_amount: nilai.toString(),
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: "1234",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error("Gagal menghitung premi.");
      }

      const result = await response.json();

      setHasil({
        kode: kodeBarang,
        nilai: nilai,
        premi: result.total_premium,
        nama: result.product_name,
        deskripsi:
          result.premium_mpar === 0.0
            ? "Nilai Asuransi ini sudah termasuk dengan nilai asuransi pengiriman"
            : "Nilai Asuransi ini sudah termasuk dengan nilai asuransi asset/barang dan asuransi pengiriman",
      });      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Terjadi Kesalahan',
        text: 'Terjadi kesalahan saat menghitung premi atau kode barang tidak ditemukan.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 mx-auto py-24">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Kalkulator Perhitungan Premi</h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded shadow flex flex-col md:flex-row md:items-end gap-4 border-l-4 border-gray-500"
      >
        <div className="w-full md:flex-1">
          <label className="font-semibold block mb-1">
            Kode Barang (Sesuai KBKI)
          </label>
          <input
            type="text"
            value={kodeBarang}
            onChange={(e) => setKodeBarang(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Masukkan kode barang"
          />
        </div>
        <div className="w-full md:flex-1">
          <label className="font-semibold block mb-1">Nilai Barang</label>
          <input
            type="text"
            value={nilaiBarang}
            onChange={(e) => setNilaiBarang(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Masukkan nilai barang"
          />
        </div>
        <button
          type="submit"
          className="btn bg-[#DB1F26] text-white hover:bg-[#b51a20] px-6 py-2"
          disabled={loading}
        >
          {loading ? "Memproses..." : "SUBMIT"}
        </button>
      </form>

      {/* Hasil */}
      {hasil && (
        <div className="mt-8 animate-fade-in">
          <h1 className="text-xl font-semibold mb-4 flex items-center gap-4">
            Hasil Perhitungan
            <span className="flex-1 h-px bg-gray-300"></span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-red-100 p-4 rounded border-l-4 border-red-500">
            <div>
              <p className="font-semibold">Kode Barang:</p>
              <p className="text-red-700 font-bold mb-2">{hasil.kode}</p>

              <p className="font-semibold">Nama Barang:</p>
              <p className="text-red-700 font-bold mb-2">{hasil.nama}</p>

              <p className="font-semibold">Nilai Barang:</p>
              <p className="text-red-700 font-bold mb-2">
                {formatRupiah(hasil.nilai)}
              </p>
            </div>

            <div>
              <p className="font-semibold">Nilai Premi Asuransi:</p>
              <p className="text-red-700 font-bold text-xl mb-4">
                {formatRupiah(hasil.premi)}
              </p>

              <p className="font-semibold">Deskripsi Asuransi</p>
              <p className="text-gray-700">{hasil.deskripsi}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculator;
