import React from 'react';
import { Calendar, Users, MessageSquare, Flame, MapPin, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { MENTOR_IMAGES } from '../data/landingData';

interface SolutionProps {
  whatsAppPhone: string;
  whatsAppMessage: string;
  onOpenImageModal?: (src: string, alt: string) => void;
}

export const Solution: React.FC<SolutionProps> = ({
  whatsAppPhone,
  whatsAppMessage,
  onOpenImageModal
}) => {
  const whatsappUrl = `https://wa.me/${whatsAppPhone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <section id="solucao" className="py-20 md:py-28 bg-[#1A1A1A] text-white relative border-t border-b border-[#C5A059]/20 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>A Solução Estratégica</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Mentoria <span className="text-[#C5A059]">Meta Ousada</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            4 meses de acompanhamento intensivo: suporte em grupo, mentorias individuais e encontros quinzenais estratégicos para colocar o seu faturamento em um novo patamar.
          </p>
        </div>

        {/* Deliverables Grid (4 Pillars of Delivery) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Bi-Weekly Online Meetings */}
          <div className="p-6 rounded-2xl bg-[#262626] border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 space-y-4 group">
            <div className="w-10 h-10 rounded-sm bg-[#C5A059] flex items-center justify-center font-bold text-white shadow-md">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold uppercase text-white">
              Encontros Quinzenais Ao Vivo
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Reuniões online quinzenais focadas em direcionamento estratégico, com <strong>Hot Seats ao vivo</strong> e <strong>Rodadas de Negócios</strong>.
            </p>
          </div>

          {/* Card 2: Individual WhatsApp Guidance */}
          <div className="p-6 rounded-2xl bg-[#262626] border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 space-y-4 group">
            <div className="w-10 h-10 rounded-sm bg-[#C5A059] flex items-center justify-center font-bold text-white shadow-md">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold uppercase text-white">
              Acompanhamento WhatsApp
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Suporte próximo e direto para validar propostas, ajustar roteiros de reuniões e tirar dúvidas operacionais em tempo real.
            </p>
          </div>

          {/* Card 3: Select Community Support */}
          <div className="p-6 rounded-2xl bg-[#262626] border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 space-y-4 group">
            <div className="w-10 h-10 rounded-sm bg-[#C5A059] flex items-center justify-center font-bold text-white shadow-md">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold uppercase text-white">
              Comunidade de Alto Nível
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Troca constante em um grupo VIP com empreendedores ambiciosos, gerando indicações mútuas e alianças estratégicas.
            </p>
          </div>

          {/* Card 4: In-Person Exclusive Movement */}
          <div className="p-6 rounded-2xl bg-[#262626] border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 space-y-4 group">
            <div className="w-10 h-10 rounded-sm bg-[#C5A059] flex items-center justify-center font-bold text-white shadow-md">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold uppercase text-white">
              Encontro Presencial Exclusivo
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Um evento presencial marcante para selar parcerias, vivenciar dinâmicas de alto impacto emocional e celebrar sua evolução.
            </p>
          </div>

        </div>

        {/* Meet the Mentor Block */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#1A1A1A] border-l-4 border-[#C5A059] border-y border-r border-[#C5A059]/20 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Mentor Image 2 */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-xl group">
                <img
                  id="solution-mentor-image"
                  src={MENTOR_IMAGES.solution}
                  alt="Mentora Fernanda Elegante"
                  className="w-full h-auto object-cover max-h-[500px] grayscale-[15%] hover:grayscale-0 transition-all duration-700 cursor-pointer"
                  onClick={() => onOpenImageModal && onOpenImageModal(MENTOR_IMAGES.solution, "Mentora Fernanda Elegante")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-70" />
              </div>
            </div>

            {/* Mentor Bio & Authority Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                <Flame className="w-4 h-4 text-[#C5A059]" />
                <span>Sua Mentora & Guia Estratégica</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Quem é Fernanda?
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Fernanda é estrategista de negócios e mentora de profissionais que desejam escalar seus resultados sem perder a essência. Desenvolveu a metodologia <strong>Meta Ousada</strong> para unir desbloqueio emocional e técnicas modernas de vendas consultivas.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-stone-300 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Método validado por dezenas de turmas e profissionais de diversos segmentos.</span>
                </div>
                <div className="flex items-start space-x-3 text-stone-300 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Abordagem prática: sem teorias cansativas, foco 100% em aplicação e caixa rápido.</span>
                </div>
                <div className="flex items-start space-x-3 text-stone-300 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Acompanhamento olho no olho durante todo o ciclo de 4 meses.</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  id="solution-cta"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#C5A059] text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#A38244] shadow-lg shadow-[#C5A059]/30 transition-all duration-300"
                >
                  <span>Falar com a Fernanda e Equipe</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
