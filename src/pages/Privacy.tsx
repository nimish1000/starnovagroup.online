import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { Shield, Lock, EyeOff, FileSearch, Server, Settings } from "lucide-react"

export default function Privacy() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Privacy Policy
              </h1>
              <p className="text-xl text-text-secondary">
                We believe your lost files are none of our business.
              </p>
            </div>

            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Shield className="w-8 h-8 text-brand" />
                Your Privacy Comes First
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                We respect your privacy fundamentally. This policy explains how our File Recovery software handles your data. Unlike many online services, our software operates locally on your machine. We believe that your lost files are none of our business.
              </p>
            </section>

             {/* 2. What We Collect */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <FileSearch className="w-8 h-8 text-text-secondary" />
                What Data We Collect (Minimal)
              </h2>
               <p className="text-lg text-text-secondary">We collect only the bare minimum required to ensure the software functions correctly:</p>
               <ul className="space-y-3">
                 <li className="bg-white p-4 rounded-lg border border-border shadow-sm">
                    <strong>System Information:</strong> Operating system version (e.g., Windows 10/11) to ensure compatibility.
                 </li>
                 <li className="bg-white p-4 rounded-lg border border-border shadow-sm">
                    <strong>Crash Reports:</strong> Anonymous technical logs if the software crashes, helping us fix bugs.
                 </li>
                 <li className="bg-white p-4 rounded-lg border border-border shadow-sm">
                    <strong>Usage Statistics:</strong> Aggregate, anonymous data on feature usage (e.g., "Deep Scan" vs. "Quick Scan") to improve the user experience.
                 </li>
               </ul>
            </section>

             {/* 3. What We DO NOT Collect */}
             <section className="bg-green-50 p-8 rounded-2xl border border-green-100 space-y-6">
              <h2 className="text-2xl font-bold text-green-800 flex items-center gap-3">
                <EyeOff className="w-8 h-8 text-green-600" />
                What We DO NOT Collect
              </h2>
              <p className="text-green-900">To be crystal clear:</p>
              <ul className="space-y-3 text-green-900 font-medium">
                 <li className="flex gap-2"><span className="text-green-600">✓</span> NO File Content: We never upload, view, or transmit the contents of the files you are recovering.</li>
                 <li className="flex gap-2"><span className="text-green-600">✓</span> NO Personal Identification: We do not track your IP address, physical location, or browse history.</li>
                 <li className="flex gap-2"><span className="text-green-600">✓</span> NO Scan Results: The list of recoverable files found during a scan is generated locally and is never sent to our servers.</li>
              </ul>
            </section>

            {/* 4. Local Scan & User Control */}
            <div className="grid gap-6 md:grid-cols-2">
               <section className="bg-white p-6 rounded-xl border border-border shadow-sm space-y-3">
                  <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
                     <Server className="w-6 h-6 text-brand" /> Local Scan Guarantee
                  </h2>
                  <p className="text-text-secondary">Our scans are performed 100% locally on your specific device. No data packets containing your file information leave your network during this process.</p>
               </section>
               <section className="bg-white p-6 rounded-xl border border-border shadow-sm space-y-3">
                  <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
                     <Settings className="w-6 h-6 text-brand" /> User Control
                  </h2>
                  <p className="text-text-secondary">You decide which drive to scan and which files to recover. You can uninstall the software at any time, which removes all program files from your system.</p>
               </section>
            </div>

            {/* 5. Contact Us */}
            <section className="border-t border-border pt-8 mt-16">
               <h2 className="text-xl font-bold text-text-primary mb-4">Questions about this policy?</h2>
               <p className="text-text-secondary">
                  If you have any questions about our privacy practices, please contact us at <a href="mailto:support@obvix.online" className="text-brand hover:underline font-medium">support@obvix.online</a>.
               </p>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
