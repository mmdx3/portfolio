"use client"

import { useLanguage } from "@/components/language-provider"
import { contactLinks } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { GithubIcon, LinkedinIcon, MailIcon, TelegramIcon } from "@/components/icons"

export function Contact() {
  const { t } = useLanguage()

  const links = [
    { label: t.contact.email, value: contactLinks.email, href: `mailto:${contactLinks.email}`, Icon: MailIcon },
    { label: t.contact.telegram, value: "t.me/mmdx321", href: contactLinks.telegram, Icon: TelegramIcon },
    { label: t.contact.github, value: "mamadx3", href: contactLinks.github, Icon: GithubIcon },
    { label: t.contact.linkedin, value: "mamadx3", href: contactLinks.linkedin, Icon: LinkedinIcon },
  ]

  return (
    <section id="contact" className="relative px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker={t.contact.kicker} heading={t.contact.heading} />

        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 start-1/3 h-60 w-60 rounded-full bg-primary/25 blur-[100px]" />
              <div className="absolute -bottom-20 end-1/3 h-60 w-60 rounded-full bg-accent/20 blur-[100px]" />
            </div>

            <div className="relative">
              <p className="mx-auto max-w-xl text-center text-pretty leading-relaxed text-muted">
                {t.contact.body}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {links.map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="cursor-react group flex items-center gap-4 rounded-2xl border border-border bg-white/[0.03] p-4 transition-all hover:bg-primary/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary-light transition-colors group-hover:from-primary group-hover:to-accent group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 text-start">
                      <div className="text-xs text-muted">{label}</div>
                      <div className="truncate text-sm font-medium text-foreground">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
