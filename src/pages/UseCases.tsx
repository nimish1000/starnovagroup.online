import { Container } from "../components/ui/Container"
import { AppLayout } from "../layouts/AppLayout"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { 
  Trash2, HardDrive, RefreshCcw, AlertTriangle, 
  Usb, Camera, GraduationCap, Briefcase, CameraIcon, 
  Home, StopCircle, CheckCircle2 
} from "lucide-react"

const scenarios = [
  {
    icon: Trash2,
    title: "Accidentally Deleted Files",
    situation: "You selected the wrong file and hit 'Delete', or used Shift+Delete to permanently erase a folder.",
    solution: "Windows marks the space as 'free', but your file data is still there. We scan that specific space to bring it back instantly."
  },
  {
    icon: RefreshCcw,
    title: "Emptied Recycle Bin",
    situation: "You cleaned out your Recycle Bin to save space, only to realize you needed that one important document.",
    solution: "Even after emptying the bin, files remain on the hard drive until new data overwrites them. Deep Scan can find them."
  },
  {
    icon: HardDrive,
    title: "Formatted Hard Drive",
    situation: "You accidentally formatted a partition or external drive, erasing everything in seconds.",
    solution: "Our software ignores the empty file system and looks for raw data signatures, rebuilding your files from the ground up."
  },
  {
    icon: AlertTriangle,
    title: "System Crash or Blue Screen",
    situation: "Your computer froze or crashed while you were working on a document, and now the file is corrupt or missing.",
    solution: "We can recover temporary check-points and auto-save versions of files that were lost during the crash."
  },
  {
    icon: Usb,
    title: "USB Drive Data Loss",
    situation: "You pulled out a USB stick without ejecting it safely, or it now asks to be formatted when you plug it in.",
    solution: "We specialize in reading unstable USB drives to extract your files before the drive fails completely."
  },
  {
    icon: Camera,
    title: "SD Card & Camera Photo Loss",
    situation: "You accidentally deleted photos from your camera or formatted the SD card before transferring them.",
    solution: "Recover precious memories (JPG, RAW, MP4) directly from the card, even if the camera says 'No Image'."
  }
]

const userTypes = [
  { icon: GraduationCap, title: "Students", desc: "Recover lost assignments, thesis papers, and research notes." },
  { icon: Briefcase, title: "Professionals", desc: "Rescue deleted spreadsheets, presentations, and client files." },
  { icon: CameraIcon, title: "Creatives", desc: "Restore lost raw photos, video projects, and design files." },
  { icon: Home, title: "Home Users", desc: "Bring back family photos, tax documents, and personal archives." }
]

export default function UseCasesPage() {
  return (
    <AppLayout>
      {/* 1. Introduction */}
      <div className="py-24 bg-surface/30 border-b border-border/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Real Life Situations</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl mb-6">
               It Happens to Everyone.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
               Data loss isn't a disaster; it's a common problem with a simple solution. 
               See how we help users in specific situations every day.
            </p>
          </div>
        </Container>
      </div>

      {/* 2. Detailed Scenarios */}
      <div className="py-24">
         <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {scenarios.map((item) => (
                  <div key={item.title} className="bg-surface border border-border p-8 rounded-2xl">
                     <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center mb-6">
                        <item.icon className="w-6 h-6 text-text-primary" />
                     </div>
                     <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                     
                     <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1 block">What Happened</span>
                        <p className="text-text-secondary text-sm leading-relaxed">{item.situation}</p>
                     </div>
                     
                     <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-green-600 mb-1 block">The Solution</span>
                        <p className="text-text-secondary text-sm leading-relaxed">{item.solution}</p>
                     </div>
                  </div>
               ))}
            </div>
         </Container>
      </div>

      {/* 3. Who Is This For? */}
      <div className="py-24 bg-surface border-y border-border/40">
         <Container>
            <h2 className="text-3xl font-bold text-center mb-16">Designed for Everyone</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {userTypes.map((user) => (
                  <div key={user.title} className="text-center p-6 bg-background rounded-xl border border-border">
                     <user.icon className="w-10 h-10 mx-auto mb-4 text-text-secondary" />
                     <h3 className="font-bold text-lg mb-2">{user.title}</h3>
                     <p className="text-text-secondary text-sm">{user.desc}</p>
                  </div>
               ))}
            </div>
         </Container>
      </div>

      {/* 4. When to Use (Immediate Advice) */}
      <div className="py-24">
         <Container>
            <div className="max-w-4xl mx-auto bg-brand text-white rounded-3xl p-12 relative overflow-hidden">
               <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-8 text-center">Just lost a file? Do this immediately.</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                     <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                        <h3 className="flex items-center gap-3 font-bold text-xl mb-3 text-red-200">
                           <StopCircle className="w-6 h-6" />
                           STOP using the drive
                        </h3>
                        <p className="text-white/80">
                           Do not save new files, browse the web, or install programs on the drive where potential data loss occurred. New data can overwrite your lost files forever.
                        </p>
                     </div>
                     <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                         <h3 className="flex items-center gap-3 font-bold text-xl mb-3 text-green-200">
                           <CheckCircle2 className="w-6 h-6" />
                           Scan immediately
                        </h3>
                        <p className="text-white/80">
                           The sooner you scan, the better the recovery chances. Install our software on a <strong>different drive</strong> (like a USB stick) and scan the affected drive.
                        </p>
                     </div>
                  </div>

                  <div className="text-center">
                     <Button variant="secondary" size="lg" className="bg-white text-brand hover:bg-white/90 border-transparent">
                        Start Your Recovery Scan Now
                     </Button>
                  </div>
               </div>
            </div>
         </Container>
      </div>
    </AppLayout>
  )
}
