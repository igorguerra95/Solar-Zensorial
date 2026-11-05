import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Send,
  CheckCircle,
  Shield,
  MessageCircle,
  Clock,
  Video,
  Building,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SPECIALTY_AREAS } from '../data/content';
import { AppointmentFormData } from '../types';

interface ContactSectionProps {
  initialArea?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialArea }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    email: '',
    phone: '',
    modality: 'online',
    area: initialArea || SPECIALTY_AREAS[0].title,
    preferredTime: 'manha',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync if initialArea changes from other components
  React.useEffect(() => {
    if (initialArea) {
      setFormData((prev) => ({ ...prev, area: initialArea }));
    }
  }, [initialArea]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AppointmentFormData, string>> = {};

    if (!formData.name.trim() || formData.name.trim().length < 3) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Informe um endereço de e-mail válido.';
    }

    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      newErrors.phone = 'Informe seu WhatsApp com DDD (ex: 11 99999-9999).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-reliability booking dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const buildWhatsAppMessage = () => {
    const modalityText = formData.modality === 'presencial' ? 'Presencial' : 'Online';
    const timeMap = {
      manha: 'Manhã',
      tarde: 'Tarde',
      noite: 'Noite'
    };

    const text = `Olá! Gostaria de agendar uma consulta no Solar Zensorial:
• Nome: ${formData.name}
• Modalidade: ${modalityText}
• Área: ${formData.area}
• Turno preferido: ${timeMap[formData.preferredTime]}
${formData.message ? `• Observação: ${formData.message}` : ''}`;

    return encodeURIComponent(text);
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-[#FAF8F3] relative border-t border-[#E8E5DD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column Left: Reassurance, Privacy & Direct Channels */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#064E3B] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Agendamento de Consulta</span>
            </div>

            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A261C] font-normal tracking-tight leading-[1.1]"
              style={{ textWrap: 'balance' }}
            >
              Dê o primeiro passo em direção ao seu refúgio interior
            </h2>

            <p className="mt-5 text-base text-[#40564C] leading-relaxed font-light">
              Preencha o formulário para solicitar seu horário ou tirar dúvidas prévias. Retornamos o contato em até poucas horas com as opções disponíveis de agenda.
            </p>

            {/* Reassurance Checklist */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E5DD]">
                <Shield className="w-5 h-5 text-[#064E3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#0A261C]">Sigilo Ético Absoluto</h4>
                  <p className="text-xs text-[#52685E] leading-relaxed mt-0.5">
                    Seus dados de contato e motivos de consulta são protegidos pelo Código de Ética Profissional.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E5DD]">
                <Clock className="w-5 h-5 text-[#064E3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#0A261C]">Retorno Cuidadoso e Rápido</h4>
                  <p className="text-xs text-[#52685E] leading-relaxed mt-0.5">
                    Respondemos diretamente via WhatsApp ou e-mail com total discrição e acolhimento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E5DD]">
                <MessageCircle className="w-5 h-5 text-[#064E3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#0A261C]">Sem Burocracia</h4>
                  <p className="text-xs text-[#52685E] leading-relaxed mt-0.5">
                    Primeira conversa de alinhamento com acolhimento direto do terapeuta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column Right: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-white border border-[#E8E5DD] shadow-[0_12px_40px_rgba(6,78,59,0.06)] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 mx-auto flex items-center justify-center text-[#064E3B] mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <h3 className="font-serif text-3xl font-normal text-[#0A261C]">
                      Mensagem Recebida com Sucesso
                    </h3>

                    <p className="mt-3 text-sm text-[#40564C] max-w-md mx-auto leading-relaxed">
                      Agradecemos por confiar no Solar Zensorial, <strong className="font-semibold text-[#0A261C]">{formData.name}</strong>. Nossa equipe entrará em contato em breve para confirmar seu horário.
                    </p>

                    <div className="mt-8 p-5 rounded-2xl bg-[#FAF8F3] border border-[#E8E5DD] text-left max-w-md mx-auto text-xs space-y-2 text-[#3E5348]">
                      <div><strong>Modalidade:</strong> {formData.modality === 'presencial' ? 'Presencial' : 'Online'}</div>
                      <div><strong>Área Selecionada:</strong> {formData.area}</div>
                      <div><strong>Turno Preferencial:</strong> {formData.preferredTime.toUpperCase()}</div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/?text=${buildWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#064E3B] hover:bg-[#04382A] rounded-full transition-all shadow-md"
                      >
                        <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                        <span>Abrir confirmação no WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            modality: 'online',
                            area: SPECIALTY_AREAS[0].title,
                            preferredTime: 'manha',
                            message: ''
                          });
                        }}
                        className="px-5 py-3 text-xs font-medium text-[#52685E] hover:text-[#0A261C] transition-colors"
                      >
                        Novo Agendamento
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#F0ECE1]">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#064E3B] flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#D4AF37]" />
                          <span>Solicitação de Horário</span>
                        </span>
                        <span className="text-xs text-[#73857C]">Etapa única</span>
                      </div>
                    </div>

                    {/* Modality Selector: Presencial vs Online */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2E25] mb-2">
                        1. Escolha a Modalidade de Atendimento:
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, modality: 'online' }))}
                          className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                            formData.modality === 'online'
                              ? 'bg-[#064E3B] text-white border-[#064E3B] shadow-sm'
                              : 'bg-[#FAF8F3] text-[#33473D] border-[#E8E5DD] hover:border-[#D4AF37]/50'
                          }`}
                        >
                          <Video className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <div>
                            <div className="text-xs font-semibold">Online</div>
                            <div className={`text-[10px] ${formData.modality === 'online' ? 'text-white/80' : 'text-[#6B7C73]'}`}>
                              Em qualquer lugar do Brasil
                            </div>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, modality: 'presencial' }))}
                          className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                            formData.modality === 'presencial'
                              ? 'bg-[#064E3B] text-white border-[#064E3B] shadow-sm'
                              : 'bg-[#FAF8F3] text-[#33473D] border-[#E8E5DD] hover:border-[#D4AF37]/50'
                          }`}
                        >
                          <Building className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <div>
                            <div className="text-xs font-semibold">Presencial</div>
                            <div className={`text-[10px] ${formData.modality === 'presencial' ? 'text-white/80' : 'text-[#6B7C73]'}`}>
                              Consultório privativo
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Specialty Area Selection */}
                    <div>
                      <label htmlFor="area-select" className="block text-xs font-bold uppercase tracking-wider text-[#1A2E25] mb-2">
                        2. Principal foco da consulta:
                      </label>
                      <select
                        id="area-select"
                        value={formData.area}
                        onChange={(e) => setFormData((prev) => ({ ...prev, area: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DD] bg-[#FAF8F3] text-sm text-[#1A2E25] focus:outline-none focus:ring-2 focus:ring-[#064E3B] transition-all"
                      >
                        {SPECIALTY_AREAS.map((area) => (
                          <option key={area.id} value={area.title}>
                            {area.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Time of Day */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2E25] mb-2">
                        3. Melhor período para você:
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {(['manha', 'tarde', 'noite'] as const).map((period) => {
                          const labels = { manha: 'Manhã', tarde: 'Tarde', noite: 'Noite' };
                          const isSelected = formData.preferredTime === period;
                          return (
                            <button
                              key={period}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, preferredTime: period }))}
                              className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#064E3B] text-white border-[#064E3B]'
                                  : 'bg-[#FAF8F3] text-[#40564C] border-[#E8E5DD] hover:border-[#D4AF37]'
                              }`}
                            >
                              {labels[period]}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* User Contact Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name-input" className="block text-xs font-bold uppercase tracking-wider text-[#1A2E25] mb-1.5">
                          Nome Completo *
                        </label>
                        <input
                          id="name-input"
                          type="text"
                          placeholder="Como prefere ser chamado(a)"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, name: e.target.value }));
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1A2E25] bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#064E3B] transition-all ${
                            errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5DD]'
                          }`}
                        />
                        {errors.name && <p className="mt-1 text-[11px] text-red-600">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone-input" className="block text-xs font-bold uppercase tracking-wider text-[#1A2E25] mb-1.5">
                          WhatsApp / Telefone *
                        </label>
                        <input
                          id="phone-input"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, phone: e.target.value }));
                            if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1A2E25] bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#064E3B] transition-all ${
                            errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5DD]'
                          }`}
                        />
                        {errors.phone && <p className="mt-1 text-[11px] text-red-600">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-[#1A2E25] mb-1.5">
                        E-mail *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        placeholder="seuemail@exemplo.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1A2E25] bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#064E3B] transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5DD]'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="message-input" className="block text-xs font-bold uppercase tracking-wider text-[#1A2E25] mb-1.5">
                        Mensagem ou dúvida prévia (Opcional)
                      </label>
                      <textarea
                        id="message-input"
                        rows={3}
                        placeholder="Sinta-se à vontade para compartilhar brevemente o que o(a) traz até aqui..."
                        value={formData.message}
                        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DD] text-sm text-[#1A2E25] bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#064E3B] transition-all resize-none"
                      />
                    </div>

                    {/* Primary Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 text-xs uppercase tracking-wider font-semibold text-white bg-[#064E3B] hover:bg-[#04382A] rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span>Enviando solicitação com segurança...</span>
                        ) : (
                          <>
                            <span>Entrar em contato</span>
                            <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                          </>
                        )}
                      </button>

                      <p className="mt-3 text-[11px] text-center text-[#73857C]">
                        Garantia de sigilo profissional · Resposta humana e personalizada
                      </p>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
