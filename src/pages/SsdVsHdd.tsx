import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { HardDrive, Zap, Cpu, AlertTriangle } from "lucide-react"

export default function SsdVsHdd() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                SSD vs. HDD: File Recovery Differences
              </h1>
              <p className="text-xl text-text-secondary">
                Why recovering data from an SSD is harder than from a traditional hard drive.
              </p>
            </div>

            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Cpu className="w-8 h-8 text-brand" />
                Two Very Different Technologies
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Not all storage is created equal. While recovery from traditional "spinning" Hard Disk Drives (HDD) is well-understood, modern Solid State Drives (SSD) present a unique challenge due to how they manage data.
              </p>
            </section>

             {/* 2. HDD */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <HardDrive className="w-8 h-8 text-text-secondary" />
                The HDD Advantage
              </h2>
               <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <p className="text-text-secondary">
                     Hard drives are magnetic. When you delete data, the magnetic signature stays on the platter until it is magnetically reversed by new data. This "latency" gives you a wide window of time to recover files—sometimes weeks or months later.
                  </p>
               </div>
            </section>

             {/* 3. SSD & TRIM */}
            <section className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Zap className="w-8 h-8 text-yellow-500" />
                The SSD Challenge: TRIM
              </h2>
              <p className="text-text-secondary">
                 SSDs use flash memory. To keep flash memory fast, it needs to be "clean." When you delete a file on an SSD, the operating system sends a command called <strong>TRIM</strong>.
              </p>
              <div className="pl-4 border-l-4 border-yellow-500 py-2 bg-yellow-50/50 pr-4 rounded-r-lg">
                 <p className="text-text-primary italic">
                    "TRIM tells the SSD: Blocks 100-200 are no longer needed. Wipe them now."
                 </p>
              </div>
              <p className="text-text-secondary">
                 If TRIM runs (which happens automatically in the background), the data is physically zeroed out almost immediately. This makes recovering deleted files from an internal SSD much harder than an external HDD.
              </p>
            </section>

            {/* 4. What To Do */}
            <section className="space-y-4">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-brand" />
                What This Means for You
              </h2>
               <p className="text-text-secondary mb-4">If you lose data on an SSD, speed is everything:</p>
               <ol className="space-y-4 list-decimal list-inside font-medium text-lg text-text-primary">
                  <li className="p-4 bg-white rounded-lg border border-border">
                     <span className="font-bold">Cut Power:</span> Turn off the computer/drive immediately to stop TRIM from running.
                  </li>
                  <li className="p-4 bg-white rounded-lg border border-border">
                     <span className="font-bold">Scan Fast:</span> Run recovery software as soon as possible.
                  </li>
                  <li className="p-4 bg-white rounded-lg border border-border">
                     <span className="font-bold">Check Backups:</span> SSD data loss is often more permanent, making backups even more critical.
                  </li>
               </ol>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
