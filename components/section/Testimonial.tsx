import { Quote, QuoteIcon } from "lucide-react";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";

const AlumniTestimonials = [
  {
    id: 1,
    quote:
      "Selama belajar di TKRO, saya mendapatkan banyak pengalaman praktik yang sangat membantu saat langsung terjun ke dunia kerja.",
    name: "Andi Pratama",
    year: "2024",
    role: "Operator AHM Pusat",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    quote:
      "Fasilitas laboratorium komputer yang mumpuni sangat menunjang karier saya. Pembekalan skill programming dari guru membuat saya siap bersaing.",
    name: "Budi Santoso",
    year: "2023",
    role: "Junior Web Developer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    quote:
      "Disiplin dan standar industri yang diterapkan selama praktik bengkel membuat saya sangat mudah beradaptasi dengan lingkungan kerja profesional.",
    name: "Siti Aisyah",
    year: "2022",
    role: "Teknisi PT Epson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    quote:
      "Pembelajaran tidak hanya soal teori, tapi praktik langsung dengan mesin modern. Terima kasih sudah membantu saya membuka usaha mandiri.",
    name: "Dimas Anggara",
    year: "2021",
    role: "Owner Dimas Motor",
    avatar:
      "https://images.unsplash.com/photo-1542343633-ce3256f2183e?w=150&h=150&fit=crop",
  },
  {
    id: 5,
    quote:
      "Sertifikasi yang difasilitasi sekolah menjadi nilai plus saat melamar pekerjaan. Lulusan sekolah ini memang beda dan sangat kompeten!",
    name: "Kevin Setiawan",
    year: "2024",
    role: "Network Engineer",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
  },
  {
    id: 6,
    quote:
      "Keaktifan di organisasi sekolah membentuk karakter kepemimpinan saya. Ini sangat berguna untuk mengelola tim di tempat kerja.",
    name: "Rina Kusuma",
    year: "2023",
    role: "Staff Administrasi",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 7,
    quote:
      "Saya belajar banyak tentang manajemen waktu dan ketelitian di jurusan Akuntansi. Sekarang saya dipercaya memegang keuangan vendor besar.",
    name: "Diah Uzumaki",
    year: "2022",
    role: "Finance Accounting",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop",
  },
  {
    id: 8,
    quote:
      "Ilmu kelistrikan yang diajarkan sangat mendalam. Dari nol sampai bisa instalasi industri, semua berkat bimbingan guru-guru hebat.",
    name: "Fajar Ramadhan",
    year: "2021",
    role: "Electrical Technician",
    avatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop",
  },
  {
    id: 9,
    quote:
      "Dunia fashion ternyata sangat luas. Berawal dari tugas jahit di sekolah, sekarang saya bisa magang di butik ternama di Jakarta.",
    name: "Maya Indah",
    year: "2024",
    role: "Fashion Assistant",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
  },
  {
    id: 10,
    quote:
      "Teknik alat berat adalah jurusan yang menantang. Berkat sertifikat sekolah, saya langsung diterima di perusahaan pertambangan.",
    name: "Hendra Wijaya",
    year: "2023",
    role: "Heavy Equipment Mechanic",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop",
  },
  {
    id: 11,
    quote:
      "Ilmu multimedia yang saya dapat sangat relevan. Sekarang saya bekerja sebagai editor video yang menangani klien dari luar negeri.",
    name: "Gilang Permana",
    year: "2022",
    role: "Video Editor",
    avatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop",
  },
  {
    id: 12,
    quote:
      "Pelajaran pemasaran digital di sekolah membuka mata saya tentang potensi jualan online. Sekarang bisnis kecil saya berkembang pesat.",
    name: "Eka Putri",
    year: "2024",
    role: "Digital Marketer",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop",
  },
];

export default function Testimonial() {
  return (
    <section className="container md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 box-border">
      {/* heading */}
      <div className="flex flex-col justify-center items-center mb-7">
        <h1 className="text-2xl font-bold">Kata Alumni</h1>
        <p className="text-sm lg:text-base text-center w-full lg:max-w-xl">
          Testimoni langsung dari alumni yang telah melanjutkan pendidikan
          maupun berkarier di berbagai bidang.
        </p>
      </div>

      {/* main Testimonial card */}
      <InfiniteSlider gap={10} speedOnHover={40}>
        {AlumniTestimonials.map((item, index) => (
          <div
            className="flex flex-col w-3xs justify-center bg-brand-primary/10 border border-brand-primary rounded-xl p-3"
            key={index}
          >
            <img
              src={item.avatar}
              alt={"Testimoni Alumni, ananda " + item.name}
              className="h-10 w-10 rounded-full object-center"
            />
            <p className="text-xs lg:text-sm my-5">{item.quote}</p>
            <span className="font-bold text-xs mt-auto">
              {item.name}, {item.year}
            </span>
            <span className="text-xs text-muted-foreground">{item.role}</span>
          </div>
        ))}
      </InfiniteSlider>
      
    </section>
  );
}
