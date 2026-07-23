import AngledCard from "../AngledCard";

export default function Hero() {
  const HeroContent = [
    {
      id: 1,
      title: "Pendidikan Berkualitas",
      description:
        "Menyelenggarakan pendidikan kejuruan yang adaptif terhadap perkembangan teknologi dan selaras dengan kebutuhan dunia industri.",
    },
    {
      id: 2,
      title: "SMK Muhamka Tegal",
      description:
        "Berkomitmen mencetak generasi yang berakhlak mulia, terampil, dan mandiri melalui lingkungan belajar yang terintegrasi.",
    },
    {
      id: 3,
      title: "Fasilitas Berstandar",
      description:
        "Didukung dengan ruang praktik yang memadai untuk memberikan pengalaman kerja nyata dan mengasah kompetensi siswa.",
    },
  ];

  return (
    <>
      <div className="min-h-dvh relative">
        {/* <img src="/img/hero.png" alt="Gedung kampus 2 SMK Muhamkateg" className="object-cover absolute right-0 bottom-0 w-full h-full"/>; */}
        <video
          autoPlay
          muted
          loop
          playsInline
          id="myVideo"
          className="block object-cover absolute right-0 bottom-0 w-full h-full"
        >
          <source src="img/drone.MP4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* main card */}
        <div className="absolute bottom-0 left-0 z-100 w-full flex justify-between align-bottom p-7 lg:p-0 filter backdrop-blur-xs rounded-t-4xl">
          <AngledCard
            className="hidden lg:block"
            variant="slantRight"
            title={HeroContent[0].title}
            description={HeroContent[0].description}
          />

          <div className="text-start lg:text-center w-full lg:w-1/3 lg:mt-5">
            <h3 className="text-lg font-bold text-white mb-3">{HeroContent[1].title}</h3>

            <p className="text-slate-200 w-full text-sm">
              {HeroContent[1].description}
            </p>
          </div>

          <AngledCard
            className="hidden lg:block"
            variant="slantLeft"
            title={HeroContent[2].title}
            description={HeroContent[2].description}
          />
        </div>
      </div>
    </>
  );
}
