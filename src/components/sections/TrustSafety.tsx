import { Container } from "../ui/Container"
import { ShieldCheck, Lock, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function TrustSafety() {
  return (
    <section className="py-24 bg-surface/50">
      <Container>
        <div className="max-w-4xl mx-auto bg-white border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-sm">
          <div className="shrink-0 w-20 h-20 bg-brand-light rounded-full flex items-center justify-center">
            <ShieldCheck className="w-10 h-10 text-brand" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">100% Safe "Read-Only" Guarantee</h2>
            <p className="text-[16px] text-text-secondary leading-[1.75] mb-6">
              Our software operates in strict Read-Only mode. It scans your drive to find data but never writes to it, ensuring it can never overwrite or damage your lost files.
            </p>
            <div className="flex gap-6 text-[14px] font-semibold text-text-primary">
               <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-brand" /> No Overwriting
               </span>
               <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand" /> Ad-Free
               </span>
            </div>

            <Link to="/data-safety" className="inline-flex items-center gap-2 mt-6 text-brand font-semibold text-[14px] hover:text-brand-hover transition-colors group">
              Read our full Safety Guarantee
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
