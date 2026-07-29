import React, { useState, useRef } from 'react';
import { TESTIMONIAL_SCREENSHOTS } from '../data/landingData';
import { MessageCircle, ZoomIn, TrendingUp, Award, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface WhatsAppProofProps {
  whatsAppPhone: string;
  whatsAppMessage: string;
  onOpenImageModal: (src: string, alt: string) => void;
}

export const WhatsAppProof: React.FC<WhatsAppProofProps> = ({
  whatsAppPhone,
  whatsAppMessage,
  onOpenImageModal
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'revenue' | 'confidence'>('all');
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${whatsAppPhone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsAppMessage)}`;

  const filteredScreenshots = TESTIMONIAL_SCREENSHOTS.filter((item) => {
    if (filterMode === 'revenue') {
      return (
        item.category === 'revenue' ||
        item.resultBadge.toLowerCase().includes('faturamento') ||
        item.resultBadge.toLowerCase().includes('escala') ||
        item.caption.toLowerCase().includes('faturamento') ||
        item.caption.toLowerCase().includes('contratos') ||
        item.caption.toLowerCase().includes('vendas')
      );
    }
    if (filterMode === 'confidence') {
      return (
        item.category === 'confidence' ||
        item.resultBadge.toLowerCase().includes('destravar') ||
        item.resultBadge.toLowerCase().includes('transformação') ||
        item.resultBadge.toLowerCase().includes('suporte') ||
        item.caption.toLowerCase().includes('segurança') ||
        item.caption.toLowerCase().includes('mentalidade') ||
        item.caption.toLowerCase().includes('desafio')
      );
    }
    return true;
  });

  // Duplicate items for seamless continuous reel loop
  const carouselItems = [...filteredScreenshots, ...filteredScreenshots, ...filteredScreenshots];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#F5F2ED] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAE5DD] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase">
            <Award className="w-4 h-4 text-[#C5A059]" />
            <span>Prova Social Inquestionável</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#1A1A1A] tracking-tight leading-tight">
            Resultados Reais dos Mentorados
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            De mentorados que dobraram seu faturamento em 2 meses até profissionais que superaram a insegurança ao vender. Role ou clique nas conversas reais abaixo.
          </p>
        </div>

        {/* Filter Quick Tabs & Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-black/5 pb-6">
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                filterMode === 'all'
                  ? 'bg-[#1A1A1A] text-white shadow-md border border-[#C5A059]'
                  : 'bg-white text-stone-600 hover:bg-[#EAE5DD] border border-black/5'
              }`}
            >
              Todas as Conversas (10)
            </button>
            <button
              onClick={() => setFilterMode('revenue')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                filterMode === 'revenue'
                  ? 'bg-[#1A1A1A] text-white shadow-md border border-[#C5A059]'
                  : 'bg-white text-stone-600 hover:bg-[#EAE5DD] border border-black/5'
              }`}
            >
              Faturamento Dobrado
            </button>
            <button
              onClick={() => setFilterMode('confidence')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                filterMode === 'confidence'
                  ? 'bg-[#1A1A1A] text-white shadow-md border border-[#C5A059]'
                  : 'bg-white text-stone-600 hover:bg-[#EAE5DD] border border-black/5'
              }`}
            >
              Segurança Comercial
            </button>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center space-x-2 ml-auto">
            <button
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Continuar rolagem" : "Pausar rolagem"}
              className="p-2 rounded-full bg-white hover:bg-[#EAE5DD] text-stone-700 border border-black/10 transition-colors"
            >
              {isPaused ? <Play className="w-4 h-4 text-[#C5A059]" /> : <Pause className="w-4 h-4 text-stone-600" />}
            </button>
            <button
              onClick={handleScrollLeft}
              title="Anterior"
              className="p-2 rounded-full bg-white hover:bg-[#EAE5DD] text-stone-700 border border-black/10 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleScrollRight}
              title="Próximo"
              className="p-2 rounded-full bg-white hover:bg-[#EAE5DD] text-stone-700 border border-black/10 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Single-Row Continuous Auto-Scrolling Marquee Carousel */}
      <div className="mt-8 relative w-full overflow-hidden">
        
        {/* Subtle Fade Edge Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F5F2ED] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F5F2ED] to-transparent z-10" />

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto no-scrollbar py-4"
        >
          <div
            className={`flex items-stretch space-x-5 px-4 w-max ${
              isPaused ? '' : 'animate-marquee'
            }`}
            style={{
              animationDuration: `${Math.max(20, carouselItems.length * 4)}s`
            }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => onOpenImageModal(item.src, item.alt)}
                className="w-72 sm:w-80 shrink-0 group relative rounded-2xl overflow-hidden bg-white border border-[#C5A059]/20 hover:border-[#C5A059] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Badge Header */}
                <div className="p-3 bg-[#EAE5DD] border-b border-[#C5A059]/20 flex items-center justify-between shrink-0">
                  <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider flex items-center space-x-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.resultBadge}</span>
                  </span>
                  <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Expandir</span>
                </div>

                {/* Screenshot Image */}
                <div className="relative overflow-hidden bg-stone-100 p-2.5 flex-1 flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto max-h-[360px] object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <div className="px-3.5 py-2 rounded-full bg-white text-[#1A1A1A] text-xs font-black uppercase tracking-wider flex items-center space-x-1.5 shadow-xl">
                      <ZoomIn className="w-4 h-4 text-[#C5A059]" />
                      <span>Clique para ver</span>
                    </div>
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="p-3.5 bg-white text-left border-t border-stone-100 shrink-0">
                  <p className="text-xs text-gray-700 leading-snug font-medium line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 text-center">
        <p className="text-[11px] text-stone-500 uppercase tracking-widest">
          💡 Dica: Passe o ponteiro sobre qualquer imagem para pausar a rolagem automática.
        </p>

        {/* Action Banner */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-stone-800 font-black text-base sm:text-lg uppercase tracking-wide">
            Sua história de sucesso pode ser a próxima nesta tela.
          </p>
          <div>
            <a
              id="whatsapp-proof-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#C5A059] text-white font-black text-xs uppercase tracking-widest hover:bg-[#A38244] shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Quero Meu Nome Nessa Lista</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};
