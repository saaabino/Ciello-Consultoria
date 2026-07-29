import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsAppPhone: string;
  whatsAppMessage: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  whatsAppPhone,
  whatsAppMessage
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${whatsAppPhone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 group">
      
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="bg-[#1A1A1A] text-stone-100 p-3 sm:p-4 rounded-2xl border border-[#C5A059]/40 shadow-2xl max-w-xs transition-all duration-300 relative animate-bounce">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-stone-400 hover:text-white p-1"
            title="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <p className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">Atendimento Online</p>
          </div>
          <p className="text-xs text-stone-300 mt-1">
            Olá! Dúvidas sobre a Mentoria Meta Ousada? Fale com nossa equipe agora no WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        id="btn-floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group"
      >
        {/* Outer Pulsing Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-pulse-ring pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white shrink-0" />

        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#D4AF37] text-stone-950 font-bold text-[10px] flex items-center justify-center border-2 border-[#18181B]">
          1
        </span>
      </a>

    </div>
  );
};
