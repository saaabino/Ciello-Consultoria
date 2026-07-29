import React, { useState } from 'react';
import { AlertTriangle, CheckSquare, Square, ArrowRight, MessageCircle } from 'lucide-react';
import { AGITATION_PAINS } from '../data/landingData';

interface AgitationProps {
  whatsAppPhone: string;
  whatsAppMessage: string;
}

export const Agitation: React.FC<AgitationProps> = ({
  whatsAppPhone,
  whatsAppMessage
}) => {
  const [checkedPains, setCheckedPains] = useState<number[]>([0, 1]);

  const togglePain = (index: number) => {
    if (checkedPains.includes(index)) {
      setCheckedPains(checkedPains.filter(i => i !== index));
    } else {
      setCheckedPains([...checkedPains, index]);
    }
  };

  const whatsappUrl = `https://wa.me/${whatsAppPhone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <section id="agitacao" className="py-20 md:py-28 bg-[#F5F2ED] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAE5DD] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase">
            <AlertTriangle className="w-4 h-4 text-[#C5A059]" />
            <span>O Obstáculo Invisível</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1A1A1A] leading-tight">
            Insegurança no fechamento travando seu crescimento?
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            O seu conhecimento técnico já é excelente. O que está travando o seu próximo nível financeiro não é a falta de esforço, mas sim a forma como você enxerga e conduz suas vendas.
          </p>
        </div>

        {/* Pains Grid / Diagnostic Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {AGITATION_PAINS.map((pain, idx) => {
            const isChecked = checkedPains.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => togglePain(idx)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  isChecked
                    ? 'bg-white border-[#C5A059] shadow-xl ring-2 ring-[#C5A059]/20 -translate-y-1'
                    : 'bg-[#EAE5DD]/60 border-black/5 hover:border-[#C5A059]/30 hover:bg-white'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="pt-1 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-6 h-6 text-[#C5A059]" />
                    ) : (
                      <Square className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold uppercase text-[#1A1A1A] leading-snug">
                      {pain.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Callout Result */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#1A1A1A] text-stone-100 border-l-4 border-[#C5A059] shadow-2xl max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase">
            A Solução Estratégica
          </p>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            {checkedPains.length > 0
              ? `Você selecionou ${checkedPains.length} desafio${checkedPains.length > 1 ? 's' : ''} crítico${checkedPains.length > 1 ? 's' : ''}. Podemos destravar todos eles.`
              : 'Se você se identifica com qualquer um desses pontos, é hora de mudar sua estratégia.'}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Continuar vendendo no improviso vai te prender a faturamentos instáveis. Instale uma base emocional forte e scripts de fechamento humanizados e de alto valor.
          </p>

          <div className="pt-2">
            <a
              id="agitation-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#C5A059] text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#A38244] shadow-lg shadow-[#C5A059]/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Quero Destravar Minhas Vendas Agora</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
