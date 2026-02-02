import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { Clock, HardDrive, AlertTriangle, Ban, CheckCircle2, HelpCircle, AlertOctagon } from "lucide-react"

export default function RecoverySuccess() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            {/* Header */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Recovery Success Factors
              </h1>
              <p className="text-xl text-text-secondary">
                Understanding the principles of data recovery: what works, what doesn't, and why.
              </p>
            </div>

            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary">
                Recovery is Possible, But Not Magic
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Data recovery is often misunderstood. It is not a magic wand that can reverse time, but a technical process of finding data that hasn't been completely destroyed yet.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                When you delete a file, it isn't strictly "gone" immediately—it is just hidden by your computer's file system, waiting to be overwritten by new data. Successful recovery depends entirely on whether that "hidden" data is still intact or if it has been damaged or replaced.
              </p>
            </section>

            {/* 2. What Increases Success */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                What Increases Your Chance of Success
              </h2>
              <p className="text-lg text-text-secondary">
                The likelihood of getting your files back depends on three main factors. Understanding these can help you manage your expectations.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                    <Clock className="w-8 h-8 text-brand mb-4" />
                    <h3 className="font-bold text-text-primary mb-2">Speed</h3>
                    <p className="text-sm text-text-secondary">The sooner you act, the better. Recovering a file deleted 10 minutes ago is much more likely to succeed than one deleted 10 days ago.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                    <Ban className="w-8 h-8 text-brand mb-4" />
                    <h3 className="font-bold text-text-primary mb-2">Zero Device Usage</h3>
                    <p className="text-sm text-text-secondary">The less you use your computer after data loss, the better. If you stop everything immediately, the "hidden" data is less likely to be touched.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                    <HardDrive className="w-8 h-8 text-brand mb-4" />
                    <h3 className="font-bold text-text-primary mb-2">Storage Type</h3>
                    <p className="text-sm text-text-secondary">Traditional Hard Drives (HDD) and memory cards are generally easier to recover from than modern SSDs due to how they manage deleted space.</p>
                </div>
              </div>
            </section>

            {/* 3. What Reduces Recovery */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <AlertOctagon className="w-8 h-8 text-red-500" />
                What Reduces or Prevents Recovery
              </h2>
              <p className="text-lg text-text-secondary">
                Sometimes, recovery is simply impossible. This is not a failure of the software, but a physical reality of how digital storage works.
              </p>
              <ul className="space-y-4">
                <li className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4">
                    <div className="shrink-0 mt-1"><AlertTriangle className="w-5 h-5 text-red-600" /></div>
                    <div>
                        <h3 className="font-bold text-red-900">Overwritten Data</h3>
                        <p className="text-red-800 mt-1">This is the #1 cause of permanent data loss. If you save a new file (like a document or a photo), your computer might physically save it on top of the space where your deleted file used to leverage. Once overwritten, the old data is gone forever.</p>
                    </div>
                </li>
                <li className="bg-white p-6 rounded-xl border border-border flex gap-4">
                     <div className="shrink-0 mt-1"><HardDrive className="w-5 h-5 text-text-secondary" /></div>
                     <div>
                        <h3 className="font-bold text-text-primary">Installing Software on the Same Drive</h3>
                        <p className="text-text-secondary mt-1">If you download and install recovery software onto the *same* drive you are trying to rescue, the installation files themselves might overwrite the very data you are trying to save.</p>
                     </div>
                </li>
                <li className="bg-white p-6 rounded-xl border border-border flex gap-4">
                     <div className="shrink-0 mt-1"><HardDrive className="w-5 h-5 text-text-secondary" /></div>
                     <div>
                        <h3 className="font-bold text-text-primary">SSD "TRIM" Technology</h3>
                        <p className="text-text-secondary mt-1">Modern SSDs have a feature called TRIM that automatically "cleans" deleted data to keep the drive fast. If TRIM has run (which happens automatically), it completely wipes the digital trace of your files, making recovery impossible.</p>
                     </div>
                </li>
              </ul>
            </section>

            {/* 4. Common Myths */}
            <section className="space-y-6">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-brand" />
                Common Myths About File Recovery
              </h2>
              <div className="grid gap-4">
                 {[
                    { myth: "Everything can always be recovered.", reality: "False. Physical damage, overwriting, or secure erasure makes recovery impossible." },
                    { myth: "More expensive software finds more files.", reality: "Most recovery tools look for the same file signatures. If the data is overwritten, no tool can bring it back." },
                    { myth: "I can recover files I replaced properly.", reality: "If you \"saved over\" a file (replaced file_v1.doc with file_v2.doc), the old version is often overwritten immediately." }
                 ].map((item, i) => (
                    <div key={i} className="bg-surface-50 p-6 rounded-xl border border-border">
                        <p className="font-bold text-red-500 mb-1">Myth: "{item.myth}"</p>
                        <p className="text-text-secondary"><strong className="text-green-600">Reality:</strong> {item.reality}</p>
                    </div>
                 ))}
              </div>
            </section>

            {/* 5. What Users Should Do */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary">
                What You Should Do Immediately After Data Loss
              </h2>
              <p className="text-lg text-text-secondary">To preserve your best chance of success, follow this "Emergency Protocol":</p>
              <div className="bg-brand/5 p-8 rounded-2xl border border-brand/10 space-y-4">
                 <ol className="list-decimal list-inside space-y-3 text-lg text-text-primary font-medium">
                    <li><span className="font-bold">Stop everything.</span> Do not save, copy, or download any new files to that drive.</li>
                    <li><span className="font-bold">Do not restart</span> if possible. Rebooting creates system logs that can overwrite data.</li>
                    <li><span className="font-bold">Run our software from a different drive.</span> Reliable recovery requires running the scan from a USB stick or a separate partition to avoid self-sabotage.</li>
                 </ol>
              </div>
            </section>

             {/* 6. Honest Promise */}
            <section className="space-y-4 pt-8 border-t border-border text-center">
              <h2 className="text-3xl font-bold text-text-primary">
                Our Honest Promise
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                We built this software to be the most effective "search and rescue" tool possible. We are transparent about these limitations because we respect your time and your data.
              </p>
               <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                If your data is still there, we will find it. If it has been physically overwritten or wiped by system processes, we will be honest about that, too. We are here to help you navigate this stressful situation with clarity and the best possible tools.
              </p>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
