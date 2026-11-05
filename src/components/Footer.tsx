import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A261C] text-[#E8ECE9] pt-16 pb-12 border-t border-[#133A2B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1A4533]">
          {/* Brand Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              <span className="font-serif text-2xl font-normal text-white tracking-tight">
                Solar Zensorial
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#D4AF37]">
              Espaçoterapias & Psicologia Integrativa
            </p>
            <p className="text-xs text-[#95AFA2] leading-relaxed max-w-sm font-light">
              Um ambiente de acolhimento sereno, escuta profunda e prática clínica baseada em evidências para restabelecer a clareza e a vitalidade emocional.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#95AFA2]">
              <li>
                <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Início</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#D4AF37] transition-colors">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] transition-colors">Dúvidas Frequentes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#D4AF37] transition-colors">Agendamento Online</a>
              </li>
            </ul>
          </div>

          {/* Clinical Ethics & Modalities */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Atendimento e Normativas
            </h4>
            <p className="text-xs text-[#95AFA2] leading-relaxed font-light">
              Atendimento psicológico clínico para adultos e casais. Modalidade presencial e consultas online em conformidade com as resoluções vigentes do Conselho Federal de Psicologia (CFP).
            </p>
            <div className="pt-2 text-[11px] text-[#A6C0B4] flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Sigilo profissional irrestrito resguardado por lei</span>
            </div>
          </div>
        </div>

        {/* Emergency Crisis Support Banner (Apoio Emergencial) */}
        <div className="py-6 border-b border-[#1A4533] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#7A998B] leading-relaxed max-w-3xl">
            <strong className="text-[#D4AF37] font-medium">Apoio em situações de crise:</strong> Se você estiver enfrentando sofrimento psíquico agudo ou pensamentos intrusivos, entre em contato imediatamente com o <strong>CVV (Centro de Valorização da Vida) pelo número 188</strong> (ligação gratuita 24h) ou dirija-se à unidade de emergência médica ou CAPS mais próximo.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#133A2B] hover:bg-[#D4AF37] hover:text-[#0A261C] text-white transition-all duration-200 shrink-0 cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6E8E7F]">
          <p>© {new Date().getFullYear()} Solar Zensorial - Espaçoterapias. Todos os direitos reservados.</p>
          <p className="tracking-wide">Psicologia Clínica & Acolhimento Humano</p>
        </div>
      </div>
    </footer>
  );
};
