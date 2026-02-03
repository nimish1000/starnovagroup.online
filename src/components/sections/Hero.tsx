import { Container } from "../ui/Container"
import { Button } from "../ui/Button"
import { Badge } from "../ui/Badge"
import { ArrowRight, Download, ShieldCheck } from "lucide-react"

import { useDownload } from "../../hooks/useDownload"
import { useNavigate } from "react-router-dom"


export function Hero() {
  const { triggerDownload } = useDownload();
  const navigate = useNavigate();


  return (
    <section className="relative pt-28 pb-36 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-light/40 via-background to-background" />

      <Container className="flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-8 animate-fade-in gap-1.5 py-1.5 px-4 text-[13px]">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
          </span>
          Compatible with Windows 11, 10, 8
        </Badge>

        <h1 className="max-w-4xl text-[2.75rem] font-extrabold tracking-tight text-brand-dark sm:text-7xl mb-8">
          Your files aren't gone. <br className="hidden sm:block" />
          <span className="text-brand">They're waiting.</span>
        </h1>

        <p className="max-w-2xl text-[1.125rem] text-text-secondary mb-12 leading-[1.75]">
          Professional recovery for deleted photos, documents, and data from Windows PCs, hard drives, USBs, and SD cards. 100% safe. Read-only.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-20">
          <Button size="lg" className="h-12 px-8 text-[15px] group" onClick={triggerDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download Free
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="h-12 px-8 text-[15px] group"
            onClick={() => navigate('/premium')}
          >
             <ShieldCheck className="mr-2 h-4 w-4 text-brand" />
            Get Premium
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>

        {/* Product Visual */}
        <div className="relative w-full max-w-5xl mx-auto rounded-xl border border-border bg-white p-2 sm:p-4 shadow-2xl shadow-brand/10">
          <div className="aspect-[16/9] w-full rounded-lg bg-white border border-border flex items-center justify-center overflow-hidden relative">
             {/* Fake UI: File List */}
             <div className="absolute inset-0 bg-white flex flex-col">
                <div className="h-12 border-b border-border flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
                    <span className="ml-4 text-xs text-text-muted font-medium tracking-wide">Starnova Group Recovery Engine</span>
                </div>
                <div className="flex-1 p-8">
                   <div className="flex justify-between items-center mb-6">
                      <div className="text-lg font-semibold text-text-primary">Deep Scan Results</div>
                      <Badge>2,405 Files Found</Badge>
                   </div>
{/* Animation Logic: Infinite vertical scroll with pause on hover */}
                   <style>{`
                     @keyframes scroll-vertical {
                       from { transform: translateY(0); }
                       to { transform: translateY(-50%); }
                     }
                     .animate-scroll-vertical {
                       animation: scroll-vertical 20s linear infinite;
                     }
                   `}</style>

                   {/* Scroll Container */}
                   <div className="relative h-64 overflow-hidden group mask-linear-fade">
                      {/* Animated Wrapper */}
                      <div className="animate-scroll-vertical group-hover:[animation-play-state:paused] w-full flex flex-col space-y-3">
                          {/* File Data Definition */}
                          {(() => {
                            const scannedFiles = [
                              { name: "Invoice_2023_Q4.pdf", size: "1.2 MB", status: "Recoverable" },
                              { name: "IMG_1842.jpg", size: "4.8 MB", status: "Excellent" },
                              { name: "Project_Alpha_Backup.zip", size: "240 MB", status: "Good" },
                              { name: "Financial_Report.xlsx", size: "85 KB", status: "Recoverable" },
                              { name: "Vacation_Video_01.mp4", size: "450 MB", status: "Partial" },
                              { name: "Resume_Final.docx", size: "120 KB", status: "Excellent" },
                              { name: "System_Log.txt", size: "12 KB", status: "Good" },
                              { name: "Presentation_v2.pptx", size: "15 MB", status: "Recoverable" },
                            ];

                            const FileRow = ({ file }: { file: typeof scannedFiles[0] }) => (
                              <div className="h-12 w-full border border-border rounded-lg flex items-center px-4 gap-4 shrink-0 hover:bg-surface/60 transition-colors">
                                  <div className="w-6 h-6 bg-brand-light rounded flex items-center justify-center shrink-0">
                                    <div className="w-3 h-3 bg-brand-accent/30 rounded-sm" />
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-text-primary truncate font-mono sm:font-sans">
                                      {file.name}
                                    </div>
                                  </div>

                                  <div className="hidden sm:flex items-center gap-3 text-xs text-text-secondary whitespace-nowrap">
                                    <span>{file.size}</span>
                                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold border ${
                                      file.status === 'Excellent' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                      file.status === 'Good' ? 'bg-brand-light text-brand border-brand-accent/20' :
                                      file.status === 'Recoverable' ? 'bg-slate-100 text-slate-600 border-slate-200' :
                                      'bg-amber-50 text-amber-700 border-amber-200'
                                    }`}>
                                      {file.status}
                                    </span>
                                  </div>
                              </div>
                            );

                            return (
                              <>
                                {scannedFiles.map((file, i) => (
                                  <FileRow key={`original-${i}`} file={file} />
                                ))}
                                {scannedFiles.map((file, i) => (
                                  <FileRow key={`dupe-${i}`} file={file} />
                                ))}
                              </>
                            );
                          })()}
                      </div>

                      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
