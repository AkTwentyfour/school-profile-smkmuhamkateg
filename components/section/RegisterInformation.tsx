import {
  DockIcon,
  File,
  FileArchive,
  FileAxis3D,
  FileBracesIcon,
  FileQuestionIcon,
  FileStack,
  FileText,
  FileType,
  FileUser,
  School2,
  Tally1,
  Tally2,
  Tally3,
} from "lucide-react";
import MajorCard from "../MajorCard";
import StepCount, { StepVariant } from "../StepCount";

type variant = "first" | "second" | "third" | "fourth";
const StepContent = [
  {
    variant: "first" as StepVariant,
    count: 1,
    title: "Isi Formulir",
  },
  {
    variant: "second" as StepVariant,
    count: 2,
    title: "Upload Berkas",
  },
  {
    variant: "third" as StepVariant,
    count: 3,
    title: "Verifikasi Data",
  },
  {
    variant: "Pengumuman" as StepVariant,
    count: 4,
    title: "Pengumuman",
  },
];

const DocumentNeeded = [
  {
    icon: FileText,
    title: "Fotokopi Ijazah/SKL",
  },
  {
    icon: FileType,
    title: "Fotokopi KK",
  },
  {
    icon: FileUser,
    title: "Pas Foto 3x4",
  },
  {
    icon: File,
    title: "Mengisi Formulir",
  },
];

const TimelineInformation = [
  {
    icon: Tally1,
    title: "Gelombang 1",
    timeline: "25 November 2025 - 28 Februari 2026",
  },
  {
    icon: Tally2,
    title: "Gelombang 2",
    timeline: "1 Maret 2026 - 30 April 2026",
  },
  {
    icon: Tally3,
    title: "Gelombang 3",
    timeline: "1 Mei 2026 - 27 Juni 2026",
  },
];

export default function RegisterInformation() {
  return (
    <section className="relative">
      <img
        src="/img/eclipse2.svg"
        alt="eclipse-gaphic"
        className="w-50 lg:w-80 absolute bottom-0 right-0"
      />
      <div className="container md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 box-border">
        {/* heading */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl font-bold mb-2 text-center">
            Informasi SPMB
          </h1>
          <p className="text-sm lg:text-base text-center w-full lg:max-w-xl">
            Bergabunglah dan jadilah bagian dari generasi siap kerja dengan
            pendidikan berbasis praktik dan industri.
          </p>
        </div>

        {/* step */}
        <div className="flex justify-center items-center gap-2 mt-15">
          {StepContent.map((item, index) => (
            <div className="flex justify-center items-center" key={index}>
              <StepCount
                variant={item.variant}
                count={item.count}
                title={item.title}
                key={index}
              />
              {index != StepContent.length - 1 && (
                <div className="hidden lg:block border-2 border-dashed mx-5 lg:mx-7 lg:w-15 border-black"></div>
              )}
            </div>
          ))}
        </div>

        {/* Document and Timeline Information */}
        <div className="flex flex-col lg:flex-row justify-center mt-15 gap-10">

          {/* Document section */}
          <div className="grid grid-cols-4 gap-2 w-full lg:w-2/4">

            {/* heading card */}
            <div className="relative col-span-4 flex justify-center items-center gap-5 p-5 border border-red-400 bg-red-50 rounded-xl">
              <div className="absolute -left-1 top-4 w-1 h-10 bg-red-500 rounded-l-full"></div>
              <FileStack className="h-15 w-15" />
              <h3 className="text-sm font-bold">
                Apa Saja sih dokumen yang diperlukan untuk pendaftaran?
              </h3>
            </div>

            {/* document needed */}
            {DocumentNeeded.map((item, index) => (
              <div
                className="col-span-1 flex flex-col gap-2 justify-evenly items-center text-center p-3 border border-red-400 bg-red-50 rounded-xl"
                key={index}
              >
                <item.icon className="h-10 w-10" />
                <h3 className="text-xs">{item.title}</h3>
              </div>
            ))}
          </div>

          {/* divider */}
          <div className="border-l-2 border-dashed border-brand-primary/50"></div>

          {/* Timeline information */}
          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            {TimelineInformation.map((item, index) => (
              <div className="relative flex justify-start items-center gap-2 col-span-4 p-5 border border-brand-primary bg-brand-primary/10 rounded-xl filter backdrop-blur-md" key={index}>
                <div className="absolute -left-1 top-4 w-1 h-12 bg-brand-primary rounded-l-full"></div>
                <item.icon className="h-5" />
                <div>
                  <h3 className="text-sm font-bold">
                    {item.title}
                  </h3>
                  <p className="text-xs">{item.timeline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
