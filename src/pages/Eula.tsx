import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { Scale, User, Building, Unlock, CheckCircle } from "lucide-react"

export default function Eula() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                License & Usage Info
              </h1>
              <p className="text-xl text-text-secondary">
                Clear explanation of your rights to use this software.
              </p>
            </div>

            {/* 1. Free Usage */}
            <section className="space-y-6">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
                Free Usage Explained
              </h2>
               <p className="text-lg text-text-secondary">Our software is free to download and use for scanning.</p>
               <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-6 rounded-xl border border-border text-center">
                     <h3 className="font-bold text-text-primary mb-2">Free Scan</h3>
                     <p className="text-sm text-text-secondary">Scan any drive to see what files are findable.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-border text-center">
                     <h3 className="font-bold text-text-primary mb-2">Free Preview</h3>
                     <p className="text-sm text-text-secondary">Preview files to check their quality before recovery.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-border text-center">
                     <h3 className="font-bold text-text-primary mb-2">Free Recovery</h3>
                     <p className="text-sm text-text-secondary">Recover a limited amount of files for free.</p>
                  </div>
               </div>
            </section>

             {/* 2. License Types */}
            <section className="space-y-8">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Scale className="w-8 h-8 text-brand" />
                Personal vs. Commercial
              </h2>
               <div className="grid md:grid-cols-2 gap-6">
                  {/* Personal */}
                   <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                     <div className="flex items-center gap-3 mb-3">
                        <User className="w-8 h-8 text-green-600" />
                        <h3 className="text-xl font-bold text-green-800">Personal Use</h3>
                     </div>
                     <p className="text-green-900 leading-relaxed">
                        You may use this on your personal computers to recover your own files. No payment required for personal scanning.
                     </p>
                  </div>

                  {/* Commercial */}
                   <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                     <div className="flex items-center gap-3 mb-3">
                        <Building className="w-8 h-8 text-gray-600" />
                        <h3 className="text-xl font-bold text-gray-800">Business Use</h3>
                     </div>
                     <p className="text-gray-900 leading-relaxed">
                        If you are an IT professional providing data recovery services to clients for a fee, you require a Commercial License.
                     </p>
                  </div>
               </div>
            </section>

             {/* 3. No Login */}
            <section className="bg-white p-8 rounded-2xl border border-border shadow-sm flex gap-6 items-center">
               <Unlock className="w-12 h-12 text-brand shrink-0" />
               <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-2">No Login Required</h2>
                  <p className="text-text-secondary leading-relaxed">
                     We do not force you to create an account, log in, or give us your email address just to use the basic features of the software. We believe in barrier-free access to your own data.
                  </p>
               </div>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
