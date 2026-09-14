"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/data/portfolio";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * Sliding dibagi menjadi 3 posisi:
   * 0 = posisi awal
   * 1 = posisi tengah
   * 2 = posisi akhir
   *
   * Perhitungan menggunakan scrollWidth dan clientWidth
   * agar otomatis menyesuaikan ukuran HP maupun desktop.
   */
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const maxScrollLeft =
      container.scrollWidth - container.clientWidth;

    const targetScrollLeft =
      (maxScrollLeft / 2) * index;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  /*
   * Menentukan indikator aktif berdasarkan posisi scroll.
   *
   * Tidak berdasarkan jumlah project, tetapi berdasarkan
   * posisi scroll keseluruhan sehingga responsif di semua ukuran layar.
   */
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const maxScrollLeft =
      container.scrollWidth - container.clientWidth;

    if (maxScrollLeft <= 0) {
      setActiveIndex(0);
      return;
    }

    const scrollProgress =
      container.scrollLeft / maxScrollLeft;

    if (scrollProgress < 1 / 3) {
      setActiveIndex(0);
    } else if (scrollProgress < 2 / 3) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  };

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        <SectionTitle
          eyebrow="PROYEK"
          title="Beberapa proyek yang saya kerjakan."
        />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => {

            // URL project dibuat berdasarkan urutan project
            const projectSlug = `project-${index + 1}`;

            return (
              <Link
                key={projectSlug}
                href={`/projects/${projectSlug}`}
                className="group block w-[300px] shrink-0 snap-center sm:w-[360px]"
              >
                <GlassCard className="flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:bg-white/20">

                  {/* GAMBAR PROJECT */}
                  <div className="relative aspect-video shrink-0 overflow-hidden bg-white/30">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-7">

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

                    <p className="mt-4 line-clamp-4 leading-7 text-slate-600">
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

        {/* DOT INDICATOR - HANYA 3 */}
        <div className="mt-6 flex justify-center gap-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Ke posisi proyek ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-pink-600"
                  : "w-2.5 bg-slate-400/50 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}