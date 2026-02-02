import { useDownloadContext } from "../context/DownloadContext";

export function useDownload() {
  const { triggerDownload, isDownloading } = useDownloadContext();
  
  return {
    triggerDownload,
    isDownloading
  };
}
