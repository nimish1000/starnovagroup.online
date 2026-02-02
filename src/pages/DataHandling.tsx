import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { Server, Database, HardDrive, WifiOff, Lock, Binary } from "lucide-react"

export default function DataHandling() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Data Handling & Security
              </h1>
              <p className="text-xl text-text-secondary">
                Transparent explanation of how your data is processed.
              </p>
            </div>

            {/* 1. How Scans Work */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Binary className="w-8 h-8 text-brand" />
                How Scans Work
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                When you click "Scan," our software reads the raw sectors of your storage drive. It looks for "file signatures"—patterns like <code>FF D8</code> for a JPEG image—that indicate a file exists even if the system deleted it. This process is strictly "Read-Only."
              </p>
            </section>

            {/* 2. No Upload Policy */}
            <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100 space-y-6">
               <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-3">
                <WifiOff className="w-8 h-8 text-blue-600" />
                No Cloud Policy
              </h2>
               <p className="text-blue-900">We operate a strict "No Cloud" policy for your files.</p>
               <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                     <Database className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                     <p className="text-blue-800">Your scan results are stored in your computer's temporary memory (RAM).</p>
                  </li>
                  <li className="flex items-start gap-3">
                     <HardDrive className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                     <p className="text-blue-800">Your recovered files are saved directly to the location you choose on your computer.</p>
                  </li>
                  <li className="flex items-start gap-3">
                     <Server className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                     <p className="text-blue-800">At no point does a file "pass through" our servers.</p>
                  </li>
               </ul>
            </section>

             {/* 3. Security Reassurance */}
            <section className="space-y-6">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Lock className="w-8 h-8 text-green-600" />
                Security Reassurance
              </h2>
               <p className="text-lg text-text-secondary">Our software is safe to install. It contains:</p>
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {["NO Adware", "NO Spyware", "NO Bundles", "NO Mining"].map((item) => (
                     <div key={item} className="bg-white p-4 rounded-lg border border-border text-center font-bold text-green-700 shadow-sm">
                        {item}
                     </div>
                  ))}
               </div>
               <p className="text-text-secondary text-center pt-2">We exist solely to help you get your files back.</p>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
