import React from "react";

// 1. Data Dummy Array Object
const materiData = [
  {
    id: 1,
    title: "Engine Tune Up",
    description: "Perawatan dan penyetelan mesin agar tetap optimal",
  },
  {
    id: 2,
    title: "Sistem Injeksi",
    description: "Memahami teknologi bahan bakar modern (EFI).",
  },
  {
    id: 3,
    title: "Diagnostik Kendaraan",
    description: "Mendeteksi kerusakan menggunakan alat modern.",
  },
  {
    id: 4,
    title: "Perawatan Berkala",
    description: "Servis rutin untuk menjaga performa kendaraan.",
  },
];

export default function MateriProdi() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Apa Yang Dipelajari
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Materi pembelajaran dirancang untuk membekali siswa dengan
            keterampilan dasar hingga lanjutan di bidang perawatan dan perbaikan
            kendaraan.
          </p>
        </div>

        {/* Grid Konten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {materiData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Shape Unik (Mirip Blob/Tetesan Air) */}
              <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-sm rounded-t-[2rem] rounded-bl-[2rem] rounded-br-md">
                {item.id}
              </div>

              {/* Teks Konten */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed px-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
