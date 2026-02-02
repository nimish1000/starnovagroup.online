import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { ShieldCheck, Lock, EyeOff, HardDrive, AlertTriangle, HeartHandshake } from "lucide-react"

export default function DataSafety() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            {/* Header */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Data Safety & Recovery Guarantee
              </h1>
              <p className="text-xl text-text-secondary">
                Transparency, ethics, and safety are the core of our recovery process.
              </p>
            </div>

            {/* 1. Safety First */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-brand" />
                Safety First: Why It Matters
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Losing important files is stressful enough without worrying about the safety of your remaining data. We understand that trust is the most critical part of the recovery process. Our software is built with a single priority: to get your data back without ever putting it at further risk. We believe you deserve complete transparency about how our tool works, what it can do, and equally important, what it cannot do.
              </p>
            </section>

            {/* 2. Read-Only Commitment */}
            <section className="space-y-4 bg-surface-50 p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Lock className="w-8 h-8 text-green-600" />
                Our "Read-Only" Recovery Commitment
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our recovery process works on a strictly <strong>read-only</strong> basis. This is the gold standard for data safety. When you scan a drive, our software only <em>reads</em> the existing data sectors to locate your lost files. It effectively "looks but does not touch."
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                We never write, modify, or alter any data on the drive being scanned. This ensures that the original state of your storage device remains exactly as it was before the scan, preventing any chance of accidental overwriting during the search process.
              </p>
            </section>

            {/* 3. What We Will NEVER Do */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <EyeOff className="w-8 h-8 text-red-500" />
                What Our Software Will NEVER Do
              </h2>
              <p className="text-lg text-text-secondary">
                To protect your privacy and your hardware, we adhere to strict operational limits.
              </p>
              <ul className="grid gap-4 md:grid-cols-2">
                {[
                  { title: "Upload your files", desc: "Your data creates no copies outside your computer. The entire recovery process happens locally on your machine." },
                  { title: "View your content", desc: "We cannot see what is inside your documents, photos, or emails. The software processes file structures programmatically." },
                  { title: "Modify existing files", desc: "We do not attempt to \"repair\" or change living files on your drive during the scan." },
                  { title: "Collect personal data", desc: "We do not scan for or collect personal identifiable information (PII) for any marketing purposes." }
                ].map((item, i) => (
                  <li key={i} className="bg-white p-6 rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Reality of Data Recovery */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <HardDrive className="w-8 h-8 text-brand" />
                The Reality of Data Recovery (Honest Expectations)
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                We want to be honest with you: successful recovery is not always possible. If a file has been <strong>overwritten</strong> by new data, it is permanently destroyed. No software in the world can recover a file that has been completely written over.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our software is powerful, but it relies on the physical "ghost" of the file designated by the file system. If that space has been reused by your computer to save a new photo, document, or system file, the original data is gone. This is a physical limitation of digital storage, not a limitation of our software.
              </p>
            </section>

            {/* 5. User Responsibility */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary">
                Your Responsibility & Best Practices
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                To give yourself the best chance of 100% recovery, you play a vital role.
              </p>
              <div className="space-y-4 pl-4 border-l-4 border-brand/20">
                <div className="space-y-2">
                  <h3 className="font-bold text-text-primary">Stop using the drive immediately</h3>
                  <p className="text-text-secondary">The moment you realize data is lost, stop saving anything to that drive. Every new file saved is a game of "Russian Roulette" with your lost data.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-text-primary">Recover to a different drive</h3>
                  <p className="text-text-secondary">When you are ready to save your recovered files, you <strong>MUST</strong> save them to a different drive (like a USB stick or external hard drive). Saving them back to the same drive works against safety and can overwrite the very files you are trying to rescue.</p>
                </div>
              </div>
            </section>

            {/* 6. Ethical Disclaimer */}
            <section className="space-y-4 bg-orange-50 p-8 rounded-2xl border border-orange-100">
              <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-orange-500" />
                Our Ethical Disclaimer
              </h2>
              <p className="text-lg text-orange-900 leading-relaxed">
                We promise to provide professional-grade tools to search for your data. However, because of the complex nature of data loss (physical damage, encryption, severe corruption, or overwriting), <strong>we cannot guarantee 100% recovery in every scenario.</strong>
              </p>
              <p className="text-lg text-orange-900 leading-relaxed">
                We advise you to use our free preview feature to see exactly what can be recovered before you decide to proceed. We believe in "try before you trust."
              </p>
            </section>

            {/* 7. Closing */}
            <section className="text-center space-y-6 pt-8 border-t border-border">
              <HeartHandshake className="w-16 h-16 text-brand mx-auto" />
              <h2 className="text-3xl font-bold text-text-primary">We Are Here To Help</h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Data loss is frightening, but you are not alone. Our technology is designed to be your calm, capable partner in retrieval. We have helped countless users reunite with their precious memories and critical work. Take a deep breath, follow the safety steps, and let us help you get back to normal.
              </p>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
