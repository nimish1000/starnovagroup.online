import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ui/ScrollToTop"
import { DownloadProvider } from "./context/DownloadContext"

// Pages
import Home from "./pages/Home"
import Features from "./pages/Features"
import HowItWorks from "./pages/HowItWorks"
import UseCases from "./pages/UseCases"
import Download from "./pages/Download"
import Support from "./pages/Support"
import TechSpecs from "./pages/TechSpecs"
import DataSafety from "./pages/DataSafety"
import RecoverySuccess from "./pages/RecoverySuccess"
import UserGuide from "./pages/UserGuide"
import Troubleshooting from "./pages/Troubleshooting"
import Myths from "./pages/Myths"
import RecoveryVsBackup from "./pages/RecoveryVsBackup"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import Disclaimer from "./pages/Disclaimer"
import DataHandling from "./pages/DataHandling"
import Contact from "./pages/Contact"
import Eula from "./pages/Eula"
import DeletionExplained from "./pages/DeletionExplained"
import PermanentRecovery from "./pages/PermanentRecovery"
import SsdVsHdd from "./pages/SsdVsHdd"
import FormattedRecovery from "./pages/FormattedRecovery"
import UsbSdRecovery from "./pages/UsbSdRecovery"
import FailureReasons from "./pages/FailureReasons"
import DataLossPrevention from "./pages/DataLossPrevention"
import ReleaseNotes from "./pages/ReleaseNotes"
import About from "./pages/About"
import Premium from "./pages/Premium"
import PaymentSuccess from "./pages/PaymentSuccess"
import PaymentCancel from "./pages/PaymentCancel"

// Determine basename for GitHub Pages or local dev
// Determine basename - default to '/' for Vercel
const basename = '/';

export default function App() {
  return (
    <Router basename={basename}>
      <DownloadProvider>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/download" element={<Download />} />
        <Route path="/support" element={<Support />} />
        <Route path="/tech-specs" element={<TechSpecs />} />
        <Route path="/data-safety" element={<DataSafety />} />
        <Route path="/recovery-success" element={<RecoverySuccess />} />
        <Route path="/user-guide" element={<UserGuide />} />
        <Route path="/troubleshooting" element={<Troubleshooting />} />
        <Route path="/recovery-myths" element={<Myths />} />
        <Route path="/recovery-vs-backup" element={<RecoveryVsBackup />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/data-handling" element={<DataHandling />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eula" element={<Eula />} />
        <Route path="/deletion-explained" element={<DeletionExplained />} />
        <Route path="/permanent-recovery" element={<PermanentRecovery />} />
        <Route path="/ssd-vs-hdd" element={<SsdVsHdd />} />
        <Route path="/formatted-drive-recovery" element={<FormattedRecovery />} />
        <Route path="/usb-sd-recovery" element={<UsbSdRecovery />} />
        <Route path="/recovery-failure-reasons" element={<FailureReasons />} />
        <Route path="/data-loss-prevention" element={<DataLossPrevention />} />
        <Route path="/release-notes" element={<ReleaseNotes />} />
        <Route path="/about" element={<About />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancel" element={<PaymentCancel />} />
      </Routes>
      </DownloadProvider>
    </Router>
  )
}

