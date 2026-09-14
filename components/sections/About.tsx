import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import GradientOrb from "@/components/ui/GradientOrb";
import { about, personalInfo } from "@/app/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28"
    >
      <GradientOrb className="right-[-150px] top-[100px] h-[400px] w-[400px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Tentang Saya"
          title="Identitas Diri."
        />

        <GlassCard className="p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[0.25fr_1fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-pink-600">
                Halo Perkenalkan Saya
              </span>

              <h3 className="mt-3 font-serif text-3xl text-slate-800">
                {personalInfo.name}
              </h3>
            </div>

            <p className="text-lg leading-8 text-slate-600 md:text-xl">
              {about.description}
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}