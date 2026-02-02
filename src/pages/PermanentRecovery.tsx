import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { Clock, Ban, CheckCircle, AlertOctagon } from "lucide-react"

export default function PermanentRecovery() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Can Deleted Files Be Recovered Permanently?
              </h1>
              <p className="text-xl text-text-secondary">
                The truth about data recovery: A race against time and overwriting.
              </p>
            </div>

            {/* 1. Introduction */}
            <section className="space-y-4">
              <p className="text-lg text-text-secondary leading-relaxed font-medium">
                The Short Answer: Yes, But...
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Whether a file can be recovered depends entirely on what has happened to the storage space since the deletion. Recovery is a race against time and usage.
              </p>
            </section>

             {/* 2. When Possible */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-green-700 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
                When Recovery IS Possible (The Easy Cases)
              </h2>
               <div className="grid gap-4">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                     <h3 className="font-bold text-black mb-1">Recent Deletion</h3>
                     <p className="text-green-900">You deleted the file just now or a few days ago, and haven't used the computer much since.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                     <h3 className="font-bold text-black mb-1">Recycle Bin Emptied</h3>
                     <p className="text-green-900">Files removed from the bin are usually recoverable because only the "link" to them has been removed.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                     <h3 className="font-bold text-black mb-1">Formatted Drive (Quick Format)</h3>
                     <p className="text-green-900">A quick format builds a new file system but leaves the old data underneath, often making it recoverable.</p>
                  </div>
               </div>
            </section>

             {/* 3. When IMPOSSIBLE */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-red-700 flex items-center gap-3">
                <Ban className="w-8 h-8 text-red-600" />
                When Recovery Is NOT Possible (The Hard Truth)
              </h2>
               <div className="space-y-4">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4">
                     <AlertOctagon className="w-6 h-6 text-red-600 mt-1 shrink-0" />
                     <div>
                        <h3 className="font-bold text-red-900 mb-1">Overwritten Data</h3>
                        <p className="text-red-800">If you saved a new movie to the drive, and it physically grabbed the space where your old Word document was, the document is gone. Physics dictates that two things cannot occupy the same space at the same time.</p>
                     </div>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4">
                     <Ban className="w-6 h-6 text-red-600 mt-1 shrink-0" />
                     <div>
                        <h3 className="font-bold text-red-900 mb-1">Secure Erasure & TRIM</h3>
                        <p className="text-red-800">If you used "shredding" software or have a modern SSD with TRIM enabled, the drive may have permanently erased the data blocks immediately.</p>
                     </div>
                  </div>
               </div>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
