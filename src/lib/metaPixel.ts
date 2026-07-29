// Meta Pixel Event Tracker Helper

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const pixelTrack = (event: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (params) {
        window.fbq('track', event, params);
      } else {
        window.fbq('track', event);
      }
      console.log(`[Meta Pixel] Event tracked: ${event}`, params || '');
    } catch (err) {
      console.warn(`[Meta Pixel] Failed to track ${event}:`, err);
    }
  }
};

export const pixelTrackCustom = (customEvent: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (params) {
        window.fbq('trackCustom', customEvent, params);
      } else {
        window.fbq('trackCustom', customEvent);
      }
      console.log(`[Meta Pixel] Custom Event tracked: ${customEvent}`, params || '');
    } catch (err) {
      console.warn(`[Meta Pixel] Failed to track custom event ${customEvent}:`, err);
    }
  }
};

// Standard event wrappers for lead conversion & clicks
export const trackLeadSubmission = (leadData?: { email?: string; name?: string; phone?: string; segment?: string }) => {
  pixelTrack('Lead', {
    content_name: 'Mentoria Meta Ousada Application',
    content_category: 'Form Submission',
    value: 0.00,
    currency: 'BRL',
    ...leadData
  });
  pixelTrackCustom('ApplicationSubmitted', leadData);
};

export const trackWhatsAppClick = (sourceLocation: string) => {
  pixelTrack('Contact', {
    content_name: 'WhatsApp Click',
    content_category: 'CTA Click',
    source: sourceLocation
  });
  pixelTrackCustom('WhatsAppClick', { source: sourceLocation });
};

export const trackCTAClick = (buttonName: string) => {
  pixelTrackCustom('CTAClick', { button: buttonName });
};
