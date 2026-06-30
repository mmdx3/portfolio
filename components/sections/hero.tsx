"use client"

import { useLanguage } from "@/components/language-provider"
import { ArrowIcon, MapPinIcon } from "@/components/icons"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24">
      {/* Background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 start-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-[120px] animate-glow" />
        <div className="absolute bottom-0 end-1/4 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-[120px] animate-glow" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-sm text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t.hero.available}
        </div>

        <p className="text-lg font-medium text-primary-light">{t.hero.greeting}</p>
        <h1 className="mt-2 text-balance text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-br from-white via-primary-light to-accent bg-clip-text text-transparent">
            {t.hero.name}
          </span>
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground/90 sm:text-3xl">{t.hero.title}</h2>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {t.hero.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="cursor-react group flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:brightness-110"
          >
            {t.hero.cta}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>
          <a
            href="#contact"
            className="cursor-react rounded-xl border border-border bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-primary/10"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted">
          <MapPinIcon className="h-4 w-4 text-primary-light" />
          {t.hero.location}
        </div>
      </div>
    </section>
  )
}
