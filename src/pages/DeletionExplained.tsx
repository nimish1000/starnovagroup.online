import { AppLayout } from "../layouts/AppLayout"
import { Container } from "../components/ui/Container"
import { Trash2, FileX, Ghost, FileSearch } from "lucide-react"

export default function DeletionExplained() {
  return (
    <AppLayout>
      <div className="py-24 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                What Happens When You Delete a File
              </h1>
              <p className="text-xl text-text-secondary">
                The illusion of deletion: Why your files aren't immediately gone.
              </p>
            </div>

            {/* 1. Introduction */}
            <section className="space-y-4">
               <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <Trash2 className="w-8 h-8 text-brand" />
                The Illusion of Deletion
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                When you click "Delete" and empty your Recycle Bin, it feels like your file has vanished into thin air. But in the digital world, "deletion" is rarely instant. Understanding what actually happens inside your computer is the key to understanding how file recovery works.
              </p>
            </section>

             {/* 2. Index vs Data */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                <FileX className="w-8 h-8 text-text-secondary" />
                The Index vs. The Data
              </h2>
               <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <p className="text-text-secondary leading-relaxed mb-4">
                     Think of your hard drive like a massive book. At the front of the book, there is a "Table of Contents" (the file system) that tells the computer where every file is located (e.g., "Photo.jpg is on page 50").
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                     When you delete a file, your computer does not rip out page 50. Instead, it simply erases the entry in the Table of Contents. It marks page 50 as "Empty" so it can be used again later.
                  </p>
               </div>
            </section>

             {/* 3. The Ghost File */}
             <section className="bg-brand/5 p-8 rounded-2xl border border-brand/10 space-y-4">
              <h2 className="text-2xl font-bold text-brand-dark flex items-center gap-3">
                <Ghost className="w-8 h-8 text-brand" />
                The "Ghost" File
              </h2>
              <p className="text-brand-dark leading-relaxed">
                 For a period of time, the actual data (your photo) is still sitting on page 50, perfectly intact. It is just invisible to the operating system. This is the "ghost" file.
              </p>
              <div className="flex items-start gap-4 pt-4">
                 <FileSearch className="w-6 h-6 text-brand mt-1" />
                 <p className="text-brand-dark/90 text-sm">
                    <strong>How Recovery Works:</strong> Recovery software works by ignoring the Table of Contents and reading the book page by page. It finds the data on page 50, recognizes it as a file, and brings it back. This is why recovery is possible—but only if you act before new data is written to page 50.
                 </p>
              </div>
            </section>

          </div>
        </Container>
      </div>
    </AppLayout>
  )
}
