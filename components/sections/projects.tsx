"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { ExternalIcon, GithubIcon } from "@/components/icons"

export function Projects() {
  const { t } = useLanguage()

  const projects = t.projects.items as Array<{
    name: string
    desc: string
    stack: string[]
    link?: string
    repo?: string
    inProgress?: boolean
  }>

  return (
    <section id="projects" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker={t.projects.kicker} heading={t.projects.heading} />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className="cursor-react group relative h-full overflow-hidden rounded-2xl border border-border bg-white/[0.03] p-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -end-16 -top-16 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary-light">
                      {p.name}
                    </h3>
                    {"inProgress" in p && p.inProgress && (
                      <span className="shrink-0 rounded-full border border-accent-pink/40 bg-accent-pink/10 px-2.5 py-1 text-xs font-medium text-accent-pink">
                        {t.projects.inProgress}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s: string) => (
                      <span
                        key={s}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {("link" in p || "repo" in p) && (
                    <div className="mt-6 flex items-center gap-4">
                      {"link" in p && p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-primary-light transition-colors hover:text-accent"
                        >
                          <ExternalIcon className="h-4 w-4" />
                          {t.projects.visit}
                        </a>
                      )}
                      {"repo" in p && p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
                        >
                          <GithubIcon className="h-4 w-4" />
                          {t.projects.code}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
