import { useEffect, useState } from "react";
import { Check, Download, Loader2 } from "lucide-react";
import { createPortal } from "react-dom";

interface DownloadOverlayProps {
  isVisible: boolean;
  filename: string;
}

export function DownloadOverlay({ isVisible, filename }: DownloadOverlayProps) {
  const [stage, setStage] = useState<"preparing" | "starting" | "complete">("preparing");
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isVisible) {
      setShow(true);
      setStage("preparing");
      
      // Simulate "Preparing" -> "Starting"
      timeout = setTimeout(() => {
        setStage("starting");
      }, 800);
      
    } else {
      // Allow exit animation to finish
      const exitTimeout = setTimeout(() => {
        setShow(false);
        setStage("preparing");
      }, 500); // Match CSS transition duration
      return () => clearTimeout(exitTimeout);
    }

    return () => clearTimeout(timeout);
  }, [isVisible]);

  if (!show) return null;

  return createPortal(
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ease-in-out px-4 ${
        isVisible ? "bg-background/20 backdrop-blur-sm opacity-100" : "bg-transparent backdrop-blur-none opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white border border-border shadow-2xl rounded-2xl p-8 max-w-sm w-full transform transition-all duration-500 ease-out flex flex-col items-center text-center ${
          isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"
        }`}
      >
        <div className="relative mb-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${stage === 'starting' ? 'bg-brand-light' : 'bg-surface'}`}>
            {stage === "preparing" && (
                <Loader2 className="w-8 h-8 text-brand animate-spin" />
            )}
            {stage === "starting" && (
                <Download className="w-8 h-8 text-brand animate-bounce" />
            )}
          </div>

          {/* Ripple Effect */}
          {stage === "starting" && (
            <div className="absolute inset-0 rounded-full border-2 border-brand-accent/50 animate-ping" />
          )}
        </div>

        <h3 className="text-xl font-bold text-text-primary mb-2">
          {stage === "preparing" ? "Preparing Download..." : "Download Starting"}
        </h3>
        
        <p className="text-sm text-text-secondary leading-relaxed">
          {stage === "preparing" 
            ? "We're getting the latest version ready for you." 
            : `Your download of "${filename}" is beginning automatically.`}
        </p>

        {/* Progress Bar visual */}
        <div className="w-full h-1.5 bg-brand-light mt-6 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand transition-all duration-[1500ms] ease-out rounded-full"
            style={{ width: stage === "preparing" ? "0%" : "100%" }}
          />
        </div>
        
        <p className="text-xs text-text-muted mt-4">
          Onkra.Online Recovery Engine &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>,
    document.body
  );
}
