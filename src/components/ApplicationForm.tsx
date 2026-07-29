import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageCircle, Mail, RefreshCw, ArrowRight } from 'lucide-react';
import { LeadFormData, SavedLead } from '../types';

interface ApplicationFormProps {
  webhookUrl: string;
  whatsAppPhone: string;
  whatsAppMessage: string;
  onLeadSubmitted?: (lead: SavedLead) => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  webhookUrl,
  whatsAppPhone,
  onLeadSubmitted
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    segment: '',
    mainChallenge: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.substring(0, 11);
    
    // Format DDD + Phone
    if (val.length > 2) {
      if (val.length <= 6) {
        val = `(${val.substring(0, 2)}) ${val.substring(2)}`;
      } else if (val.length <= 10) {
        val = `(${val.substring(0, 2)}) ${val.substring(2, 6)}-${val.substring(6)}`;
      } else {
        val = `(${val.substring(0, 2)}) ${val.substring(2, 7)}-${val.substring(7)}`;
      }
    }
    setFormData({ ...formData, phone: val });
  };

  // Helper to construct WhatsApp message text with lead data
  const buildWhatsAppText = () => {
    let msg = `Olá, Fernanda! Gostaria de me candidatar para a Mentoria Meta Ousada.\n\n📋 *Ficha de Aplicação:*\n`;
    msg += `• *Nome:* ${formData.fullName}\n`;
    msg += `• *E-mail:* ${formData.email}\n`;
    msg += `• *WhatsApp:* ${formData.phone}\n`;
    if (formData.segment.trim()) {
      msg += `• *Segmento:* ${formData.segment}\n`;
    }
    if (formData.mainChallenge.trim()) {
      msg += `• *Maior Desafio:* ${formData.mainChallenge}\n`;
    }
    msg += `\nAguardo o retorno!`;
    return msg;
  };

  const getWhatsAppLink = () => {
    const cleanPhone = whatsAppPhone.replace(/\D/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(buildWhatsAppText())}`;
  };

  const getEmailLink = () => {
    const subject = encodeURIComponent(`Aplicação Mentoria Meta Ousada - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Olá, Mentora Fernanda e equipe!\n\n` +
      `Gostaria de enviar minha aplicação para a Mentoria Meta Ousada:\n\n` +
      `Nome: ${formData.fullName}\n` +
      `E-mail: ${formData.email}\n` +
      `WhatsApp: ${formData.phone}\n` +
      `Segmento: ${formData.segment || 'Não informado'}\n` +
      `Maior Desafio: ${formData.mainChallenge || 'Não informado'}\n\n` +
      `Aguardo seu contato!`
    );
    return `mailto:contato@metaousada.com.br?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage("Por favor, preencha Nome Completo, E-mail e WhatsApp.");
      setLoading(false);
      return;
    }

    try {
      // Submit lead to backend API which sends email to ciello.consultoria11@gmail.com
      const res = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          segment: formData.segment,
          mainChallenge: formData.mainChallenge,
          webhookUrl: webhookUrl
        })
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.success === false) {
        throw new Error(data.message || data.error || "Erro de conexão ao enviar e-mail. Tente novamente.");
      }

      if (data.emailStatus && data.emailStatus.success === false) {
        throw new Error(`Ocorreu uma falha no servidor de e-mail (${data.emailStatus.error || "SMTP"}). Por favor, tente novamente ou nos chame no WhatsApp.`);
      }

      const newLead: SavedLead = {
        id: Date.now().toString(),
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        segment: formData.segment,
        mainChallenge: formData.mainChallenge,
        createdAt: new Date().toISOString()
      };

      if (onLeadSubmitted) {
        onLeadSubmitted(newLead);
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage(err?.message || "Não foi possível enviar o e-mail no momento. Tente novamente ou entre em contato direto pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ fullName: '', email: '', phone: '', segment: '', mainChallenge: '' });
  };

  return (
    <section id="aplicacao" className="py-20 md:py-28 bg-[#1A1A1A] text-white relative border-t border-[#C5A059]/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>Processo Seletivo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Aplicação para a Mentoria
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Preencha os dados abaixo. Sua aplicação será enviada diretamente para o e-mail oficial da Mentoria Meta Ousada.
          </p>
        </div>

        {/* Form Container */}
        <div className="mt-10 p-8 sm:p-12 rounded-3xl bg-[#262626] border border-[#C5A059]/30 shadow-2xl relative">
          
          {submitted ? (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-[#C5A059] p-[1px] mx-auto shadow-lg">
                <div className="w-full h-full bg-[#1A1A1A] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black uppercase text-white">
                  Aplicação Enviada por E-mail com Sucesso!
                </h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Sua ficha de aplicação foi recebida com sucesso pela equipe da mentoria. Entraremos em contato em breve através do seu e-mail ou WhatsApp!
                </p>
              </div>

              {/* Formatted Lead Summary Preview */}
              <div className="text-left bg-[#1A1A1A] p-5 rounded-2xl border border-[#C5A059]/30 max-w-lg mx-auto space-y-2 text-xs text-gray-300">
                <p className="font-bold text-[#C5A059] uppercase tracking-wider text-[11px] mb-1">
                  Resumo da sua aplicação enviada:
                </p>
                <p><strong className="text-white">Nome:</strong> {formData.fullName}</p>
                <p><strong className="text-white">E-mail:</strong> {formData.email}</p>
                <p><strong className="text-white">WhatsApp:</strong> {formData.phone}</p>
                {formData.segment && <p><strong className="text-white">Segmento:</strong> {formData.segment}</p>}
                {formData.mainChallenge && <p><strong className="text-white">Maior Desafio:</strong> {formData.mainChallenge}</p>}
              </div>

              {/* Action Options */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#C5A059] text-white font-black text-xs uppercase tracking-widest hover:bg-[#A38244] transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Falar também no WhatsApp (Opcional)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetForm}
                  className="inline-flex items-center space-x-2 text-stone-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Preencher Outra Aplicação</span>
                </button>
              </div>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-sm flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name Field */}
              <div className="space-y-2 text-left">
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Nome Completo <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Ex: Maria Silva"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A1A] border border-stone-700 text-stone-100 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all text-sm"
                />
              </div>

              {/* Email & WhatsApp Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                    E-mail Principal <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A1A] border border-stone-700 text-stone-100 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all text-sm"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                    WhatsApp com DDD <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A1A] border border-stone-700 text-stone-100 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all text-sm"
                  />
                </div>
              </div>

              {/* Optional Segment Field */}
              <div className="space-y-2 text-left">
                <label htmlFor="segment" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Qual o seu segmento de atuação?
                </label>
                <input
                  type="text"
                  id="segment"
                  name="segment"
                  placeholder="Ex: Consultoria, Advocacia, Estética, Mentoria, Arquitetura, E-commerce..."
                  value={formData.segment}
                  onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A1A] border border-stone-700 text-stone-100 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all text-sm"
                />
              </div>

              {/* Optional Main Challenge Field */}
              <div className="space-y-2 text-left">
                <label htmlFor="mainChallenge" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Qual o seu maior desafio no comercial atualmente?
                </label>
                <textarea
                  id="mainChallenge"
                  name="mainChallenge"
                  rows={3}
                  placeholder="Conte brevemente o que mais tem travado o seu crescimento nas vendas..."
                  value={formData.mainChallenge}
                  onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A1A] border border-stone-700 text-stone-100 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all text-sm resize-none"
                />
              </div>

              {/* Action Buttons Options */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="btn-submit-application"
                  disabled={loading}
                  className="w-full py-4 px-8 rounded-full bg-[#C5A059] text-white font-black text-xs uppercase tracking-widest hover:bg-[#A38244] shadow-md transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Enviando por E-mail...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 text-white" />
                      <span>Enviar Aplicação por E-mail</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
