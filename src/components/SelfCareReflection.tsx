import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, HeartPulse, CheckCircle2 } from 'lucide-react';

interface SelfCareReflectionProps {
  onSelectRecommendedArea: (areaTitle: string) => void;
}

export const SelfCareReflection: React.FC<SelfCareReflectionProps> = ({
  onSelectRecommendedArea,
}) => {
  const [selectedFeeling, setSelectedFeeling] = useState<number | null>(0);

  const feelings = [
    {
      label: 'Mente agitada e pensamentos em looping',
      areaTitle: 'Ansiedade & Síndrome do Pânico',
      insight: 'A hipervigilância consome uma energia vital preciosa. Na psicoterapia, ensinamos o seu corpo a discernir entre perigos reais e alarmes falsos, restabelecendo a calma.',
      recommendation: 'Psicoterapia Focada em Regulação da Ansiedade'
    },
    {
      label: 'Cansaço persistente e falta de entusiasmo',
      areaTitle: 'Depressão & Sentido de Vida',
      insight: 'A apatia crônica muitas vezes é um pedido de pausa profunda da alma. Trabalhamos a desativação da culpa e o resgate gradual das suas pequenas fontes de prazer.',
      recommendation: 'Acompanhamento com Ativação Comportamental'
    },
    {
      label: 'Ruptura ou desgastes na relação afetiva',
      areaTitle: 'Terapia de Casal & Relações',
      insight: 'Por trás da maioria dos conflitos recorrentes existem necessidades emocionais legítimas não expressas com segurança. A mediação terapêutica reabre o diálogo.',
      recommendation: 'Terapia de Casal & Diálogo Sistêmico'
    },
    {
      label: 'Exaustão provocada pelo ritmo de trabalho',
      areaTitle: 'Burnout & Esgotimento Mental',
      insight: 'Produzir sem pausas não é virtude, é sobrevivência sob alto custo biológico. Apoiamos a redefinição de limites inegociáveis para sua saúde mental.',
      recommendation: 'Intervenção para Recuperação de Burnout'
    }
  ];

  const current = selectedFeeling !== null ? feelings[selectedFeeling] : feelings[0];

  return (
    <section className="py-20 bg-[#FAF8F3] border-y border-[#E8E5DD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#064E3B] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Guia Interativo de Acolhimento</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#0A261C] font-normal tracking-tight">
            O que seu corpo e sua mente estão tentando lhe dizer hoje?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#4D6357] font-light">
            Selecione a queixa que mais ressoa com seu momento atual para ver uma reflexão clínica orientada:
          </p>
        </div>

        {/* Interactive Segmented Options */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {feelings.map((feeling, index) => {
              const isActive = selectedFeeling === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedFeeling(index)}
                  className={`p-4 rounded-xl text-left text-sm font-medium transition-all duration-200 border cursor-pointer flex items-center justify-between gap-3 ${
                    isActive
                      ? 'bg-[#064E3B] text-white border-[#064E3B] shadow-md'
                      : 'bg-white text-[#2C3E35] border-[#E8E5DD] hover:border-[#D4AF37]/50 hover:bg-[#FAF8F3]'
                  }`}
                >
                  <span className="leading-snug">{feeling.label}</span>
                  {isActive ? (
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-[#D5CFBF] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Dynamic Insight Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFeeling}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E5DD] shadow-[0_4px_20px_rgba(6,78,59,0.04)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F0ECE1]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#064E3B]">
                  <HeartPulse className="w-4 h-4 text-[#D4AF37]" />
                  <span>Recomendação Clínica:</span>
                  <strong className="text-[#0A261C] font-semibold">{current.recommendation}</strong>
                </div>
                <span className="text-xs text-[#6B7C73]">
                  Área: {current.areaTitle}
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-[#3E5348] leading-relaxed font-light">
                {current.insight}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#F0ECE1]">
                <span className="text-xs text-[#5E7267]">
                  Podemos aprofundar esse processo com segurança no seu primeiro encontro.
                </span>
                <button
                  type="button"
                  onClick={() => onSelectRecommendedArea(current.areaTitle)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#064E3B] hover:bg-[#04382A] rounded-full transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <span>Agendar para esta queixa</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
