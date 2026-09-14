"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Pendidikan", href: "#education" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Proyek", href: "#projects" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 pt-5">
      <nav
        className={`
          mx-auto max-w-6xl
          border border-white/40
          bg-white/20
          px-5 py-3
          backdrop-blur-xl
          shadow-lg
          md:rounded-full
          ${open ? "rounded-3xl" : "rounded-full"}
        `}
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="rounded-full bg-pink-200 px-5 py-2 text-sm font-bold tracking-wide text-pink-700"
          >
            INFORMATICS
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-pink-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/40 bg-white/20 p-2 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="mt-4 max-h-[70vh] overflow-y-auto border-t border-white/30 pt-4 md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-white/20"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}