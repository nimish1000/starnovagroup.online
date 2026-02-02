import { Container } from "../ui/Container"
import { Button } from "../ui/Button"
import { Check } from "lucide-react"

export function ProductShowcase() {
  return (
    <section className="py-24 overflow-hidden" id="product">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-6">
              Designed for speed. <br />
              Built for scale.
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We've optimized every interaction to be as fast as possible. From the keyboard shortcuts to the way data loads, everything is instantaneous.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Real-time collaboration with cursor tracking",
                "Instant rollback to any previous version",
                "Automated CI/CD pipelines out of the box"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-secondary">
                  <div className="h-5 w-5 rounded-full bg-brand/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-brand" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <Button variant="secondary">read the docs</Button>
          </div>
          
          <div className="lg:w-1/2 relative lg:right-0">
             {/* Decorative abstract UI */}
             <div className="relative rounded-2xl border border-border bg-surface shadow-2xl overflow-hidden aspect-square sm:aspect-[4/3]">
                <div className="absolute top-0 left-0 right-0 h-10 bg-background border-b border-border flex items-center px-4 gap-2">
                   <div className="h-3 w-3 rounded-full bg-red-400" />
                   <div className="h-3 w-3 rounded-full bg-yellow-400" />
                   <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="p-8 mt-10 space-y-6">
                   <div className="flex gap-4">
                      <div className="w-1/3 h-32 rounded bg-background border border-border" />
                      <div className="w-2/3 h-32 rounded bg-background border border-border" />
                   </div>
                   <div className="h-4 w-full bg-border/30 rounded" />
                   <div className="h-4 w-5/6 bg-border/30 rounded" />
                   <div className="h-4 w-4/6 bg-border/30 rounded" />
                </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
