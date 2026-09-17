import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

/**
 * Fullscreen picture overlay with left/right navigation and scroll lock.
 */
export function Lightbox({ images = [], initialIndex = 0, onClose }) {
  const validImages = images.filter(Boolean);
  const [index, setIndex] = useState(initialIndex);

  // Keep index synchronized if initialIndex changes
  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  // Lock body scroll when Lightbox is mounted
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const atStart = index === 0;
  const atEnd = index === validImages.length - 1;

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev < validImages.length - 1 ? prev + 1 : prev));
  }, [validImages.length]);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goPrev, goNext]);

  if (validImages.length === 0) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[50] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute right-5 top-5 cursor-pointer text-2xl font-bold text-white/70 transition-colors hover:text-white"
      >
        ✕
      </button>

      {/* Counter */}
      <div className="absolute left-5 top-5 font-['JetBrains_Mono',ui-monospace,monospace] text-xs text-white/50">
        {index + 1} / {validImages.length}
      </div>

      {/* Left arrow */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        disabled={atStart}
        aria-label="Previous picture"
        className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full text-2xl text-white transition-all disabled:cursor-not-allowed disabled:opacity-20 enabled:cursor-pointer enabled:bg-white/10 enabled:hover:bg-white/20 sm:left-6"
      >
        ‹
      </button>

      {/* Image */}
      <img
        key={validImages[index]}
        src={validImages[index]}
        alt={`Project screenshot ${index + 1} of ${validImages.length}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-full select-none rounded-lg object-contain shadow-2xl"
      />

      {/* Right arrow */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        disabled={atEnd}
        aria-label="Next picture"
        className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full text-2xl text-white transition-all disabled:cursor-not-allowed disabled:opacity-20 enabled:cursor-pointer enabled:bg-white/10 enabled:hover:bg-white/20 sm:right-6"
      >
        ›
      </button>
    </div>,
    document.body
  );
}