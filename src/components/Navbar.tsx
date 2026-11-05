import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(6,78,59,0.04)] border-b border-[#E8E5DD]'
            : 'bg-transparent border-b border-[#E8E5DD]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element wordmark in display serif) */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] transition-transform duration-300 group-hover:scale-125" />
            <span className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-[#064E3B]">
              Solar Zensorial
            </span>
          </a>

          {/* Zone 2: 4 Concise Single-Line Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2C3E35]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#064E3B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#064E3B] rounded-full hover:bg-[#04382A] transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_rgba(6,78,59,0.18)] whitespace-nowrap shrink-0 active:scale-98"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#064E3B] hover:bg-[#E8E5DD]/40 rounded-lg transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FDFBF7] shadow-2xl p-6 flex flex-col justify-between border-l border-[#E8E5DD]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E5DD]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                  <span className="font-serif text-xl font-medium text-[#064E3B]">
                    Solar Zensorial
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#064E3B] hover:bg-[#E8E5DD]/40 rounded-lg"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-lg font-serif text-[#1C2621] hover:text-[#064E3B] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E8E5DD]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-3.5 px-4 text-xs uppercase tracking-wider font-semibold text-white bg-[#064E3B] rounded-full hover:bg-[#04382A] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
              <p className="mt-4 text-xs text-center text-[#6B7C73]">
                Atendimento presencial & online
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
