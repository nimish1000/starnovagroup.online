import { Container } from "../ui/Container"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="py-24 border-b border-border/40">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Problem Side */}
          <div className="lg:w-1/2 relative">
             <div className="absolute -left-4 -top-4 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 z-10">
                <AlertCircle className="w-6 h-6" />
             </div>
             <div className="bg-surface border border-border p-8 md:p-10 rounded-2xl relative">
                <h3 className="text-2xl font-bold mb-5 text-text-primary">It happens in a split second.</h3>
                <p className="text-text-secondary mb-5 leading-[1.75] text-[15px]">
                  You emptied the Recycle Bin too soon. You formatted the wrong camera card. A power surge corrupted your work drive.
                </p>
                <p className="text-text-secondary leading-[1.75] text-[15px]">
                  We understand the sinking feeling of losing important data. Whether it's precious family memories or critical work documents, the loss feels permanent.
                </p>
             </div>
          </div>

          {/* Solution Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-text-primary">Professional Data Rescue, Made Simple.</h2>
            <p className="text-[17px] text-text-secondary mb-8 leading-[1.75]">
              Our recovery engine digs deeper than Windows itself can. It ignores the file system's "deleted" flag and reconstructs your lost files sector-by-sector.
            </p>

            <ul className="space-y-5">
               {[
                  { title: "Zero Risk", desc: "We strictly use 'Read-Only' access. We never write over your existing data." },
                  { title: "No Tech Skills Needed", desc: "Designed for regular people, not just IT pros." },
                  { title: "Instant Result", desc: "See your lost files in minutes, not days." }
               ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                     <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                     <div>
                        <span className="font-semibold text-text-primary block text-[15px] mb-0.5">{item.title}</span>
                        <span className="text-[14px] text-text-secondary leading-relaxed">{item.desc}</span>
                     </div>
                  </li>
               ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  )
}
