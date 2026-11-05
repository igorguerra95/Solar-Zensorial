import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AreasSection } from './components/AreasSection';
import { AboutSection } from './components/AboutSection';
import { SelfCareReflection } from './components/SelfCareReflection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedAreaForContact, setSelectedAreaForContact] = useState<string | undefined>(undefined);

  const scrollToContact = (preselectedArea?: string) => {
    if (preselectedArea) {
      setSelectedAreaForContact(preselectedArea);
    }
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAreas = () => {
    const areasElement = document.getElementById('areas');
    if (areasElement) {
      areasElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1F2E28] flex flex-col font-sans selection:bg-[#10B981]/20 selection:text-[#064E3B]">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar onContactClick={() => scrollToContact()} />

      <main className="flex-grow">
        {/* 1. Início (Hero Section) */}
        <Hero
          onContactClick={() => scrollToContact()}
          onExploreAreasClick={scrollToAreas}
        />

        {/* 2. Áreas de Atuação */}
        <AreasSection
          onSelectAreaForAppointment={(areaTitle) => scrollToContact(areaTitle)}
        />

        {/* 3. Sobre Nós & Abordagem Clínica */}
        <AboutSection onContactClick={() => scrollToContact()} />

        {/* Funcionalidade Inteligente: Guia Interativo de Acolhimento Emocional */}
        <SelfCareReflection
          onSelectRecommendedArea={(areaTitle) => scrollToContact(areaTitle)}
        />

        {/* 4. Dúvidas Frequentes (FAQ) */}
        <FaqSection onContactClick={() => scrollToContact()} />

        {/* 5. Contato & Agendamento Online Inteligente */}
        <ContactSection initialArea={selectedAreaForContact} />
      </main>

      {/* Botão Flutuante de WhatsApp com Pulso e Tooltip */}
      <FloatingWhatsApp />

      {/* Rodapé Institucional com Preceitos Éticos do CFP */}
      <Footer />
    </div>
  );
}
