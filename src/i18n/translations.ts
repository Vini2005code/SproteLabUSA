import type { Language } from '../utils/analytics';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TranslationContent {
  meta: {
    htmlLang: string;
    title: string;
    description: string;
  };
  nav: {
    preview: string;
    included: string;
    howItWorks: string;
    cta: string;
    languageSelectorLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    skipToContent: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    priceValue: string;
    priceLabel: string;
    domainNote: string;
    deliveryNote: string;
    scannerLabel: string;
    scannerHint: string;
    scannerActiveStatus: string;
    optionalIntroTrigger: string;
    previewBadge: string;
    previewCaption: string;
  };
  introModal: {
    title: string;
    subtitle: string;
    description: string;
    closeLabel: string;
    continueCta: string;
  };
  demo: {
    eyebrow: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    viewportLabel: string;
    desktopMode: string;
    mobileMode: string;
    demoLangLabel: string;
    fullscreenCta: string;
    closeFullscreenLabel: string;
    fullscreenTitle: string;
    siteCopy: {
      pt: DemoCleaningSiteCopy;
      en: DemoCleaningSiteCopy;
    };
  };
  benefits: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      index: string;
      title: string;
      description: string;
    }>;
  };
  included: {
    eyebrow: string;
    title: string;
    subtitle: string;
    priceValue: string;
    priceLabel: string;
    languageAvailability: string;
    revisionNote: string;
    deliveryNote: string;
    domainNote: string;
    baseNote: string;
    cardCta: string;
    includedHeading: string;
    includedItems: string[];
    upsellLine: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    summaryItems: string[];
    nameLabel: string;
    namePlaceholder: string;
    locationLabel: string;
    locationPlaceholder: string;
    optionalTag: string;
    whatsappCta: string;
    whatsappPrefillBase: string;
    whatsappNamePrefix: string;
    whatsappLocationPrefix: string;
    emailAlternativeLabel: string;
    emailCta: string;
    emailSubject: string;
    copyEmailLabel: string;
    emailCopiedLabel: string;
    directWhatsappNumber: string;
    directEmailAddress: string;
    privacyNote: string;
  };
  footer: {
    tagline: string;
    whatsappLabel: string;
    emailLabel: string;
    copyright: string;
  };
}

export interface DemoCleaningSiteCopy {
  demoTag: string;
  brandName: string;
  serviceAreaTag: string;
  navServices: string;
  navArea: string;
  navQuote: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  photosNote: string;
  servicesHeading: string;
  services: Array<{
    title: string;
    description: string;
  }>;
  areaHeading: string;
  areaDescription: string;
  areaCities: string[];
  formHeading: string;
  formSubheading: string;
  formNameLabel: string;
  formNamePlaceholder: string;
  formContactLabel: string;
  formContactPlaceholder: string;
  formServiceLabel: string;
  formServicePlaceholder: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formSubmitLabel: string;
  formSubmittingLabel: string;
  formErrorRequired: string;
  formErrorContact: string;
  formDemoResultTitle: string;
  formDemoResultNote: string;
  formDemoResetLabel: string;
  formPayloadLabels: {
    name: string;
    contact: string;
    service: string;
    message: string;
  };
  footerDemoDisclaimer: string;
}

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  pt: {
    meta: {
      htmlLang: 'pt-BR',
      title: 'Site para empresa de limpeza nos EUA por US$ 149 | Sprote Lab',
      description:
        'Site de uma página em inglês, português ou ambos para sua empresa de limpeza nos Estados Unidos. Conheça a oferta de desenvolvimento por US$ 149.',
    },
    nav: {
      preview: 'Demonstração',
      included: 'O que inclui',
      howItWorks: 'Como funciona',
      cta: 'Quero meu site',
      languageSelectorLabel: 'Selecionar idioma da página',
      openMenuLabel: 'Abrir menu de navegação',
      closeMenuLabel: 'Fechar menu de navegação',
      skipToContent: 'Ir para o conteúdo principal',
    },
    hero: {
      eyebrow: 'Para empresas de limpeza nos Estados Unidos',
      title: 'Um site profissional para sua empresa de limpeza. Por US$ 149.',
      subtitle:
        'Apresente seus serviços, área atendida e receba pedidos de orçamento em uma página personalizada para o seu negócio, com atendimento direto da Sprote Lab.',
      primaryCta: 'Quero meu site por US$ 149',
      secondaryCta: 'Ver demonstração',
      priceValue: 'US$ 149',
      priceLabel: 'Pagamento único pelo desenvolvimento.',
      domainNote:
        'Domínio e hospedagem são contratados separadamente. Apresentamos as opções e os custos antes da contratação.',
      deliveryNote:
        'Entrega em até 4 dias úteis após a confirmação do pagamento e o recebimento completo dos materiais e informações necessários.',
      scannerLabel: 'Inspecionar foco visual da Sprote Lab',
      scannerHint: 'Clique ou pressione Enter para acionar a leitura visual',
      scannerActiveStatus: 'Leitura visual concluída',
      optionalIntroTrigger: 'Abertura institucional',
      previewBadge: 'Exemplo de estrutura de 1 página',
      previewCaption: 'Adaptada com sua marca, serviços, cidade e fotos autorizadas',
    },
    introModal: {
      title: 'Apresentação Sprote Lab',
      subtitle: 'Identidade visual e padrão de entrega',
      description:
        'A assinatura visual da Sprote Lab acompanha a construção da página da sua empresa de limpeza: estrutura objetiva, leitura confortável no celular e no computador, e contato direto sem intermediários.',
      closeLabel: 'Fechar apresentação',
      continueCta: 'Ir para a oferta de US$ 149',
    },
    demo: {
      eyebrow: 'Demonstração do produto',
      title: 'Veja o que você vai receber.',
      subtitle:
        'Esta prévia mostra como o site da sua empresa de limpeza pode ficar no celular e no computador. Na entrega final, adaptamos cores, logo, textos, área atendida e fotografias para o seu negócio.',
      disclaimer:
        'Empresa fictícia de demonstração. O formulário abaixo permite testar o visual do pedido de orçamento incluído no pacote de US$ 149, sem enviar solicitações reais.',
      viewportLabel: 'Visualização',
      desktopMode: 'Desktop',
      mobileMode: 'Celular',
      demoLangLabel: 'Idioma da prévia',
      fullscreenCta: 'Explorar prévia completa',
      closeFullscreenLabel: 'Fechar prévia em tela cheia',
      fullscreenTitle: 'Prévia interativa do site de limpeza',
      siteCopy: {
        pt: {
          demoTag: 'Empresa fictícia de demonstração · Estrutura do pacote de US$ 149',
          brandName: 'ClearLeaf Cleaning Co.',
          serviceAreaTag: 'Exemplo de região: Grande Orlando e Flórida Central',
          navServices: 'Serviços',
          navArea: 'Área atendida',
          navQuote: 'Pedir orçamento',
          heroTitle: 'Limpeza residencial e comercial com cuidado em cada detalhe.',
          heroSubtitle:
            'Atendimento organizado para casas, apartamentos e pequenos escritórios na região. Solicite seu orçamento informando o tipo de limpeza desejado.',
          heroCta: 'Solicitar orçamento',
          photosNote: 'Imagens ilustrativas — substituídas pelas fotos autorizadas da sua empresa',
          servicesHeading: 'Serviços apresentados',
          services: [
            {
              title: 'Limpeza Residencial Regular',
              description:
                'Manutenção semanal ou quinzenal para quartos, banheiros, cozinha e áreas de convivência.',
            },
            {
              title: 'Limpeza Pesada (Deep Cleaning)',
              description:
                'Higienização detalhada de rodapés, armários externos, vidros internos, cozinha e banheiros.',
            },
            {
              title: 'Mudança (Move-In / Move-Out)',
              description:
                'Preparação completa de imóveis vazios antes da entrada ou após a saída de moradores.',
            },
            {
              title: 'Escritórios e Pequenos Comércios',
              description:
                'Limpeza e organização de estações de trabalho, salas de reunião, recepção e copa.',
            },
          ],
          areaHeading: 'Região de atendimento',
          areaDescription:
            'Informe claramente as cidades e condados onde sua equipe atua para filtrar pedidos fora da rota.',
          areaCities: ['Orlando', 'Winter Park', 'Kissimmee', 'Lake Nona', 'Altamonte Springs'],
          formHeading: 'Solicitar orçamento',
          formSubheading:
            'Preencha seus dados para que nossa equipe retorne com as informações de atendimento.',
          formNameLabel: 'Nome',
          formNamePlaceholder: 'Seu nome completo',
          formContactLabel: 'Contato (Telefone ou E-mail)',
          formContactPlaceholder: 'Ex.: (407) 555-0148 ou email@exemplo.com',
          formServiceLabel: 'Serviço desejado',
          formServicePlaceholder: 'Selecione um serviço',
          formMessageLabel: 'Mensagem',
          formMessagePlaceholder: 'Informe cidade, tipo de imóvel ou detalhes da limpeza desejada.',
          formSubmitLabel: 'Enviar solicitação de orçamento',
          formSubmittingLabel: 'Preparando prévia...',
          formErrorRequired: 'Preencha nome, contato e serviço desejado para testar a prévia.',
          formErrorContact: 'Informe um telefone ou e-mail válido no campo de contato.',
          formDemoResultTitle: 'Prévia do pedido montado (simulação da demonstração)',
          formDemoResultNote:
            'No seu site publicado, este pedido é encaminhado diretamente para o canal combinado (e-mail ou WhatsApp). Este teste é apenas uma prévia e nenhum pedido real foi enviado.',
          formDemoResetLabel: 'Testar novamente',
          formPayloadLabels: {
            name: 'Nome',
            contact: 'Contato',
            service: 'Serviço',
            message: 'Mensagem',
          },
          footerDemoDisclaimer:
            'ClearLeaf Cleaning Co. é um exemplo fictício criado pela Sprote Lab para demonstrar o pacote de US$ 149.',
        },
        en: {
          demoTag: 'Fictional demo business · Included US$ 149 layout',
          brandName: 'ClearLeaf Cleaning Co.',
          serviceAreaTag: 'Sample area: Greater Orlando & Central Florida',
          navServices: 'Services',
          navArea: 'Service Area',
          navQuote: 'Request Quote',
          heroTitle: 'Residential and small office cleaning presented clearly.',
          heroSubtitle:
            'Organized cleaning services for homes, apartments, and local workspaces. Share what you need to request a quote from our team.',
          heroCta: 'Request a quote',
          photosNote: 'Sample photos — replaced with your approved business photos',
          servicesHeading: 'Services offered',
          services: [
            {
              title: 'Standard Home Cleaning',
              description:
                'Routine weekly or bi-weekly upkeep for bedrooms, bathrooms, kitchens, and living areas.',
            },
            {
              title: 'Deep Cleaning',
              description:
                'Detailed attention to baseboards, exterior cabinets, interior glass, kitchen, and baths.',
            },
            {
              title: 'Move-In / Move-Out Cleaning',
              description:
                'Thorough cleaning for empty homes and apartments before move-in or after move-out.',
            },
            {
              title: 'Small Office Cleaning',
              description:
                'Consistent upkeep for workstations, conference rooms, lobbies, and break areas.',
            },
          ],
          areaHeading: 'Service area',
          areaDescription:
            'Clearly list the cities and neighborhoods you cover so prospects know right away if you serve their area.',
          areaCities: ['Orlando', 'Winter Park', 'Kissimmee', 'Lake Nona', 'Altamonte Springs'],
          formHeading: 'Request a quote',
          formSubheading:
            'Share your contact details and the type of cleaning you need so we can follow up.',
          formNameLabel: 'Name',
          formNamePlaceholder: 'Your full name',
          formContactLabel: 'Phone or Email',
          formContactPlaceholder: 'e.g. (407) 555-0148 or name@example.com',
          formServiceLabel: 'Desired service',
          formServicePlaceholder: 'Choose a service',
          formMessageLabel: 'Message',
          formMessagePlaceholder: 'Share your city, property type, or cleaning notes.',
          formSubmitLabel: 'Send quote request',
          formSubmittingLabel: 'Preparing preview...',
          formErrorRequired: 'Please enter your name, contact info, and desired service to test.',
          formErrorContact: 'Please provide a valid phone number or email address.',
          formDemoResultTitle: 'Quote request preview (demo only)',
          formDemoResultNote:
            'On your live website, this submission is routed to your agreed email or WhatsApp channel. No real inquiry was sent from this demo.',
          formDemoResetLabel: 'Test form again',
          formPayloadLabels: {
            name: 'Name',
            contact: 'Contact',
            service: 'Service',
            message: 'Message',
          },
          footerDemoDisclaimer:
            'ClearLeaf Cleaning Co. is a fictional example built by Sprote Lab to showcase the US$ 149 package.',
        },
      },
    },
    benefits: {
      eyebrow: 'Por que ter uma página dedicada',
      title: 'Sua empresa apresentada com clareza.',
      subtitle:
        'Uma página objetiva ajuda quem procura serviço de limpeza a entender o que você faz, onde atende e como pedir orçamento.',
      items: [
        {
          index: '01',
          title: 'Mostre seus serviços',
          description:
            'Apresente o que sua empresa oferece, as cidades atendidas e fotos reais aprovadas por você em um layout limpo.',
        },
        {
          index: '02',
          title: 'Organize o primeiro contato',
          description:
            'Receba as informações iniciais pelo formulário básico de orçamento e responda pelo canal combinado.',
        },
        {
          index: '03',
          title: 'Pronto para celular e desktop',
          description:
            'Apresente sua empresa com leitura confortável em qualquer tela e botões diretos para facilitar o primeiro contato.',
        },
      ],
    },
    included: {
      eyebrow: 'Escopo fechado',
      title: 'Uma entrega definida. Um preço claro.',
      subtitle:
        'O site parte de uma estrutura reutilizável da Sprote Lab e é adaptado com os dados, identidade visual e informações reais da sua empresa.',
      priceValue: 'US$ 149',
      priceLabel: 'Pagamento único pelo desenvolvimento.',
      languageAvailability: 'Opção extra de idioma: inglês, português ou ambos com seletor PT | EN.',
      revisionNote: 'Inclui 1 rodada consolidada de ajustes após a apresentação da primeira versão.',
      deliveryNote:
        'Entrega em até 4 dias úteis após a confirmação do pagamento e o recebimento completo dos materiais e informações necessários.',
      domainNote:
        'Domínio e hospedagem são contratados separadamente. Apresentamos as opções e os custos antes da contratação.',
      baseNote:
        'Quando solicitado na versão bilíngue, os dois idiomas compartilham a mesma estrutura de página.',
      cardCta: 'Quero meu site por US$ 149',
      includedHeading: 'O que está incluído no pacote',
      includedItems: [
        'Site de uma página com versão para celular e desktop',
        'Personalização com logo e cores da sua empresa',
        'Textos preparados a partir das suas informações e aprovados por você',
        'Apresentação clara dos serviços e da região atendida',
        'Fotos autorizadas fornecidas pela sua empresa',
        'Avaliações reais, quando fornecidas e comprovadas por você',
        'Formulário básico de solicitação de orçamento (nome, contato, serviço e mensagem)',
        'Encaminhamento dos pedidos ao canal combinado e botões de contato',
        'Configuração básica de título, descrição e compartilhamento (OpenGraph)',
        'Publicação no ambiente de hospedagem combinado',
      ],
      upsellLine:
        'Precisa de um formulário mais completo ou de automações? Converse com a gente sobre as opções.',
    },
    howItWorks: {
      eyebrow: 'Etapas do projeto',
      title: 'Como funciona a contratação.',
      subtitle:
        'Processo direto em 4 passos. O prazo de entrega começa somente após pagamento confirmado e recebimento completo dos materiais.',
      steps: [
        {
          number: '01',
          title: 'Confirme os detalhes',
          description:
            'Alinhamos o escopo de US$ 149, opções e custos externos de domínio/hospedagem e a forma de pagamento.',
        },
        {
          number: '02',
          title: 'Envie as informações',
          description:
            'Você envia logo, lista de serviços, contatos, região atendida e fotos autorizadas da empresa.',
        },
        {
          number: '03',
          title: 'Confira a primeira versão',
          description:
            'Apresentamos o site montado para revisão e realizamos uma rodada consolidada de ajustes.',
        },
        {
          number: '04',
          title: 'Aprove a publicação',
          description:
            'Publicamos no ambiente de hospedagem combinado após sua aprovação final e a configuração necessária.',
        },
      ],
    },
    faq: {
      eyebrow: 'Dúvidas comuns',
      title: 'Perguntas frequentes.',
      subtitle: 'Esclarecimentos práticos sobre domínio atual, funcionamento do formulário e expectativas de resultado.',
      items: [
        {
          question: 'Posso usar meu domínio atual?',
          answer:
            'Sim, desde que você tenha acesso autorizado ao painel do domínio e que a configuração técnica seja compatível com o ambiente de hospedagem combinado.',
        },
        {
          question: 'O formulário calcula o orçamento?',
          answer:
            'Não. Ele apenas registra o pedido inicial do cliente para você responder diretamente, sem cálculo automático de valores, confirmação de agendamento ou envio de fotos.',
        },
        {
          question: 'O site traz clientes automaticamente?',
          answer:
            'Não. O site apresenta sua empresa de forma profissional e recebe solicitações de orçamento, mas visitas e vendas dependem também da sua divulgação e do seu atendimento.',
        },
      ],
    },
    contact: {
      eyebrow: 'Atendimento direto',
      title: 'Vamos preparar o site da sua empresa?',
      subtitle:
        'Tire suas dúvidas pelo WhatsApp ou e-mail antes de contratar. Sem formulário longo e sem cobrança automática nesta página.',
      summaryItems: [
        'Site de uma página personalizado para sua empresa de limpeza',
        'US$ 149 em pagamento único pelo desenvolvimento',
        'Uma rodada consolidada de ajustes',
        'Prazo de até 4 dias úteis após pagamento e materiais completos',
        'Domínio e hospedagem contratados separadamente',
      ],
      nameLabel: 'Nome ou empresa',
      namePlaceholder: 'Ex.: Silva Clean Services',
      locationLabel: 'Cidade e estado atendidos',
      locationPlaceholder: 'Ex.: Orlando, FL',
      optionalTag: 'Opcional',
      whatsappCta: 'Conversar sobre meu site de US$ 149',
      whatsappPrefillBase:
        'Olá! Vi a oferta de US$ 149 para um site de uma página para empresa de limpeza nos EUA. Quero confirmar os detalhes e saber como contratar.',
      whatsappNamePrefix: 'Nome/Empresa',
      whatsappLocationPrefix: 'Cidade/Estado',
      emailAlternativeLabel: 'Prefere contato por e-mail?',
      emailCta: 'Enviar e-mail para riosvini42@gmail.com',
      emailSubject: 'Interesse no site de US$ 149 para empresa de limpeza | Sprote Lab',
      copyEmailLabel: 'Copiar e-mail',
      emailCopiedLabel: 'E-mail copiado',
      directWhatsappNumber: '+55 (37) 9923-7385',
      directEmailAddress: 'riosvini42@gmail.com',
      privacyNote:
        'Ao clicar no botão, a mensagem é aberta diretamente no WhatsApp oficial da Sprote Lab com os campos acima preenchidos se informados.',
    },
    footer: {
      tagline: 'Sites de uma página para empresas de limpeza nos Estados Unidos.',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'E-mail',
      copyright: '© 2026 Sprote Lab. Todos os direitos reservados.',
    },
  },
  en: {
    meta: {
      htmlLang: 'en-US',
      title: 'Cleaning Business Website for US$ 149 | Sprote Lab',
      description:
        'A personalized one-page website for your US cleaning business. Available in English, Portuguese, or both. Explore the US$ 149 development package.',
    },
    nav: {
      preview: 'Preview',
      included: 'What’s included',
      howItWorks: 'How it works',
      cta: 'Get my website',
      languageSelectorLabel: 'Select page language',
      openMenuLabel: 'Open navigation menu',
      closeMenuLabel: 'Close navigation menu',
      skipToContent: 'Skip to main content',
    },
    hero: {
      eyebrow: 'For cleaning businesses in the United States',
      title: 'A professional website for your cleaning business. For US$ 149.',
      subtitle:
        'Showcase your services, service area, and collect quote requests with a personalized one-page website and direct support from Sprote Lab during your project.',
      primaryCta: 'Get my website for US$ 149',
      secondaryCta: 'View demo',
      priceValue: 'US$ 149',
      priceLabel: 'One-time website development fee.',
      domainNote:
        'Domain registration and hosting are purchased separately. We explain the options and costs before you commit.',
      deliveryNote:
        'Delivery within 4 business days after payment is confirmed and all required content and business details are received.',
      scannerLabel: 'Inspect Sprote Lab visual focus',
      scannerHint: 'Click or press Enter to trigger visual scan',
      scannerActiveStatus: 'Visual scan completed',
      optionalIntroTrigger: 'Brand intro',
      previewBadge: 'One-page layout sample',
      previewCaption: 'Tailored with your logo, services, service area, and approved photos',
    },
    introModal: {
      title: 'Sprote Lab Presentation',
      subtitle: 'Visual identity and delivery standard',
      description:
        'Sprote Lab brings a clean, structured layout to your cleaning business website: clear service presentation, comfortable reading on mobile and desktop, and direct communication with no middlemen.',
      closeLabel: 'Close presentation',
      continueCta: 'Go to the US$ 149 offer',
    },
    demo: {
      eyebrow: 'Live website preview',
      title: 'See what your website could look like.',
      subtitle:
        'This preview shows how your cleaning business website looks on desktop and mobile. Your final site is customized with your logo, colors, services, service area, and photos.',
      disclaimer:
        'Fictional demo business. Use the form below to test the basic quote request experience included in the US$ 149 package—no real inquiries are sent.',
      viewportLabel: 'Viewport',
      desktopMode: 'Desktop',
      mobileMode: 'Mobile',
      demoLangLabel: 'Preview language',
      fullscreenCta: 'Explore full-screen preview',
      closeFullscreenLabel: 'Close full-screen preview',
      fullscreenTitle: 'Interactive cleaning website preview',
      siteCopy: {
        pt: {
          demoTag: 'Empresa fictícia de demonstração · Estrutura do pacote de US$ 149',
          brandName: 'ClearLeaf Cleaning Co.',
          serviceAreaTag: 'Exemplo de região: Grande Orlando e Flórida Central',
          navServices: 'Serviços',
          navArea: 'Área atendida',
          navQuote: 'Pedir orçamento',
          heroTitle: 'Limpeza residencial e comercial com cuidado em cada detalhe.',
          heroSubtitle:
            'Atendimento organizado para casas, apartamentos e pequenos escritórios na região. Solicite seu orçamento informando o tipo de limpeza desejado.',
          heroCta: 'Solicitar orçamento',
          photosNote: 'Imagens ilustrativas — substituídas pelas fotos autorizadas da sua empresa',
          servicesHeading: 'Serviços apresentados',
          services: [
            {
              title: 'Limpeza Residencial Regular',
              description:
                'Manutenção semanal ou quinzenal para quartos, banheiros, cozinha e áreas de convivência.',
            },
            {
              title: 'Limpeza Pesada (Deep Cleaning)',
              description:
                'Higienização detalhada de rodapés, armários externos, vidros internos, cozinha e banheiros.',
            },
            {
              title: 'Mudança (Move-In / Move-Out)',
              description:
                'Preparação completa de imóveis vazios antes da entrada ou após a saída de moradores.',
            },
            {
              title: 'Escritórios e Pequenos Comércios',
              description:
                'Limpeza e organização de estações de trabalho, salas de reunião, recepção e copa.',
            },
          ],
          areaHeading: 'Região de atendimento',
          areaDescription:
            'Informe claramente as cidades e condados onde sua equipe atua para filtrar pedidos fora da rota.',
          areaCities: ['Orlando', 'Winter Park', 'Kissimmee', 'Lake Nona', 'Altamonte Springs'],
          formHeading: 'Solicitar orçamento',
          formSubheading:
            'Preencha seus dados para que nossa equipe retorne com as informações de atendimento.',
          formNameLabel: 'Nome',
          formNamePlaceholder: 'Seu nome completo',
          formContactLabel: 'Contato (Telefone ou E-mail)',
          formContactPlaceholder: 'Ex.: (407) 555-0148 ou email@exemplo.com',
          formServiceLabel: 'Serviço desejado',
          formServicePlaceholder: 'Selecione um serviço',
          formMessageLabel: 'Mensagem',
          formMessagePlaceholder: 'Informe cidade, tipo de imóvel ou detalhes da limpeza desejada.',
          formSubmitLabel: 'Enviar solicitação de orçamento',
          formSubmittingLabel: 'Preparando prévia...',
          formErrorRequired: 'Preencha nome, contato e serviço desejado para testar a prévia.',
          formErrorContact: 'Informe um telefone ou e-mail válido no campo de contato.',
          formDemoResultTitle: 'Prévia do pedido montado (simulação da demonstração)',
          formDemoResultNote:
            'No seu site publicado, este pedido é encaminhado diretamente para o canal combinado (e-mail ou WhatsApp). Este teste é apenas uma prévia e nenhum pedido real foi enviado.',
          formDemoResetLabel: 'Testar novamente',
          formPayloadLabels: {
            name: 'Nome',
            contact: 'Contato',
            service: 'Serviço',
            message: 'Mensagem',
          },
          footerDemoDisclaimer:
            'ClearLeaf Cleaning Co. é um exemplo fictício criado pela Sprote Lab para demonstrar o pacote de US$ 149.',
        },
        en: {
          demoTag: 'Fictional demo business · Included US$ 149 layout',
          brandName: 'ClearLeaf Cleaning Co.',
          serviceAreaTag: 'Sample area: Greater Orlando & Central Florida',
          navServices: 'Services',
          navArea: 'Service Area',
          navQuote: 'Request Quote',
          heroTitle: 'Residential and small office cleaning presented clearly.',
          heroSubtitle:
            'Organized cleaning services for homes, apartments, and local workspaces. Share what you need to request a quote from our team.',
          heroCta: 'Request a quote',
          photosNote: 'Sample photos — replaced with your approved business photos',
          servicesHeading: 'Services offered',
          services: [
            {
              title: 'Standard Home Cleaning',
              description:
                'Routine weekly or bi-weekly upkeep for bedrooms, bathrooms, kitchens, and living areas.',
            },
            {
              title: 'Deep Cleaning',
              description:
                'Detailed attention to baseboards, exterior cabinets, interior glass, kitchen, and baths.',
            },
            {
              title: 'Move-In / Move-Out Cleaning',
              description:
                'Thorough cleaning for empty homes and apartments before move-in or after move-out.',
            },
            {
              title: 'Small Office Cleaning',
              description:
                'Consistent upkeep for workstations, conference rooms, lobbies, and break areas.',
            },
          ],
          areaHeading: 'Service area',
          areaDescription:
            'Clearly list the cities and neighborhoods you cover so prospects know right away if you serve their area.',
          areaCities: ['Orlando', 'Winter Park', 'Kissimmee', 'Lake Nona', 'Altamonte Springs'],
          formHeading: 'Request a quote',
          formSubheading:
            'Share your contact details and the type of cleaning you need so we can follow up.',
          formNameLabel: 'Name',
          formNamePlaceholder: 'Your full name',
          formContactLabel: 'Phone or Email',
          formContactPlaceholder: 'e.g. (407) 555-0148 or name@example.com',
          formServiceLabel: 'Desired service',
          formServicePlaceholder: 'Choose a service',
          formMessageLabel: 'Message',
          formMessagePlaceholder: 'Share your city, property type, or cleaning notes.',
          formSubmitLabel: 'Send quote request',
          formSubmittingLabel: 'Preparing preview...',
          formErrorRequired: 'Please enter your name, contact info, and desired service to test.',
          formErrorContact: 'Please provide a valid phone number or email address.',
          formDemoResultTitle: 'Quote request preview (demo only)',
          formDemoResultNote:
            'On your live website, this submission is routed to your agreed email or WhatsApp channel. No real inquiry was sent from this demo.',
          formDemoResetLabel: 'Test form again',
          formPayloadLabels: {
            name: 'Name',
            contact: 'Contact',
            service: 'Service',
            message: 'Message',
          },
          footerDemoDisclaimer:
            'ClearLeaf Cleaning Co. is a fictional example built by Sprote Lab to showcase the US$ 149 package.',
        },
      },
    },
    benefits: {
      eyebrow: 'Built for clarity',
      title: 'Make your business easy to understand and contact.',
      subtitle:
        'A focused one-page website helps prospective clients see what you clean, where you work, and how to reach you.',
      items: [
        {
          index: '01',
          title: 'Show your services clearly',
          description:
            'Present your cleaning services, service area, and approved business photos in a clean, readable layout.',
        },
        {
          index: '02',
          title: 'Organize the first inquiry',
          description:
            'Collect the initial details through a straightforward quote request form routed to your preferred channel.',
        },
        {
          index: '03',
          title: 'Built for mobile and desktop',
          description:
            'Present your cleaning business clearly on any screen with direct contact buttons so prospects can reach you easily.',
        },
      ],
    },
    included: {
      eyebrow: 'Defined scope',
      title: 'A clear scope. A clear price.',
      subtitle:
        'Your site is built from a proven Sprote Lab layout structure and customized with your branding, copy, and real business details.',
      priceValue: 'US$ 149',
      priceLabel: 'One-time website development fee.',
      languageAvailability: 'Optional language setup: English, Portuguese, or both with a PT | EN toggle.',
      revisionNote: 'Includes 1 consolidated round of revisions after the first draft review.',
      deliveryNote:
        'Delivery within 4 business days after payment is confirmed and all required content and business details are received.',
      domainNote:
        'Domain registration and hosting are purchased separately. We explain the options and costs before you commit.',
      baseNote:
        'When requested as a bilingual extra, both languages share the same page structure and sections.',
      cardCta: 'Get my website for US$ 149',
      includedHeading: 'Included in your US$ 149 package',
      includedItems: [
        'One-page website formatted for mobile and desktop',
        'Customized with your company logo and brand colors',
        'Website copy written from your business details for your approval',
        'Clear presentation of your cleaning services and service area',
        'Authorized photos provided by your business',
        'Real customer reviews, when available and verified by you',
        'Basic quote request form (name, contact, desired service, message)',
        'Lead forwarding to your agreed channel plus direct contact buttons',
        'Basic page title, meta description, and social share configuration',
        'Launch on your agreed hosting setup',
      ],
      upsellLine:
        'Need a more detailed quote form or additional automation? Ask us about the options.',
    },
    howItWorks: {
      eyebrow: 'Simple workflow',
      title: 'How the process works.',
      subtitle:
        'Four straightforward steps from alignment to launch. The delivery clock starts only after payment confirmation and full material handoff.',
      steps: [
        {
          number: '01',
          title: 'Confirm the details',
          description:
            'We align on the US$ 149 scope, separate domain and hosting costs, and confirm payment.',
        },
        {
          number: '02',
          title: 'Send your business info',
          description:
            'Share your logo, cleaning services, contact channels, service area, and approved photos.',
        },
        {
          number: '03',
          title: 'Review the first version',
          description:
            'We share your customized draft for review and complete one consolidated round of edits.',
        },
        {
          number: '04',
          title: 'Approve and launch',
          description:
            'Once approved and configured, we publish the website on your agreed hosting environment.',
        },
      ],
    },
    faq: {
      eyebrow: 'Common questions',
      title: 'Frequently asked questions.',
      subtitle: 'Practical answers on existing domains, quote form behavior, and client expectations.',
      items: [
        {
          question: 'Can I use my existing domain?',
          answer:
            'Yes, provided you have authorized registrar access and the domain setup is technically compatible with the agreed hosting environment.',
        },
        {
          question: 'Does the quote form calculate prices?',
          answer:
            'No. It records the prospect’s initial inquiry so you can follow up directly—it does not calculate prices, confirm calendar bookings, or accept photo uploads.',
        },
        {
          question: 'Will the website bring clients automatically?',
          answer:
            'No website guarantees leads on its own. Your website presents your cleaning business clearly and captures inquiries, while traffic and bookings depend on your marketing and follow-up.',
        },
      ],
    },
    contact: {
      eyebrow: 'Direct contact',
      title: 'Ready to get your business website?',
      subtitle:
        'Start a quick conversation on WhatsApp or email to confirm the details. No long intake forms and no automated charges on this page.',
      summaryItems: [
        'Personalized one-page website for your cleaning business',
        'US$ 149 one-time website development fee',
        'One consolidated round of revisions',
        'Delivery within 4 business days after payment & full materials',
        'Domain and hosting purchased separately',
      ],
      nameLabel: 'Your name or business name',
      namePlaceholder: 'e.g. ClearLeaf Cleaning Co.',
      locationLabel: 'City and state you serve',
      locationPlaceholder: 'e.g. Orlando, FL',
      optionalTag: 'Optional',
      whatsappCta: 'Ask about my US$ 149 website',
      whatsappPrefillBase:
        'Hi! I saw your US$ 149 one-page website offer for cleaning businesses in the US. I’d like to confirm the details and learn how to get started.',
      whatsappNamePrefix: 'Name/Business',
      whatsappLocationPrefix: 'City/State',
      emailAlternativeLabel: 'Prefer email instead?',
      emailCta: 'Email riosvini42@gmail.com',
      emailSubject: 'US$ 149 Cleaning Business Website Inquiry | Sprote Lab',
      copyEmailLabel: 'Copy email',
      emailCopiedLabel: 'Email copied',
      directWhatsappNumber: '+55 (37) 9923-7385',
      directEmailAddress: 'riosvini42@gmail.com',
      privacyNote:
        'Clicking the button opens Sprote Lab’s official WhatsApp chat with your message pre-filled (including the optional fields above if entered).',
    },
    footer: {
      tagline: 'One-page websites for cleaning businesses in the United States.',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      copyright: '© 2026 Sprote Lab. All rights reserved.',
    },
  },
};
