import { Award } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { certifications } from "@/app/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="SERTIFIKAT"
          title="Pelatihan & Sertifikat."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certificate) => (
            <GlassCard
              key={certificate.title}
              className="p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-200/70 text-pink-700">
                  <Award size={22} />
                </div>

                <div>
                  <h3 className="font-semibold leading-6 text-slate-800">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {certificate.organization}
                  </p>

                  <p className="mt-1 text-xs font-medium text-pink-600">
                    {certificate.date}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}