import Image from "next/image";

// Data Dummy Logo (Pastikan nanti ganti dengan URL Supabase kamu)
const mitraLogos = [
  {
    id: 1,
    name: "Panasonic",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Panasonic_logo_blue.svg/2560px-Panasonic_logo_blue.svg.png",
  },
  {
    id: 2,
    name: "AHM",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Astra_Honda_Motor_logo.svg/2560px-Astra_Honda_Motor_logo.svg.png",
  },
  {
    id: 3,
    name: "Daihatsu",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Daihatsu_Logo.svg/2560px-Daihatsu_Logo.svg.png",
  },
  {
    id: 4,
    name: "Astra Motor",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Astra_Motor_Logo.png",
  }, // Gunakan placeholder jika link mati
];

export default function Prospects() {
  return (
    <section className="w-full py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-10">
          Prospek Karir SMK Muhamka Tegal
        </h2>

        {/* Container Logo */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {mitraLogos.map((logo) => (
            <div
              key={logo.id}
              className="relative w-28 h-12 md:w-36 md:h-16 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.url}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
