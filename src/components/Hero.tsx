import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { MENTOR_IMAGES, HERO_VIDEO_CONFIG } from '../data/landingData';
import { trackWhatsAppClick, trackCTAClick } from '../lib/metaPixel';

interface HeroProps {
  whatsAppPhone: string;
  whatsAppMessage: string;
  onOpenImageModal?: (src: string, alt: string) => void;
}

const getVideoData = (url: string) => {
  if (!url) return { isYouTube: false, isDrive: false, url: '' };

  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    const id = ytMatch[1];
    return {
      isYouTube: true,
      isDrive: false,
      url: `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`
    };
  }

  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    const id = driveMatch[1];
    return {
      isYouTube: false,
      isDrive: true,
      url: `https://drive.google.com/file/d/${id}/preview`
    };
  }

  return { isYouTube: false, isDrive: false, url };
};

export const Hero: React.FC<HeroProps> = ({
  whatsAppPhone,
  whatsAppMessage,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoData = getVideoData(HERO_VIDEO_CONFIG.videoUrl);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleSound = () => {
    if (videoData.isYouTube) {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        if (isMuted) {
          iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'unMute', args: [] }), '*');
          setIsMuted(false);
        } else {
          iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'mute', args: [] }), '*');
          setIsMuted(true);
        }
      }
    } else if (videoRef.current) {
      if (isMuted) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
        setIsMuted(false);
      } else {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

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
              <span>Consultoria Personalizada de 4 Meses</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.12] tracking-tighter">
              Multiplique os Resultados da <span className="text-[#C5A059] block mt-0.5 sm:mt-1">Sua Equipe Comercial.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Estruture seus processos, desenvolva a liderança e treine seu time de vendas com a <strong className="text-white font-bold">Consultoria Método 5D Comercial</strong>.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 text-stone-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>Gestão Estratégica & Liderança</span>
              </div>
              <div className="flex items-center space-x-2.5 text-stone-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>Estruturação de Processos e CRM</span>
              </div>
              <div className="flex items-center space-x-2.5 text-stone-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>Treinamento de Vendas & Negociação</span>
              </div>
              <div className="flex items-center space-x-2.5 text-stone-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>Acompanhamento Prático de 4 Meses</span>
              </div>
            </div>

            {/* Primary CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-primary-cta"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Hero Section')}
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#C5A059] text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#A38244] shadow-xl shadow-[#C5A059]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>Quero Falar com a Equipe</span>
                <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#aplicacao"
                onClick={() => trackCTAClick('Hero - Preencher Aplicacao')}
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
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[390px] mx-auto lg:mr-0">
              
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-1.5 bg-[#C5A059]/40 rounded-2xl opacity-60 blur-sm" />

              {/* Main Media Container: Hosted Video in Autoplay with sound toggle */}
              <div className="relative rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#C5A059]/30 shadow-2xl group aspect-[9/16] w-full max-h-[640px] flex items-center justify-center">
                {videoData.isYouTube ? (
                  <div
                    className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center cursor-pointer"
                    onClick={toggleSound}
                  >
                    {/* Centered iframe scaled to eliminate 16:9 black pillarbox bars */}
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none">
                      <iframe
                        ref={iframeRef}
                        src={videoData.url}
                        title="Fernanda Ciello - Consultoria Método 5D Comercial"
                        className="w-[330%] h-[110%] max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>

                    {/* Floating Audio Control Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSound();
                      }}
                      className="absolute top-4 right-4 z-20 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/85 hover:bg-black backdrop-blur-md border border-[#C5A059]/70 text-white text-xs font-semibold transition-all shadow-xl cursor-pointer transform hover:scale-105 active:scale-95"
                      aria-label={isMuted ? "Ativar som do vídeo" : "Mutar vídeo"}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
                          <span className="text-[11px] font-bold text-white tracking-wide">Ouvir com som 🔊</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span className="text-[11px] font-bold text-white tracking-wide">Som ativado</span>
                        </>
                      )}
                    </button>
                  </div>
                ) : videoData.isDrive ? (
                  <iframe
                    src={videoData.url}
                    title="Fernanda Ciello - Vídeo"
                    className="w-full h-full min-h-[460px] sm:min-h-[520px] max-h-[580px] object-cover border-0"
                    allow="autoplay"
                  />
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      id="hero-mentor-video"
                      src={videoData.url}
                      poster={MENTOR_IMAGES.hero}
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full min-h-[460px] sm:min-h-[520px] max-h-[580px] object-cover object-center cursor-pointer"
                      onClick={toggleSound}
                    />

                    {/* Floating Audio Control Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSound();
                      }}
                      className="absolute top-4 right-4 z-20 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black/95 backdrop-blur-md border border-[#C5A059]/70 text-white text-xs font-semibold transition-all shadow-xl cursor-pointer transform hover:scale-105 active:scale-95"
                      aria-label={isMuted ? "Ativar som do vídeo" : "Mutar vídeo"}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
                          <span className="text-[11px] font-bold text-white tracking-wide">Ouvir com som 🔊</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span className="text-[11px] font-bold text-white tracking-wide">Som ativado</span>
                        </>
                      )}
                    </button>
                  </>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A]/90 backdrop-blur-md p-4 rounded-xl border border-[#C5A059]/30 shadow-lg pointer-events-auto">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">Especialista em Vendas B2B</p>
                  <p className="text-xl font-black text-white uppercase tracking-tight">Fernanda Ciello</p>
                  <p className="text-xs text-gray-300 mt-0.5">Economista e especialista em venda comportamental e gestão comercial.</p>
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
