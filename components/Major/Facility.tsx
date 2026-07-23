import Image from "next/image";

// Data Dummy untuk Fasilitas
const fasilitasData = [
  {
    id: 1,
    title: "Perpustakaan",
    // Gunakan link Supabase kamu nanti
    image: "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/multimedia%20(1).jpeg",
    tags: ["1000+ Buku", "Ruang Nyaman", "Gen Z Friendly", "WIFI"],
    span: "md:col-span-2", // Gambar ini mengambil 2 kolom (lebih lebar)
  },
  {
    id: 2,
    title: "Bengkel Praktik",
    image: "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/multimedia%20(1).jpeg",
    tags: ["Perangkat Lengkap", "Standar Industri"],
    span: "md:col-span-1",
  },
  {
    id: 3,
    title: "Lab Elektronika",
    image: "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/multimedia%20(1).jpeg",
    tags: ["Rangkaian Elektronik", "Standar Industri"],
    span: "md:col-span-1",
  },
  {
    id: 4,
    title: "Ruang Kelas",
    image: "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/multimedia%20(1).jpeg",
    tags: ["Ruang Nyaman", "Proyektor", "AC"],
    span: "md:col-span-1",
  },
  {
    id: 5,
    title: "Lapangan",
    image: "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/multimedia%20(1).jpeg",
    tags: ["Futsal", "Basket", "Sepakbola"],
    span: "md:col-span-1",
  },
  {
    id: 6,
    title: "Laboratorium Komputer",
    image: "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/multimedia%20(1).jpeg",
    tags: ["40 Unit PC", "Internet Cepat", "Software Lengkap"],
    span: "md:col-span-2", // Gambar ini mengambil 2 kolom (lebih lebar)
  },
];

export default function Facility() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Fasilitas</h2>
          <p className="text-gray-600">Lingkungan Belajar yang Nyaman & Lengkap</p>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {fasilitasData.map((item) => (
            <div 
              key={item.id} 
              className={`relative h-64 md:h-72 rounded-2xl overflow-hidden group ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay Gradient Hitam dari bawah agar teks terbaca */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
                <h3 className="text-white font-semibold text-xl mb-3">
                  {item.title}
                </h3>
                
                {/* Looping Tags (Pill Shape) */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-[10px] md:text-xs text-white border border-white/60 rounded-full px-3 py-1 bg-white/10 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}