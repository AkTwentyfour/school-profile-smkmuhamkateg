import { section } from "motion/react-client";
import ImageCard, { VariantImageCard } from "../ImageCard";

const styleVariant: VariantImageCard[] = ["default", "landscape", "portrait", "landscape", "default"]
const GaleryContent = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80",
    alt: "Kegiatan praktik siswa di bengkel otomotif",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80",
    alt: "Fasilitas alat ukur di laboratorium elektronika",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    alt: "Ruang kelas modern yang nyaman dan ber-AC",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    alt: "Suasana perpustakaan sekolah yang tenang",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&q=80",
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
