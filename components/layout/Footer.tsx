import { personalInfo } from "@/app/data/portfolio";

export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/30 pt-6 text-sm text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}