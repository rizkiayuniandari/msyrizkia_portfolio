import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/app/data/portfolio";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {

  const { slug } = await params;

  const project = projects.find(
    (item, index) => `project-${index + 1}` === slug
  );

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-slate-800">
            Proyek tidak ditemukan
          </h1>

          <Link
            href="/#projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-800 px-6 py-3 text-white"
          >
            <ArrowLeft size={17} />
            Kembali ke Proyek
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-10 md:py-14">

      <div className="mx-auto max-w-6xl">

        {/* =========================
            BACK BUTTON
        ========================= */}

        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-5 py-3 text-sm font-medium text-slate-700 backdrop-blur-xl transition hover:bg-white/40"
        >
          <ArrowLeft size={17} />
          Kembali ke Proyek
        </Link>


        {/* =========================
            MAIN CARD
        ========================= */}

        <div className="overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/20 backdrop-blur-xl">


          {/* =========================
              PROJECT IMAGE
          ========================= */}

          <div
            className={`relative overflow-hidden ${
              slug === "project-1"
                ? "flex aspect-video items-center justify-center bg-white/10"
                : "aspect-video"
            }`}
          >

            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className={
                slug === "project-1"
                  ? "object-contain"
                  : "object-cover"
              }
            />

          </div>


          {/* =========================
              PROJECT CONTENT
          ========================= */}

          <div className="p-8 md:p-12">


            {/* CATEGORY */}

            <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
              {project.category}
            </p>


            {/* TITLE */}

            <h1 className="mt-3 font-serif text-4xl text-slate-800 md:text-6xl">
              {project.title}
            </h1>


            {/* DESCRIPTION */}

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              {project.description}
            </p>


            {/* =========================
                ROLE
            ========================= */}

            <div className="mt-8 rounded-2xl border border-white/30 bg-white/20 p-5">

              <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
                Role
              </p>

              <p className="mt-2 text-lg font-medium text-slate-700">
                {project.role}
              </p>

            </div>


            {/* =========================
                APA YANG SAYA LAKUKAN
            ========================= */}

            {project.responsibilities.length > 0 && (
              <section className="mt-12">

                <h2 className="text-2xl font-bold text-slate-800">
                  Apa yang saya lakukan
                </h2>

                <ul className="mt-5 space-y-3">

                  {project.responsibilities.map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-slate-600"
                      >

                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-500" />

                        <span className="leading-7">
                          {item}
                        </span>

                      </li>
                    )
                  )}

                </ul>

              </section>
            )}


            {/* =========================
                KOLABORASI TIM
            ========================= */}

            {project.collaboration.length > 0 && (
              <section className="mt-12">

                <h2 className="text-2xl font-bold text-slate-800">
                  Kolaborasi Tim
                </h2>

                <ul className="mt-5 space-y-3">

                  {project.collaboration.map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-slate-600"
                      >

                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-500" />

                        <span className="leading-7">
                          {item}
                        </span>

                      </li>
                    )
                  )}

                </ul>

              </section>
            )}

            {project.confidentialNote && (
              <p className="mt-4 text-sm font-bold text-slate-600">
                {project.confidentialNote}
              </p>
            )}

            {/* =========================
                PROTOTYPE
            ========================= */}

            {project.prototype.images.length > 0 && (
              <section className="mt-14">

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
                      Prototype
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-800">
                      Tampilan Prototype
                    </h2>

                  </div>


                  {/* LINK PROTOTYPE */}

                  {project.prototype.link &&
                    project.prototype.link !== "#" && (

                    <a
                      href={project.prototype.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                      {slug === "project-2" ? "Github" : "Lihat Prototype"}
                      <ExternalLink size={16} />
                    </a>

                  )}

                </div>


                {/* =========================
                    PROTOTYPE IMAGES
                ========================= */}

                {slug === "project-1" ? (

                  /* Menggabungkan seluruh gambar menjadi 1 Grid agar menyatu tanpa jeda */
                  <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">

                    {project.prototype.images.map((image, index) => (

                      <div
                        key={image}
                        className={`group overflow-hidden rounded-3xl border border-white/40 bg-white/20 ${
                          index === 5 ? "md:col-start-2" : ""
                        }`}
                      >

                        <div className="relative aspect-[9/16]">

                          <Image
                            src={image}
                            alt={`${project.title} prototype ${index + 1}`}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />

                        </div>

                      </div>

                    ))}

                  </div>

                ) : (

                  /* =========================
                      PROJECT 2, 3, 4, 5
                      DESKTOP
                  ========================= */

                  <div className="mt-8 grid gap-5 md:grid-cols-2">

                    {project.prototype.images.map(
                      (image, index) => (

                        <div
                          key={image}
                          className="group overflow-hidden rounded-3xl border border-white/40 bg-white/20"
                        >

                          <div className="relative aspect-video">

                            <Image
                              src={image}
                              alt={`${project.title} prototype ${index + 1}`}
                              fill
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />

                          </div>

                        </div>

                      )
                    )}

                  </div>

                )}

              </section>
            )}

          </div>

        </div>

      </div>

    </main>
  );
}