import { AppLayout } from "../layouts/AppLayout"
import { Hero } from "../components/sections/Hero"
import { ProblemSolution } from "../components/sections/ProblemSolution"
import { Features } from "../components/sections/Features"
import { HowItWorks } from "../components/sections/HowItWorks"
import { UseCasesPreview } from "../components/sections/UseCasesPreview"
import { TrustSafety } from "../components/sections/TrustSafety"
import { Cta } from "../components/sections/Cta"

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <UseCasesPreview />
      <TrustSafety />
      <Cta />
    </AppLayout>
  )
}
