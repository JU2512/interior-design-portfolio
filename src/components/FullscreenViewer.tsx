import { useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface FullscreenViewerProps {
  label: string | null;
  src?: string;
  onClose: () => void;
}

const FullscreenViewer = ({ label, src, onClose }: FullscreenViewerProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!label) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [label, handleKeyDown]);

  if (!label) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 z-10 text-white/60 hover:text-white transition-colors"
      >
        <X size={24} />
      </button>

      <div
        className="flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {src ? (
          <img
            src={src}
            alt={label}
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            className="flex items-center justify-center border border-white/10 rounded"
            style={{
              width: "90vw",
              maxHeight: "90vh",
              aspectRatio: "16/9",
            }}
          >
            <span className="text-white/40 text-sm font-body">{label}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullscreenViewer;
