import { Container } from "../components/ui/Container"
import { AppLayout } from "../layouts/AppLayout"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { 
  FileQuestion, Search, HardDrive, Clock, ShieldCheck, 
  Download, MousePointerClick, Eye, CheckCircle2, 
  AlertTriangle, FileWarning, Cpu 
} from "lucide-react"

export default function HowItWorksPage() {
  return (
    <AppLayout>
      {/* 1. Page Introduction */}
      <div className="py-24 bg-surface/30 border-b border-border/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Process Explained</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl mb-6">
              How File Recovery Works
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Deleted files are rarely gone forever. Understand how your data is stored and how we bring it back — simply and safely.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        {/* 2. What Happens When a File Is Deleted */}
        <div className="py-24 border-b border-border/40">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                 <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                    <FileQuestion className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl font-bold mb-6">When you hit "Delete", the file isn't erased.</h2>
                 <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    Think of your hard drive like a book. When you delete a file, Windows simply removes the "index entry" for that chapter. The actual pages (your data) are still sitting on the drive.
                 </p>
                 <p className="text-lg text-text-secondary leading-relaxed font-medium">
                    As long as you don't write new data over those pages, the file is 100% recoverable.
                 </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                 <div className="bg-surface border border-border p-8 rounded-2xl w-full max-w-md relative">
                    {/* Visual metaphor */}
                    <div className="space-y-2 mb-4">
                       <div className="h-4 w-full bg-border/20 rounded"></div>
                       <div className="h-4 w-3/4 bg-border/20 rounded"></div>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-sm text-red-800 mb-4">
                       <span className="font-bold">Windows says:</span> "Space Available"<br/>
                       <span className="font-bold">Reality:</span> Data is still here
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* 3. How the Software Finds Lost Files */}
        <div className="py-24 border-b border-border/40">
           <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">We Find What Windows Can't See</h2>
              <p className="text-lg text-text-secondary">Our software bypasses the Windows file system and talks directly to the storage hardware.</p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-border rounded-xl bg-surface">
                 <h3 className="text-xl font-bold flex items-center gap-3 mb-4">
                    <Search className="w-6 h-6 text-brand" />
                    Quick Scan
                 </h3>
                 <p className="text-text-secondary mb-4">
                    Instantly checks the Master File Table for recently deleted files.
                 </p>
                 <Badge variant="outline">Fast (Seconds)</Badge>
              </div>
              <div className="p-8 border border-border rounded-xl bg-brand text-white">
                 <h3 className="text-xl font-bold flex items-center gap-3 mb-4">
                    <Cpu className="w-6 h-6" />
                    Deep Scan
                 </h3>
                 <p className="text-white/80 mb-4">
                    Scours the drive sector-by-sector to reconstruct files based on their unique "digital fingerprint" (signatures).
                 </p>
                 <Badge className="bg-white text-brand border-white">Thorough (Minutes)</Badge>
              </div>
           </div>
        </div>

        {/* 4. Step-by-Step Recovery Process */}
        <div className="py-24 border-b border-border/40">
           <h2 className="text-3xl font-bold text-center mb-16">Your Path to Data Recovery</h2>
           <div className="space-y-6 max-w-4xl mx-auto">
              {[
                 { 
                    step: 1, 
                    icon: Download,
                    title: "Download & Install", 
                    desc: "Install the software on a drive DIFFERENT from the one you lost data on. This prevents overwriting." 
                 },
                 { 
                    step: 2, 
                    icon: MousePointerClick,
                    title: "Select Drive", 
                    desc: "Choose the hard drive, SSD, or USB stick where the files were lost." 
                 },
                 { 
                    step: 3, 
                    icon: Search,
                    title: "Scan", 
                    desc: "Click 'Scan'. The software will check for Quick files first, then automatically run a Deep Scan." 
                 },
                 { 
                    step: 4, 
                    icon: Eye,
                    title: "Preview", 
                    desc: "Don't recover blindly. Double-click any photo or document to verify it is intact." 
                 },
                 { 
                    step: 5, 
                    icon: CheckCircle2,
                    title: "Recover", 
                    desc: "Select the files you want and save them to a safe location (not the original drive)." 
                 }
              ].map((item) => (
                 <div key={item.step} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shrink-0 font-bold text-lg">
                       {item.step}
                    </div>
                    <div className="pt-2">
                       <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                          {item.title}
                       </h3>
                       <p className="text-text-secondary text-lg">{item.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* 5 & 6. What Can Be Recovered & Success Factors */}
        <div className="py-24 border-b border-border/40">
           <div className="grid md:grid-cols-2 gap-16">
              <div>
                 <h2 className="text-2xl font-bold mb-6">What We Can Recover</h2>
                 <ul className="space-y-4">
                    {[
                       "Personally Deleted Files (Recycle Bin)",
                       "Formatted Disks (Quick Format)",
                       "Virus Infections",
                       "Corrupted Memory Cards",
                       "Lost Partitions"
                    ].map(item => (
                       <li key={item} className="flex items-center gap-3 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          {item}
                       </li>
                    ))}
                 </ul>
              </div>
              <div>
                 <h2 className="text-2xl font-bold mb-6">What Affects Success?</h2>
                 <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                       <Clock className="w-6 h-6 text-orange-600 shrink-0" />
                       <div>
                          <span className="font-bold text-orange-900 block mb-1">Time is critical</span>
                          <span className="text-sm text-orange-800">The longer you wait, the higher the chance Windows overwrites your lost data with new temporary files.</span>
                       </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-surface rounded-xl border border-border">
                       <HardDrive className="w-6 h-6 text-text-primary shrink-0" />
                       <div>
                          <span className="font-bold text-text-primary block mb-1">Device Usage</span>
                          <span className="text-sm text-text-secondary">Stop using the affected drive immediately. Even browsing the web saves data to the disk.</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* 7. Safety & Data Protection */}
        <div className="py-24">
           <div className="bg-green-50 rounded-3xl p-12 text-center border border-green-100">
              <ShieldCheck className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-green-900 mb-6">100% Safe Recovery Guarantee</h2>
              <p className="text-lg text-green-800 max-w-2xl mx-auto mb-8">
                 Our software operates in strictly <strong>Read-Only</strong> mode. It does not modify, move, or delete any data on the target drive. It simply copies the lost data it finds to a new, safe destination of your choice.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white border-transparent">
                 Download Now & Scan Safely
              </Button>
           </div>
        </div>
      </Container>
    </AppLayout>
  )
}
