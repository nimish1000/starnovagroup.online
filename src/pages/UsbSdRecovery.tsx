import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { Usb, Image, Camera, HardDrive, AlertCircle } from "lucide-react"

export default function UsbSdRecovery() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                How to Recover Files from USB & SD Cards
              </h1>
              <p className="text-xl text-text-secondary">
                Portable drives are vulnerable, but data is often retrievable.
              </p>
            </div>

            {/* 1. Why Common */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Usb className="w-8 h-8 text-brand" />
                Why USB/SD Loss is Common
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                USB drives and SD cards are portable, which makes them vulnerable. They are frequently plugged in and out, often without "Ejecting" safely, which corrupts the file system.
              </p>
            </section>

             {/* 2. Common Issues */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-text-secondary" />
                Common Issues & Solutions
              </h2>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                     <h3 className="font-bold text-text-primary mb-2">"The disk is not formatted"</h3>
                     <p className="text-text-secondary text-sm">
                        Windows sees the drive but can't read it. The data is usually still there! <strong>Do NOT click "Format Now".</strong> Run recovery software first.
                     </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                     <h3 className="font-bold text-text-primary mb-2">Files Turned into Shortcuts</h3>
                     <p className="text-text-secondary text-sm">
                        Detecting viruses often hide real files and replace them with shortcuts. Recovery software can see past this trick and find the original files.
                     </p>
                  </div>
               </div>
            </section>

            {/* 3. Safe Recovery Approach */}
            <section className="space-y-6">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <HardDrive className="w-8 h-8 text-green-600" />
                The Safe Recovery Approach
              </h2>
               <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                     <div className="bg-brand/10 text-brand font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
                     <p className="text-text-secondary pt-1"><strong>Connect Carefully:</strong> Plug the card/USB into a stable port (back of the PC, not a loose front hub).</p>
                  </div>
                  <div className="flex gap-4 items-start">
                     <div className="bg-brand/10 text-brand font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
                     <p className="text-text-secondary pt-1"><strong>Scan as "External Device":</strong> Select the specific drive letter in the recovery software.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                     <div className="bg-brand/10 text-brand font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
                     <p className="text-text-secondary pt-1"><strong>Recover to PC First:</strong> Never recover files <em>back</em> to the same unstable SD card. Save them to your stable hard drive first to verify they are safe.</p>
                  </div>
               </div>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
