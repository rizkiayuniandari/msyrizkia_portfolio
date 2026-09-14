import { ArrowDown, ArrowUpRight } from "lucide-react";
import GradientOrb from "@/components/ui/GradientOrb";
import { personalInfo } from "@/app/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
    >
      <GradientOrb className="left-[-100px] top-[100px] h-[350px] w-[350px]" />
      <GradientOrb className="bottom-[-100px] right-[-80px] h-[400px] w-[400px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="mb-6 inline-block rounded-full border border-white/40 bg-white/30 px-5 py-2 text-sm font-semibold text-pink-700 backdrop-blur-xl">
            IT PROJECT ENTHUSIAST
          </span>

          <h1 className="font-serif text-6xl leading-[0.95] text-slate-800 md:text-8xl">
            Portfolio
          </h1>

          <h2 className="mt-7 text-2xl font-bold text-pink-600 md:text-3xl">
            {personalInfo.name}
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            {personalInfo.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
            >
              Proyek
              <ArrowUpRight
                size={17}
                className="transition group-hover:rotate-45"
              />
            </a>

            <a
              href="#about"
              className="flex items-center gap-2 rounded-full border border-white/50 bg-white/20 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur-xl transition hover:bg-white/40"
            >
              Tentang Saya
              <ArrowDown size={17} />
            </a>
            
            <a
              href={personalInfo.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/50 bg-white/20 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur-xl transition hover:bg-white/40"
            >
              CV
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[3rem] border border-white/40 bg-white/20 p-5 backdrop-blur-xl">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/20">
              <img
                src="/professional.jpeg"
                alt={personalInfo.name}
                className="h-full w-full object-cover object-[center_70%] scale-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}