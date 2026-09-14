import { GraduationCap, BookOpen } from "lucide-react";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { educations } from "@/app/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="PENDIDIKAN"
          title="Pendidikan Saya."
        />

        <div className="space-y-6">
          {educations.map((edu) => (
            <GlassCard
              key={edu.institution}
              className="relative overflow-hidden p-8 md:p-12"
            >
              <div className="grid gap-8 md:grid-cols-[100px_1fr_auto] md:items-start">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-pink-200/70 text-pink-700">
                  {edu.logo && edu.logo.trim() !== "" ? (
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <GraduationCap size={38} />
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {edu.institution}
                  </h3>

                  <p className="mt-2 text-lg text-slate-600">
                    {edu.degree}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {edu.gpa && (
                      <span className="rounded-full bg-white/40 px-4 py-2 text-sm text-slate-600">
                        GPA {edu.gpa}
                      </span>
                    )}

                    <span className="rounded-full bg-white/40 px-4 py-2 text-sm text-slate-600">
                      {edu.location}
                    </span>
                  </div>

                  {edu.thesis && (
                    <div className="mt-7 rounded-2xl border border-white/30 bg-white/20 p-5">
                      <div className="flex items-start gap-3">
                        <BookOpen
                          size={20}
                          className="mt-1 shrink-0 text-pink-600"
                        />

                        <div>
                          <p className="text-sm font-semibold text-pink-600">
                            Skripsi
                          </p>

                          <p className="mt-2 leading-7 text-slate-600">
                            {edu.thesis}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-sm font-medium text-slate-500">
                  {edu.period}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}