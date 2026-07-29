import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
  imageAlt: string | null;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt
}) => {
  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="absolute -top-12 right-0 flex items-center space-x-3">
          <a
            href={imageSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white transition-colors"
            title="Abrir imagem original em nova aba"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white transition-colors"
            title="Fechar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High Res Image Display */}
        <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-stone-950 p-2 max-h-[80vh] flex items-center justify-center">
          <img
            src={imageSrc}
            alt={imageAlt || "Visualização em Alta Resolução"}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        {/* Caption */}
        {imageAlt && (
          <p className="mt-3 text-stone-300 text-xs sm:text-sm text-center font-medium bg-black/60 px-4 py-1.5 rounded-full border border-stone-800">
            {imageAlt}
          </p>
        )}
      </div>
    </div>
  );
};
