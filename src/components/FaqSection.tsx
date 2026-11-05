import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FDFBF7] relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#064E3B] mb-3">
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>Esclarecimentos & Transparência</span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A261C] font-normal tracking-tight leading-[1.1]"
            style={{ textWrap: 'balance' }}
          >
            Dúvidas frequentes sobre o processo terapêutico
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#4A5D53] font-light">
            Entenda como funciona o sigilo, a dinâmica dos atendimentos e os procedimentos para início das suas consultas.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-14 space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#E8E5DD] bg-white overflow-hidden transition-colors shadow-[0_2px_8px_rgba(6,78,59,0.02)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#0A261C]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#E8E5DD] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#064E3B] text-white border-[#064E3B]' : 'text-[#52685E] bg-[#FAF8F3]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#40564C] leading-relaxed border-t border-[#F0ECE1] font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Objection Handler / Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF8F3] border border-[#E8E5DD] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-medium text-[#0A261C]">
              Possui alguma outra dúvida específica?
            </h4>
            <p className="text-xs text-[#5E7267] mt-0.5">
              Estamos à disposição para explicar detalhes sobre horários e procedimentos.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#064E3B] hover:text-white bg-white hover:bg-[#064E3B] border border-[#064E3B] rounded-full transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Entrar em contato</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>
      </div>
    </section>
  );
};
