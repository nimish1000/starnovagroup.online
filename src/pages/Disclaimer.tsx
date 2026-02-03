import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { AlertTriangle, HelpCircle, HardDrive, ShieldAlert, FileWarning } from "lucide-react"

export default function Disclaimer() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Disclaimer & No Guarantee
              </h1>
              <p className="text-xl text-text-secondary">
                Honest expectations about the capabilities of data recovery software.
              </p>
            </div>

            {/* 1. Honest Expectations */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-brand" />
                Honest Expectations
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                We want to be honest with you: Data recovery is never a 100% guarantee. Our software is a tool that attempts to read data that the operating system has marked as deleted. It relies on the remaining physical magnetic or electronic traces of that data.
              </p>
            </section>

            {/* 2. Recovery Limitations */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <FileWarning className="w-8 h-8 text-red-500" />
                Recovery Limitations
              </h2>
              <p className="text-lg text-text-secondary">Success depends on physical factors outside our control:</p>
              
               <div className="grid gap-6">
                 <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex gap-4">
                    <div className="shrink-0 mt-1"><ShieldAlert className="w-5 h-5 text-red-500" /></div>
                    <div>
                        <h3 className="font-bold text-text-primary">Overwriting</h3>
                        <p className="text-text-secondary mt-1">If new data has been written over the space where a deleted file used to exist, recovery is <strong>impossible</strong>. No software can reverse this.</p>
                    </div>
                 </div>
                 <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex gap-4">
                    <div className="shrink-0 mt-1"><HardDrive className="w-5 h-5 text-red-500" /></div>
                    <div>
                        <h3 className="font-bold text-text-primary">Physical Damage</h3>
                        <p className="text-text-secondary mt-1">If your drive is physically broken (clicking, not spinning, burnt), software cannot help. You need a physical repair lab attempt.</p>
                    </div>
                 </div>
               </div>
            </section>

            {/* 3. No False Promises */}
            <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center space-y-4">
               <AlertTriangle className="w-12 h-12 text-gray-500 mx-auto" />
               <h2 className="text-2xl font-bold text-gray-800">No False Promises</h2>
               <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  We do NOT promise that every file can be recovered. We do NOT guarantee that recovered files will open perfectly (some may be corrupted/fragmented). We offer a free preview feature specifically so you can verify if a file is recoverable <em>before</em> you rely on it.
               </p>
            </section>

            {/* 4. Contact */}
            <div className="border-t border-border pt-8 mt-16 text-center">
               <p className="text-text-secondary">
                  Questions? Reach us at <a href="mailto:support@obvix.online" className="text-brand hover:underline font-medium">support@obvix.online</a>.
               </p>
            </div>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
