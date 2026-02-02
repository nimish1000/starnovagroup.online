import { Container } from "../components/ui/Container"
import { AppLayout } from "../layouts/AppLayout"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { 
  FileText, Image, Video, Music, Archive, Database, 
  Trash2, HardDrive, Search, Usb, Eye, ShieldCheck, 
  CheckCircle2, ArrowRight 
} from "lucide-react"

const coreFeatures = [
  {
    icon: Trash2,
    title: "Deleted File Recovery",
    desc: "Recover files you accidentally deleted using Shift+Delete or emptied from the Recycle Bin. If you act quickly, these files are often 100% recoverable.",
    useCase: "Best for: Accidental clicks, cleaned desktop."
  },
  {
    icon: HardDrive,
    title: "Formatted Drive Recovery",
    desc: "Mistakenly formatted a partition or drive? We can often restore the entire folder structure even after a 'Quick Format'.",
    useCase: "Best for: SD cards asking to be formatted."
  },
  {
    icon: Search,
    title: "Deep Scan Technology",
    desc: "Our advanced engine scours your drive sector-by-sector to find traces of files that other software misses. It works even on partially corrupted drives.",
    useCase: "Best for: Files lost weeks or months ago."
  },
  {
    icon: Usb,
    title: "USB & External Drive Recovery",
    desc: "Specialized support for removable media which is prone to corruption. Supports FAT32, exFAT, and NTFS file systems.",
    useCase: "Best for: Thumb drives, Camera SD cards."
  },
  {
    icon: Eye,
    title: "Preview Before Recovery",
    desc: "Don't waste time restoring broken files. View your photos, read your documents, and watch videos inside the app before you save them.",
    useCase: "Verify quality before you recover."
  },
  {
    icon: ShieldCheck,
    title: "Safe & Read-Only",
    desc: "Your data safety is our priority. Our software performs Read-Only operations, meaning it will never overwrite or damage your existing files.",
    useCase: "Risk-free scanning guarantee."
  }
]

const fileTypes = [
  { icon: Image, label: "Photos", details: "JPG, PNG, RAW, TIFF, BMP, HEIC, GIF" },
  { icon: Video, label: "Videos", details: "MP4, MOV, AVI, WMV, MKV, FLV" },
  { icon: FileText, label: "Documents", details: "DOCX, PDF, XLSX, PPTX, TXT, HTML" },
  { icon: Music, label: "Audio", details: "MP3, WAV, FLAC, M4A, OGG, WMA" },
  { icon: Archive, label: "Archives", details: "ZIP, RAR, 7Z, ISO, TAR, GZ" },
  { icon: Database, label: "Other", details: "SQL, PST (Email), XML, ISO, EXE" },
]

export default function FeaturesPage() {
  return (
    <AppLayout>
      {/* 1. Introduction Hero */}
      <div className="py-24 bg-surface/30 border-b border-border/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
             <Badge variant="outline" className="mb-6">Professional Grade Engine</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl mb-6">
              Complete Data Rescue for <br className="hidden sm:block" />
              Every Situation.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Windows File Recovery gives you the best chance to bring your data back. 
              Whether it was a simple mistake or a major system crash, our tools are built to handle it safely and simply.
            </p>
          </div>
        </Container>
      </div>

      {/* 2. Core Features */}
      <div className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-3xl font-bold mb-4">Powerful Features, Simple to Use</h2>
             <p className="text-text-secondary">Everything you need to recover your digital life, without the technical jargon.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="bg-surface border border-border p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-text-secondary mb-4 leading-relaxed min-h-[80px]">
                  {feature.desc}
                </p>
                <div className="text-sm font-medium text-brand/80 bg-brand/5 py-2 px-3 rounded-lg inline-block">
                   {feature.useCase}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3. Supported File Types & Devices */}
      <div className="py-24 bg-surface border-y border-border/40">
         <Container>
            <div className="grid lg:grid-cols-2 gap-16">
               {/* File Types */}
               <div>
                  <h3 className="text-2xl font-bold mb-8">Recover 1000+ File Formats</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {fileTypes.map((type) => (
                        <div key={type.label} className="flex gap-4 p-4 rounded-xl border border-border bg-background">
                           <div className="shrink-0 w-10 h-10 bg-surface rounded-lg flex items-center justify-center border border-border">
                              <type.icon className="w-5 h-5" />
                           </div>
                           <div>
                              <div className="font-bold">{type.label}</div>
                              <div className="text-xs text-text-muted mt-1">{type.details}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               
               {/* Storage Devices */}
               <div>
                  <h3 className="text-2xl font-bold mb-8">Supported Storage Devices</h3>
                  <div className="space-y-6">
                     <p className="text-lg text-text-secondary">
                        Our software is storage-neutral. If Windows can detect the drive letter, we can scan it.
                     </p>
                     <ul className="space-y-4">
                        {[
                           "Internal Hard Drive (HDD)", 
                           "Solid State Drive (SSD)", 
                           "USB Flash Drive / Thumb Drive", 
                           "SD / CF / MicroSD Cards", 
                           "External Hard Disk",
                           "Digital Cameras"
                        ].map((device) => (
                           <li key={device} className="flex items-center gap-3 text-lg font-medium">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              {device}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </Container>
      </div>

      {/* 5. Safety & Reliability */}
      <div className="py-24">
         <Container>
            <div className="max-w-4xl mx-auto bg-brand text-white rounded-3xl p-12 text-center relative overflow-hidden">
               <div className="relative z-10">
                  <ShieldCheck className="w-16 h-16 mx-auto mb-6 opacity-90" />
                  <h2 className="text-3xl font-bold mb-6">Our "No-Harm" Guarantee</h2>
                  <p className="text-xl text-white/80 mb-10 leading-relaxed">
                     Data recovery requires care. Writing new data to a drive can permanently overwrite lost files. 
                     That's why Windows File Recovery operates in 100% Read-Only mode. We look, but we don't touch 
                     until you tell us to save your files to a <strong>new, safe location</strong>.
                  </p>
                  <Button variant="secondary" size="lg" className="bg-white text-brand hover:bg-white/90 border-transparent">
                     Download Safe Recovery Tool
                     <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
               </div>
               
               {/* Decorative background circles */}
               <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
         </Container>
      </div>
    </AppLayout>
  )
}
