import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  whatsAppPhone: string;
  whatsAppMessage: string;
}

export const Footer: React.FC<FooterProps> = ({
  whatsAppPhone,
  whatsAppMessage
}) => {
  const whatsappUrl = `https://wa.me/${whatsAppPhone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <footer className="bg-[#1A1A1A] text-stone-400 text-xs border-t border-[#C5A059]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-[#C5A059] p-[1px]">
                <div className="w-full h-full bg-[#1A1A1A] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                </div>
              </div>
              <span className="text-sm font-black text-white tracking-[0.2em] uppercase">
                MENTORIA META OUSADA
              </span>
            </div>
            
            <p className="text-gray-400 text-xs max-w-md leading-relaxed">
              Desenvolvimento de liderança, desbloqueio comercial e escala de faturamento para profissionais e empreendedores ambiciosos.
            </p>

            <div className="flex items-center space-x-2 text-[11px] text-[#C5A059] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Mentoria conduzida por Fernanda. Todos os direitos reservados.</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-white font-bold uppercase tracking-[0.2em] text-[11px]">Navegação</p>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#solucao" className="hover:text-[#C5A059] transition-colors">A Mentoria</a></li>
              <li><a href="#pilares" className="hover:text-[#C5A059] transition-colors">Os 5 Pilares</a></li>
              <li><a href="#comunidade" className="hover:text-[#C5A059] transition-colors">Comunidade</a></li>
              <li><a href="#depoimentos" className="hover:text-[#C5A059] transition-colors">Resultados e Prints</a></li>
              <li><a href="#aplicacao" className="hover:text-[#C5A059] transition-colors">Formulário de Aplicação</a></li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-white font-bold uppercase tracking-[0.2em] text-[11px]">Atendimento Comercial</p>
            <p className="text-stone-400 text-xs">
              Dúvidas sobre o processo seletivo ou atendimento direto:
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#C5A059] text-white font-black text-xs uppercase tracking-wider hover:bg-[#A38244] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-stone-800/80 pt-6 text-center text-[11px] text-stone-500 space-y-2">
          <p>
            Este site não faz parte do site do Facebook ou da Meta Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da META, Inc.
          </p>
          <p>
            Mentoria Meta Ousada © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
