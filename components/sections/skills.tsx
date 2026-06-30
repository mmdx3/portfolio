"use client"

import { useLanguage } from "@/components/language-provider"
import { skills } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="relative px-5 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute start-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading kicker={t.skills.kicker} heading={t.skills.heading} />

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <Reveal key={skill} delay={i * 35} as="span">
              <span className="cursor-react group flex items-center gap-2 rounded-xl border border-border bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground/90 transition-all hover:-translate-y-1 hover:bg-primary/10 hover:text-white">
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-primary to-accent transition-transform group-hover:scale-150" />
                {skill}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
