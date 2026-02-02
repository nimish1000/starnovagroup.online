import { Container } from "../components/ui/Container"
import { AppLayout } from "../layouts/AppLayout"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { 
  Download, ShieldCheck, AlertTriangle, Monitor, 
  HardDrive, Cpu, FileCog, CheckCircle2, HelpCircle 
} from "lucide-react"
import { useDownload } from "../hooks/useDownload"

export default function DownloadPage() {
  const { triggerDownload } = useDownload();

  return (
    <AppLayout>
      {/* 1. Page Introduction & Primary Download */}
      <div className="py-24 bg-surface/30 border-b border-border/40">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6 bg-background">
               Official Free Version
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl mb-6">
              Download Windows File Recovery
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl">
              Get the professional-grade recovery tool used by thousands. 
              100% clean, safe, and read-only.
            </p>

            <div className="bg-surface border border-border p-8 rounded-2xl w-full max-w-xl shadow-sm mb-12">
               <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mb-8">
                  <div className="text-left">
                     <span className="text-sm text-text-muted block mb-1">Latest Version</span>
                     <span className="font-bold text-lg">v2.4.0 (Stable)</span>
                  </div>
                  <div className="text-left sm:text-right">
                     <span className="text-sm text-text-muted block mb-1">File Size</span>
                     <span className="font-bold text-lg">15.4 MB</span>
                  </div>
                  <div className="text-left sm:text-right">
                     <span className="text-sm text-text-muted block mb-1">Compatibility</span>
                     <span className="font-bold text-lg">Win 11, 10, 8</span>
                  </div>
               </div>
               
               <Button size="lg" className="w-full text-lg h-14 group mb-4" onClick={triggerDownload}>
                  <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                  Download for Windows
               </Button>
               
               <div className="flex items-center justify-center gap-6 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                     <ShieldCheck className="w-3 h-3 text-green-600" /> No Viruses
                  </span>
                  <span className="flex items-center gap-1">
                     <ShieldCheck className="w-3 h-3 text-green-600" /> No Spyware
                  </span>
                  <span className="flex items-center gap-1">
                     <ShieldCheck className="w-3 h-3 text-green-600" /> Read-Only
                  </span>
               </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 3. CRITICAL: Before You Download */}
      <div className="py-16 bg-red-50 border-b border-red-100">
         <Container>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
               <div className="shrink-0 p-4 bg-red-100 rounded-full text-red-600">
                  <AlertTriangle className="w-8 h-8" />
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">CRITICAL: Read Before Installing</h3>
                  <p className="text-lg text-red-800 mb-6 leading-relaxed">
                     <strong>Do NOT install this software on the same drive you lost files from.</strong>
                  </p>
                  <p className="text-red-800/80 mb-0">
                     Installing <i>any</i> software creates new files. If you install this on your C: drive to recover files from your C: drive, the installation itself might overwrite your lost data. 
                     <br/><br/>
                     <strong>Recommendation:</strong> Install on a USB stick or a different drive partition.
                  </p>
               </div>
            </div>
         </Container>
      </div>

      {/* 4. System Requirements */}
      <div className="py-24 border-b border-border/40">
         <Container>
            <h2 className="text-3xl font-bold text-center mb-16">System Requirements</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="p-6 bg-surface border border-border rounded-xl">
                  <Monitor className="w-8 h-8 text-text-primary mb-4" />
                  <h3 className="font-bold mb-2">Operating System</h3>
                  <p className="text-sm text-text-secondary">Windows 11, 10, 8.1, 8, 7 (32/64 bit)</p>
               </div>
               <div className="p-6 bg-surface border border-border rounded-xl">
                  <Cpu className="w-8 h-8 text-text-primary mb-4" />
                  <h3 className="font-bold mb-2">Processor / RAM</h3>
                  <p className="text-sm text-text-secondary">1GHz x86/x64 CPU, 1GB RAM minimum</p>
               </div>
               <div className="p-6 bg-surface border border-border rounded-xl">
                  <HardDrive className="w-8 h-8 text-text-primary mb-4" />
                  <h3 className="font-bold mb-2">Disk Space</h3>
                  <p className="text-sm text-text-secondary">50 MB minimum space for installation</p>
               </div>
               <div className="p-6 bg-surface border border-border rounded-xl">
                  <FileCog className="w-8 h-8 text-text-primary mb-4" />
                  <h3 className="font-bold mb-2">File Systems</h3>
                  <p className="text-sm text-text-secondary">FAT32, NTFS, exFAT</p>
               </div>
            </div>
         </Container>
      </div>

      {/* 5. Installation Overview */}
      <div className="py-24">
         <Container>
            <div className="max-w-3xl mx-auto">
               <h2 className="text-3xl font-bold text-center mb-12">How to Install in 3 Steps</h2>
               <div className="space-y-8">
                  {[
                     { 
                        title: "Download the Installer", 
                        desc: "Click the download button above. Save the 'setup.exe' file to a safe location (like a USB drive)." 
                     },
                     { 
                        title: "Run the Setup", 
                        desc: "Double-click the file. If Windows asks for permission, click 'Yes'. Follow the simple on-screen instructions." 
                     },
                     { 
                        title: "Start Recovering", 
                        desc: "Launch the application. You will immediately see a list of available drives to scan." 
                     }
                  ].map((step, idx) => (
                     <div key={idx} className="flex gap-6">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center font-bold text-sm">
                           {idx + 1}
                        </div>
                        <div>
                           <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                           <p className="text-text-secondary">{step.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </div>

      {/* 7. Help & Support */}
      <div className="py-12 bg-surface/50 border-t border-border/40">
         <Container>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-text-secondary">
               <HelpCircle className="w-5 h-5" />
               <span>Having trouble downloading?</span>
               <a href="/support" className="text-brand font-medium hover:underline">Visit Support Center</a>
            </div>
         </Container>
      </div>
    </AppLayout>
  )
}
