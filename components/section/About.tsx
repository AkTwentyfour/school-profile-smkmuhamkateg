export default function About() {
  return (
    <section className="container md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 box-border flex flex-col lg:flex-row justify-evenly items-center gap-2 md:gap-10">
      {/* image */}
      <div className="grid grid-cols-3 gap-1 lg:gap-3 w-full lg:w-1/2">
        <div className="col-span-2 rounded-2xl overflow-hidden h-30 sm:h-40">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800"
            alt="Garage 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 rounded-2xl overflow-hidden h-30 sm:h-40">
          <img
            src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400"
            alt="Garage 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 rounded-2xl overflow-hidden h-30 sm:h-40">
          <img
            src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400"
            alt="Garage 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 rounded-2xl overflow-hidden h-30 sm:h-40">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800"
            alt="Garage 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* about text */}
      <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
        <h1 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-7">
          Membangun Generasi Siap Kerja dan Berkarakter
        </h1>
        <p className="text-sm lg:text-base">
          SMK Muhammadiyah Kramat merupakan sekolah menengah kejuruan yang
          berkomitmen mencetak lulusan yang kompeten, berkarakter, dan siap
          menghadapi dunia kerja maupun melanjutkan pendidikan ke jenjang yang
          lebih tinggi. Dengan dukungan tenaga pengajar profesional serta
          fasilitas pembelajaran yang memadai, sekolah ini terus berinovasi
          dalam menghadirkan pendidikan yang relevan dengan kebutuhan industri.
        </p>
      </div>
    </section>
  );
}
