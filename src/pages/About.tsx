import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { Building2, FileText, Calendar, CheckCircle2 } from "lucide-react"

export default function About() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                About Onkra.Online
              </h1>
              <p className="text-xl text-text-secondary">
                Professional file recovery solutions you can trust.
              </p>
            </div>

            {/* Introduction */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary">Our Mission</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                At Onkra.Online, we are dedicated to helping users recover their valuable data with ease and security. Our software is built with privacy and performance in mind, ensuring a safe recovery process for all your files.
              </p>
            </section>

            {/* Company Information */}
            <section className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-8">
               <div className="flex items-center gap-3 border-b border-border pb-6">
                  <Building2 className="w-8 h-8 text-brand" />
                  <h2 className="text-2xl font-bold text-text-primary">Company Information</h2>
               </div>

               <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                     <div>
                        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">Registered Office Address</h3>
                        <p className="text-text-primary font-medium">
                           1 Belmont Rd<br />
                           St Andrew's<br />
                           Bristol, United Kingdom<br />
                           BS6 5AN
                        </p>
                     </div>
                     <div>
                        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">Company Status</h3>
                        <div className="flex items-center gap-2 text-green-700 font-medium bg-green-50 px-3 py-1 rounded-full w-fit">
                           <CheckCircle2 className="w-4 h-4" /> Active
                        </div>
                     </div>
                     <div>
                        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">Company Type</h3>
                        <p className="text-text-primary font-medium">Private limited company</p>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div>
                        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">Incorporated On</h3>
                        <p className="text-text-primary font-medium flex items-center gap-2">
                           <Calendar className="w-4 h-4 text-text-muted" /> 3 November 2025
                        </p>
                     </div>
                     <div>
                        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">Accounts</h3>
                        <ul className="text-sm text-text-secondary space-y-1">
                           <li><span className="font-medium text-text-primary">First accounts made up to:</span> 30 November 2026</li>
                           <li><span className="font-medium text-text-primary">Due by:</span> 3 August 2027</li>
                        </ul>
                     </div>
                     <div>
                        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">Confirmation Statement</h3>
                        <ul className="text-sm text-text-secondary space-y-1">
                           <li><span className="font-medium text-text-primary">Date:</span> 2 November 2026</li>
                           <li><span className="font-medium text-text-primary">Due by:</span> 16 November 2026</li>
                        </ul>
                     </div>
                     <div>
                        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">Nature of Business (SIC)</h3>
                        <p className="text-text-primary font-medium flex items-start gap-2">
                           <FileText className="w-4 h-4 text-text-muted mt-0.5" />
                           47990 – Other retail sale not in stores, stalls or markets
                        </p>
                     </div>
                  </div>
               </div>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
