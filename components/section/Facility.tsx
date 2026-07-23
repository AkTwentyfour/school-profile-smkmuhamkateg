import { cn } from "@/lib/utils";
import ImageCard from "../ImageCard";

const FacilityContent = [
  {
    image:
      "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/library.jpeg",
    title: "perpustakaan",
    tag: ["1000+ Buku", "Ruang Nyaman", "Gen Z Friendly", "Wifi"],
  },
  {
    image:
      "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/tkro%20(11).jpeg",
    title: "Bengkel Praktik",
    tag: ["Perlengkapan Lengkap", "Standar Industri"],
  },
  {
    image:
      "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/tkro%20(1).jpeg",
    title: "Lab Elektronika",
    tag: ["Rangkaian Elektronik", "Standar Industri"],
  },
  {
    image:
      "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/classroom%20(3).jpeg",
    title: "Ruang Kelas",
    tag: ["Ruang Nyaman", "Proyektor", "AC"],
  },
  {
    image:
      "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/field.jpeg",
    title: "Lapangan",
    tag: ["Futsal", "Basket", "Sepakbola"],
  },
  {
    image:
      "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/multimedia%20(1).jpeg",
    title: "Laboratorium Komputer",
    tag: ["40 Unit PC", "Internet Cepat", "Software Lengkap"],
  },
];

export default function Facility() {
  return (
    <section className="relative" id="facility">
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
