import About from "@/components/section/About";
import Facility from "@/components/section/Facility";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Major from "@/components/section/Major";
import Overview from "@/components/section/Overview";
import RegisterInformation from "@/components/section/RegisterInformation";
import Achievement from "@/components/section/Achievement";
import Testimonial from "@/components/section/Testimonial";
import Galery from "@/components/section/Galery";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <About />
      <Major />
      <Facility />
      <RegisterInformation />
      <Achievement />
      <Testimonial />
      <Galery/>
      <Footer/>
    </>
  );
}
