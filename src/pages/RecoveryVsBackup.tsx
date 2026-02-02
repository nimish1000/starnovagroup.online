import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { Scale, Ambulance, Shield, RefreshCw } from "lucide-react"

export default function RecoveryVsBackup() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                File Recovery vs. Backup
              </h1>
              <p className="text-xl text-text-secondary">
                Understanding the difference between protection and rescue.
              </p>
            </div>

            {/* 1. Core Difference */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Scale className="w-8 h-8 text-brand" />
                The Core Difference
              </h2>
              <p className="text-lg text-text-secondary">It is easy to confuse the two, but they serve different purposes.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                    <Shield className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Backup</h3>
                    <p className="text-blue-800">Backup is <strong>proactive</strong>. It is a copy of your data you make *before* disaster strikes. It is your insurance policy.</p>
                 </div>
                 <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                    <Ambulance className="w-10 h-10 text-orange-600 mb-4" />
                    <h3 className="text-xl font-bold text-orange-900 mb-2">Data Recovery</h3>
                    <p className="text-orange-800">Data Recovery is <strong>reactive</strong>. It is the ambulance you call *after* the disaster has happened when you have no other copies.</p>
                 </div>
              </div>
            </section>

            {/* 2. When Recovery Helps */}
            <section className="space-y-6">
               <h2 className="text-2xl font-bold text-text-primary">When Recovery Helps</h2>
               <p className="text-lg text-text-secondary">Data recovery is for the unexpected. It helps when:</p>
               <ul className="grid gap-4 md:grid-cols-3">
                  <li className="bg-white p-6 rounded-xl border border-border text-center">
                     <span className="block text-4xl mb-2">🗑️</span>
                     <p className="font-medium text-text-primary">Accidental Deletion</p>
                  </li>
                  <li className="bg-white p-6 rounded-xl border border-border text-center">
                     <span className="block text-4xl mb-2">💾</span>
                     <p className="font-medium text-text-primary">Formatted SD Card</p>
                  </li>
                  <li className="bg-white p-6 rounded-xl border border-border text-center">
                     <span className="block text-4xl mb-2">🦠</span>
                     <p className="font-medium text-text-primary">Virus Attack</p>
                  </li>
               </ul>
            </section>

            {/* 3. Why Backup Important */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-600" />
                Why Backup Is Still Important
              </h2>
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                 <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    Data recovery is powerful, but it is not 100% guaranteed. Physical damage or overwriting can defeat even the best software.
                 </p>
                 <p className="text-lg text-text-secondary leading-relaxed">
                    A backup (like cloud storage or an external hard drive) guarantees your files are safe because you have a second, separate copy. We strongly recommend starting a backup routine <strong>after</strong> you have successfully recovered your lost files.
                 </p>
              </div>
            </section>

            {/* 4. Analogy */}
            <section className="bg-surface-50 p-8 rounded-2xl border border-border text-center space-y-4">
               <RefreshCw className="w-12 h-12 text-brand mx-auto" />
               <h2 className="text-2xl font-bold text-text-primary">How They Fit Together</h2>
               <p className="text-xl text-text-secondary max-w-2xl mx-auto italic">
                  "Think of Backup as your seatbelt, and Data Recovery as the airbag."
               </p>
               <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  You should always wear your seatbelt (keep backups). But if the crash happens and the seatbelt fails (your backup was old or didn't run), the airbag (Data Recovery) is there to save you from total loss.
               </p>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
