import { cn } from "@/lib/utils";
import ImageCard from "../ImageCard";

const FacilityContent = [
  {
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000&q=80",
    title: "perpustakaan",
    tag: ["1000+ Buku", "Ruang Nyaman", "Gen Z Friendly", "Wifi"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80",
    title: "Bengkel Praktik",
    tag: ["Perlengkapan Lengkap", "Standar Industri"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
    title: "Lab Elektronika",
    tag: ["Rangkaian Elektronik", "Standar Industri"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    title: "Ruang Kelas",
    tag: ["Ruang Nyaman", "Proyektor", "AC"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=600&q=80",
    title: "Lapangan",
    tag: ["Futsal", "Basket", "Sepakbola"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1000&q=80",
    title: "Laboratorium Komputer",
    tag: ["40 Unit PC", "Internet Cepat", "Software Lengkap"],
  },
];

export default function Facility() {
  return (
    <section className="relative">
      <img
        src="/img/eclipse.svg"
        alt="eclipse-gaphic"
        className="w-70 lg:w-80 absolute top-50 left-0"
      />
      <div className="container md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 box-border">
        <h1 className="text-xl lg:text-2xl font-bold mb-2 text-center">
          Fasilitas
        </h1>
        <p className="text-sm lg:text-base text-center">
          Lingkungan Belajar yang Nyaman & Lengkap
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7">
          {FacilityContent.map((item, index) => (
            <ImageCard variant={index == 0 || index == FacilityContent.length -1 ? "landscape" : "default"} index={index} image={item.image} title={item.title} tag={item.tag} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}
