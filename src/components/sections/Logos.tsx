import { Container } from "../ui/Container"

const LOGOS = [
  "Apex Corp", "Global Bank", "SaaS Inc", "TechFlow", "Quantum", "Hyperion"
]

export function Logos() {
  return (
    <section className="py-12 border-y border-border/40 bg-surface/30">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-muted mb-8">
          Trusted by engineering teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {LOGOS.map((logo) => (
            <div key={logo} className="text-xl font-bold font-mono text-text-primary">
              {/* Replacing with text for now, in real app these are SVGs */}
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
