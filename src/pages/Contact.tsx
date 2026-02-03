import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { Mail, MessageSquare, Clock, HelpCircle, Monitor } from "lucide-react"

export default function Contact() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Contact Support
              </h1>
              <p className="text-xl text-text-secondary">
                We are here to help if you get stuck.
              </p>
            </div>

            {/* 1. When to Contact */}
            <section className="space-y-6">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-brand" />
                When to Contact Us
              </h2>
               <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <ul className="space-y-3 text-text-secondary">
                     <li className="flex gap-2">• The software crashes or freezes during a scan.</li>
                     <li className="flex gap-2">• You see a specific error code (e.g., "Error 0x82").</li>
                     <li className="flex gap-2">• You need help understanding how to use a specific feature.</li>
                  </ul>
               </div>
            </section>

             {/* 2. What to Include */}
            <section className="space-y-6">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-brand" />
                Information to Include
              </h2>
              <p className="text-lg text-text-secondary">To help us help you faster, please include:</p>
               <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl border border-border">
                     <div className="flex items-center gap-2 mb-2 font-bold text-text-primary">
                        <Monitor className="w-5 h-5 text-text-muted" /> Windows Version
                     </div>
                     <p className="text-text-secondary text-sm">e.g., Windows 10 Home, 64-bit</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-border">
                     <div className="flex items-center gap-2 mb-2 font-bold text-text-primary">
                        <HardDrive className="w-5 h-5 text-text-muted" /> Drive Type
                     </div>
                      <p className="text-text-secondary text-sm">e.g., External Seagate 1TB, SD Card</p>
                  </div>
               </div>
            </section>

             {/* 3. Response Expectations */}
            <section className="bg-brand/5 p-8 rounded-2xl border border-brand/10 space-y-4">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Clock className="w-8 h-8 text-brand" />
                Response Expectations
              </h2>
              <p className="text-text-secondary leading-relaxed">
                 We are a small, dedicated team. We aim to respond to all legitimate support inquiries within <strong>24-48 hours</strong>.
              </p>
              <p className="text-text-muted text-sm italic">
                  Please note that we cannot provide "data recovery consulting" or remote desktop services to fix your computer personally.
              </p>
            </section>
            
            {/* Email CTA */}
            <div className="text-center pt-8">
               <a href="mailto:support@obvix.online" className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-colors">
                  <Mail className="w-5 h-5" /> Email Support
               </a>
            </div>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}

function HardDrive(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="22" x2="2" y1="12" y2="12" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        <line x1="6" x2="6.01" y1="16" y2="16" />
        <line x1="10" x2="10.01" y1="16" y2="16" />
      </svg>
    )
  }
