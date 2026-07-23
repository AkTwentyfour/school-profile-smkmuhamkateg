import Image from "next/image";

// 1. Data Dummy Array Object
const prodiData = {
  title: "Teknik Kendaraan Ringan Otomotif",
  breadcrumb: "Jurusan / Teknik Kendaraan Ringan Otomotif",
  // Menggunakan URL placeholder, nanti bisa diganti dengan URL dari Supabase kamu
  images: [
    "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/multimedia%20(1).jpeg",
    "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/multimedia%20(1).jpeg",
    "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/multimedia%20(1).jpeg",
  ],
};

export default function HeroProdi() {
  return (
    <section className="relative w-full pb-20 bg-gray-50">
      {/* 2. Background Biru/Ungu dengan Lengkungan (Rounded Bottom) */}
      <div className="bg-gradient-to-r from-blue-700 to-[#1e1b4b] w-full pt-40 pb-48 rounded-b-[3rem] px-4 md:px-8">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
            {prodiData.title}
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            {prodiData.breadcrumb}
          </p>
        </div>
      </div>

      {/* 3. Container Gambar (Overlapping dengan Negative Margin) */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 -mt-25 relative z-10">
        {/* Menggunakan Grid: Kolom tengah lebih lebar (span-2) dibanding sisi kiri & kanan (span-1) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Gambar Kiri */}
          <div className="md:col-span-1 relative h-64 md:h-50 rounded-2xl border-[6px] border-white shadow-lg overflow-hidden bg-gray-200">
            <Image
              src={prodiData.images[0]}
              alt="Fasilitas 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

          {/* Gambar Tengah (Lebih Lebar) */}
          <div className="md:col-span-2 relative h-64 md:h-50 rounded-2xl border-[6px] border-white shadow-lg overflow-hidden bg-gray-200">
            <Image
              src={prodiData.images[1]}
              alt="Fasilitas 2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Gambar Kanan */}
          <div className="md:col-span-1 relative h-64 md:h-50 rounded-2xl border-[6px] border-white shadow-lg overflow-hidden bg-gray-200">
            <Image
              src={prodiData.images[2]}
              alt="Fasilitas 3"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
