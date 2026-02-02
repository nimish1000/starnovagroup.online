import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { AlertTriangle, FileWarning, Activity, Disc, Layers } from "lucide-react"

export default function FailureReasons() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Common Reasons File Recovery Fails
              </h1>
              <p className="text-xl text-text-secondary">
                It's not always the software's fault. Here is why recovery sometimes doesn't work.
              </p>
            </div>

            {/* 1. Intro */}
            <section className="bg-white p-6 rounded-xl border border-border text-center shadow-sm">
              <p className="text-lg text-text-secondary">
                Sometimes, even the best tools return partially corrupted files or nothing at all. Here is why.
              </p>
            </section>

            <section className="grid gap-8">
               {/* 1. Overwriting */}
               <div className="flex gap-6 items-start">
                  <div className="bg-red-100 p-3 rounded-xl shrink-0">
                     <FileWarning className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-bold text-text-primary mb-2">1. Overwriting (The Big One)</h2>
                     <p className="text-text-secondary leading-relaxed">
                        We mention this often because it is the #1 cause of failure. If you continued browsing the web, downloading apps, or editing files after the data loss, you likely overwrote your own data.
                     </p>
                  </div>
               </div>

               {/* 2. Fragmentation */}
               <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                     <Layers className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-bold text-text-primary mb-2">2. Fragmentation</h2>
                     <p className="text-text-secondary leading-relaxed">
                        Large files (like videos) are often split into tiny pieces scattered across the drive. If the "map" to these pieces is lost, recovery software might find Piece A and Piece C, but miss Piece B. This results in a video that plays for 5 seconds and then freezes.
                     </p>
                  </div>
               </div>

               {/* 3. Physical Damage */}
               <div className="flex gap-6 items-start">
                  <div className="bg-yellow-100 p-3 rounded-xl shrink-0">
                     <Activity className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-bold text-text-primary mb-2">3. Physical Degradation</h2>
                     <p className="text-text-secondary leading-relaxed">
                        If your drive has "Bad Sectors" (physical wear and tear), the software cannot read the data in those spots. No software can fix physical scratches on a disk platter or burnt memory cells.
                     </p>
                  </div>
               </div>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
