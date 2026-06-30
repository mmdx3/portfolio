"use client"

import { useLanguage } from "@/components/language-provider"
import { contactLinks } from "@/lib/i18n"
import { GithubIcon, LinkedinIcon, TelegramIcon, MailIcon } from "@/components/icons"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const socials = [
    { href: contactLinks.github, Icon: GithubIcon, label: "GitHub" },
    { href: contactLinks.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
    { href: contactLinks.telegram, Icon: TelegramIcon, label: "Telegram" },
    { href: `mailto:${contactLinks.email}`, Icon: MailIcon, label: "Email" },
  ]

  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-start">
          <p className="text-sm font-semibold text-foreground">{t.hero.name}</p>
          <p className="mt-1 text-xs text-muted">
            &copy; {year} — {t.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/5 text-muted transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary-light"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
