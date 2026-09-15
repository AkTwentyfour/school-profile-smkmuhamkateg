import { Mail, MapPin, Phone, Send, Download } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const Menu = [
  {
    title: "Beranda",
    link: "#beranda",
  },
  {
    title: "Jurusan",
    link: "#jurusan",
  },
  {
    title: "Fasilitas",
    link: "#fasilitas",
  },
  {
    title: "Pendaftaran",
    link: "#pendaftaran",
  },
  {
    title: "Prestasi",
    link: "#prestasi",
  },
  {
    title: "Kata Alumni",
    link: "#kata_alumni",
  },
  {
    title: "Galeri",
    link: "#galeri",
  },
  {
    title: "Kontak",
    link: "#kontak",
  },
];

const Contact = [
  {
    icon: Phone,
    title: "08xxxxxxxxxx",
    link: "#",
  },
  {
    icon: MapPin,
    title: "SMK Muhammadiyah Kramat Kampus 1",
    link: "https://maps.app.goo.gl/PQjiebEmXK5kgVM36",
  },
  {
    icon: MapPin,
    title: "SMK Muhammadiyah Kramat Kampus 2",
    link: "https://maps.app.goo.gl/XanVCpKc26CU5R3C8",
  },
  {
    icon: Mail,
    title: "SMK Muhammadiyah Kramat Kampus 1",
    link: "https://maps.app.goo.gl/PQjiebEmXK5kgVM36",
  },
];

export default function Footer() {
  return (
    <section className="container md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-10 box-border">
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-5">
        {/* about */}
        <div className="w-full lg:w-1/4">
          <div className="flex items-center gap-3">
            <img
              src="/img/logo.png"
              alt="Logo SMK Muhamkateg"
              className="h-14"
            />
            <h3 className="text-sm lg:text-xl font-bold">SMK Muhamka Tegal</h3>
          </div>
          <p className="text-xs lg:text-sm my-5">
            Sekolah menengah kejuruan yang berfokus pada pengembangan
            keterampilan, karakter, dan kesiapan kerja siswa untuk menghadapi
            dunia industri.
          </p>
          <div className="flex items-center gap-2">
            <Link className="" href="https://www.instagram.com/smkmuhamkateg/">
              <img src="/img/instagram.svg" alt="" className="h-4" />
            </Link>
            <Link
              className=""
              href="https://www.facebook.com/smkmuhammadiyahkramat.tegal/"
            >
              <img src="/img/facebook.svg" alt="" className="h-4" />
            </Link>
            <Link className="" href="https://x.com/smkmuhamkateg">
              <img src="/img/twitter.svg" alt="" className="h-4" />
            </Link>
            <Link className="" href="www.youtube.com/@smkmuhamkategal6042">
              <img src="/img/youtube.svg" alt="" className="h-4" />
            </Link>
          </div>
        </div>

        <div className="flex justify-between lg:justify-evenly gap-10 ">
          {/* menu */}
          <div className=" w-2/4">
            <h4 className="text-xs lg:text-sm mb-3 font-bold">Menu</h4>
            <div className="flex flex-col">
              {Menu.map((item, index) => (
                <Link href={item.link} key={index}>
                  <span className="text-xs lg:text-sm">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* contact */}
          <div className=" w-3/4">
            <h4 className="text-xs lg:text-sm font-bold mb-3">Kontak</h4>
            <div className="flex flex-col gap-2">
              {Contact.map((item, index) => (
                <Link
                  href={item.link}
                  className="flex items-start gap-1"
                  key={index}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs lg:text-sm">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* suggestion field & download document */}
        <div className="w-full lg:w-1/5 flex flex-col gap-6">
          {/* Kritik dan Saran */}
          <div>
            <h4 className="text-xs lg:text-sm font-bold mb-3">
              Kritik dan Saran
            </h4>
            <div className="flex items-center gap-2">
              <Input type="text" id="#suggestion" />
              <button className="bg-black p-2 rounded-sm hover:bg-gray-800 transition-colors cursor-pointer border-none">
                <Send className="h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Dokumen Laporan Download */}
          <div id="download">
            <h4 className="text-xs lg:text-sm font-bold mb-3">
              Dokumen Publik
            </h4>
            <a
              href="/REKAPITULASI REALISASI PENGGUNAAN DANA BOSP TAHUN 2026.pdf"
              download="REKAPITULASI REALISASI PENGGUNAAN DANA BOSP TAHUN 2026.pdf"
              className="rounded-2xl! flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 transition duration-300 w-full"
            >
              <Download className="h-4 w-4" />
              Unduh Laporan BOSP 2026
            </a>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-15 gap-2 border-t pt-5 mt-10">
        <span className="text-xs lg:text-sm">
          © 2026 SMK Muhammadiyah Kramat. All rights reserved.
        </span>
        <span className="text-xs lg:text-sm">
          cdtwin.corp | design & developing
        </span>
      </div>
    </section>
  );
}
