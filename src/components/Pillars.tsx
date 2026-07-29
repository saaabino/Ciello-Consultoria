import React, { useState } from 'react';
import { PILLARS } from '../data/landingData';
import {
  ShieldCheck,
  Sparkles,
  MessageSquareText,
  Handshake,
  TrendingUp,
  Check,
  Compass,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

interface PillarsProps {
  whatsAppPhone: string;
  whatsAppMessage: string;
}

export const Pillars: React.FC<PillarsProps> = ({
  whatsAppPhone,
  whatsAppMessage
}) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'MessageSquareText': return <MessageSquareText className="w-6 h-6 text-[#D4AF37]" />;
      case 'Handshake': return <Handshake className="w-6 h-6 text-[#D4AF37]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Compass className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  const activePillar = PILLARS.find(p => p.id === activeTab) || PILLARS[0];
  const whatsappUrl = `https://wa.me/${whatsAppPhone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <section id="pilares" className="py-20 md:py-28 bg-[#F5F2ED] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAE5DD] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase">
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span>Os 5 Pilares da Virada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#1A1A1A] tracking-tight leading-tight">
            Metodologia dos 5 Pilares
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Uma estrutura passo a passo desenhada para integrar mentalidade, posicionamento e técnicas avançadas de negociação.
          </p>
        </div>

        {/* Tab Navigation Controls (Pillars 1 to 5) */}
        <div className="mt-12 flex items-center justify-start md:justify-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 scrollbar-none">
          {PILLARS.map((pillar) => {
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-4 py-3 rounded-full font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center space-x-2 border shrink-0 ${
                  isActive
                    ? 'bg-[#1A1A1A] text-white border-[#C5A059] shadow-lg ring-2 ring-[#C5A059]/20'
                    : 'bg-white text-stone-700 border-black/5 hover:border-[#C5A059]/40 hover:bg-[#EAE5DD]'
                }`}
              >
                <span className="text-base font-serif italic text-[#C5A059]">
                  0{pillar.id}
                </span>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detail Card */}
        <div className="mt-8 p-8 sm:p-12 rounded-3xl bg-white border border-[#C5A059]/20 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Pillar Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl sm:text-4xl font-serif italic text-[#C5A059] font-bold">
                  0{activePillar.id}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] block">
                    {activePillar.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#1A1A1A]">
                    {activePillar.title}
                  </h3>
                </div>
              </div>

              <p className="text-[#1A1A1A] font-bold text-base uppercase tracking-wide">
                "{activePillar.subtitle}"
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                {activePillar.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                  O que você vai dominar neste pilar:
                </p>
                {activePillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-stone-800 text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-[#EAE5DD] border border-[#C5A059]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#C5A059] text-white font-black text-xs uppercase tracking-widest hover:bg-[#A38244] shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Quero Dominar o Pilar 0{activePillar.id}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Summary Graphic Block */}
            <div className="lg:col-span-5 bg-[#F4EFE6] p-6 sm:p-8 rounded-2xl border border-[#DDD5C3] space-y-6">
              <h4 className="text-lg font-serif-heading font-bold text-stone-900 border-b border-stone-300 pb-3">
                Resumo da Metodologia dos 5 Pilares
              </h4>
              
              <div className="space-y-3">
                {PILLARS.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setActiveTab(p.id)}
                    className={`p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                      p.id === activeTab
                        ? 'bg-white shadow-sm border border-[#C59B27] text-stone-900'
                        : 'hover:bg-white/60 text-stone-600'
                    }`}
                  >
                    <div className="flex items-center space-x-3 text-xs sm:text-sm">
                      <span className="font-bold text-[#C59B27]">Pilar {p.id}</span>
                      <span className="font-medium truncate max-w-[180px]">{p.title}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${p.id === activeTab ? 'text-[#C59B27]' : 'text-stone-400'}`} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
