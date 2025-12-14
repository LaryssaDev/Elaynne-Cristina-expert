import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  src: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, src, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <X size={32} />
      </button>
      
      <img 
        src={src} 
        alt="Visualização em tela cheia" 
        className="max-h-[90vh] max-w-full object-contain rounded-md shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
};

export default Lightbox;