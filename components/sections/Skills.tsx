import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  hardSkills,
  softSkills,
  languages,
} from "@/app/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="KETERAMPILAN"
          title="Apa yang saya kuasai."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
              Hard Skills
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {hardSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/40 bg-white/30 px-4 py-2 text-sm text-slate-700 backdrop-blur"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
              Soft Skills
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/40 bg-white/30 px-4 py-2 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
              Bahasa
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center justify-between rounded-2xl bg-white/20 p-4"
                >
                  <span className="font-medium text-slate-700">
                    {language.name}
                  </span>

                  <span className="text-sm text-slate-500">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}