import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, HeartHandshake, Compass, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/hero_zensorial_space_1793906046168.jpg';

interface HeroProps {
  onContactClick: () => void;
  onExploreAreasClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreAreasClick }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-subtle-noise">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#10B981]/8 to-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Subtitle / Domain Trust Marker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#064E3B] mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span>Solar Zensorial · Espaçoterapias & Psicologia Clínica</span>
        </motion.div>

        {/* Hero Grid: Split-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Column Left: Magnetic Headline & Value Proposition */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="font-serif text-[42px] sm:text-[56px] lg:text-[76px] leading-[1.04] tracking-[-0.03em] text-[#0A261C] font-normal"
              style={{ textWrap: 'balance' }}
            >
              Onde o silêncio ganha escuta e a sua vida reencontra o{' '}
              <span className="italic font-normal bg-gradient-to-r from-[#064E3B] via-[#0D7355] to-[#D4AF37] bg-clip-text text-transparent">
                equilíbrio.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="mt-6 text-base sm:text-lg text-[#334D41] leading-relaxed max-w-xl font-light"
            >
              Psicoterapia individual, de casal e acompanhamento emocional integrativo em um refúgio acolhedor. Um espaço seguro para ressignificar dores, aliviar a sobrecarga da mente e cultivar clareza interior.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={onContactClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold text-white bg-[#064E3B] rounded-full hover:bg-[#04382A] transition-all duration-300 shadow-[0_8px_24px_rgba(6,78,59,0.22)] active:scale-98 whitespace-nowrap cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreAreasClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-[#064E3B] hover:text-[#04382A] hover:bg-[#E8E5DD]/40 rounded-full transition-colors border border-[#D5CFBF] cursor-pointer whitespace-nowrap"
              >
                <span>Conhecer áreas de atuação</span>
              </button>
            </motion.div>

            {/* Unboxed Metadata Trust Line (Zero-Pill Discipline) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-[#E8E5DD] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#52685E]"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#064E3B]" />
                <span className="font-medium text-[#1A2E25]">Sigilo absoluto garantido</span>
              </div>
              <span aria-hidden="true" className="text-[#BDB7A9]">·</span>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#064E3B]" />
                <span>Presencial & Online</span>
              </div>
              <span aria-hidden="true" className="text-[#BDB7A9]">·</span>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#064E3B]" />
                <span>Reembolso em planos de saúde</span>
              </div>
            </motion.div>
          </div>

          {/* Column Right: High-Fidelity Focal Sanctuary Photography */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Outer decorative gold border line */}
              <div className="absolute -inset-2 rounded-3xl border border-[#D4AF37]/30 pointer-events-none -z-10" />

              {/* Main Photo Container: Adaptive across mobile (375px+), tablet (640-1024px) and desktop (1024px+) */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(6,78,59,0.1)] md:shadow-[0_20px_50px_rgba(6,78,59,0.12)] border border-[#E8E5DD] bg-[#F4F1EA]">
                <img
                  src={heroImage}
                  alt="Consultório acolhedor de psicologia e terapias integrativas Solar Zensorial"
                  className="w-full h-[260px] xs:h-[300px] sm:h-[380px] md:h-[440px] lg:h-[520px] object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Overlay Card: Ambient Sanctuary Detail - Scaled for mobile, tablet, and desktop */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 lg:bottom-5 lg:left-5 lg:right-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FDFBF7]/95 backdrop-blur-md border border-[#E8E5DD] shadow-lg">
                  <div className="flex items-start justify-between gap-2.5">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#064E3B]">
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
                        <span>Espaço Terapêutico Integrado</span>
                      </div>
                      <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-[#3A4E44] leading-relaxed line-clamp-2 sm:line-clamp-none">
                        Ambiente sensorial projetado para proporcionar desaceleração imediata e segurança emocional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full-width 4-Column Proof & Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E5DD] shadow-[0_4px_24px_rgba(6,78,59,0.04)]"
        >
          <div className="space-y-1 pr-4 border-r border-[#E8E5DD]/70 last:border-none">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#064E3B] tabular-nums tracking-tight">
              12+
            </span>
            <p className="text-xs sm:text-sm font-medium text-[#1A2E25]">Anos de prática clínica</p>
            <p className="text-[11px] sm:text-xs text-[#6B7C73] leading-relaxed">Aprimoramento científico contínuo</p>
          </div>

          <div className="space-y-1 pr-4 border-r border-[#E8E5DD]/70 last:border-none">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#064E3B] tabular-nums tracking-tight">
              100%
            </span>
            <p className="text-xs sm:text-sm font-medium text-[#1A2E25]">Sigilo e ética profissional</p>
            <p className="text-[11px] sm:text-xs text-[#6B7C73] leading-relaxed">Regulamentado pelo CFP</p>
          </div>

          <div className="space-y-1 pr-4 border-r border-[#E8E5DD]/70 last:border-none">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#064E3B] tabular-nums tracking-tight">
              +1.800
            </span>
            <p className="text-xs sm:text-sm font-medium text-[#1A2E25]">Horas de acolhimento</p>
            <p className="text-[11px] sm:text-xs text-[#6B7C73] leading-relaxed">Sessões individuais e de casal</p>
          </div>

          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#064E3B] tabular-nums tracking-tight">
              50 min
            </span>
            <p className="text-xs sm:text-sm font-medium text-[#1A2E25]">Atenção dedicada</p>
            <p className="text-[11px] sm:text-xs text-[#6B7C73] leading-relaxed">Sem pressa ou interrupções</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
