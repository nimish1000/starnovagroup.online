import { Container } from "../components/ui/Container"
import { AppLayout } from "../layouts/AppLayout"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { 
  HelpCircle, AlertTriangle, MessageSquare, ShieldAlert,
  CheckCircle2, XCircle, Mail
} from "lucide-react"

const faqs = [
  {
    question: "Can deleted files really be recovered?",
    answer: "Yes. When you delete a file, Windows does not erase the actual data immediately. It just marks the space as 'available'. If that space hasn't been overwritten by new data, our software can find and restore the original file."
  },
  {
    question: "Is file recovery safe for my computer?",
    answer: "Absolutely. Our software operates in Read-Only mode. It only scans your drive to find data; it does not write, move, or delete any existing files on the drive you are scanning."
  },
  {
    question: "Will this software overwrite my existing data?",
    answer: "No. The software is designed to prevent this. We strongly advise you to save your recovered files to a *different* drive (e.g., save files from your C: drive to a USB stick) to ensure 100% safety."
  },
  {
    question: "What types of files can I recover?",
    answer: "We support over 1000+ file formats. This includes common files like photos (JPG, PNG), documents (DOCX, PDF), videos (MP4, MOV), emails, and archives (ZIP)."
  },
  {
    question: "Can I recover files from a formatted drive?",
    answer: "Yes, in most cases. If you performed a 'Quick Format', your files are likely largely intact. Our Deep Scan can reconstruct these files even if the file system has been reset."
  },
  {
    question: "Does file recovery always work?",
    answer: "Not always. If the specific physical space on the hard drive where the file was stored has been overwritten by new data, recovery becomes impossible. This is why acting quickly is crucial."
  },
  {
    question: "How long does the scan take?",
    answer: "A Quick Scan takes just a few seconds. A Deep Scan depends on your drive size and speed, but typically takes about 1 hour per 100GB of data."
  },
  {
    question: "Can I preview files before recovering them?",
    answer: "Yes! We encourage this. You can double-click photos and documents in the search results to see them. If the preview looks perfect, the recovery will be perfect."
  },
  {
    question: "Is this software free to use?",
    answer: "You can download, scan, and preview your files for free. This lets you verify that your data is found and recoverable before you commit to anything."
  },
  {
    question: "What should I do if recovery does not work?",
    answer: "If the Quick Scan finds nothing, the Deep Scan starts automatically. If that also fails, it is likely the data has been overwritten. In this case, professional lab data recovery services are the only remaining option."
  }
]

export default function SupportPage() {
  return (
    <AppLayout>
      {/* 1. Introduction */}
      <div className="py-24 bg-surface/30 border-b border-border/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Support Center</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl mb-6">
              Common Questions & Solutions
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Data loss is stressful, and you probably have a lot of questions. 
              Here are honest answers to help you understand what is possible.
            </p>
          </div>
        </Container>
      </div>

      {/* 2. FAQ List */}
      <div className="py-24 border-b border-border/40">
         <Container>
            <div className="max-w-3xl mx-auto space-y-12">
               {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-border/40 pb-12 last:border-0 last:pb-0">
                     <h3 className="text-2xl font-bold mb-4 flex gap-4">
                        <span className="text-brand shrink-0">Q.</span>
                        {faq.question}
                     </h3>
                     <p className="text-lg text-text-secondary pl-10 leading-relaxed">
                        {faq.answer}
                     </p>
                  </div>
               ))}
            </div>
         </Container>
      </div>

      {/* 3. Common Mistakes */}
      <div className="py-24 bg-red-50 border-b border-red-100">
         <Container>
            <h2 className="text-3xl font-bold text-center mb-16 text-red-950">Avoid These Common Mistakes</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4 text-red-600 font-bold text-xl">
                     <ShieldAlert className="w-6 h-6" />
                     Installing on the same drive
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                     Never install recovery software on the C: drive if you are trying to recover files from the C: drive. The installation files might overwrite the very data you want to save. Use a USB stick instead.
                  </p>
               </div>
               <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4 text-orange-600 font-bold text-xl">
                     <AlertTriangle className="w-6 h-6" />
                     Continuing to work
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                     Don't browse the web or edit documents on the affected computer. Windows creates temporary files constantly, which eats up the "free space" where your deleted files are hiding.
                  </p>
               </div>
            </div>
         </Container>
      </div>

      {/* 4. When to Contact Support */}
      <div className="py-24">
         <Container>
            <div className="max-w-3xl mx-auto text-center">
               <h2 className="text-3xl font-bold mb-8">Still need help?</h2>
               <p className="text-lg text-text-secondary mb-12">
                  If the software isn't recognizing your drive, or if you're unsure about how to proceed safely, our support team can guide you.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="mailto:help@onkra.online" className="group">
                     <Button size="lg" variant="secondary" className="h-auto py-6 px-8 flex flex-col items-center gap-2">
                        <Mail className="w-6 h-6 text-text-primary" />
                        <span className="font-bold text-lg">Email Support</span>
                        <span className="text-xs text-text-muted font-normal">Response in 24 hours</span>
                     </Button>
                  </a>
                  <a href="#" className="group">
                      <Button size="lg" variant="secondary" className="h-auto py-6 px-8 flex flex-col items-center gap-2">
                        <MessageSquare className="w-6 h-6 text-text-primary" />
                        <span className="font-bold text-lg">Live Chat</span>
                        <span className="text-xs text-text-muted font-normal">Available 9am - 5pm</span>
                     </Button>
                  </a>
               </div>
            </div>
         </Container>
      </div>
    </AppLayout>
  )
}
