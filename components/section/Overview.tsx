"use client";

import AngledCard from "../AngledCard";
import { Trophy, UserRoundPen, UsersRound, School } from "lucide-react";
import dynamic from "next/dynamic";
import { AnimatedNumber } from "../motion-primitives/animated-number";
import { useEffect, useRef, useState } from "react";

export default function Overview() {
  const [Guru, setGuru] = useState(0);
  const [Siswa, setSiswa] = useState(0);
  const [Jurusan, setJurusan] = useState(0);
  const [Prestasi, setPrestasi] = useState(0);

  useEffect(() => {
    setGuru(60);
    setSiswa(1200);
    setJurusan(5);
    setPrestasi(100);
  }, []);

  let overviewCardContent = [
    {
      icon: UserRoundPen,
      total: Guru,
      title: "Guru",
    },
    {
      icon: UsersRound,
      total: Siswa,
      title: "Siswa",
    },
    {
      icon: School,
      total: Jurusan,
      title: "Jurusan",
    },
    {
      icon: Trophy,
      total: Prestasi,
      title: "Prestasi",
    },
  ];

  return (
    <section className="container">
      {/* greetings */}
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">
          Selamat Datang di SMK Muhammadiyah Kramat
        </h1>
        <p>Pendidikan terbaik untuk masa depan</p>
      </div>

      {/* Main card (overview) */}
      <div className="relative">
        {/* angled shape */}
        <div className="static top-0 left-0 z-100 w-full flex justify-between align-bottom">
          <AngledCard className="hidden lg:block" variant="slantBottomRight" />
          <div className="w-1/4"></div>
          <AngledCard className="hidden lg:block" variant="slantBottomLeft" />
        </div>

        <img
          src="/img/hero.png"
          alt="Gedung kampus 2 SMK Muhamkateg"
          className="object-cover absolute right-0 bottom-0 w-full h-full -z-10"
        />

        {/* card content */}
        <div className="max-w-sm md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 box-border text-white">
          <div className="flex justify-center items-center gap-2 lg:gap-4">
            {overviewCardContent.map((item, index) => (
              <div
                className="filter backdrop-blur-xs border border-white rounded-2xl p-5 lg:px-10 lg:pt-20 lg:pb-6 flex flex-col items-center justify-center min-w-1/6"
                key={index}
              >
                <item.icon className="h-7 w-7 lg:h-14 lg:w-14" />
                <div className="flex justify-center items-center text-lg lg:text-4xl font-bold mt-2 lg:mt-5">
                  <AnimatedNumber
                    springOptions={{
                      bounce: 0,
                      duration: 3000,
                    }}
                    value={item.total}
                  />
                  {index == overviewCardContent.length - 1 && <div>+</div>}
                </div>
                <h4 className="text-sm lg:text-lg">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
