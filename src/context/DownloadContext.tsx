import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { DownloadOverlay } from "../components/ui/DownloadOverlay";

interface DownloadContextType {
  triggerDownload: () => void;
  isDownloading: boolean;
}

const DownloadContext = createContext<DownloadContextType | undefined>(undefined);

export function DownloadProvider({ children }: { children: ReactNode }) {
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Real file path
  const FILE_Url = "/appfile/recoveryApp.exe";
  const FILE_NAME = "recoveryApp.exe";

  const triggerDownload = useCallback(() => {
    if (isDownloading) return; // Prevent double trigger
    
    setIsDownloading(true);

    // 1. Start the animation immediately (handled by state)
    
    // 2. Delay actual download slightly to let user see "Searching/Preparing" (Premium Feel)
    setTimeout(() => {
        const link = document.createElement("a");
        link.href = FILE_Url;
        link.download = FILE_NAME;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // 3. Keep overlay for a moment after download starts so they see "Download Starting"
        setTimeout(() => {
            setIsDownloading(false);
        }, 3000); 
    }, 1500);

  }, [isDownloading]);

  return (
    <DownloadContext.Provider value={{ triggerDownload, isDownloading }}>
      {children}
      <DownloadOverlay isVisible={isDownloading} filename={FILE_NAME} />
    </DownloadContext.Provider>
  );
}

export function useDownloadContext() {
  const context = useContext(DownloadContext);
  if (context === undefined) {
    throw new Error("useDownloadContext must be used within a DownloadProvider");
  }
  return context;
}
