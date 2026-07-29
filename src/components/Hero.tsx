import React from 'react';
import { MessageCircle, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { MENTOR_IMAGES } from '../data/landingData';

interface HeroProps {
  whatsAppPhone: string;
  whatsAppMessage: string;
  onOpenImageModal?: (src: string, alt: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  whatsAppPhone,
  whatsAppMessage,
  onOpenImageModal
}) => {
  const whatsappUrl = `https://wa.me/${whatsAppPhone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <section id="hero-section" className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 bg-[#1A1A1A] text-white overflow-hidden border-b border-[#C5A059]/20">
      {/* Background Subtle Gold Glow Pattern */}
      <div className="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#262626] border border-[#C5A059]/40 text-[#C5A059] text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em]">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] shrink-0" />
              <span>Mentoria Intensiva de 4 Meses</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.12] tracking-tighter">
              Você nasceu para o <span className="text-[#C5A059] block mt-0.5 sm:mt-1">extraordinário.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Pare de jogar pequeno. Desbloqueie sua mentalidade, domine a arte das vendas de alto valor e dobre seu faturamento com a <strong className="text-white font-bold">Mentoria Meta Ousada</strong>.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 text-stone-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>Desbloqueio de Crenças Limitantes</span>
              </div>
              <div className="flex items-center space-x-2.5 text-stone-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>Vendas Naturais Sem Pressão</span>
              </div>
              <div className="flex items-center space-x-2.5 text-stone-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>Encontros Ao Vivo & Hot Seats</span>
              </div>
              <div className="flex items-center space-x-2.5 text-stone-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>Suporte Individual no WhatsApp</span>
              </div>
            </div>

            {/* Primary CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-primary-cta"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#C5A059] text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#A38244] shadow-xl shadow-[#C5A059]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>Quero Falar com a Equipe</span>
                <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#aplicacao"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-[#262626] hover:bg-[#333333] text-stone-200 hover:text-white font-bold text-xs uppercase tracking-widest border border-[#C5A059]/30 transition-all duration-200"
              >
                <span>Preencher Aplicação</span>
              </a>
            </div>

            {/* Trust Footer */}
            <div className="pt-2 flex items-center space-x-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Sua conversa é 100% confidencial diretamente com nossa equipe oficial.</span>
            </div>
          </div>

          {/* Right Column: Mentor Image & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-1.5 bg-[#C5A059]/40 rounded-2xl opacity-60 blur-sm" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#C5A059]/30 shadow-2xl group">
                <img
                  id="hero-mentor-image"
                  src={MENTOR_IMAGES.hero}
                  alt="Mentora Fernanda - Mentoria Meta Ousada"
                  className="w-full h-auto object-cover object-center max-h-[580px] grayscale-[15%] hover:grayscale-0 transition-all duration-700 cursor-pointer"
                  onClick={() => onOpenImageModal && onOpenImageModal(MENTOR_IMAGES.hero, "Mentora Fernanda")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A]/90 backdrop-blur-md p-4 rounded-xl border border-[#C5A059]/30 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">Mentora de Negócios & Vendas</p>
                  <p className="text-xl font-black text-white uppercase tracking-tight">Fernanda</p>
                  <p className="text-xs text-gray-300 mt-0.5">Especialista em destravar a mentalidade e acelerar faturamento comercial.</p>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-3 left-2 sm:-top-6 sm:-left-6 bg-[#262626]/95 backdrop-blur-md border border-[#C5A059]/40 rounded-xl p-2.5 sm:p-4 shadow-xl flex items-center space-x-2.5 sm:space-x-3 z-20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-[#C5A059] flex items-center justify-center text-white font-bold text-sm sm:text-lg shrink-0">
                  4M
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest">Acompanhamento</p>
                  <p className="text-xs sm:text-sm font-bold text-white uppercase">4 Meses Intensivos</p>
                </div>
              </div>

              {/* Floating Bottom Right Badge */}
              <div className="absolute -bottom-3 right-2 sm:-bottom-6 sm:-right-6 bg-[#262626]/95 backdrop-blur-md border border-[#C5A059]/40 rounded-xl p-2.5 sm:p-4 shadow-xl flex items-center space-x-2.5 sm:space-x-3 z-20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-[#1A1A1A] border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-bold text-sm sm:text-lg shrink-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059]" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest">Resultados Reais</p>
                  <p className="text-xs sm:text-sm font-bold text-white uppercase">Aceleração de Vendas</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
