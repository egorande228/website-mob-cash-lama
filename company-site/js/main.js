const menuBtn = document.getElementById('menuBtn');
const siteNav = document.getElementById('siteNav');

if (menuBtn && siteNav) {
  menuBtn.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const I18N_STORAGE_KEY = 'site_lang';
const SUPPORTED_LANGS = ['en', 'es', 'pt'];

const I18N = {
  en: {
    common: {
      menu_button: 'Menu',
      menu_aria: 'Open menu',
      nav_about: 'About us',
      nav_agent: 'Be our Agent',
      nav_partner: 'Be our Partner',
      lang_selector_aria: 'Language selector',
      contact_aria: 'Quick contact channels',
      open_telegram: 'Open Telegram',
      open_whatsapp: 'Open WhatsApp',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
      start_now: 'Start Now!',
      footer: 'Copyright \u00a9 2026. All rights reserved.',
      day_one: 'day',
      day_many: 'days',
      fill_required: 'Please fill in all required fields.',
      contact_telegram_label: 'Telegram Username',
      contact_telegram_placeholder: '@username',
      contact_whatsapp_label: 'WhatsApp Number',
      contact_whatsapp_placeholder: '+ CountryCode Number',
      contact_phone_label: 'Phone Number',
      contact_phone_placeholder: '+ CountryCode Number',
    },
    index: {
      title: '1XBET LATAM | Global Partner Network',
      description: 'Join the 1XBET LATAM partner network, launch as an agent, and grow recurring commissions with full support.',
      badge: 'Official LATAM Partner Program',
      hero_title_html: 'YOUR NEXT STEP TO <span>STABLE DAILY INCOME</span>',
      hero_desc: 'Build your own agent flow with 1XBET LATAM: process operations, scale your client base, and receive transparent weekly payouts.',
      hero_cta: 'Become an Agent',
      hero_help: '',
      hero_subbrand: 'Partner Program',
      metric_deposit: 'Deposit Commission',
      metric_withdrawal: 'Withdrawal Commission',
      metric_support: 'Manager Support',
      metric_window: 'Fast Launch Window',
      calc_title_html: 'Estimate Your <span>Income</span>',
      calc_desc: 'Based on the daily transaction volume (8% commission).',
      calc_volume_label: 'Daily Volume ($)',
      calc_days_label: 'Operational Days',
      calc_title: 'Your Estimated Commission',
      calc_sub: 'USD MONTHLY',
      benefits_title: 'Exclusive Benefits',
      benefits_desc: 'A practical setup designed for quick start and long-term scaling.',
      b1_title: 'Quick Start',
      b1_desc: 'Start operations quickly with simple onboarding and clear steps.',
      b2_title: 'Marketing Kit',
      b2_desc: 'Use ready-made creatives and scripts to attract quality traffic.',
      b3_title: 'Flexible Payments',
      b3_desc: 'Work with convenient transfer methods for your local market.',
      b4_title: 'Private Advisor',
      b4_desc: 'Get direct support from a personal manager for daily tasks.',
      sport_band: 'SPORT PARTNERS',
      sport_quote: 'If you are the best, you choose 1XBET and 1XBET chooses only the best.',
      sport_desc: 'This is the message players receive when they see the list of partners of this legendary betting brand.',
      sponsors_title: '1XBET SPONSORS THE BIGGEST SPORTS CLUBS IN THE WORLD.',
      sponsors_q: 'What does this mean for you?',
      sponsors_desc: 'Players already trust the brand before they even register. For you, this means more clients and more commissions almost automatically.',
      academy_title: 'Agent Academy',
      academy_desc: 'Simple guides to launch and manage operations with confidence.',
      g1_title: 'ID Verification',
      g1_desc: 'Prepare documents and complete checks in a secure flow.',
      g2_title: 'Load Balance',
      g2_desc: 'Learn how to process top-ups and confirm transactions fast.',
      g3_title: 'How to Withdraw',
      g3_desc: 'Follow a reliable payout process for smooth daily operations.',
      view_guide: 'View guide',
      register_title: 'Join The Growing Network',
      register_desc: 'Contact your dedicated Sales Manager and start your launch with direct onboarding support.',
      manager_title: 'Sales Manager',
      register_open_telegram: 'Open Telegram (coming soon)',
      register_open_whatsapp: 'Open WhatsApp (coming soon)',
      chat_register_aria: 'Open registration',
    },
    agent: {
      title: '1XBET LATAM | Be our Agent',
      description: 'Become a 1XBET LATAM transfer agent and earn daily commissions.',
      hero_band: 'BE OUR AGENT',
      hero_title: 'Earn daily commissions as a 1XBET transfer agent. Every day.',
      question_band: 'Want to earn money in a simple and straightforward way?',
      c1_title: 'Transfer Agent Model',
      c1_desc: 'As a Transfer Agent, you earn a commission for topping up players\' gaming accounts and for processing their withdrawals.',
      c2_title: 'Instant Commissions',
      c2_desc: 'You receive commissions instantly with every qualified transaction. Fast cycle, fast cash flow.',
      c3_title: 'Essential Service',
      c3_desc: 'When a player wins, you process the payout and send funds to them. It is a high-demand service, so your income stream starts from day one.',
      c4_title: 'Extra Reward for Top Agents',
      c4_desc: 'Top agents can be featured on the 1XBET website as an official payment method, giving a strong boost to trust, visibility, and earnings.',
      support_kicker: '24/7 Support Layer',
      support_title: 'Dedicated manager support from day one.',
      support_desc: 'Get real-time help with deposits, withdrawals, and client questions. You are never left alone while scaling your daily flow.',
      support_p1: 'Instant response',
      support_p2: 'Operational guidance',
      support_p3: 'Growth coaching',
      final_desc: 'Ready to be the trusted bridge between players and the platform?',
    },
    partner: {
      title: '1XBET LATAM | Be our Partner',
      description: 'Build long-term affiliate income with 1XBET LATAM.',
      hero_band: 'BE OUR PARTNER',
      hero_title: 'Build long-term income by also being an affiliate.',
      hero_intro: 'Transfer operations give immediate earnings, while affiliate growth helps you build a business that scales on its own.',
      question_band: 'How? Share your referral link or code.',
      growth_title: 'Your Affiliate Growth Potential',
      growth_subtitle: 'Example path from week one to steady monthly income.',
      growth_m1: 'Month 1',
      growth_m2: 'Month 2',
      growth_m3: 'Month 3',
      growth_m6: 'Month 6+',
      growth_p1: '+ Lifetime commissions',
      growth_p2: '+ Weekly payouts',
      growth_p3: '+ Transfer + affiliate effect',
      c1_title: 'Lifetime Client Base',
      c1_desc: 'Every player who registers through you becomes your long-term client.',
      c2_title: 'Lifetime Commissions',
      c2_desc: 'You earn recurring commissions from active players on the platform.',
      c3_title: 'Passive Weekly Income',
      c3_desc: 'Affiliate payouts can be withdrawn weekly, creating stable passive flow.',
      c4_title: 'Compounding Growth',
      c4_desc: 'Turn each registration into a permanent source of income. If they use your transfer agency too, returns are even stronger.',
      final_desc: 'Expand your income sources. Turn your client portfolio into an asset.',
    },
  },
  es: {
    common: {
      menu_button: 'Menu',
      menu_aria: 'Abrir menu',
      nav_about: 'Sobre nosotros',
      nav_agent: 'Ser agente',
      nav_partner: 'Ser socio',
      lang_selector_aria: 'Selector de idioma',
      contact_aria: 'Canales de contacto rapido',
      open_telegram: 'Abrir Telegram',
      open_whatsapp: 'Abrir WhatsApp',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
      start_now: 'Comenzar ahora',
      footer: 'Copyright \u00a9 2026. Todos los derechos reservados.',
      day_one: 'dia',
      day_many: 'dias',
      fill_required: 'Completa todos los campos obligatorios.',
      contact_telegram_label: 'Usuario de Telegram',
      contact_telegram_placeholder: '@usuario',
      contact_whatsapp_label: 'Numero de WhatsApp',
      contact_whatsapp_placeholder: '+ CodigoPais Numero',
      contact_phone_label: 'Numero de telefono',
      contact_phone_placeholder: '+ CodigoPais Numero',
    },
    index: {
      title: '1XBET LATAM | Red Global de Socios',
      description: 'Unete a la red de socios de 1XBET LATAM, lanza como agente y haz crecer comisiones recurrentes con soporte completo.',
      badge: 'Programa oficial LATAM de socios',
      hero_title_html: 'TOMA EL CONTROL<br />CONSTRUYE ESTABILIDAD<br /><span>RECIBE INGRESOS RECURRENTES</span>',
      hero_desc: 'Crea tu propio negocio como agente 1XBET con nuestra App MOBCASH, procesa operaciones escala tu base de clientes y recibe pagos semanales transparentes',
      hero_cta: 'Convertirme en Agente',
      hero_help: '',
      hero_subbrand: 'Agente MobCash',
      metric_deposit: 'Comision por deposito',
      metric_withdrawal: 'Comision por retiro',
      metric_support: 'Soporte de manager',
      metric_window: 'Ventana de lanzamiento',
      calc_title_html: 'Estima Tus <span>Ingresos</span>',
      calc_desc: 'Basado en el volumen diario de transacciones (comision del 8%).',
      calc_volume_label: 'Volumen diario ($)',
      calc_days_label: 'Dias operativos',
      calc_title: 'Tu comision estimada',
      calc_sub: 'USD MENSUAL',
      benefits_title: 'Beneficios Exclusivos',
      benefits_desc: 'Una estructura practica para comenzar rapido y escalar a largo plazo.',
      b1_title: 'Inicio rapido',
      b1_desc: 'Comienza operaciones rapidamente con onboarding simple y pasos claros.',
      b2_title: 'Kit de marketing',
      b2_desc: 'Usa creativos y guiones listos para atraer trafico de calidad.',
      b3_title: 'Pagos flexibles',
      b3_desc: 'Trabaja con metodos de transferencia convenientes para tu mercado local.',
      b4_title: 'Asesor privado',
      b4_desc: 'Recibe soporte directo de un manager personal para tareas diarias.',
      sport_band: 'SOCIOS DEPORTIVOS',
      sport_quote: 'Si eres el mejor, eliges 1XBET y 1XBET solo elige a los mejores.',
      sport_desc: 'Este es el mensaje que reciben los jugadores cuando ven la lista de socios de esta marca legendaria de apuestas.',
      sponsors_title: '1XBET PATROCINA LOS CLUBES DEPORTIVOS MAS GRANDES DEL MUNDO.',
      sponsors_q: 'Que significa esto para ti?',
      sponsors_desc: 'Los jugadores ya confian en la marca antes de registrarse. Para ti, esto significa mas clientes y mas comisiones casi automaticamente.',
      academy_title: 'Academia de Agentes',
      academy_desc: 'Guias simples para lanzar y gestionar operaciones con confianza.',
      g1_title: 'Verificacion de ID',
      g1_desc: 'Prepara documentos y completa verificaciones en un flujo seguro.',
      g2_title: 'Gestion de saldo',
      g2_desc: 'Aprende como procesar recargas y confirmar transacciones rapido.',
      g3_title: 'Como retirar',
      g3_desc: 'Sigue un proceso confiable de pagos para operaciones diarias fluidas.',
      view_guide: 'Ver guia',
      register_title: 'Unete a la red en crecimiento',
      register_desc: 'Contacta a tu Sales Manager dedicado y comienza tu lanzamiento con soporte directo.',
      manager_title: 'Gerente de Ventas',
      register_open_telegram: 'Abrir Telegram (proximamente)',
      register_open_whatsapp: 'Abrir WhatsApp (proximamente)',
      chat_register_aria: 'Abrir registro',
    },
    agent: {
      title: '1XBET LATAM | Ser Agente',
      description: 'Conviertete en agente de transferencias de 1XBET LATAM y gana comisiones diarias.',
      hero_band: 'SER AGENTE',
      hero_title: 'Gana comisiones diarias como agente de transferencias de 1XBET.',
      question_band: 'Quieres ganar dinero de forma simple y directa?',
      c1_title: 'Modelo de agente de transferencias',
      c1_desc: 'Como agente de transferencias, ganas comision por recargar cuentas de juego y por procesar retiros de jugadores.',
      c2_title: 'Comisiones instantaneas',
      c2_desc: 'Recibes comisiones al instante en cada transaccion calificada. Ciclo rapido, flujo de caja rapido.',
      c3_title: 'Servicio esencial',
      c3_desc: 'Cuando un jugador gana, procesas el pago y envias fondos. Es un servicio de alta demanda, por eso tus ingresos comienzan desde el primer dia.',
      c4_title: 'Recompensa extra para top agentes',
      c4_desc: 'Los mejores agentes pueden aparecer en el sitio de 1XBET como metodo de pago oficial, impulsando confianza, visibilidad e ingresos.',
      support_kicker: 'Soporte 24/7',
      support_title: 'Soporte de manager dedicado desde el primer dia.',
      support_desc: 'Recibe ayuda en tiempo real con depositos, retiros y preguntas de clientes. Nunca quedas solo mientras escalas tu flujo diario.',
      support_p1: 'Respuesta instantanea',
      support_p2: 'Guia operativa',
      support_p3: 'Coaching de crecimiento',
      final_desc: 'Listo para ser el puente de confianza entre jugadores y la plataforma?',
    },
    partner: {
      title: '1XBET LATAM | Ser Socio',
      description: 'Construye ingresos de afiliado a largo plazo con 1XBET LATAM.',
      hero_band: 'SER SOCIO',
      hero_title: 'Construye ingresos a largo plazo siendo tambien afiliado.',
      hero_intro: 'Las transferencias te dan ganancias inmediatas, mientras el canal de afiliados te ayuda a construir un negocio que escala solo.',
      question_band: 'Como? Comparte tu link o codigo de referido.',
      growth_title: 'Tu potencial de crecimiento afiliado',
      growth_subtitle: 'Ruta de ejemplo desde la primera semana hasta ingresos mensuales estables.',
      growth_m1: 'Mes 1',
      growth_m2: 'Mes 2',
      growth_m3: 'Mes 3',
      growth_m6: 'Mes 6+',
      growth_p1: '+ Comisiones de por vida',
      growth_p2: '+ Pagos semanales',
      growth_p3: '+ Efecto transferencias + afiliado',
      c1_title: 'Base de clientes de por vida',
      c1_desc: 'Cada jugador que se registra contigo se convierte en tu cliente de largo plazo.',
      c2_title: 'Comisiones de por vida',
      c2_desc: 'Ganas comisiones recurrentes de jugadores activos en la plataforma.',
      c3_title: 'Ingreso pasivo semanal',
      c3_desc: 'Los pagos de afiliado pueden retirarse semanalmente, creando flujo pasivo estable.',
      c4_title: 'Crecimiento compuesto',
      c4_desc: 'Convierte cada registro en una fuente permanente de ingresos. Si usan tambien tu agencia de transferencias, el retorno es mayor.',
      final_desc: 'Expande tus fuentes de ingreso. Convierte tu cartera de clientes en un activo.',
    },
  },
  pt: {
    common: {
      menu_button: 'Menu',
      menu_aria: 'Abrir menu',
      nav_about: 'Sobre nos',
      nav_agent: 'Seja agente',
      nav_partner: 'Seja parceiro',
      lang_selector_aria: 'Seletor de idioma',
      contact_aria: 'Canais de contato rapido',
      open_telegram: 'Abrir Telegram',
      open_whatsapp: 'Abrir WhatsApp',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
      start_now: 'Comecar agora',
      footer: 'Copyright \u00a9 2026. Todos os direitos reservados.',
      day_one: 'dia',
      day_many: 'dias',
      fill_required: 'Preencha todos os campos obrigatorios.',
      contact_telegram_label: 'Usuario do Telegram',
      contact_telegram_placeholder: '@usuario',
      contact_whatsapp_label: 'Numero do WhatsApp',
      contact_whatsapp_placeholder: '+ CodigoPais Numero',
      contact_phone_label: 'Numero de telefone',
      contact_phone_placeholder: '+ CodigoPais Numero',
    },
    index: {
      title: '1XBET LATAM | Rede Global de Parceiros',
      description: 'Junte-se a rede de parceiros da 1XBET LATAM, inicie como agente e aumente comissoes recorrentes com suporte completo.',
      badge: 'Programa oficial LATAM de parceiros',
      hero_title_html: 'SEU PROXIMO PASSO PARA <span>RENDA DIARIA ESTAVEL</span>',
      hero_desc: 'Monte seu proprio fluxo de agente com a 1XBET LATAM: processe operacoes, escale sua base de clientes e receba pagamentos semanais transparentes.',
      hero_cta: 'Tornar-me Agente',
      hero_help: '',
      hero_subbrand: 'Programa de Parceiros',
      metric_deposit: 'Comissao de deposito',
      metric_withdrawal: 'Comissao de saque',
      metric_support: 'Suporte do manager',
      metric_window: 'Janela de lancamento',
      calc_title_html: 'Estime Sua <span>Renda</span>',
      calc_desc: 'Com base no volume diario de transacoes (comissao de 8%).',
      calc_volume_label: 'Volume diario ($)',
      calc_days_label: 'Dias operacionais',
      calc_title: 'Sua comissao estimada',
      calc_sub: 'USD MENSAL',
      benefits_title: 'Beneficios Exclusivos',
      benefits_desc: 'Uma estrutura pratica para comeco rapido e escala de longo prazo.',
      b1_title: 'Inicio rapido',
      b1_desc: 'Inicie operacoes rapidamente com onboarding simples e passos claros.',
      b2_title: 'Kit de marketing',
      b2_desc: 'Use criativos e scripts prontos para atrair trafego de qualidade.',
      b3_title: 'Pagamentos flexiveis',
      b3_desc: 'Trabalhe com metodos de transferencia convenientes para seu mercado local.',
      b4_title: 'Consultor privado',
      b4_desc: 'Receba suporte direto de um manager pessoal para tarefas diarias.',
      sport_band: 'PARCEIROS ESPORTIVOS',
      sport_quote: 'Se voce e o melhor, escolhe 1XBET e a 1XBET escolhe apenas os melhores.',
      sport_desc: 'Esta e a mensagem que os jogadores recebem quando veem a lista de parceiros desta marca lendaria de apostas.',
      sponsors_title: 'A 1XBET PATROCINA OS MAIORES CLUBES ESPORTIVOS DO MUNDO.',
      sponsors_q: 'O que isso significa para voce?',
      sponsors_desc: 'Os jogadores ja confiam na marca antes mesmo de se registrar. Para voce, isso significa mais clientes e mais comissoes quase automaticamente.',
      academy_title: 'Academia de Agentes',
      academy_desc: 'Guias simples para iniciar e gerenciar operacoes com confianca.',
      g1_title: 'Verificacao de ID',
      g1_desc: 'Prepare documentos e conclua verificacoes em um fluxo seguro.',
      g2_title: 'Gestao de saldo',
      g2_desc: 'Aprenda como processar recargas e confirmar transacoes rapidamente.',
      g3_title: 'Como sacar',
      g3_desc: 'Siga um processo confiavel de pagamento para operacao diaria sem atrito.',
      view_guide: 'Ver guia',
      register_title: 'Junte-se a rede em crescimento',
      register_desc: 'Fale com seu Sales Manager dedicado e inicie seu lancamento com suporte direto.',
      manager_title: 'Gerente de Vendas',
      register_open_telegram: 'Abrir Telegram (em breve)',
      register_open_whatsapp: 'Abrir WhatsApp (em breve)',
      chat_register_aria: 'Abrir registro',
    },
    agent: {
      title: '1XBET LATAM | Seja Agente',
      description: 'Torne-se agente de transferencias da 1XBET LATAM e ganhe comissoes diarias.',
      hero_band: 'SEJA AGENTE',
      hero_title: 'Ganhe comissoes diarias como agente de transferencias da 1XBET.',
      question_band: 'Quer ganhar dinheiro de forma simples e direta?',
      c1_title: 'Modelo de agente de transferencias',
      c1_desc: 'Como agente de transferencias, voce ganha comissao por recargas e por processar saques dos jogadores.',
      c2_title: 'Comissoes instantaneas',
      c2_desc: 'Voce recebe comissoes instantaneamente em cada transacao qualificada. Ciclo rapido, caixa rapido.',
      c3_title: 'Servico essencial',
      c3_desc: 'Quando um jogador ganha, voce processa o pagamento e envia fundos. E um servico de alta demanda, por isso sua renda comeca no primeiro dia.',
      c4_title: 'Recompensa extra para top agentes',
      c4_desc: 'Top agentes podem aparecer no site da 1XBET como metodo de pagamento oficial, aumentando confianca, visibilidade e ganhos.',
      support_kicker: 'Suporte 24/7',
      support_title: 'Suporte de manager dedicado desde o primeiro dia.',
      support_desc: 'Receba ajuda em tempo real com depositos, saques e perguntas de clientes. Voce nunca fica sozinho enquanto escala seu fluxo diario.',
      support_p1: 'Resposta imediata',
      support_p2: 'Orientacao operacional',
      support_p3: 'Coaching de crescimento',
      final_desc: 'Pronto para ser a ponte de confianca entre jogadores e plataforma?',
    },
    partner: {
      title: '1XBET LATAM | Seja Parceiro',
      description: 'Construa renda de afiliado de longo prazo com a 1XBET LATAM.',
      hero_band: 'SEJA PARCEIRO',
      hero_title: 'Construa renda de longo prazo sendo tambem afiliado.',
      hero_intro: 'As transferencias geram ganho imediato, enquanto o canal de afiliado ajuda voce a construir um negocio que escala sozinho.',
      question_band: 'Como? Compartilhe seu link ou codigo de indicacao.',
      growth_title: 'Seu potencial de crescimento afiliado',
      growth_subtitle: 'Caminho de exemplo da primeira semana ate renda mensal estavel.',
      growth_m1: 'Mes 1',
      growth_m2: 'Mes 2',
      growth_m3: 'Mes 3',
      growth_m6: 'Mes 6+',
      growth_p1: '+ Comissoes vitalicias',
      growth_p2: '+ Pagamentos semanais',
      growth_p3: '+ Efeito transferencias + afiliado',
      c1_title: 'Base de clientes vitalicia',
      c1_desc: 'Cada jogador que se registra com voce se torna seu cliente de longo prazo.',
      c2_title: 'Comissoes vitalicias',
      c2_desc: 'Voce ganha comissoes recorrentes de jogadores ativos na plataforma.',
      c3_title: 'Renda passiva semanal',
      c3_desc: 'Pagamentos de afiliado podem ser sacados semanalmente, criando fluxo passivo estavel.',
      c4_title: 'Crescimento composto',
      c4_desc: 'Transforme cada cadastro em uma fonte permanente de renda. Se usarem tambem sua agencia de transferencias, o retorno e maior.',
      final_desc: 'Expanda suas fontes de renda. Transforme sua carteira de clientes em um ativo.',
    },
  },
};

const pageType = (() => {
  const path = window.location.pathname;
  if (path.endsWith('/agent.html') || path.endsWith('agent.html')) return 'agent';
  if (path.endsWith('/partner.html') || path.endsWith('partner.html')) return 'partner';
  return 'index';
})();

const getBrowserLang = () => {
  const locale = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(locale) ? locale : 'en';
};

let currentLang = localStorage.getItem(I18N_STORAGE_KEY);
if (!SUPPORTED_LANGS.includes(currentLang)) {
  currentLang = getBrowserLang();
}

const tr = (scope, key) => {
  const value = I18N[currentLang]?.[scope]?.[key];
  if (value !== undefined) return value;
  return I18N.en?.[scope]?.[key] ?? '';
};

const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el && value !== undefined && value !== null) el.textContent = value;
};

const setHTML = (selector, value) => {
  const el = document.querySelector(selector);
  if (el && value) el.innerHTML = value;
};

const setAttr = (selector, attr, value) => {
  const el = document.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
};

let updateCalculator = null;
let refreshContactMethodUi = null;

const applyTranslations = () => {
  document.documentElement.lang = currentLang;

  const title = tr(pageType, 'title');
  if (title) document.title = title;

  const metaDescription = document.querySelector('meta[name="description"]');
  const desc = tr(pageType, 'description');
  if (metaDescription && desc) metaDescription.setAttribute('content', desc);

  setText('.menu-btn', tr('common', 'menu_button'));
  setAttr('.menu-btn', 'aria-label', tr('common', 'menu_aria'));

  setText('.nav a:nth-child(1)', tr('common', 'nav_about'));
  setText('.nav a:nth-child(2)', tr('common', 'nav_agent'));
  setText('.nav a:nth-child(3)', tr('common', 'nav_partner'));

  setAttr('.lang-switch', 'aria-label', tr('common', 'lang_selector_aria'));
  setAttr('.topbar-contact', 'aria-label', tr('common', 'contact_aria'));

  const topbarTexts = document.querySelectorAll('.topbar-chat-text');
  if (topbarTexts[0]) topbarTexts[0].textContent = tr('common', 'telegram');
  if (topbarTexts[1]) topbarTexts[1].textContent = tr('common', 'whatsapp');

  const topbarBtns = document.querySelectorAll('.topbar-chat');
  if (topbarBtns[0]) topbarBtns[0].setAttribute('aria-label', tr('common', 'open_telegram'));
  if (topbarBtns[1]) topbarBtns[1].setAttribute('aria-label', tr('common', 'open_whatsapp'));

  setText('.footer', tr('common', 'footer'));

  if (pageType === 'index') {
    setHTML('.tc-hero-copy h1', tr('index', 'hero_title_html'));
    setText('.tc-hero-copy > p', tr('index', 'hero_desc'));
    setText('.tc-hero-copy .cta', tr('index', 'hero_cta'));
    setText('.hero-subbrand', tr('index', 'hero_subbrand'));

    setText('.tc-metrics article:nth-child(1) span', tr('index', 'metric_deposit'));
    setText('.tc-metrics article:nth-child(2) span', tr('index', 'metric_withdrawal'));
    setText('.tc-metrics article:nth-child(3) span', tr('index', 'metric_support'));
    setText('.tc-metrics article:nth-child(4) span', tr('index', 'metric_window'));

    setHTML('.tc-calc-head h2', tr('index', 'calc_title_html'));
    setText('.tc-calc-head p', tr('index', 'calc_desc'));
    setText('label[for="calc-volume"]', tr('index', 'calc_volume_label'));
    setText('label[for="calc-days"]', tr('index', 'calc_days_label'));
    setText('.tc-calc-title', tr('index', 'calc_title'));
    setText('.tc-calc-sub', tr('index', 'calc_sub'));

    setText('#benefits .tc-head h2', tr('index', 'benefits_title'));
    setText('#benefits .tc-head p', tr('index', 'benefits_desc'));
    setText('#benefits .tc-card:nth-child(1) h3', tr('index', 'b1_title'));
    setText('#benefits .tc-card:nth-child(1) p', tr('index', 'b1_desc'));
    setText('#benefits .tc-card:nth-child(2) h3', tr('index', 'b2_title'));
    setText('#benefits .tc-card:nth-child(2) p', tr('index', 'b2_desc'));
    setText('#benefits .tc-card:nth-child(3) h3', tr('index', 'b3_title'));
    setText('#benefits .tc-card:nth-child(3) p', tr('index', 'b3_desc'));
    setText('#benefits .tc-card:nth-child(4) h3', tr('index', 'b4_title'));
    setText('#benefits .tc-card:nth-child(4) p', tr('index', 'b4_desc'));

    setText('.sports-story .feature-band', tr('index', 'sport_band'));
    setText('.sports-story-grid blockquote', tr('index', 'sport_quote'));
    setText('.sports-story-grid p', tr('index', 'sport_desc'));

    setText('.sponsors-panel > h2', tr('index', 'sponsors_title'));
    setText('.sponsors-box h3', tr('index', 'sponsors_q'));
    setText('.sponsors-box div > p', tr('index', 'sponsors_desc'));
    setText('.sponsors-box .cta', tr('common', 'start_now'));

    setText('#academy .tc-head h2', tr('index', 'academy_title'));
    setText('#academy .tc-head p', tr('index', 'academy_desc'));
    setText('#academy .tc-guide:nth-child(1) h3', tr('index', 'g1_title'));
    setText('#academy .tc-guide:nth-child(1) p', tr('index', 'g1_desc'));
    setText('#academy .tc-guide:nth-child(1) a', tr('index', 'view_guide'));
    setText('#academy .tc-guide:nth-child(2) h3', tr('index', 'g2_title'));
    setText('#academy .tc-guide:nth-child(2) p', tr('index', 'g2_desc'));
    setText('#academy .tc-guide:nth-child(2) a', tr('index', 'view_guide'));
    setText('#academy .tc-guide:nth-child(3) h3', tr('index', 'g3_title'));
    setText('#academy .tc-guide:nth-child(3) p', tr('index', 'g3_desc'));
    setText('#academy .tc-guide:nth-child(3) a', tr('index', 'view_guide'));

    setText('#register .tc-head-row h2', tr('index', 'register_title'));
    setText('#register .tc-head-row p', tr('index', 'register_desc'));
    setText('#register .tc-manager-card h3', tr('index', 'manager_title'));
    setText('#register .tc-manager-btn.is-telegram', tr('common', 'telegram'));
    setText('#register .tc-manager-btn.is-whatsapp', tr('common', 'whatsapp'));
    setAttr('#register .tc-manager-btn.is-telegram', 'aria-label', tr('index', 'register_open_telegram'));
    setAttr('#register .tc-manager-btn.is-whatsapp', 'aria-label', tr('index', 'register_open_whatsapp'));

    setAttr('.chat-widget-btn', 'aria-label', tr('index', 'chat_register_aria'));
  }

  if (pageType === 'agent') {
    setText('.sub-hero-agent .feature-band', tr('agent', 'hero_band'));
    setText('.sub-hero-agent h1', tr('agent', 'hero_title'));
    setText('.sub-hero-agent .cta', tr('common', 'start_now'));
    setText('.sub-question .feature-band', tr('agent', 'question_band'));

    setText('.sub-cards .sub-card:nth-child(1) h3', tr('agent', 'c1_title'));
    setText('.sub-cards .sub-card:nth-child(1) p', tr('agent', 'c1_desc'));
    setText('.sub-cards .sub-card:nth-child(2) h3', tr('agent', 'c2_title'));
    setText('.sub-cards .sub-card:nth-child(2) p', tr('agent', 'c2_desc'));
    setText('.sub-cards .sub-card:nth-child(3) h3', tr('agent', 'c3_title'));
    setText('.sub-cards .sub-card:nth-child(3) p', tr('agent', 'c3_desc'));
    setText('.sub-cards .sub-card:nth-child(4) h3', tr('agent', 'c4_title'));
    setText('.sub-cards .sub-card:nth-child(4) p', tr('agent', 'c4_desc'));

    setText('.agent-support-kicker', tr('agent', 'support_kicker'));
    setText('.agent-support-card h2', tr('agent', 'support_title'));
    setText('.agent-support-card > p:nth-of-type(2)', tr('agent', 'support_desc'));
    setText('.agent-support-points span:nth-child(1)', tr('agent', 'support_p1'));
    setText('.agent-support-points span:nth-child(2)', tr('agent', 'support_p2'));
    setText('.agent-support-points span:nth-child(3)', tr('agent', 'support_p3'));

    setText('.agent-final-cta p', tr('agent', 'final_desc'));
    setText('.agent-final-cta .cta', tr('common', 'start_now'));
  }

  if (pageType === 'partner') {
    setText('.sub-hero-partner .feature-band', tr('partner', 'hero_band'));
    setText('.sub-hero-partner h1', tr('partner', 'hero_title'));
    setText('.sub-hero-partner .sub-intro', tr('partner', 'hero_intro'));
    setText('.sub-hero-partner .cta', tr('common', 'start_now'));
    setText('.sub-question .feature-band', tr('partner', 'question_band'));
    setText('.growth-title', tr('partner', 'growth_title'));
    setText('.growth-subtitle', tr('partner', 'growth_subtitle'));
    setText('.growth-axis-x span:nth-child(1)', tr('partner', 'growth_m1'));
    setText('.growth-axis-x span:nth-child(2)', tr('partner', 'growth_m2'));
    setText('.growth-axis-x span:nth-child(3)', tr('partner', 'growth_m3'));
    setText('.growth-axis-x span:nth-child(4)', tr('partner', 'growth_m6'));
    setText('.growth-points span:nth-child(1)', tr('partner', 'growth_p1'));
    setText('.growth-points span:nth-child(2)', tr('partner', 'growth_p2'));
    setText('.growth-points span:nth-child(3)', tr('partner', 'growth_p3'));

    setText('.sub-cards .sub-card:nth-child(1) h3', tr('partner', 'c1_title'));
    setText('.sub-cards .sub-card:nth-child(1) p', tr('partner', 'c1_desc'));
    setText('.sub-cards .sub-card:nth-child(2) h3', tr('partner', 'c2_title'));
    setText('.sub-cards .sub-card:nth-child(2) p', tr('partner', 'c2_desc'));
    setText('.sub-cards .sub-card:nth-child(3) h3', tr('partner', 'c3_title'));
    setText('.sub-cards .sub-card:nth-child(3) p', tr('partner', 'c3_desc'));
    setText('.sub-cards .sub-card:nth-child(4) h3', tr('partner', 'c4_title'));
    setText('.sub-cards .sub-card:nth-child(4) p', tr('partner', 'c4_desc'));

    setText('.agent-final-cta p', tr('partner', 'final_desc'));
    setText('.agent-final-cta .cta', tr('common', 'start_now'));
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === currentLang);
  });

  if (typeof updateCalculator === 'function') {
    updateCalculator();
  }

  if (typeof refreshContactMethodUi === 'function') {
    refreshContactMethodUi();
  }
};

const langButtons = document.querySelectorAll('.lang-btn');
if (langButtons.length) {
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextLang = btn.dataset.lang;
      if (!SUPPORTED_LANGS.includes(nextLang) || nextLang === currentLang) return;
      currentLang = nextLang;
      localStorage.setItem(I18N_STORAGE_KEY, currentLang);
      applyTranslations();
    });
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((item) => observer.observe(item));

const heroMotion = document.querySelector('.hero-motion');
const floatInnerItems = heroMotion ? heroMotion.querySelectorAll('.float-inner') : [];

if (heroMotion && floatInnerItems.length && window.matchMedia('(pointer: fine)').matches) {
  const maxOffset = 16;

  const depthByType = (item) => {
    if (item.closest('.coin')) return 0.45;
    if (item.closest('.ball')) return 1;
    if (item.closest('.mma-glove')) return 0.85;
    if (item.closest('.football')) return 0.75;
    return 0.7;
  };

  heroMotion.addEventListener('mousemove', (event) => {
    const rect = heroMotion.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    floatInnerItems.forEach((item) => {
      const depth = depthByType(item);
      item.style.transform = `translate(${(nx * maxOffset * depth).toFixed(2)}px, ${(ny * maxOffset * depth).toFixed(2)}px)`;
    });
  });

  heroMotion.addEventListener('mouseleave', () => {
    floatInnerItems.forEach((item) => {
      item.style.transform = 'translate(0px, 0px)';
    });
  });
}

const calcVolume = document.getElementById('calc-volume');
const calcDays = document.getElementById('calc-days');
const calcVolumeValue = document.getElementById('calc-volume-value');
const calcDaysValue = document.getElementById('calc-days-value');
const calcResult = document.getElementById('calc-result');

if (calcVolume && calcDays && calcVolumeValue && calcDaysValue && calcResult) {
  const formatMoney = (value) => `$${Math.round(value).toLocaleString('en-US')}`;
  const commissionRate = 0.08;

  updateCalculator = () => {
    const volume = Number(calcVolume.value) || 0;
    const days = Number(calcDays.value) || 0;
    const result = volume * days * commissionRate;

    calcVolumeValue.textContent = formatMoney(volume);
    calcDaysValue.textContent = `${days} ${days === 1 ? tr('common', 'day_one') : tr('common', 'day_many')}`;
    calcResult.textContent = formatMoney(result);
  };

  calcVolume.addEventListener('input', updateCalculator);
  calcDays.addEventListener('input', updateCalculator);
}

const growthAmount = document.getElementById('growthAmount');
if (growthAmount) {
  const cycleMs = 4200;
  const targetAmount = 2700;
  const formatMoney = (value) => `$${Math.round(value).toLocaleString('en-US')}`;
  const easeOutCubic = (t) => 1 - (1 - t) ** 3;

  const animateGrowthAmount = (timestamp) => {
    const progress = (timestamp % cycleMs) / cycleMs;
    const amount = targetAmount * easeOutCubic(progress);
    growthAmount.textContent = formatMoney(amount);
    window.requestAnimationFrame(animateGrowthAmount);
  };

  window.requestAnimationFrame(animateGrowthAmount);
}

let selectedMethod = 'telegram';
const methodButtons = document.querySelectorAll('.tc-method');
const contactLabel = document.getElementById('contact-input-label');
const contactInput = document.getElementById('input-contact');

const getMethodMap = () => ({
  telegram: {
    label: tr('common', 'contact_telegram_label'),
    placeholder: tr('common', 'contact_telegram_placeholder'),
  },
  whatsapp: {
    label: tr('common', 'contact_whatsapp_label'),
    placeholder: tr('common', 'contact_whatsapp_placeholder'),
  },
  phone: {
    label: tr('common', 'contact_phone_label'),
    placeholder: tr('common', 'contact_phone_placeholder'),
  },
});

refreshContactMethodUi = () => {
  if (!contactLabel || !contactInput) return;
  const methodMap = getMethodMap();
  const config = methodMap[selectedMethod] || methodMap.telegram;
  contactLabel.textContent = config.label;
  contactInput.placeholder = config.placeholder;
};

if (methodButtons.length && contactLabel && contactInput) {
  methodButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      methodButtons.forEach((item) => item.classList.remove('active'));
      btn.classList.add('active');
      selectedMethod = btn.dataset.method || 'telegram';
      refreshContactMethodUi();
    });
  });
}

const submitButton = document.getElementById('submitApplication');
if (submitButton) {
  submitButton.addEventListener('click', () => {
    const name = document.getElementById('input-name');
    const contact = document.getElementById('input-contact');
    const lang = document.getElementById('input-lang');

    if (!name || !contact || !lang || !name.value.trim() || !contact.value.trim()) {
      window.alert(tr('common', 'fill_required'));
      return;
    }

    const message = [
      '*NEW AGENT APPLICATION*',
      '',
      `Name: ${name.value.trim()}`,
      `Method: ${selectedMethod.toUpperCase()}`,
      `Contact: ${contact.value.trim()}`,
      `Language: ${lang.value}`,
    ].join('\n');

    window.open(`https://wa.me/79154237269?text=${encodeURIComponent(message)}`, '_blank');
  });
}

// Remove light checkerboard-like background from selected images.
const keyImages = document.querySelectorAll('img.keyed-image');

const cleanupImageBackground = (img) => {
  const source = new Image();
  source.crossOrigin = 'anonymous';
  source.src = img.currentSrc || img.src;

  source.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = source.width;
    canvas.height = source.height;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.drawImage(source, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const sat = max - min;

      const isLightNeutral = max > 178 && sat < 22;
      if (isLightNeutral) {
        const softness = Math.min(1, Math.max(0, (max - 178) / 45));
        data[i + 3] = Math.round((1 - softness) * 18);
      }
    }

    ctx.putImageData(imageData, 0, 0);
    img.src = canvas.toDataURL('image/png');
  };
};

keyImages.forEach((img) => {
  if (img.complete) cleanupImageBackground(img);
  else img.addEventListener('load', () => cleanupImageBackground(img), { once: true });
});

applyTranslations();
