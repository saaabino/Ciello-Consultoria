import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick, trackCTAClick } from '../lib/metaPixel';

interface HeaderProps {
  whatsAppPhone: string;
  whatsAppMessage: string;
}

export const Header: React.FC<HeaderProps> = ({
  whatsAppPhone,
  whatsAppMessage,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${whatsAppPhone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
        scrolled
          ? 'bg-[#1A1A1A]/95 backdrop-blur-md border-b border-[#C5A059]/30 shadow-xl py-2.5 sm:py-3'
          : 'bg-[#1A1A1A] border-b border-[#C5A059]/20 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 overflow-hidden">
        {/* Brand Logo */}
        <a href="#" id="header-brand-logo" className="flex items-center space-x-2 sm:space-x-3 group min-w-0 shrink">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#C5A059] flex items-center justify-center rounded-md font-black text-white text-xs sm:text-sm shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
            MO
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-base font-black tracking-tight text-white block uppercase leading-tight truncate">
              MENTORIA META OUSADA
            </span>
            <span className="text-[8px] sm:text-[10px] text-[#C5A059] tracking-[0.12em] sm:tracking-[0.2em] uppercase font-bold block truncate">
              COM MENTORA FERNANDA
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav id="header-desktop-nav" className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-stone-300">
          <a href="#solucao" onClick={() => trackCTAClick('Header Nav - A Mentoria')} className="hover:text-[#C5A059] transition-colors">A Mentoria</a>
          <a href="#pilares" onClick={() => trackCTAClick('Header Nav - Metodologia')} className="hover:text-[#C5A059] transition-colors">Metodologia</a>
          <a href="#comunidade" onClick={() => trackCTAClick('Header Nav - Comunidade')} className="hover:text-[#C5A059] transition-colors">Comunidade</a>
          <a href="#depoimentos" onClick={() => trackCTAClick('Header Nav - Resultados')} className="hover:text-[#C5A059] transition-colors">Resultados</a>
          <a href="#aplicacao" onClick={() => trackCTAClick('Header Nav - Aplicacao')} className="hover:text-[#C5A059] transition-colors">Aplicação</a>
          <a href="#faq" onClick={() => trackCTAClick('Header Nav - Duvidas')} className="hover:text-[#C5A059] transition-colors">Dúvidas</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center shrink-0">
          {/* Primary CTA */}
          <a
            id="header-whatsapp-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('Header Navigation')}
            className="inline-flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-[#C5A059] text-white font-black text-[10px] sm:text-xs uppercase tracking-wider hover:bg-[#A38244] transition-all duration-200 shadow-md shadow-[#C5A059]/20 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
