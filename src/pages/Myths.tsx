import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { MessageCircleQuestion, XCircle, CheckCircle, BrainCircuit, Lightbulb } from "lucide-react"

export default function Myths() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                File Recovery Myths & Facts
              </h1>
              <p className="text-xl text-text-secondary">
                Separating fact from fiction in data recovery.
              </p>
            </div>

            {/* 1. Common Myths */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <BrainCircuit className="w-8 h-8 text-brand" />
                Common Myths About Deleted Files
              </h2>
              
              <div className="space-y-6">
                 {/* Myth 1 */}
                 <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                       <XCircle className="w-6 h-6 text-red-500" />
                       <h3 className="text-lg font-bold text-red-500">Myth: "Deleted files are gone forever immediately."</h3>
                    </div>
                    <div className="flex items-start gap-3 pl-2 border-l-2 border-green-500 ml-3">
                       <div className="mt-1"><CheckCircle className="w-5 h-5 text-green-600" /></div>
                       <p className="text-text-secondary"><strong className="text-green-700">Fact:</strong> They are just marked as "free space." The actual data stays until something new replaces it.</p>
                    </div>
                 </div>

                 {/* Myth 2 */}
                 <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                       <XCircle className="w-6 h-6 text-red-500" />
                       <h3 className="text-lg font-bold text-red-500">Myth: "You need to be a hacker to recover data."</h3>
                    </div>
                     <div className="flex items-start gap-3 pl-2 border-l-2 border-green-500 ml-3">
                       <div className="mt-1"><CheckCircle className="w-5 h-5 text-green-600" /></div>
                       <p className="text-text-secondary"><strong className="text-green-700">Fact:</strong> Modern recovery software automates the complex work. If you can click a mouse, you can run a recovery scan.</p>
                    </div>
                 </div>

                 {/* Myth 3 */}
                 <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                       <XCircle className="w-6 h-6 text-red-500" />
                       <h3 className="text-lg font-bold text-red-500">Myth: "If the file name is lost, the content is lost."</h3>
                    </div>
                     <div className="flex items-start gap-3 pl-2 border-l-2 border-green-500 ml-3">
                       <div className="mt-1"><CheckCircle className="w-5 h-5 text-green-600" /></div>
                       <p className="text-text-secondary"><strong className="text-green-700">Fact:</strong> Not true. "Raw Recovery" can find file content (like the image data of a photo) even if the filename is destroyed.</p>
                    </div>
                 </div>
              </div>
            </section>

            {/* 2. What It Can/Cannot Do */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-brand" />
                What Recovery Software Can and Cannot Do
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                 {/* CAN */}
                 <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                       <CheckCircle className="w-6 h-6" /> It CAN:
                    </h3>
                    <ul className="space-y-3 text-green-900">
                       <li className="flex gap-2"><span className="text-green-600">•</span> Recover files deleted from the Recycle Bin.</li>
                       <li className="flex gap-2"><span className="text-green-600">•</span> Recover files from formatted drives (if not fully wiped).</li>
                       <li className="flex gap-2"><span className="text-green-600">•</span> Recover files lost due to virus attacks or partition loss.</li>
                    </ul>
                 </div>

                 {/* CANNOT */}
                 <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                       <XCircle className="w-6 h-6" /> It CANNOT:
                    </h3>
                    <ul className="space-y-3 text-red-900">
                       <li className="flex gap-2"><span className="text-red-600">•</span> Recover data from a physically broken drive (clicking sounds, burnt electronics).</li>
                       <li className="flex gap-2"><span className="text-red-600">•</span> Recover data that has been securely erased (wiped) or overwritten.</li>
                       <li className="flex gap-2"><span className="text-red-600">•</span> Unlock passwords on encrypted files you don't have the key for.</li>
                    </ul>
                 </div>
              </div>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
