import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/data/portfolio";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        <SectionTitle
          eyebrow="PROYEK"
          title="Beberapa proyek yang saya kerjakan."
        />

        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => {

            // URL project dibuat berdasarkan urutan project
            const projectSlug = `project-${index + 1}`;

            return (
              <Link
                key={projectSlug}
                href={`/projects/${projectSlug}`}
                className="group block"
              >
                <GlassCard className="overflow-hidden transition duration-300 hover:-translate-y-1 hover:bg-white/20">

                  {/* GAMBAR PROJECT */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">

                    <div className="flex items-start justify-between gap-4">

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
                          {project.category}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-slate-800">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/40 transition group-hover:bg-white/70">
                        <ArrowUpRight
                          size={20}
                          className="text-slate-700"
                        />
                      </div>

                    </div>

                    <p className="mt-4 leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-white/40 px-3 py-1.5 text-xs text-slate-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>

                </GlassCard>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}