export type Language = "pt" | "en";

type Project = {
  eyebrow: string;
  title: string;
  summary: string;
  problem: string;
  build: string[];
  skills: string[];
  stack: string[];
  impact: string;
  architecture: string[];
  metrics: Array<{
    value: string;
    label: string;
  }>;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type Content = {
  nav: {
    projects: string;
    skills: string;
    profile: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    location: string;
    title: string;
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    proofTitle: string;
    proofItems: string[];
  };
  about: {
    title: string;
    body: string[];
    highlights: Array<{
      title: string;
      text: string;
    }>;
  };
  skills: {
    title: string;
    intro: string;
    groups: SkillGroup[];
  };
  projects: {
    title: string;
    intro: string;
    labels: {
      problem: string;
      build: string;
      skills: string;
      stack: string;
      impact: string;
      architecture: string;
    };
    items: Project[];
  };
  differentials: {
    title: string;
    intro: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  help: {
    title: string;
    intro: string;
    items: string[];
  };
  contact: {
    title: string;
    intro: string;
    email: string;
    github: string;
    linkedin: string;
    whatsapp: string;
  };
  footer: {
    role: string;
  };
};

export const content: Record<Language, Content> = {
  pt: {
    nav: {
      projects: "Cases",
      skills: "Stack",
      profile: "Perfil",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Portfólio profissional",
      location: "Campo Grande/MS",
      title: "Desenvolvedor Full Stack | Automação | Sistemas Operacionais",
      headline: "Eu transformo operação em software que realmente roda.",
      description:
        "Construo projetos internos, APIs, dashboards e fluxos que substituem improviso por controle — do layout à regra de negócio no backend.",
      primaryCta: "Ver cases reais",
      secondaryCta: "Falar comigo",
      proofTitle: "Entregas que já desenvolvi",
      proofItems: [
        "Plataformas SaaS com múltiplos perfis, permissões e módulos operacionais integrados",
        "Soluções de backoffice, APIs, integrações externas e fluxos com agentes de IA",
        "Interfaces construídas para uso contínuo, com foco em clareza, fluxo e manutenção",
      ],
    },
    about: {
      title: "Perfil",
      body: [
        "Sou desenvolvedor júnior com perfil de construção real: gosto de pegar uma necessidade operacional, entender a lógica por trás dela e transformar isso em produto utilizável.",
        "Tenho facilidade para aprender rápido, conectar frontend com backend e pensar além da tela — fluxo, regra, permissão, dado, integração e manutenção também fazem parte da solução.",
      ],
      highlights: [
        {
          title: "Produto antes de ornamento",
          text: "Penso primeiro em uso, clareza e resultado; o visual entra para reforçar a experiência, não para mascarar o sistema.",
        },
        {
          title: "Execução de ponta a ponta",
          text: "Consigo sair da interface e entrar em API, banco, autenticação, regras e deploy sem tratar cada parte como mundo separado.",
        },
        {
          title: "Aprendizado aplicado",
          text: "Aprendo ferramenta nova para resolver problema real, não para colecionar tecnologia no currículo.",
        },
      ],
    },
    skills: {
      title: "Stack",
      intro:
        "Ferramentas que uso para construir interfaces, regras de negócio, integrações e sistemas operacionais completos.",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Express", "Laravel", "APIs REST"],
        },
        {
          title: "Banco de dados",
          items: ["PostgreSQL", "SQLite", "Modelagem de dados"],
        },
        {
          title: "Automação",
          items: [
            "n8n",
            "Webhooks",
            "Integrações",
            "Agentes de IA",
            "Fluxos automatizados",
          ],
        },
        {
          title: "Ferramentas",
          items: ["Git", "GitHub", "Docker", "Deploy"],
        },
      ],
    },
    projects: {
      title: "Cases reais",
      intro:
        "Projetos que mostram como penso produto, operação e engenharia ao mesmo tempo — com exemplos concretos do que já construí.",
      labels: {
        problem: "Problema",
        build: "O que construí",
        skills: "O que este projeto prova",
        stack: "Stack",
        impact: "Impacto",
        architecture: "Decisões técnicas",
      },
      items: [
        {
          eyebrow: "Case 01",
          title: "Gestão de Restaurantes",
          summary:
            "Uma plataforma para administrar estabelecimentos, lojas e rotinas operacionais em uma única base.",
          problem:
            "A operação precisava conectar administração, PDV, cozinha, cardápio público e fidelidade sem depender de fluxos separados.",
          build: [
            "Painel master para estabelecimentos e lojas",
            "PDV com comandas, descontos e vínculo de clientes",
            "Display de cozinha em tempo real com controle de status",
            "Cardápio público, editor e módulo de fidelidade",
          ],
          skills: [
            "Modelagem multi-tenant",
            "Autenticação e permissões por perfil",
            "APIs REST com regras de negócio",
            "Interfaces para operação em tempo real",
          ],
          stack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "JWT"],
          impact:
            "Mostra domínio de produto operacional completo, com módulos que conversam entre si e resolvem o dia a dia do negócio.",
          architecture: [
            "Separação entre módulos públicos e operacionais",
            "Rotas dedicadas para entidades, usuários e fidelidade",
            "Controle por perfil e regras específicas por fluxo",
          ],
          metrics: [
            { value: "5+", label: "módulos operacionais" },
            { value: "multi", label: "perfis e permissões" },
            { value: "real-time", label: "cozinha e comandas" },
          ],
        },
        {
          eyebrow: "Case 02",
          title: "Gestão de Barbearias",
          summary:
            "Uma aplicação configurável para unir site público, agenda, operação interna e gestão do próprio SaaS.",
          problem:
            "A barbearia precisava centralizar experiência do cliente, agenda por profissional e controle administrativo em uma estrutura flexível.",
          build: [
            "Áreas separadas para cliente, admin e developer",
            "Agenda por barbeiro com bloqueios e disponibilidade",
            "Configuração de identidade visual, planos, moeda e módulos",
            "Integrações por WhatsApp, webhook e automações",
          ],
          skills: [
            "Arquitetura baseada em perfis",
            "Lógica de agendamento",
            "Configuração dinâmica de produto",
            "Integrações e automações externas",
          ],
          stack: ["React", "Vite", "Node.js", "Express", "JWT", "Webhooks"],
          impact:
            "Demonstra visão de produto, customização e capacidade de construir software que atende tanto operação quanto gestão.",
          architecture: [
            "Separação clara entre cliente, admin e developer",
            "Configuração centralizada para tema, planos e módulos",
            "Disponibilidade por profissional com regras de conflito",
          ],
          metrics: [
            { value: "3", label: "áreas de acesso" },
            { value: "smart", label: "agenda por barbeiro" },
            { value: "config", label: "produto customizável" },
          ],
        },
        {
          eyebrow: "Case 03",
          title: "Puzzle Kids",
          summary:
            "Uma plataforma educacional com jogos por faixa etária, níveis e múltiplas experiências interativas.",
          problem:
            "O desafio era organizar diferentes tipos de atividade em uma experiência simples para crianças, mas com lógica suficiente para variar por idade e dificuldade.",
          build: [
            "Fluxo de navegação por idade e nível",
            "Jogos de memória, lógica, capitais, inglês, quebra-cabeça e outros",
            "Backend para registro e consulta de pontuações",
            "Persistência em SQLite para ranking de desempenho",
          ],
          skills: [
            "Lógica de estado e navegação",
            "TypeScript aplicado em componentes",
            "Experiência interativa",
            "Backend simples com persistência",
          ],
          stack: ["React", "TypeScript", "Vite", "Express", "SQLite"],
          impact:
            "Mostra amplitude de construção: além de sistemas operacionais, também consigo criar experiências digitais interativas com lógica própria.",
          architecture: [
            "Estados de tela controlando navegação entre jogos",
            "Separação entre experiência do usuário e API de pontuação",
            "Persistência enxuta para ranking e progresso",
          ],
          metrics: [
            { value: "10+", label: "experiências" },
            { value: "TS", label: "componentes tipados" },
            { value: "SQLite", label: "ranking local" },
          ],
        },
      ],
    },
    differentials: {
      title: "Como trabalho",
      intro:
        "Não tento parecer sênior no texto; tento mostrar como penso quando pego um problema real.",
      items: [
        {
          title: "Visão de produto",
          text: "Entendo a operação antes de decidir a tela, a API ou a automação.",
        },
        {
          title: "Pensamento prático",
          text: "Prefiro uma solução clara e utilizável a uma arquitetura bonita que não resolve o dia a dia.",
        },
        {
          title: "Organização técnica",
          text: "Separação de responsabilidades, código legível e estrutura pensada para evolução.",
        },
        {
          title: "Automação com propósito",
          text: "Uso integrações, agentes e fluxos para remover trabalho repetitivo, conectar sistemas e reduzir erro operacional.",
        },
      ],
    },
    help: {
      title: "Onde gero valor",
      intro:
        "Posso contribuir diretamente em frentes que impactam operação, visibilidade e produtividade.",
      items: [
        "Sistemas internos",
        "Dashboards",
        "APIs",
        "Integrações",
        "Agentes de IA",
        "Automações",
        "Manutenção e evolução",
      ],
    },
    contact: {
      title: "Contato",
      intro:
        "Se a sua empresa procura alguém que já pensa em produto, operação e entrega desde cedo, podemos conversar sem compromisso, agende seu horário.",
      email: "E-mail",
      github: "GitHub",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
    },
    footer: {
      role: "Desenvolvedor Full Stack | Automação",
    },
  },
  en: {
    nav: {
      projects: "Cases",
      skills: "Stack",
      profile: "Profile",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Professional portfolio",
      location: "Campo Grande, Brazil",
      title: "Full Stack Developer | Automation | Operational Systems",
      headline: "I turn operations into software that actually runs.",
      description:
        "I build internal products, APIs, dashboards, and workflows that replace improvisation with control — from interface to backend business logic.",
      primaryCta: "View real cases",
      secondaryCta: "Contact me",
      proofTitle: "Deliveries I have already developed",
      proofItems: [
        "SaaS platforms with multiple roles, permissions, and integrated operational modules",
        "Backoffice solutions, APIs, external integrations, and AI-agent workflows",
        "Interfaces built for continuous use, with focus on clarity, flow, and maintainability",
      ],
    },
    about: {
      title: "Profile",
      body: [
        "I am a junior developer with a real-building mindset: I like taking an operational need, understanding the logic behind it, and turning it into usable software.",
        "I learn quickly, connect frontend and backend comfortably, and think beyond the screen — flow, permissions, data, integrations, and maintainability are part of the solution too.",
      ],
      highlights: [
        {
          title: "Product before decoration",
          text: "I prioritize use, clarity, and outcome; visuals exist to strengthen the experience, not to hide weak systems.",
        },
        {
          title: "End-to-end execution",
          text: "I move from interface to API, database, authentication, rules, and deployment without treating each part as a separate world.",
        },
        {
          title: "Applied learning",
          text: "I learn tools to solve real problems, not to collect buzzwords on a résumé.",
        },
      ],
    },
    skills: {
      title: "Stack",
      intro:
        "Tools I use to build interfaces, business logic, integrations, and complete operational systems.",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Express", "Laravel", "REST APIs"],
        },
        {
          title: "Databases",
          items: ["PostgreSQL", "SQLite", "Data modeling"],
        },
        {
          title: "Automation",
          items: [
            "n8n",
            "Webhooks",
            "Integrations",
            "AI agents",
            "Automated workflows",
          ],
        },
        {
          title: "Tools",
          items: ["Git", "GitHub", "Docker", "Deployment"],
        },
      ],
    },
    projects: {
      title: "Real cases",
      intro:
        "Projects that show how I think about product, operations, and engineering at the same time — with concrete examples of what I have already built.",
      labels: {
        problem: "Problem",
        build: "What I built",
        skills: "What this project proves",
        stack: "Stack",
        impact: "Impact",
        architecture: "Technical decisions",
      },
      items: [
        {
          eyebrow: "Case 01",
          title: "Restaurant Operations SaaS",
          summary:
            "A platform to manage establishments, stores, and operational routines from one system.",
          problem:
            "The operation needed to connect admin, POS, kitchen, public menu, and loyalty without fragmented workflows.",
          build: [
            "Master panel for establishments and stores",
            "POS with tabs, discounts, and customer linking",
            "Real-time kitchen display with status control",
            "Public menu, editor, and loyalty module",
          ],
          skills: [
            "Multi-tenant data modeling",
            "Role-based authentication",
            "REST APIs with business rules",
            "Interfaces for real-time operations",
          ],
          stack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "JWT"],
          impact:
            "Shows complete operational product thinking, with modules that work together to solve daily business needs.",
          architecture: [
            "Separation between public and operational modules",
            "Dedicated routes for entities, users, and loyalty",
            "Role-based control with flow-specific rules",
          ],
          metrics: [
            { value: "5+", label: "operational modules" },
            { value: "multi", label: "roles and permissions" },
            { value: "real-time", label: "kitchen and tabs" },
          ],
        },
        {
          eyebrow: "Case 02",
          title: "Barbershop Management SaaS",
          summary:
            "A configurable application combining public website, scheduling, internal operations, and SaaS administration.",
          problem:
            "The business needed to centralize customer experience, professional scheduling, and administrative control in one flexible structure.",
          build: [
            "Separate client, admin, and developer areas",
            "Per-barber scheduling with blocks and availability",
            "Configurable identity, plans, currency, and modules",
            "WhatsApp, webhook, and automation integrations",
          ],
          skills: [
            "Role-based architecture",
            "Scheduling logic",
            "Configuration-driven product design",
            "External integrations and automations",
          ],
          stack: ["React", "Vite", "Node.js", "Express", "JWT", "Webhooks"],
          impact:
            "Demonstrates product vision, customization, and the ability to build software for both operations and management.",
          architecture: [
            "Clear separation between client, admin, and developer",
            "Centralized configuration for theme, plans, and modules",
            "Per-professional availability with conflict rules",
          ],
          metrics: [
            { value: "3", label: "access areas" },
            { value: "smart", label: "per-barber scheduling" },
            { value: "config", label: "customizable product" },
          ],
        },
        {
          eyebrow: "Case 03",
          title: "Puzzle Kids",
          summary:
            "An educational platform with age-based games, levels, and multiple interactive experiences.",
          problem:
            "The challenge was organizing different activity types into a simple experience for children while still supporting age and difficulty logic.",
          build: [
            "Navigation flow by age and level",
            "Memory, logic, capitals, English, puzzle, and other games",
            "Backend for storing and reading scores",
            "SQLite persistence for performance rankings",
          ],
          skills: [
            "State-driven navigation logic",
            "TypeScript in components",
            "Interactive experience design",
            "Simple backend with persistence",
          ],
          stack: ["React", "TypeScript", "Vite", "Express", "SQLite"],
          impact:
            "Shows range: beyond operational systems, I can also build interactive digital experiences with their own internal logic.",
          architecture: [
            "Screen-state control across game flows",
            "Separation between UX and scoring API",
            "Lean persistence for rankings and progress",
          ],
          metrics: [
            { value: "10+", label: "experiences" },
            { value: "TS", label: "typed components" },
            { value: "SQLite", label: "local ranking" },
          ],
        },
      ],
    },
    differentials: {
      title: "How I work",
      intro:
        "I do not try to sound senior in the copy; I try to show how I think when handling a real problem.",
      items: [
        {
          title: "Product thinking",
          text: "I understand the operation before deciding on the screen, API, or automation.",
        },
        {
          title: "Practical thinking",
          text: "I prefer a clear, usable solution over a beautiful architecture that misses daily needs.",
        },
        {
          title: "Technical organization",
          text: "Separation of concerns, readable code, and a structure designed to evolve.",
        },
        {
          title: "Purposeful automation",
          text: "I use integrations, agents, and workflows to remove repetitive work, connect systems, and reduce operational errors.",
        },
      ],
    },
    help: {
      title: "Where I add value",
      intro:
        "I can contribute directly in areas that improve operations, visibility, and productivity.",
      items: [
        "Internal systems",
        "Dashboards",
        "APIs",
        "Integrations",
        "AI agents",
        "Automations",
        "Maintenance and evolution",
      ],
    },
    contact: {
      title: "Contact",
      intro:
        "If your company is looking for someone who already thinks in terms of product, operations, and delivery early on, let's talk.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
    },
    footer: {
      role: "Full Stack Developer | Automation",
    },
  },
};
