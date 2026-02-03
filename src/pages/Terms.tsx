import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { FileText, CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react"

export default function Terms() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Terms of Use
              </h1>
              <p className="text-xl text-text-secondary">
                Fair and safe usage guidelines for our software.
              </p>
            </div>

            {/* 1. Acceptance */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <FileText className="w-8 h-8 text-brand" />
                Acceptance of Terms
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                By downloading and using our File Recovery software, you agree to these terms. If you do not agree, please do not use the software. These terms are designed to ensure fair and safe usage for everyone.
              </p>
            </section>

            {/* 2. Acceptable Usage */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                Acceptable Usage
              </h2>
              <p className="text-lg text-text-secondary">You agree to use this software only for lawful purposes.</p>
              <ul className="space-y-4">
                  <li className="bg-white p-6 rounded-xl border border-border shadow-sm">
                     <h3 className="font-bold text-text-primary mb-1">Personal Data Only</h3>
                     <p className="text-text-secondary">You should only attempt to recover data that belongs to you or for which you have explicit permission to recover.</p>
                  </li>
                  <li className="bg-white p-6 rounded-xl border border-border shadow-sm">
                     <h3 className="font-bold text-text-primary mb-1">No Illegal Activities</h3>
                     <p className="text-text-secondary">You may not use this software to recover files from computers or drives you are not authorized to access.</p>
                  </li>
                  <li className="bg-white p-6 rounded-xl border border-border shadow-sm">
                     <h3 className="font-bold text-text-primary mb-1">No Reverse Engineering</h3>
                     <p className="text-text-secondary">You may not attempt to decompile, reverse engineer, or modify the software code.</p>
                  </li>
              </ul>
            </section>

             {/* 3. Your Responsibility */}
            <section className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 space-y-4">
              <h2 className="text-2xl font-bold text-yellow-800 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-yellow-600" />
                Your Responsibility
              </h2>
              <p className="text-yellow-900 leading-relaxed">
                Data recovery is a sensitive process. You acknowledge that:
              </p>
               <ul className="list-disc list-inside space-y-2 text-yellow-900">
                  <li>You understand the risks of data recovery, including potential data overwriting if instructions are not followed.</li>
                  <li>You are responsible for saving recovered data to a <strong>different</strong> drive to prevent permanent loss.</li>
                  <li>You are responsible for backing up your data regularly in the future.</li>
               </ul>
            </section>
            
            {/* 4. Limitation of Liability */}
            <section className="space-y-4 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-text-muted" />
                Limitation of Liability
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                The software is provided "as is." While we strive for perfection, we cannot be held liable for any data loss, hardware failure, or damages arising from the use or inability to use the software. You use this tool at your own risk.
              </p>
            </section>

            {/* 5. Contact */}
            <section className="border-t border-border pt-8 mt-16">
               <h2 className="text-xl font-bold text-text-primary mb-4">Contact</h2>
               <p className="text-text-secondary">
                  For any questions regarding these terms, please email <a href="mailto:support@obvix.online" className="text-brand hover:underline font-medium">support@obvix.online</a>.
               </p>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
