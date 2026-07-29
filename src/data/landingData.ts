import { PillarModule, CommunityPhoto, TestimonialScreenshot, FAQItem } from '../types';

export const MENTOR_IMAGES = {
  hero: "https://i.ibb.co/N2Y1gvFY/Whats-App-Image-2026-07-29-at-15-36-46.jpg",
  solution: "https://i.ibb.co/CKKmHhjF/Whats-App-Image-2026-07-29-at-15-36-46-2.jpg"
};

export const DEFAULT_CONFIG = {
  whatsAppPhone: "5549988941588",
  whatsAppMessage: "Olá, vim através do site! Gostaria de saber mais sobre a Mentoria Meta Ousada, poderia me dar mais informações?",
  webhookUrl: "https://n8n.exemplo.com/webhook/meta-ousada-leads"
};

export const PILLARS: PillarModule[] = [
  {
    id: 1,
    number: "Módulo 1",
    title: "Base Emocional",
    subtitle: "Mentalidade Inabalável & Desbloqueio de Crenças",
    description: "Identificação profunda das crenças limitantes que sabotam suas metas financeiras. Eliminação do medo do julgamento, da impostora interna e construção de autoconfiança diária para agir com firmeza e autoridade.",
    highlights: [
      "Mapeamento e substituição de crenças sobre dinheiro e sucesso",
      "Rotina diária de ativação da autoconfiança e postura de liderança",
      "Fortalecimento emocional contra rejeições e objeções no processo comercial"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: 2,
    number: "Módulo 2",
    title: "Autoconfiança Aplicada",
    subtitle: "Posicionamento de Autoridade & Vendas Sem Pressão",
    description: "Como se posicionar no mercado como um profissional desejado, atraindo os clientes certos. Aprenda a conduzir conversas de vendas de forma elegante, fluida e totalmente natural, sem nunca parecer insistente ou chato.",
    highlights: [
      "Elevação da percepção de valor dos seus serviços",
      "Comunicação assertiva e postura de consultor especialista",
      "Método de venda consultiva onde o cliente pede para comprar"
    ],
    iconName: "Sparkles"
  },
  {
    id: 3,
    number: "Módulo 3",
    title: "Conversa e Persuasão",
    subtitle: "Mapeamento Estratégico com Metodologias Globais",
    description: "Domine a arte de fazer as perguntas certas. Utilizando estruturas consagradas como SPIN Selling, BANT e NEPQ, você entenderá a dor real do prospect e fará com que ele perceba sozinho a urgência da sua solução.",
    highlights: [
      "Aplicação prática de SPIN Selling, BANT e NEPQ adaptadas ao seu nicho",
      "Perguntas diagnósticas que geram desejo imediato no cliente",
      "Condução estratégica da reunião do início ao diagnóstico de dor"
    ],
    iconName: "MessageSquareText"
  },
  {
    id: 4,
    number: "Módulo 4",
    title: "Fechamento Humanizado",
    subtitle: "Roteiros Adaptáveis & Sequências de Follow-up",
    description: "Aprenda a contornar objeções de forma leve, empática e altamente eficaz. Tenha roteiros customizados para o seu modelo de negócio e implemente sequências de acompanhamento que convertem sem desgastar o relacionamento.",
    highlights: [
      "Matriz de contorno de objeções ('preciso pensar', 'vou falar com o sócio')",
      "Sequência elegante de acompanhamento (Follow-up de Alto Valor)",
      "Técnicas de ancoragem e fechamento humanizado"
    ],
    iconName: "Handshake"
  },
  {
    id: 5,
    number: "Módulo 5",
    title: "Metas Ousadas",
    subtitle: "Planejamento Estratégico & Escala do Faturamento",
    description: "Crie um plano de ação claro e previsível para dobrar os seus resultados. Definição de metas audaciosas, métricas comerciais diárias e estruturação da sua rotina para crescer de forma consistente e sustentável.",
    highlights: [
      "Planejamento comercial estratégico para os próximos 12 meses",
      "Metas de faturamento desdobradas em ações diárias praticáveis",
      "Visão de escala e construção de receita previsível"
    ],
    iconName: "TrendingUp"
  }
];

export const COMMUNITY_PHOTOS: CommunityPhoto[] = [
  {
    id: "comm_1",
    src: "https://i.ibb.co/chf7Gm9d/Ontem-tivemos-um-dia-extremamente-ESPECIAL-Nossa-mentoria-A-VIRADA-foi-muito-ale-m-do-imaginado.jpg",
    alt: "Evento Presencial Especial - Mentoria A Virada",
    title: "Encontro Presencial Exclusivo",
    description: "Um dia transformador de alinhamento, networking de altíssimo nível e estratégias de aceleração."
  },
  {
    id: "comm_2",
    src: "https://i.ibb.co/GvXNFv4Z/Turma-1.jpg",
    alt: "Mentoria Turma 1",
    title: "Conexões Estratégicas - Turma 1",
    description: "A força de um ecossistema de profissionais ambiciosos com o mesmo propósito de crescimento."
  },
  {
    id: "comm_3",
    src: "https://i.ibb.co/wZJwzDGr/Turma-2.jpg",
    alt: "Mentoria Turma 2",
    title: "Comunidade Ousada - Turma 2",
    description: "Hot seats ao vivo, trocas de experiências e alianças de negócios duradouras."
  },
  {
    id: "comm_4",
    src: "https://i.ibb.co/XxZ5Kwtn/Turma-3.jpg",
    alt: "Mentoria Turma 3",
    title: "Movimento Meta Ousada - Turma 3",
    description: "Celebrando conquistas, fechamentos de contratos e quebras de recordes de faturamento."
  }
];

export const TESTIMONIAL_SCREENSHOTS: TestimonialScreenshot[] = [
  {
    id: 1,
    src: "https://i.ibb.co/LzR8bqXk/Whats-App-Image-2026-07-29-at-15-39-50-1.jpg",
    alt: "Resultado de cliente 1",
    caption: "Aumento expressivo no fechamento de propostas após aplicar o método de conversa e persuasão.",
    resultBadge: "Recorde de Vendas"
  },
  {
    id: 2,
    src: "https://i.ibb.co/BHjy9mfJ/Whats-App-Image-2026-07-29-at-15-39-50-2.jpg",
    alt: "Resultado de cliente 2",
    caption: "Cliente relata segurança total durante a reunião comercial e fechamento no primeiro contato.",
    resultBadge: "Fechamento Imediato"
  },
  {
    id: 3,
    src: "https://i.ibb.co/tMQ6sQRj/Whats-App-Image-2026-07-29-at-15-39-50-3.jpg",
    alt: "Resultado de cliente 3",
    caption: "Transição da estagnação para a quebra de metas de faturamento em menos de 60 dias de mentoria.",
    resultBadge: "Meta Superada"
  },
  {
    id: 4,
    src: "https://i.ibb.co/XkdhcKBC/Whats-App-Image-2026-07-29-at-15-39-50.jpg",
    alt: "Resultado de cliente 4",
    caption: "Superação do medo de cobrar mais caro e percepção imediata do valor por parte do cliente.",
    resultBadge: "Valorização de Serviço"
  },
  {
    id: 5,
    src: "https://i.ibb.co/TqYJKstv/Whats-App-Image-2026-07-29-at-15-39-51-1.jpg",
    alt: "Resultado de cliente 5",
    caption: "Conversão de clientes antigos parados com a sequência de acompanhamento humanizado.",
    resultBadge: "Follow-up Eficiente"
  },
  {
    id: 6,
    src: "https://i.ibb.co/qYTmhxyk/Whats-App-Image-2026-07-29-at-15-39-51-2.jpg",
    alt: "Resultado de cliente 6",
    caption: "Mentalidade destravada para fazer propostas ousadas e conduzir negociações de alto impacto.",
    resultBadge: "Destravar Comercial"
  },
  {
    id: 7,
    src: "https://i.ibb.co/7t4ghN8g/Whats-App-Image-2026-07-29-at-15-39-51-3.jpg",
    alt: "Resultado de cliente 7",
    caption: "Relato emocionado de mudança na vida profissional e clareza total dos próximos passos.",
    resultBadge: "Transformação Pessoal"
  },
  {
    id: 8,
    src: "https://i.ibb.co/8QmMYDm/Whats-App-Image-2026-07-29-at-15-39-51-4.jpg",
    alt: "Resultado de cliente 8",
    caption: "Dobro de contratos assinados após ajustar o roteiro de perguntas estratégicas NEPQ/SPIN.",
    resultBadge: "Faturamento Dobrado"
  },
  {
    id: 9,
    src: "https://i.ibb.co/Jjs6Fhdv/Whats-App-Image-2026-07-29-at-15-39-51.jpg",
    alt: "Resultado de cliente 9",
    caption: "Feedback direto sobre a importância do suporte próximo via WhatsApp no dia a dia das vendas.",
    resultBadge: "Suporte Próximo"
  },
  {
    id: 10,
    src: "https://i.ibb.co/VcrvshJd/Whats-App-Image-2026-07-29-at-15-39-52.jpg",
    alt: "Resultado de cliente 10",
    caption: "Consistência de faturamento e previsibilidade conquistadas através do planejamento de metas ousadas.",
    resultBadge: "Escala Sustentável"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq_1",
    question: "Qual é a duração da Mentoria Meta Ousada?",
    answer: "A Mentoria Meta Ousada possui 4 meses de acompanhamento intensivo e direcionado, estruturado para você implementar as estratégias e colher resultados expressivos durante e após o programa."
  },
  {
    id: "faq_2",
    question: "Como funciona o suporte no dia a dia?",
    answer: "Além do grupo com profissionais seletos, você terá suporte e orientação individualizada via WhatsApp diretamente com a equipe da mentoria para tirar dúvidas pontuais e ajustar propostas em tempo real."
  },
  {
    id: "faq_3",
    question: "Como são realizados os encontros ao vivo?",
    answer: "Os encontros são quinzenais, online, com duração média de 1h30. Neles, realizamos análises estratégicas, sessões de Hot Seats (diagnóstico ao vivo do seu negócio) e rodadas de negócios para maximizar seu aprendizado e conexões."
  },
  {
    id: "faq_4",
    question: "Para quem é indicada esta mentoria?",
    answer: "Indicada para profissionais, consultores, prestadores de serviço e empreendedores que já possuem um produto ou serviço de valor, mas sentem que estão vendendo abaixo do seu potencial, com insegurança no fechamento ou sem previsibilidade de faturamento."
  },
  {
    id: "faq_5",
    question: "O que é o movimento presencial exclusivo?",
    answer: "É um encontro presencial especial focado em alta energia, alinhamento de visão, networking estratégico e celebração dos resultados das turmas."
  },
  {
    id: "faq_6",
    question: "Como posso saber se o meu perfil é ideal para a mentoria?",
    answer: "Você pode clicar no botão de WhatsApp para falar diretamente com a nossa equipe de seleção ou preencher o formulário de aplicação na página para que façamos uma análise prévia do seu negócio."
  }
];

export const AGITATION_PAINS = [
  {
    title: "Sente desconforto ou insegurança ao apresentar o valor do seu trabalho?",
    description: "Muitas vezes você hesita na hora de passar o orçamento ou aceita descontos por medo do cliente recusar."
  },
  {
    title: "Receio constante de parecer chato, insistente ou 'forçar a barra'?",
    description: "Você evita fazer o acompanhamento necessário porque não quer incomodar, perdendo vendas quentes."
  },
  {
    title: "Trabalha exaustivamente, mas não vê o faturamento crescer de forma previsível?",
    description: "Você sente que depende da sorte ou da indicação espontânea, sem ter um processo comercial estruturado."
  },
  {
    title: "Crenças limitantes e vozes internas de que você não está pronto?",
    description: "Sentimento de estagnação onde você sabe do seu potencial técnico, mas não consegue transformar isso em retorno financeiro."
  }
];
