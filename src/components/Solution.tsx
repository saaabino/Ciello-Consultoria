import React from 'react';
import { Calendar, Users, MessageSquare, Flame, MapPin, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { MENTOR_IMAGES } from '../data/landingData';
import { trackWhatsAppClick } from '../lib/metaPixel';

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
            Consultoria <span className="text-[#C5A059]">Método 5D Comercial</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            4 meses de acompanhamento intensivo: encontros presenciais, estruturação de processos, treinamentos práticos de equipe e suporte estratégico via WhatsApp.
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
              Encontros Presenciais
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              8 encontros presenciais ao longo de 4 meses (quinzenais de 4 horas cada) focados em gestão e desenvolvimento.
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
              Suporte semanal direto para liderança tirar dúvidas de gestão, vendas, feedbacks e atendimento.
            </p>
          </div>

          {/* Card 3: Select Community Support */}
          <div className="p-6 rounded-2xl bg-[#262626] border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 space-y-4 group">
            <div className="w-10 h-10 rounded-sm bg-[#C5A059] flex items-center justify-center font-bold text-white shadow-md">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold uppercase text-white">
              Treinamento de Equipe
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Desenvolvimento prático da equipe comercial com foco em técnicas de conexão, negociação e contorno de objeções.
            </p>
          </div>

          {/* Card 4: In-Person Exclusive Movement */}
          <div className="p-6 rounded-2xl bg-[#262626] border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 space-y-4 group">
            <div className="w-10 h-10 rounded-sm bg-[#C5A059] flex items-center justify-center font-bold text-white shadow-md">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold uppercase text-white">
              Estruturação de Processos
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Organização de funil, rotinas de follow-up, onboarding de novos vendedores e estruturação do CRM.
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
                  alt="Fernanda Ciello"
                  className="w-full h-auto object-cover max-h-[500px] grayscale-[15%] hover:grayscale-0 transition-all duration-700 cursor-pointer"
                  onClick={() => onOpenImageModal && onOpenImageModal(MENTOR_IMAGES.solution, "Fernanda Ciello")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-70" />
              </div>
            </div>

            {/* Mentor Bio & Authority Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                <Flame className="w-4 h-4 text-[#C5A059]" />
                <span>Sua Mentora & Consultora</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Quem somos: Fernanda Ciello
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Apaixonada por vendas, comportamento humano e autoconhecimento. <strong>Economista e especialista em venda comportamental.</strong> Há quatro anos nasceu a Ciello Consultoria com o propósito de potencializar empresas através de pessoas desenvolvidas para atingir resultados intencionais.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-stone-300 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>980+ Vidas Impactadas:</strong> Profissionais transformados no Brasil e em Portugal.</span>
                </div>
                <div className="flex items-start space-x-3 text-stone-300 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>45+ Nichos Atendidos:</strong> Experiência diversificada em múltiplos segmentos B2B e B2C.</span>
                </div>
                <div className="flex items-start space-x-3 text-stone-300 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Todos os treinamentos são 100% personalizados para a demanda e realidade comercial do seu time.</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  id="solution-cta"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('Solution Section')}
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
