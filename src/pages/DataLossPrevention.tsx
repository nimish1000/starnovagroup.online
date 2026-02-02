import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { ShieldCheck, Save, Cloud, Disc, MousePointerClick } from "lucide-react"

export default function DataLossPrevention() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Best Practices to Prevent Data Loss
              </h1>
              <p className="text-xl text-text-secondary">
                Data recovery is a spare tire. Here is how to keep your data safe.
              </p>
            </div>

            {/* 1. 3-2-1 Rule */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-brand" />
                The 3-2-1 Backup Rule
              </h2>
              <p className="text-lg text-text-secondary">The gold standard for data safety:</p>
               <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-border shadow-sm text-center">
                     <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand font-bold text-xl">3</div>
                     <h3 className="font-bold text-text-primary">3 Types</h3>
                     <p className="text-sm text-text-secondary mt-2">Keep 3 copies of any important file.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-border shadow-sm text-center">
                     <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand font-bold text-xl">2</div>
                     <h3 className="font-bold text-text-primary">2 Media</h3>
                     <p className="text-sm text-text-secondary mt-2">Use 2 different types of storage (e.g., Laptop + HDD).</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-border shadow-sm text-center">
                     <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand font-bold text-xl">1</div>
                     <h3 className="font-bold text-text-primary">1 Offsite</h3>
                     <p className="text-sm text-text-secondary mt-2">Keep 1 copy somewhere else (e.g., Cloud).</p>
                  </div>
               </div>
            </section>

             {/* 2. Habits */}
            <section className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-6">
               <h2 className="text-2xl font-bold text-text-primary">Daily Habits</h2>
               
               <div className="flex gap-4 items-start pb-6 border-b border-border">
                  <MousePointerClick className="w-6 h-6 text-brand mt-1" />
                  <div>
                     <h3 className="font-bold text-text-primary text-lg">"Eject" Safely</h3>
                     <p className="text-text-secondary">Always use the "Safely Remove Hardware" icon before pulling out a USB key. Yanking it out while data is writing is the fastest way to corrupt the file system.</p>
                  </div>
               </div>

               <div className="flex gap-4 items-start pt-2">
                  <Disc className="w-6 h-6 text-brand mt-1" />
                  <div>
                     <h3 className="font-bold text-text-primary text-lg">Separate OS and Data</h3>
                     <p className="text-text-secondary">If possible, keep your Windows installation (C:) separate from your important files (D:). If Windows crashes and needs reinstalling, your files on the D: drive remain safe.</p>
                  </div>
               </div>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
