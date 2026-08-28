import { PillarModule, CommunityPhoto, TestimonialScreenshot, FAQItem } from '../types';

export const MENTOR_IMAGES = {
  hero: "https://i.ibb.co/N2Y1gvFY/Whats-App-Image-2026-07-29-at-15-36-46.jpg",
  solution: "https://i.ibb.co/CKKmHhjF/Whats-App-Image-2026-07-29-at-15-36-46-2.jpg"
};

export const DEFAULT_CONFIG = {
  whatsAppPhone: "5549988941588",
  whatsAppMessage: "Olá, vim através do site! Gostaria de saber mais sobre a Consultoria Método 5D Comercial para minha empresa.",
  webhookUrl: "https://n8n.exemplo.com/webhook/meta-ousada-leads"
};

export const PILLARS: PillarModule[] = [
  {
    id: 1,
    number: "Módulo 1",
    title: "Gestão Estratégica de Acompanhamento",
    subtitle: "Liderança e Indicadores",
    description: "Estruturação de um modelo de gestão comercial contendo rotina de reuniões, alinhamentos, feedbacks e desenvolvimento da equipe, servindo como suporte para a liderança atual e futuros gestores.",
    highlights: [
      "Rotina de alinhamentos e feedbacks da equipe",
      "Acompanhamento de performance e indicadores",
      "Perfil comportamental do gestor para fortalecer liderança"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: 2,
    number: "Módulo 2",
    title: "Gestão Estratégica de Processos",
    subtitle: "Funil, CRM e Rotina",
    description: "Estruturação de um processo comercial mais eficiente, visando aumentar a conversão, melhorar a experiência do cliente e gerar maior previsibilidade nos resultados da empresa.",
    highlights: [
      "Estruturação do funil comercial e organização do CRM",
      "Rotina de follow-up e estratégias de pós-venda",
      "Processo de onboarding para novos vendedores"
    ],
    iconName: "Sparkles"
  },
  {
    id: 3,
    number: "Módulo 3",
    title: "Venda Comportamental e Conexão",
    subtitle: "Adaptação e Inteligência Emocional",
    description: "Treinamento prático com a equipe comercial para identificar o perfil comportamental do cliente e adaptar a comunicação, gerando mais conexão e confiança durante o processo de venda.",
    highlights: [
      "Identificação do perfil do cliente (presencial e online)",
      "Inteligência emocional para lidar com objeções e perfis variados",
      "Postura, relacionamento e pontos fortes de cada colaborador"
    ],
    iconName: "MessageSquareText"
  },
  {
    id: 4,
    number: "Módulo 4",
    title: "Negociação e Conversão",
    subtitle: "Persuasão e Fechamento",
    description: "Desenvolvimento de habilidades técnicas para contornar objeções de forma assertiva, aumentar o ticket médio e aplicar técnicas de fechamento que alavanquem os resultados da equipe.",
    highlights: [
      "Técnicas de construção de relacionamento desde o primeiro contato",
      "Persuasão e condução estratégica da venda",
      "Identificação de objeções e aumento de ticket médio"
    ],
    iconName: "Handshake"
  },
  {
    id: 5,
    number: "Módulo 5",
    title: "Acompanhamento e Implantação",
    subtitle: "Resultados Práticos e Ajustes Contínuos",
    description: "Garantia da aplicação prática dos processos, com análise dos atendimentos, identificação de oportunidades de melhoria e reporte periódico à gestão sobre a evolução da equipe.",
    highlights: [
      "Análise contínua dos atendimentos e funil de vendas",
      "Acompanhamento da aplicação dos feedbacks",
      "Suporte para a liderança na implantação de mudanças"
    ],
    iconName: "TrendingUp"
  }
];

export const COMMUNITY_PHOTOS: CommunityPhoto[] = [
  {
    id: "comm_1",
    src: "https://i.ibb.co/chf7Gm9d/Ontem-tivemos-um-dia-extremamente-ESPECIAL-Nossa-mentoria-A-VIRADA-foi-muito-ale-m-do-imaginado.jpg",
    alt: "Treinamento Prático - Método 5D",
    title: "Treinamento Prático da Equipe",
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
    question: "Qual é a duração da Consultoria Método 5D Comercial?",
    answer: "A Consultoria possui 4 meses de acompanhamento intensivo e direcionado, estruturado para identificar pontos de melhoria, estruturar processos e treinar a equipe."
  },
  {
    id: "faq_2",
    question: "Como funciona o suporte no dia a dia?",
    answer: "A liderança da empresa e a equipe terão suporte semanal via WhatsApp para tirar dúvidas relacionadas à gestão, feedbacks, atendimentos, fechamento de vendas e desenvolvimento da equipe."
  },
  {
    id: "faq_4",
    question: "Para quem é indicada esta consultoria?",
    answer: "Indicada para empresas, gestores e líderes comerciais que desejam estruturar rotinas, implementar indicadores precisos e desenvolver a equipe de vendas para escalar resultados com previsibilidade."
  },
  {
    id: "faq_5",
    question: "Os treinamentos são padronizados ou personalizados?",
    answer: "Todos os nossos treinamentos são personalizados para a demanda comportamental e comercial específica do seu time, com exemplos abordados com base na realidade do dia a dia da sua empresa."
  },
  {
    id: "faq_6",
    question: "Como posso saber se é o momento ideal para a minha empresa?",
    answer: "Você pode clicar no botão de WhatsApp ou preencher a aplicação para agendarmos uma Sessão Estratégica. Faremos uma análise do cenário atual da sua empresa para entender se a consultoria é o melhor caminho."
  }
];

export const AGITATION_PAINS = [
  {
    title: "Sua equipe de vendas está desmotivada ou sem direcionamento claro?",
    description: "Falta uma rotina de acompanhamento, alinhamentos e feedbacks, deixando os vendedores sem saber onde exatamente precisam melhorar."
  },
  {
    title: "Processos comerciais desorganizados e dependência do 'acaso'?",
    description: "Não existe um funil claro ou uso efetivo do CRM, resultando em leads perdidos e falta de previsibilidade nos resultados."
  },
  {
    title: "Baixa taxa de conversão e dificuldade de contornar objeções?",
    description: "Seu time tem dificuldade em criar conexão com diferentes perfis de clientes e acaba perdendo vendas quentes por falta de técnica de negociação."
  },
  {
    title: "Gestão sobrecarregada e sem indicadores precisos?",
    description: "Você investe energia apagando incêndios ao invés de liderar de forma estratégica, sem métricas claras para tomada de decisão."
  }
];
