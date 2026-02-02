import { Container } from "../ui/Container"

const steps = [
  {
    id: "01",
    title: "Select Location",
    description: "Launch the app and select the drive or specific folder where you lost your files."
  },
  {
    id: "02",
    title: "Scan",
    description: "Our advanced algorithm scans the drive. Use 'Deep Scan' for formatted or stubborn files."
  },
  {
    id: "03",
    title: "Recover",
    description: "Preview found files (photos, docs) to verify quality, then save them to a safe location."
  }
]

export function HowItWorks() {
  return (
    <section className="py-24 border-y border-border/40 bg-surface/50">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-center text-text-primary mb-16 sm:text-4xl">
          Recover in 3 Simple Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center">
              <span className="text-6xl font-black text-brand/10 select-none mb-6">
                {step.id}
              </span>
              <h3 className="text-xl font-semibold text-text-primary mb-3">{step.title}</h3>
              <p className="text-[15px] text-text-secondary leading-[1.7]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
