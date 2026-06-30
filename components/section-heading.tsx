import { Reveal } from "@/components/reveal"

export function SectionHeading({ kicker, heading }: { kicker: string; heading: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-primary-light">{kicker}</span>
      <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
    </Reveal>
  )
}
