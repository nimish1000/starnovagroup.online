import { Container } from "../ui/Container"
import { Button } from "../ui/Button"
import { useDownload } from "../../hooks/useDownload"

export function Cta() {
  const { triggerDownload } = useDownload();
  return (
    <section className="py-24 border-t border-border bg-brand-dark">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Don't wait. The sooner you scan, the better.
          </h2>
          <p className="max-w-2xl text-[17px] text-slate-300 mb-10 leading-[1.75]">
            Every minute you use your computer reduces the chance of a perfect recovery. Stop writing data and start your scan now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <Button size="lg" className="bg-white text-brand-dark hover:bg-slate-100 shadow-lg" onClick={triggerDownload}>Download File Recovery</Button>
             <Button variant="secondary" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500">See How It Works</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
