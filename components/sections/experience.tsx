"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading kicker={t.experience.kicker} heading={t.experience.heading} />

        <div className="relative ps-8">
          {/* Timeline line */}
          <div className="absolute inset-y-0 start-0 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent" />

          <div className="space-y-10">
            {t.experience.items.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative">
                  {/* Dot */}
                  <span className="absolute -start-8 top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/50 rtl:translate-x-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent">{item.company}</p>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point, j) => (
                        <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
