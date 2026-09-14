import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/app/data/portfolio";

const contacts = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: personalInfo.linkedin,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/rizkiayuniandari",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/masayu_r",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/6282248472562",
  },
  {
    name: "Email",
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="KONTAK"
          title="Mari terhubung."
          description="Terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar berdiskusi. Mari terhubung melalui platform di bawah ini!"
        />

        <GlassCard className="p-8 md:p-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.name}
                  href={contact.href}
                  target={
                    contact.name === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    contact.name === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group rounded-3xl border border-white/30 bg-white/20 p-6 transition duration-300 hover:-translate-y-2 hover:bg-white/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/50 text-slate-700">
                      <Icon size={23} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <p className="mt-5 font-semibold text-slate-800">
                    {contact.name}
                  </p>
                </a>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}