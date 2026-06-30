"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { GlobeIcon } from "@/components/icons";
import Image from "next/image";
import Img from "../public/img/photo_2026-06-30_16-16-22.jpg";
const sections = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
] as const;

export function Navbar() {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          onClick={close}
          className="group flex items-center gap-2"
        >
          <Image src={Img} alt="My image" width={36} height={36} className="rounded-[9px]"/>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:block">
            {t.hero.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="cursor-react rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {t.nav[s]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="cursor-react flex items-center gap-1.5 rounded-lg border border-border bg-white/5 px-3 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/10"
            aria-label="Toggle language"
          >
            <GlobeIcon className="h-4 w-4 text-primary-light" />
            {t.nav.switchTo}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white/5 text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="glass-strong border-t border-border md:hidden"
          key={lang}
        >
          <div className="flex flex-col px-5 py-3">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={close}
                className="rounded-lg px-3 py-3 text-start text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {t.nav[s]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
