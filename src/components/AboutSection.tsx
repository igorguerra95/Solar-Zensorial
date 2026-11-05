import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Feather, Heart, ArrowUpRight } from 'lucide-react';
import therapistImage from '../assets/images/therapist_portrait_consulting_1793906047193.jpg';
import detailImage from '../assets/images/sensorial_session_detail_1793906046649.jpg';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const pillars = [
    {
      icon: Shield,
      title: 'Sigilo e Ética Irrestrita',
      description: 'Atendimento guiado pelos preceitos do Código de Ética Profissional do Psicólogo (CFP). Suas vivências e confissões permanecem em total confidencialidade.'
    },
    {
      icon: Feather,
      title: 'Acolhimento Sensorial',
      description: 'Nosso ambiente foi concebido como um oásis de desaceleração: iluminação natural calmante, chá de boas-vindas e acústica protegida de ruídos urbanos.'
    },
    {
      icon: Sparkles,
      title: 'Prática Baseada em Evidências',
      description: 'Integração entre métodos terapêuticos validados pela ciência (TCC, Humanismo e Regulação Emocional) e respeito profundo à sua individualidade.'
    },
    {
      icon: Heart,
      title: 'Cuidado Contínuo e Personalizado',
      description: 'Sem fórmulas pré-fabricadas. O ritmo da terapia é co-construído em conjunto, respeitando a sua prontidão interna e suas metas de vida.'
    }
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid: Editorial split with therapist portrait & philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Portrait with Dual Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Portrait Card: Adaptive for mobile, tablet, and desktop */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(6,78,59,0.08)] md:shadow-[0_20px_50px_rgba(6,78,59,0.1)] border border-[#E8E5DD] bg-white">
              <img
                src={therapistImage}
                alt="Psicóloga clínica acolhedora no consultório Solar Zensorial"
                className="w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[460px] lg:h-[500px] object-cover object-top hover:scale-102 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 38vw"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 sm:p-5 lg:p-6 bg-white border-t border-[#E8E5DD]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-medium text-[#0A261C]">
                      Corpo Clínico Especializado
                    </h4>
                    <p className="text-xs text-[#064E3B] font-medium mt-0.5">
                      Psicologia Clínica Integrativa · CRP Ativo
                    </p>
                  </div>
                  <span className="self-start sm:self-auto text-[10px] sm:text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold bg-[#FCFAF4] px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-[#D4AF37]/30 whitespace-nowrap">
                    Acolhimento Humanizado
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping secondary aesthetic detail card: Calibrated for mobile, tablet, and desktop */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 md:-bottom-8 md:-right-6 w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-white shadow-xl z-10 bg-[#FAF8F3]">
              <img
                src={detailImage}
                alt="Detalhes sensoriais do atendimento terapêutico com chá calmante e difusor"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 112px, (max-width: 1024px) 176px, 192px"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Column: Narrative of Philosophy and Clinical Practice */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#064E3B] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Nossa Filosofia de Cuidado</span>
            </div>

            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A261C] font-normal tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Uma ponte entre a profundidade humana e a ciência da mente
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-[#3E5348] font-light leading-relaxed">
              <p>
                O <strong className="font-semibold text-[#0A261C]">Solar Zensorial - Espaçoterapias</strong> nasceu da convicção de que a cura emocional requer mais do que técnicas mecânicas: exige um ambiente que respeite o tempo do indivíduo e estimule a calma do sistema nervoso.
              </p>
              <p>
                Nossa prática integra as contribuições da Terapia Cognitivo-Comportamental com a Abordagem Centrada na Pessoa e a regulação psicossomática. Acreditamos que a terapia é um encontro genuíno entre duas pessoas, onde você encontra continência para despir defesas, compreender suas angústias e resgatar o protagonismo da sua própria vida.
              </p>
            </div>

            {/* Quote block */}
            <div className="mt-8 p-6 rounded-2xl bg-[#FAF8F3] border border-[#E8E5DD] relative">
              <span className="font-serif text-4xl text-[#D4AF37] absolute top-3 left-4 leading-none select-none opacity-40">
                “
              </span>
              <p className="font-serif text-lg sm:text-xl text-[#1A2E25] italic leading-relaxed pl-6">
                Não somos o que aconteceu conosco; somos o que decidimos nos tornar a partir do momento em que acolhemos a nossa verdade.
              </p>
              <p className="text-xs uppercase tracking-wider text-[#6B7C73] font-semibold mt-3 pl-6">
                — Princípio Orientador do Solar Zensorial
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 px-8 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#064E3B] rounded-full hover:bg-[#04382A] transition-all duration-300 shadow-md cursor-pointer active:scale-98"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid below */}
        <div className="mt-24 pt-16 border-t border-[#E8E5DD]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block mb-2">
              Pilares Fundamentais
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0A261C] font-normal">
              O que sustenta cada sessão no Solar Zensorial
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-[#E8E5DD] shadow-[0_2px_8px_rgba(6,78,59,0.02)] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] border border-[#10B981]/20 flex items-center justify-center text-[#064E3B] mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#0A261C] mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#52685E] leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
