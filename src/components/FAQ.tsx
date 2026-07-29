import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/landingData';
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';

interface FAQProps {
  whatsAppPhone: string;
  whatsAppMessage: string;
}

export const FAQ: React.FC<FAQProps> = ({
  whatsAppPhone,
  whatsAppMessage
}) => {
  const [openId, setOpenId] = useState<string | null>("faq_1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsappUrl = `https://wa.me/${whatsAppPhone.replace(/\D/g, '')}?text=${encodeURIComponent(
    whatsAppMessage + " (Tenho uma dúvida específica sobre a mentoria.)"
  )}`;

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F5F2ED] text-[#1A1A1A] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAE5DD] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase">
            <HelpCircle className="w-4 h-4 text-[#C5A059]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#1A1A1A] tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-gray-600 text-base">
            Tudo o que você precisa saber antes de se candidatar à Mentoria Meta Ousada.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-[#C5A059]/20 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none hover:bg-[#EAE5DD]/40 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#1A1A1A] text-[#C5A059]' : 'bg-[#EAE5DD] text-[#1A1A1A]'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-black/5 pt-4 bg-[#F5F2ED]/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-8 rounded-3xl bg-[#1A1A1A] text-white border border-[#C5A059]/30 text-center space-y-4">
          <h3 className="text-xl font-black uppercase tracking-tight">
            Ainda tem dúvidas sobre o seu caso?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Converse diretamente com um dos consultores da nossa equipe para tirar suas dúvidas pontuais no WhatsApp.
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#C5A059] text-white font-black text-xs uppercase tracking-widest hover:bg-[#A38244] shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Falar com um Consultor</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
