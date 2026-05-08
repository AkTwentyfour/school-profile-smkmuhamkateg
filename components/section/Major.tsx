import { Cog } from "lucide-react";
import MajorCard from "../MajorCard";

const majorContent = [
  {
    icon: Cog,
    name: "TKRO",
    desc: "Fokus pada perawatan dan perbaikan kendaraan ringan berbasis teknologi modern.",
  },
  {
    icon: Cog,
    name: "TSM",
    desc: "Mempelajari servis, perawatan, dan sistem kerja sepeda motor secara profesional.",
  },
  {
    icon: Cog,
    name: "Teknik Elektronika",
    desc: "Mengenal rangkaian elektronik, perangkat listrik, dan sistem kontrol berbasis teknologi.",
  },
  {
    icon: Cog,
    name: "Teknik Pemesinan",
    desc: "Belajar mengoperasikan mesin dan membuat komponen presisi di bidang manufaktur.",
  },
  {
    icon: Cog,
    name: "Animasi",
    desc: "Mengembangkan kreativitas dalam membuat animasi digital, desain visual, dan multimedia.",
  },
];

export default function Major() {
  return (
    <section className="container md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 box-border">
      <h1 className="text-xl lg:text-2xl font-bold mb-2 text-center">
        Jurusan
      </h1>
      <p className="text-sm lg:text-base text-center">
        Tersedia 5 Jurusan nih buat kamu
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-7">
        {majorContent.map((item, index) => (
          <MajorCard
            key={index}
            name={item.name}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
