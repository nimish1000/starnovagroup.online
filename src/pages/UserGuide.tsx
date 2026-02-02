import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { PlayCircle, AlertTriangle, Monitor, CheckCircle2, AlertOctagon, Info } from "lucide-react"

export default function UserGuide() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                User Guide & Getting Started
              </h1>
              <p className="text-xl text-text-secondary">
                A simple, step-by-step guide to recovering your lost files safely and effectively.
              </p>
            </div>

            {/* 1. Critical Warnings */}
            <section className="bg-red-50 p-8 rounded-2xl border border-red-100 space-y-4">
              <h2 className="text-2xl font-bold text-red-800 flex items-center gap-3">
                <AlertOctagon className="w-8 h-8 text-red-600" />
                Before You Start: Critical Warnings
              </h2>
              <p className="text-lg text-red-900 leading-relaxed">
                Before you open the software, please pause for a moment. The actions you take right now determine the success of your recovery.
              </p>
              <ul className="space-y-3 font-medium text-red-900">
                 <li className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 shrink-0 text-red-600" />
                    <span><strong>Do NOT install the software on the drive you lost data from.</strong> If you lost files on Drive C:, install our software on Drive D: or a USB stick.</span>
                 </li>
                 <li className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 shrink-0 text-red-600" />
                    <span><strong>Do NOT save recovered files back to the same drive.</strong> You must have a separate safe location (like an external hard drive) ready to save your files.</span>
                 </li>
              </ul>
            </section>

            {/* 2. Step-by-Step Guide */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <PlayCircle className="w-8 h-8 text-brand" />
                Step-by-Step Usage Guide
              </h2>
              
              <div className="relative border-l-4 border-brand/20 ml-4 space-y-12 pl-8 py-2">
                 {/* Step 1 */}
                 <div className="relative">
                    <div className="absolute -left-[45px] top-0 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Select Your Source</h3>
                    <p className="text-text-secondary leading-relaxed">Launch the application. You will see a list of all drives connected to your computer. Select the specific drive or partition where your files were stored before they were lost.</p>
                 </div>

                 {/* Step 2 */}
                 <div className="relative">
                    <div className="absolute -left-[45px] top-0 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Scan for Lost Files</h3>
                    <p className="text-text-secondary leading-relaxed">Click the "Scan" button. The software will begin analyzing the drive. You will see two stages: a "Quick Scan" for recently deleted files and a "Deep Scan" for harder-to-find data. You can pause or stop the scan at any time if you see your files appear.</p>
                 </div>

                 {/* Step 3 */}
                 <div className="relative">
                    <div className="absolute -left-[45px] top-0 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Preview and Recover</h3>
                    <p className="text-text-secondary leading-relaxed">Once the scan is complete, browse the found files. Use the Preview feature to check if photos or documents are intact. Select the files you want to keep and click "Recover." Remember to save them to a <strong>new, different location</strong>.</p>
                 </div>
              </div>
            </section>

            {/* 3. Best Practices */}
            <section className="space-y-6">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                Best Practices for Best Results
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                 <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-text-primary mb-2">Use Filters</h3>
                    <p className="text-sm text-text-secondary">If you are looking for photos only, use the file type filter to hide thousands of system files you don't need.</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-text-primary mb-2">Check "Deep Scan"</h3>
                    <p className="text-sm text-text-secondary">If files aren't in the original folder, check the "Raw Files" or "Deep Scan" section, organized by file type (e.g., JPG, DOCX).</p>
                 </div>
                  <div className="bg-white p-6 rounded-xl border border-border shadow-sm md:col-span-2">
                    <h3 className="font-bold text-text-primary mb-2">Be Patient</h3>
                    <p className="text-sm text-text-secondary">Deep scans on large drives (1TB+) can take several hours. This is normal and necessary to find every recoverable byte.</p>
                 </div>
              </div>
            </section>

             {/* 4. Common Mistakes */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Info className="w-8 h-8 text-blue-500" />
                Common Beginner Mistakes
              </h2>
               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col gap-4">
                  <div className="flex gap-3">
                     <span className="font-bold text-blue-900 min-w-[120px]">Rushing to save:</span>
                     <p className="text-blue-800">Don't just select everything and hit recover. Preview your most important files first to ensure they are readable.</p>
                  </div>
                  <div className="flex gap-3">
                     <span className="font-bold text-blue-900 min-w-[120px]">Saving to same drive:</span>
                     <p className="text-blue-800">We cannot stress this enough—saving rescued files to the original drive will destroy other lost files you haven't recovered yet.</p>
                  </div>
               </div>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
