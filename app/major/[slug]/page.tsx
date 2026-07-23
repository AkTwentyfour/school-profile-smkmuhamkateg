import { Header } from "@/components/header";
import Facility from "@/components/Major/Facility";
import HeroProdi from "@/components/Major/HeroProdi";
import MateriProdi from "@/components/Major/MateriProdi";
import Prospects from "@/components/Major/Prospects";
import Footer from "@/components/section/Footer";
// Import Navbar kamu di sini, misalnya:
// import Navbar from "@/components/Navbar";

export default function DetailJurusanPage({ params }: { params: { slug: string } }) {
  // params.slug akan berisi teks dari URL. 
  // Contoh: jika URL-nya /jurusan/tkro, maka params.slug nilainya "tkro"
  
  return (
    <main className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <Header />
      
      {/* 
        Nanti kita bisa oper data spesifik (berdasarkan slug) ke komponen Hero, 
        tapi untuk sekarang kita tampilkan dulu Hero dummy-nya 
      */}
      <HeroProdi />
      <MateriProdi/>
      <Facility/>
      <Prospects/>
      <Footer/>

      {/* Nanti komponen-komponen selanjutnya (Visi Misi, Fasilitas, dll) ditaruh di bawah sini */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center">
          Konten selanjutnya untuk jurusan {params.slug} akan ada di sini.
        </h2>
      </div>
    </main>
  );
}