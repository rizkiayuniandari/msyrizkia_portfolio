import { Briefcase } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { experience } from "@/app/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="PENGALAMAN"
          title="Dimana saja saya telah bekerja."
        />

        <div className="space-y-6">
          {experience.map((item) => (
            <GlassCard key={item.company} className="p-8 md:p-12">
              <div className="grid gap-7 md:grid-cols-[80px_1fr_auto]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-200/70 text-pink-700">
                  <Briefcase size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {item.company}
                  </h3>

                  <p className="mt-2 font-medium text-pink-600">
                    {item.position}
                  </p>

                  <ul className="mt-6 space-y-4">
                    {item.description.map((desc) => (
                      <li
                        key={desc}
                        className="flex gap-3 leading-7 text-slate-600"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-slate-500">
                  {item.period}
                  <br />
                  {item.location}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}