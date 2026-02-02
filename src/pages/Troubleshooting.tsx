import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { HelpCircle, SearchX, FileX, HardDrive, Cpu, RefreshCw, Usb } from "lucide-react"

export default function Troubleshooting() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Troubleshooting & Common Errors
              </h1>
              <p className="text-xl text-text-secondary">
                Solutions for common issues during the file recovery process.
              </p>
            </div>

            {/* 1. Scan Finds No Files */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <SearchX className="w-8 h-8 text-brand" />
                "Scan Finds No Files"
              </h2>
              <p className="text-lg text-text-secondary">If the scan finishes with zero results, don't panic yet.</p>
              <ul className="space-y-4">
                 <li className="bg-white p-6 rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-text-primary mb-1">Check the Drive Connection</h3>
                    <p className="text-text-secondary">Ensure your external drive or card is firmly connected. Try a different USB port.</p>
                 </li>
                 <li className="bg-white p-6 rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-text-primary mb-1">Try a Deep Scan</h3>
                    <p className="text-text-secondary">If the Quick Scan missed them, the Deep Scan is your best bet. It ignores file names and hunts for file signatures.</p>
                 </li>
                 <li className="bg-white p-6 rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-text-primary mb-1">Encryption</h3>
                    <p className="text-text-secondary">If your drive is encrypted (BitLocker, etc.), you must unlock it in Windows before our software can read it.</p>
                 </li>
              </ul>
            </section>

            {/* 2. Files Cannot Be Opened */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <FileX className="w-8 h-8 text-red-500" />
                "Files Cannot Be Opened After Recovery"
              </h2>
              <p className="text-lg text-text-secondary">This usually means the file was partially overwritten before recovery.</p>
              <div className="grid gap-4 md:grid-cols-2">
                 <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h3 className="font-bold text-red-900 mb-2">Check File Size</h3>
                    <p className="text-red-800 text-sm">If the recovered file is 0KB, the data is gone.</p>
                 </div>
                 <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h3 className="font-bold text-red-900 mb-2">Try a Different Version</h3>
                    <p className="text-red-800 text-sm">Look for other copies in the scan. Sometimes the software finds multiple "ghosts"—one might be perfect.</p>
                 </div>
              </div>
            </section>

            {/* 3. Drive Not Detected */}
            <section className="space-y-6">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <HardDrive className="w-8 h-8 text-text-secondary" />
                "Drive Not Detected"
              </h2>
               <div className="bg-white p-8 rounded-2xl border border-border space-y-6">
                  <div className="flex gap-4">
                     <Cpu className="w-6 h-6 text-brand shrink-0" />
                     <div>
                        <h3 className="font-bold text-text-primary">Windows Recognition</h3>
                        <p className="text-text-secondary mt-1">Open "Disk Management" in Windows. If Windows doesn't see the drive physically, our software cannot scan it. This usually indicates hardware damage, which requires a professional lab.</p>
                     </div>
                  </div>
                   <div className="flex gap-4">
                     <RefreshCw className="w-6 h-6 text-brand shrink-0" />
                     <div>
                        <h3 className="font-bold text-text-primary">Refresh the List</h3>
                        <p className="text-text-secondary mt-1">Click the refresh icon on the drive selection screen after checking your cables.</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* 4. Pre-Support Checklist */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-blue-500" />
                What To Try Before Contacting Support
              </h2>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                 <ol className="list-decimal list-inside space-y-4 text-blue-900 font-medium">
                    <li>Restart the software (not the computer, if possible).</li>
                    <li>Reconnect your drive to a different USB port.</li>
                    <li>Disable antivirus temporarily (some security tools aggressively block scanner access).</li>
                 </ol>
              </div>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
