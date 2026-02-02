import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { History, Tag, CheckCircle2 } from "lucide-react"

export default function ReleaseNotes() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Release Notes
              </h1>
              <p className="text-xl text-text-secondary">
                Stay up to date with the latest improvements, stability fixes, and feature enhancements for our File Recovery software.
              </p>
            </div>

            <div className="space-y-12">
              {/* Version 1.2.0 (Latest) */}
              <section className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                    <Tag className="w-6 h-6 text-brand" />
                    Version 1.2.0
                  </h2>
                  <div className="flex items-center gap-4">
                    <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">
                      Latest
                    </span>
                    <span className="text-text-secondary font-medium">January 2026</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Improved deep scan accuracy for NTFS and exFAT formatted drives</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Enhanced compatibility with the latest Windows 11 updates</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Reduced memory usage during large volume scans (4TB+)</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Fixed a rare issue where file previews could lag on older hardware</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Refined user interface for better readability in Dark Mode</span>
                  </li>
                </ul>
              </section>

              {/* Version 1.1.0 */}
              <section className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-6 opacity-90">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <h2 className="text-xl font-bold text-text-primary flex items-center gap-3">
                    <History className="w-5 h-5 text-text-secondary" />
                    Version 1.1.0
                  </h2>
                  <span className="text-text-secondary font-medium">December 2025</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary mt-2.5 shrink-0" />
                    <span>Added support for recovering raw image files (CR3, RAF, NEF) from SD cards</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary mt-2.5 shrink-0" />
                    <span>Significantly optimized scan speed for SSDs</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary mt-2.5 shrink-0" />
                    <span>Resolved a bug that caused the progress bar to stall at 99%</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary mt-2.5 shrink-0" />
                    <span>Improved stability when recovering deeply nested folder structures</span>
                  </li>
                </ul>
              </section>

              {/* Version 1.0.0 */}
              <section className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-6 opacity-80">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <h2 className="text-xl font-bold text-text-primary flex items-center gap-3">
                    <History className="w-5 h-5 text-text-secondary" />
                    Version 1.0.0
                  </h2>
                  <span className="text-text-secondary font-medium">November 2025</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary mt-2.5 shrink-0" />
                    <span>Initial release of our professional File Recovery software</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary mt-2.5 shrink-0" />
                    <span>Standard & Deep Scan modes for maximum recovery potential</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary mt-2.5 shrink-0" />
                    <span>Preview support for over 1000+ file formats</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary mt-2.5 shrink-0" />
                    <span>Secure "Read-Only" recovery process to prevent data overwriting</span>
                  </li>
                </ul>
              </section>

            </div>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
