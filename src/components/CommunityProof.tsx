import React from 'react';
import { Users, ZoomIn, Sparkles } from 'lucide-react';
import { COMMUNITY_PHOTOS } from '../data/landingData';

interface CommunityProofProps {
  onOpenImageModal: (src: string, alt: string) => void;
}

export const CommunityProof: React.FC<CommunityProofProps> = ({ onOpenImageModal }) => {
  return (
    <section id="comunidade" className="py-20 md:py-28 bg-[#1A1A1A] text-white relative border-t border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase">
            <Users className="w-4 h-4 text-[#C5A059]" />
            <span>Comunidade Exclusiva</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Você é a média do seu ecossistema
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Na <strong className="text-white font-bold">Mentoria Meta Ousada</strong>, você ingressa em um ambiente blindado, rodeado de profissionais que compartilham da mesma ambição de crescer e dobrar o faturamento.
          </p>
        </div>

        {/* 4 Images Community Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenImageModal(photo.src, photo.alt)}
              className="group relative rounded-2xl overflow-hidden bg-[#262626] border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 shadow-xl cursor-pointer"
            >
              <div className="aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Zoom Icon Hover Hint */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#C5A059]" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#C5A059]">
                  {photo.title}
                </p>
                <p className="text-xs text-stone-300 line-clamp-2 leading-tight">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Community Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#262626] border-l-4 border-[#C5A059] border-y border-r border-[#C5A059]/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-base font-black uppercase text-white flex items-center space-x-2 tracking-tight">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
              <span>Próxima Turma Exclusiva</span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Vagas limitadas para garantir o acompanhamento individualizado e a proximidade das trocas.
            </p>
          </div>
          <a
            href="#aplicacao"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#C5A059] text-white font-black text-xs uppercase tracking-widest hover:bg-[#A38244] shadow-md transition-all shrink-0"
          >
            <span>Garantir Minha Vaga</span>
          </a>
        </div>

      </div>
    </section>
  );
};
