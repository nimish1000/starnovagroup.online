import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { RefreshCw, Eraser, FileSearch, AlertTriangle } from "lucide-react"

export default function FormattedRecovery() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                How to Recover Files from a Formatted Drive
              </h1>
              <p className="text-xl text-text-secondary">
                Did you accidentally format your USB or Hard Drive? All is not lost.
              </p>
            </div>

            {/* 1. Intro */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Eraser className="w-8 h-8 text-brand" />
                "Format" Doesn't Always Mean "Erase"
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Formatting a drive usually just resets the "Table of Contents" (File System). It creates a blank slate for new files, but often leaves the old library of books (your data) sitting on the shelves—messy, unorganized, but there.
              </p>
            </section>

             {/* 2. Steps */}
            <section className="space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-6">
                  <div>
                      <h3 className="text-xl font-bold text-text-primary mb-2 flex items-center gap-2">
                         <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand text-white text-sm font-bold">1</span>
                         Stop Using the Drive
                      </h3>
                      <p className="text-text-secondary pl-10">
                          This works exactly like deleted files. If you format a USB stick and then save 1GB of new data onto it, you have likely destroyed 1GB of your old data. Stop immediately.
                      </p>
                  </div>
                  
                  <div>
                      <h3 className="text-xl font-bold text-text-primary mb-2 flex items-center gap-2">
                         <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand text-white text-sm font-bold">2</span>
                         Use "Deep Scan" or "Raw Recovery"
                      </h3>
                      <div className="pl-10 space-y-3">
                          <p className="text-text-secondary">
                              Simple scans rely on the file system index, which formatting destroys. You need a "Deep Scan" or "Signature Search."
                          </p>
                          <div className="bg-surface p-4 rounded-lg flex items-start gap-3">
                              <FileSearch className="w-5 h-5 text-text-secondary mt-1" />
                              <p className="text-sm text-text-muted">
                                  This method ignores file names (because the format erased them) and looks for file <em>types</em>. You might not find "Vacation_2023.jpg," but you will find "FILE001.jpg" which is the exact same photo.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
            </section>

            {/* 3. Warning */}
             <section className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                   <h2 className="text-xl font-bold text-red-900 mb-2">Warning: Formatting vs. Wiping</h2>
                   <p className="text-red-900/90 leading-relaxed">
                      Windows offers a "Quick Format" (recoverable) and a full format (less recoverable). If you are formatting a drive to sell it, use a secure wipe tool. If you formatted by accident, <strong>never</strong> do a full/secure wipe, or you will defeat any chance of recovery.
                   </p>
                </div>
             </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
