import AngledCard from "../AngledCard";

export default function Hero() {
  const HeroContent = {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.",
  };

  return (
    <>
      <div className="container min-h-dvh relative">
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
            title={HeroContent.title}
            description={HeroContent.description}
          />

            <div className="text-start lg:text-center w-full lg:w-1/3 lg:mt-5">
              <h3 className="text-lg font-bold text-white mb-3">Lorem ipsum</h3>

              <p className="text-slate-200 w-full text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>

          <AngledCard
            className="hidden lg:block"
            variant="slantLeft"
            title={HeroContent.title}
            description={HeroContent.description}
          />
        </div>
      </div>
    </>
  );
}
