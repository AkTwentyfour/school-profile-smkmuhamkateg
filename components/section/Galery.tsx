import { section } from "motion/react-client";
import ImageCard, { VariantImageCard } from "../ImageCard";

const styleVariant: VariantImageCard[] = ["default", "landscape", "portrait", "landscape", "default"]
const GaleryContent = [
  {
    id: 1,
    image: "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/tkro%20(2).jpeg",
    alt: "Kegiatan praktik siswa di bengkel otomotif",
  },
  {
    id: 2,
    image: "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/cafe%20(1).jpeg",
    alt: "Tempat bersantai siswa",
  },
  {
    id: 3,
    image: "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/classroom%20(2).jpeg",
    alt: "Ruang kelas modern yang nyaman dan ber-AC",
  },
  {
    id: 4,
    image: "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/main-building%20(2).jpeg",
    alt: "Suasana halaman sekolah yang luas",
  },
  {
    id: 5,
    image: "https://xhliznshwbogicaypsuk.supabase.co/storage/v1/object/public/muhamka-images/multimedia%20(1).jpeg",
    alt: "Laboratorium komputer dengan unit PC terbaru",
  }
];

export default function Galery() {
  return (
    <section className="container md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 box-border">
      {/* heading */}
      <div className="flex flex-col justify-center items-center mb-7">
        <h1 className="text-2xl font-bold">Galeri</h1>
        <p className="text-sm lg:text-base text-center w-full lg:max-w-xl">
          Dokumentasi berbagai kegiatan belajar, praktik, dan aktivitas siswa di sekolah.
        </p>
      </div>

      {/* main card, galery */}
      <div className="grid grid-cols-4 grid-rows-2 gap-1">
        {GaleryContent.map((item, index) => (
            <ImageCard key={index} variant={styleVariant[index]} image={item.image} index={index}/>
        ))}
      </div>
    </section>
  );
}
