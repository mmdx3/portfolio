"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker={t.about.kicker} heading={t.about.heading} />

        <div className="grid items-center gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="space-y-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
              {t.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {t.about.stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-5 text-center transition-transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-primary-light to-accent bg-clip-text text-3xl font-extrabold text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
