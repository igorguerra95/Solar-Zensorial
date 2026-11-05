import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, X, Sparkles } from 'lucide-react';
import { SPECIALTY_AREAS } from '../data/content';
import { SpecialtyArea } from '../types';

interface AreasSectionProps {
  onSelectAreaForAppointment: (areaTitle: string) => void;
}

export const AreasSection: React.FC<AreasSectionProps> = ({ onSelectAreaForAppointment }) => {
  const [selectedArea, setSelectedArea] = useState<SpecialtyArea | null>(null);

  return (
    <section id="areas" className="py-24 md:py-32 bg-[#FAF8F3] relative border-t border-[#E8E5DD]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Refined Editorial Hierarchy */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#064E3B] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>Áreas de Atuação Clínica</span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A261C] font-normal tracking-tight leading-[1.1]"
            style={{ textWrap: 'balance' }}
          >
            Cuidado integral para cada momento da sua jornada
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#40564C] leading-relaxed font-light">
            O sofrimento psíquico se manifesta de formas distintas em cada história. Conheça as principais demandas acompanhadas em nosso espaço, todas conduzidas com rigor clínico e profundo acolhimento.
          </p>
        </div>

        {/* Bento Grid: 6 Distinctive Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTY_AREAS.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative rounded-2xl p-8 bg-white border border-[#E8E5DD] hover:border-[#D4AF37]/50 shadow-[0_2px_12px_rgba(6,78,59,0.03)] hover:shadow-[0_16px_36px_rgba(6,78,59,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number & Tagline */}
                <div className="flex items-center justify-between pb-6 border-b border-[#F0ECE1]">
                  <span className="font-serif text-2xl font-light text-[#D4AF37] tracking-tight">
                    {area.number}.
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#6B7C73] font-medium">
                    Atendimento Especializado
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="mt-6 font-serif text-2xl text-[#0A261C] font-medium group-hover:text-[#064E3B] transition-colors">
                  {area.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#047857]">
                  {area.subtitle}
                </p>

                <p className="mt-4 text-sm text-[#4A5D53] leading-relaxed font-light">
                  {area.description}
                </p>

                {/* Key manifestations list */}
                <div className="mt-6 pt-5 border-t border-[#F0ECE1] space-y-2.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#73857C] block">
                    Sinais frequentes acolhidos:
                  </span>
                  {area.signs.slice(0, 3).map((sign, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#374B41]">
                      <Check className="w-3.5 h-3.5 text-[#064E3B] shrink-0 mt-0.5" />
                      <span className="leading-snug">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="mt-8 pt-5 border-t border-[#F0ECE1] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className="text-xs font-semibold text-[#064E3B] hover:text-[#04382A] underline underline-offset-4 decoration-[#D4AF37] transition-colors cursor-pointer"
                >
                  Ver abordagem completa
                </button>

                <button
                  type="button"
                  onClick={() => onSelectAreaForAppointment(area.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#064E3B] bg-[#F0FDF4] hover:bg-[#064E3B] hover:text-white rounded-full transition-all duration-200 border border-[#10B981]/20 cursor-pointer active:scale-95"
                  title="Agendar para esta área"
                >
                  <span>Agendar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal: Full Specialty Area Details */}
        <AnimatePresence>
          {selectedArea && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative w-full max-w-xl bg-[#FDFBF7] rounded-3xl p-8 border border-[#E8E5DD] shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                <button
                  type="button"
                  onClick={() => setSelectedArea(null)}
                  className="absolute top-6 right-6 p-2 rounded-full text-[#52685E] hover:text-[#064E3B] hover:bg-[#E8E5DD]/50 transition-colors"
                  aria-label="Fechar detalhes"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Área Clínica {selectedArea.number}</span>
                </div>

                <h3 className="mt-2 font-serif text-3xl text-[#0A261C] font-normal">
                  {selectedArea.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#047857]">
                  {selectedArea.subtitle}
                </p>

                <div className="mt-6 space-y-4 text-sm text-[#3E5348] leading-relaxed">
                  <p>{selectedArea.description}</p>

                  <div className="p-4 rounded-xl bg-white border border-[#E8E5DD]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B] block mb-2">
                      Abordagem Terapêutica Aplicada
                    </span>
                    <p className="text-xs leading-relaxed text-[#4A5D53]">
                      {selectedArea.approach}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0A261C] block mb-2">
                      Sintomas e desafios frequentes trabalhados:
                    </span>
                    <ul className="space-y-2">
                      {selectedArea.signs.map((sign, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#374B41]">
                          <Check className="w-3.5 h-3.5 text-[#064E3B] shrink-0 mt-0.5" />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E8E5DD] flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedArea(null)}
                    className="px-5 py-2.5 text-xs font-medium text-[#52685E] hover:text-[#1A2E25] transition-colors"
                  >
                    Fechar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const areaTitle = selectedArea.title;
                      setSelectedArea(null);
                      onSelectAreaForAppointment(areaTitle);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#064E3B] hover:bg-[#04382A] rounded-full transition-all shadow-md cursor-pointer"
                  >
                    <span>Entrar em contato</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
