import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Olá! Gostaria de receber mais informações sobre os atendimentos e horários no Solar Zensorial.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Subtle Tooltip */}
      {showTooltip && (
        <div className="relative mb-1 hidden sm:flex items-center gap-2 px-3.5 py-2 bg-white text-[#0A261C] rounded-full text-xs shadow-lg border border-[#E8E5DD] transition-all animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span>Fale diretamente com o consultório</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="p-1 hover:text-red-500 text-gray-400 rounded-full"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(16,185,129,0.35)] hover:bg-[#059669] hover:scale-108 transition-all duration-300 active:scale-95"
      >
        {/* Subtle Pulse Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#10B981]/30 animate-ping opacity-60 pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-white fill-white transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
};
