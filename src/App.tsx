import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Agitation } from './components/Agitation';
import { Solution } from './components/Solution';
import { Pillars } from './components/Pillars';
import { CommunityProof } from './components/CommunityProof';
import { WhatsAppProof } from './components/WhatsAppProof';
import { ApplicationForm } from './components/ApplicationForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ImageModal } from './components/ImageModal';
import { DEFAULT_CONFIG } from './data/landingData';
import { AppConfig, SavedLead } from './types';

export default function App() {
  const [config] = useState<AppConfig>(DEFAULT_CONFIG);
  const [, setLocalLeads] = useState<SavedLead[]>([]);

  // Lightbox Modal state
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const handleOpenImageModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const handleCloseImageModal = () => {
    setModalImage(null);
  };

  const handleLeadSubmitted = (newLead: SavedLead) => {
    setLocalLeads(prev => [newLead, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] font-sans antialiased selection:bg-[#C5A059] selection:text-white">
      
      {/* Fixed Navigation Header */}
      <Header
        whatsAppPhone={config.whatsAppPhone}
        whatsAppMessage={config.whatsAppMessage}
      />

      {/* Main Landing Content */}
      <main>
        {/* 1. Hero Section (First Fold) */}
        <Hero
          whatsAppPhone={config.whatsAppPhone}
          whatsAppMessage={config.whatsAppMessage}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 2. Agitation Section (The Problem) */}
        <Agitation
          whatsAppPhone={config.whatsAppPhone}
          whatsAppMessage={config.whatsAppMessage}
        />

        {/* 3. The Solution (About Mentorship & Mentor Fernanda) */}
        <Solution
          whatsAppPhone={config.whatsAppPhone}
          whatsAppMessage={config.whatsAppMessage}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 4. The Journey (5 Pillars / Methodology Modules) */}
        <Pillars
          whatsAppPhone={config.whatsAppPhone}
          whatsAppMessage={config.whatsAppMessage}
        />

        {/* 5. Social Proof 1 (Community & Event Photos) */}
        <CommunityProof
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 6. Social Proof 2 (Real Results & 10 WhatsApp Screenshots) */}
        <WhatsAppProof
          whatsAppPhone={config.whatsAppPhone}
          whatsAppMessage={config.whatsAppMessage}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 7. Lead Capture / Application Form (Alternative CTA) */}
        <ApplicationForm
          webhookUrl={config.webhookUrl}
          whatsAppPhone={config.whatsAppPhone}
          whatsAppMessage={config.whatsAppMessage}
          onLeadSubmitted={handleLeadSubmitted}
        />

        {/* 8. FAQ Section */}
        <FAQ
          whatsAppPhone={config.whatsAppPhone}
          whatsAppMessage={config.whatsAppMessage}
        />
      </main>

      {/* Footer */}
      <Footer
        whatsAppPhone={config.whatsAppPhone}
        whatsAppMessage={config.whatsAppMessage}
      />

      {/* Global Fixed Elements */}
      <FloatingWhatsApp
        whatsAppPhone={config.whatsAppPhone}
        whatsAppMessage={config.whatsAppMessage}
      />

      {/* Lightbox Image Modal */}
      <ImageModal
        isOpen={!!modalImage}
        onClose={handleCloseImageModal}
        imageSrc={modalImage?.src || null}
        imageAlt={modalImage?.alt || null}
      />

    </div>
  );
}
