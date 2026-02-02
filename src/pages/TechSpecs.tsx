import { Container } from "../components/ui/Container"
import { AppLayout } from "../layouts/AppLayout"
import { Badge } from "../components/ui/Badge"
import { 
  Monitor, Cpu, HardDrive, FileCog, Languages, 
  FileText, Image, Video, Music, Archive, Mail,
  CheckCircle2, Laptop, Disc
} from "lucide-react"

export default function TechSpecsPage() {
  return (
    <AppLayout>
      {/* 1. Header */}
      <div className="py-24 bg-surface/30 border-b border-border/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Technical Details</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl mb-6">
              Technical Specifications
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Verify compatibility, supported formats, and system requirements for Windows File Recovery.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        {/* 2. System Requirements Grid */}
        <div className="py-24 border-b border-border/40">
          <h2 className="text-3xl font-bold mb-12">System Requirements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface border border-border p-6 rounded-xl">
              <div className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-bold text-lg mb-2">Operating System</h3>
              <ul className="space-y-2 text-sm text-text-secondary text-sm">
                <li>Windows 11</li>
                <li>Windows 10</li>
                <li>Windows 8.1 / 8</li>
                <li>Windows 7 (SP1)</li>
                <li>Windows Server 2022-2008</li>
              </ul>
            </div>
            
            <div className="bg-surface border border-border p-6 rounded-xl">
              <div className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-bold text-lg mb-2">CPU</h3>
              <p className="text-text-secondary">
                1GHz (32 bit or 64 bit) or above
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-xl">
              <div className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-bold text-lg mb-2">RAM</h3>
              <p className="text-text-secondary">
                1 GB or more of RAM<br/>
                (4 GB Recommended)
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-xl">
              <div className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center mb-4">
                <HardDrive className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-bold text-lg mb-2">Disk Space</h3>
              <p className="text-text-secondary">
                200 MB of free space for installation
              </p>
            </div>
          </div>
        </div>

        {/* 3. Supported File Systems & Devices */}
        <div className="py-24 border-b border-border/40">
           <div className="grid md:grid-cols-2 gap-16">
              <div>
                 <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <FileCog className="w-6 h-6 text-text-primary" />
                    Supported File Systems
                 </h2>
                 <ul className="grid grid-cols-2 gap-4">
                    {["NTFS", "FAT32", "exFAT", "ReFS", "FAT16", "NTFS5"].map(fs => (
                       <li key={fs} className="flex items-center gap-2 font-medium border border-border bg-surface px-4 py-3 rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          {fs}
                       </li>
                    ))}
                 </ul>
              </div>
              
              <div>
                 <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Disc className="w-6 h-6 text-text-primary" />
                    Supported Storage Devices
                 </h2>
                 <ul className="space-y-3">
                    {[
                       "DE/SATA/SCSI Hard Drives", 
                       "SSD (Solid State Drives)", 
                       "USB Flash Drives", 
                       "SD Cards (Mini, Micro, SDHC, SDXC)", 
                       "External Hard Disks",
                       "Digital Cameras & Camcorders"
                    ].map(device => (
                       <li key={device} className="flex items-center gap-3 text-text-secondary">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                          {device}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>

        {/* 4. Supported File Types Detailed */}
        <div className="py-24 border-b border-border/40">
           <h2 className="text-3xl font-bold mb-12 text-center">Supported File Types</h2>
           <div className="grid md:grid-cols-3 gap-8">
              {/* Documents */}
              <div>
                 <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-blue-500" />
                    <h3 className="font-bold text-xl">Documents</h3>
                 </div>
                 <p className="text-sm text-text-secondary leading-relaxed">
                    DOC/DOCX, XLS/XLSX, PPT/PPTX, PDF, CWK, HTML/HTM, INDD, EPS, etc.
                 </p>
              </div>

               {/* Graphics */}
               <div>
                 <div className="flex items-center gap-3 mb-6">
                    <Image className="w-6 h-6 text-purple-500" />
                    <h3 className="font-bold text-xl">Graphics</h3>
                 </div>
                 <p className="text-sm text-text-secondary leading-relaxed">
                    JPG, TIFF/TIF, PNG, BMP, GIF, PSD, CRW, CR2, NEF, ORF, REF, SR2, MRW, DCR, WMF, MAX, REAL, etc.
                 </p>
              </div>

               {/* Video */}
               <div>
                 <div className="flex items-center gap-3 mb-6">
                    <Video className="w-6 h-6 text-red-500" />
                    <h3 className="font-bold text-xl">Video</h3>
                 </div>
                 <p className="text-sm text-text-secondary leading-relaxed">
                    AVI, MOV, MP4, M4V, 3GP, 3G2, WMV, ASF, FLV, SWF, MPG, RM/RMVB, etc.
                 </p>
              </div>

               {/* Audio */}
               <div>
                 <div className="flex items-center gap-3 mb-6">
                    <Music className="w-6 h-6 text-yellow-500" />
                    <h3 className="font-bold text-xl">Audio</h3>
                 </div>
                 <p className="text-sm text-text-secondary leading-relaxed">
                    AIF/AIFF, M4A, MP3, WAV, WMA, MID/MIDI, OGG, AAC, etc.
                 </p>
              </div>

               {/* Email */}
               <div>
                 <div className="flex items-center gap-3 mb-6">
                    <Mail className="w-6 h-6 text-slate-500" />
                    <h3 className="font-bold text-xl">Email</h3>
                 </div>
                 <p className="text-sm text-text-secondary leading-relaxed">
                    PST, DBX, EMLX, etc.
                 </p>
              </div>

               {/* Archives */}
               <div>
                 <div className="flex items-center gap-3 mb-6">
                    <Archive className="w-6 h-6 text-orange-500" />
                    <h3 className="font-bold text-xl">Archives</h3>
                 </div>
                 <p className="text-sm text-text-secondary leading-relaxed">
                    ZIP, RAR, SIT, 7Z, ISO, GZIP, etc.
                 </p>
              </div>
           </div>
        </div>

        {/* 5. Languages */}
        <div className="py-16">
           <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <div className="w-16 h-16 bg-surface border border-border rounded-full flex items-center justify-center shrink-0">
                 <Languages className="w-8 h-8 text-text-primary" />
              </div>
              <div>
                 <h3 className="font-bold text-xl mb-2">Supported Languages</h3>
                 <p className="text-text-secondary max-w-2xl">
                    English, German, Spanish, French, Italian, Portuguese, Japanese, Chinese (Traditional/Simplified), Dutch, Turkish, Korean, Russian, Arabic.
                 </p>
              </div>
           </div>
        </div>

      </Container>
    </AppLayout>
  )
}
