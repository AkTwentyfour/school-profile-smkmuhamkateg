"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageCard, { VariantImageCard } from "../ImageCard";
import Autoplay from "embla-carousel-autoplay";
import { delay } from "motion";

const FacilityContent = [
  // ================= GELOMBANG 1 (5 Item) =================
  [
    {
      image:
        "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=600&q=80",
      title: "Juara 1 LKS Tingkat Kabupaten",
      tag: ["Juara 1", "IT Software", "2024"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80",
      title: "Juara 1 LKS Tingkat Provinsi",
      tag: ["Juara 1", "Web Technologies", "2024"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80",
      title: "Juara 2 LKS Tingkat Kabupaten",
      tag: ["Juara 2", "Cyber Security", "2023"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80",
      title: "Juara 1 O2SN Tingkat Provinsi",
      tag: ["Juara 1", "Bola Voli", "2023"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
      title: "Juara Harapan 1 LKS Nasional",
      tag: ["Juara Harapan", "IT Software", "2023"],
    },
  ],

  // ================= GELOMBANG 2 (5 Item) =================
  [
    {
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
      title: "Juara 1 LKS Tingkat Kabupaten",
      tag: ["Juara 1", "Cloud Computing", "2024"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
      title: "Juara 2 Business Plan Nasional",
      tag: ["Juara 2", "Kewirausahaan", "2024"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=600&q=80",
      title: "Juara 1 Futsal Antar Pelajar",
      tag: ["Juara 1", "Olahraga", "2023"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80",
      title: "Medali Emas Pencak Silat",
      tag: ["Medali Emas", "Bela Diri", "2024"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80",
      title: "Juara 3 LKS Tingkat Provinsi",
      tag: ["Juara 3", "Graphic Design", "2023"],
    },
  ],

  // ================= GELOMBANG 3 (5 Item) =================
  [
    {
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
      title: "Juara 1 Lomba Lari Estafet",
      tag: ["Juara 1", "Atletik", "2024"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",
      title: "Juara Umum Pramuka",
      tag: ["Juara Umum", "Pramuka", "2023"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
      title: "Juara 1 Inovasi Teknologi Tepat Guna",
      tag: ["Juara 1", "IoT", "2024"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&q=80",
      title: "Top 10 Hackathon Pelajar",
      tag: ["Top 10", "Programming", "2024"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80",
      title: "Juara 2 Paduan Suara Kabupaten",
      tag: ["Juara 2", "Kesenian", "2023"],
    },
  ],

  // ================= GELOMBANG 4 (5 Item) =================
  [
    {
      image:
        "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=600&q=80",
      title: "Juara 1 LKS Tingkat Nasional",
      tag: ["Juara 1", "IT Network Systems", "2024"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
      title: "Juara 1 Basket Antar SMA/SMK",
      tag: ["Juara 1", "Basket", "2024"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1561489422-45de3d015e3e?w=600&q=80",
      title: "Juara 3 Cipta Web Apps",
      tag: ["Juara 3", "Web Development", "2023"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&q=80",
      title: "Penghargaan Siswa Teladan",
      tag: ["Terbaik", "Akademik", "2024"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=600&q=80",
      title: "Medali Perak Olimpiade Sains",
      tag: ["Medali Perak", "Sains Terapan", "2023"],
    },
  ],
];

const layoutPatterns: VariantImageCard[][] = [
  // Pattern 1: Atas (2-1-1), Bawah (2-2) -> Penuh

  ["landscape", "default", "default", "landscape", "landscape"],

  // Pattern 2: Atas (1-2-1), Bawah (2-1) -> Seperti screenshot kamu saat ini
  ["default", "landscape", "portrait", "landscape", "default"],

  // Pattern 3: Atas (2-2), Bawah (1-1-2) -> Penuh
  ["landscape", "default", "default", "landscape", "landscape"],

  // Pattern 4: Atas (1-1-2), Bawah (2-1) -> Ada 1 kotak kosong
  ["landscape", "portrait", "portrait", "default", "portrait"],
];

export default function Achievement() {
  return (
    <section className="relative">
      <img
        src="/img/eclipse3.svg"
        alt="eclipse-gaphic"
        className="w-70 lg:w-90 absolute top-70 left-0"
      />
      <div className="container md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 box-border">
        {/* heading */}
        <div className="flex flex-col justify-center items-center mb-7">
          <h1 className="text-xl lg:text-2xl font-bold mb-2 text-center">
            Prestasi
          </h1>
          <p className="text-sm lg:text-base text-center w-full lg:max-w-xl">
            Berbagai pencapaian yang diraih siswa sebagai bukti kualitas dan
            dedikasi dalam bidang akademik maupun non-akademik.
          </p>
        </div>

        {/* main card achievement */}
        <Carousel opts={{ loop: true }} plugins={[Autoplay({delay:5000})]}>
          <CarouselContent>
            {FacilityContent.map((item, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-2">
                  {item.map((content, indexContent) => (
                    <ImageCard
                      key={indexContent}
                      variant={layoutPatterns[index][indexContent]}
                      image={content.image}
                      title={content.title}
                      tag={content.tag}
                      index={indexContent}
                      className={indexContent! >= 4 && "hidden lg:block"}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
}
