"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { CapIcon, GlobeIcon } from "@/components/icons"

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker={t.education.kicker} heading={t.education.heading} />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            {t.education.items.map((e, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="glass flex gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary-light">
                    <CapIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{e.degree}</h3>
                    <p className="mt-1 text-sm text-accent">{e.school}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                      {e.period && <span>{e.period}</span>}
                      {e.period && <span className="h-1 w-1 rounded-full bg-muted" />}
                      <span className="font-medium text-primary-light">{e.detail}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="glass h-full rounded-2xl p-6">
              <div className="flex items-center gap-2">
                <GlobeIcon className="h-5 w-5 text-primary-light" />
                <h3 className="font-semibold text-foreground">{t.education.languagesHeading}</h3>
              </div>
              <div className="mt-5 space-y-4">
                {t.education.languages.map((l) => (
                  <div key={l.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{l.name}</span>
                      <span className="text-xs text-muted">{l.level}</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: ["Native", "زبان مادری"].includes(l.level as string) ? "100%" : "65%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
