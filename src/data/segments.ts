export interface SegmentDetail {
  id: string;
  title: string;
  h1: string;
  technicalOverview: string;
  requirements: string[];
  risks: string[];
  systems: string[];
  commonErrors: string[];
  process: string[];
  aiSummary: string;
}

export const segmentsData: SegmentDetail[] = [
  {
    id: "postos",
    title: "Postos de Combustíveis",
    h1: "AVCB para Postos de Combustíveis em Montes Claros",
    aiSummary: "A regularização de postos de combustíveis exige foco total na IT 25 (Líquidos Inflamáveis e Combustíveis). É obrigatório o isolamento de riscos, sistemas de espuma e contenção de vazamentos para evitar explosões e danos ambientais.",
    technicalOverview: "Postos de combustíveis são classificados como edificações de alto risco devido à presença de líquidos inflamáveis. Em Montes Claros, a fiscalização do CBMMG é rigorosa quanto ao distanciamento das bombas e tanques em relação a edificações vizinhas e áreas de grande circulação.",
    requirements: [
      "Conformidade com a IT 25 do CBMMG",
      "Instalação de bacias de contenção",
      "Sistemas de aterramento para descarga de caminhões",
      "Treinamento específico de brigada para inflamáveis"
    ],
    risks: [
      "Explosão por acúmulo de vapores",
      "Incêndio em cascata durante o abastecimento",
      "Contaminação do solo e lençol freático"
    ],
    systems: [
      "Extintores de pó químico seco (PQS) de alta capacidade",
      "Sinalização de proibição de chamas e uso de celulares",
      "Sistemas de interrupção de emergência (botão de pânico)",
      "Iluminação à prova de explosão"
    ],
    commonErrors: [
      "Falta de manutenção em válvulas de segurança",
      "Sinalização desgastada ou ilegível",
      "Tanques sem laudo de estanqueidade atualizado"
    ],
    process: [
      "Vistoria técnica inicial",
      "Elaboração do projeto focado na IT 25",
      "Protocolo no INFOSCIP",
      "Instalação e Vistoria Final"
    ]
  },
  {
    id: "farmacias",
    title: "Farmácias",
    h1: "AVCB para Farmácias em Montes Claros",
    aiSummary: "Farmácias requerem regularização focada em rotas de fuga desimpedidas e controle de carga de incêndio de produtos químicos e inflamáveis leves. A sinalização deve ser clara para o público flutuante.",
    technicalOverview: "Embora muitas farmácias se enquadrem em Projetos Técnicos Simplificados (PTS), a presença de estoques de álcool e cosméticos inflamáveis exige atenção especial ao dimensionamento de extintores e saídas de emergência.",
    requirements: [
      "Dimensionamento de extintores conforme carga de incêndio",
      "Saídas de emergência com largura mínima normativa",
      "Certificação de materiais de acabamento e revestimento"
    ],
    risks: [
      "Rápida propagação de chamas em estoques de papel e plástico",
      "Dificuldade de evacuação em horários de pico",
      "Curto-circuito em sistemas de refrigeração de medicamentos"
    ],
    systems: [
      "Extintores de Água e Pó Químico",
      "Iluminação de emergência em toda a área de vendas",
      "Sinalização fotoluminescente de rotas de fuga"
    ],
    commonErrors: [
      "Obstrução de extintores por gôndolas",
      "Falta de iluminação de emergência no estoque",
      "Portas de saída que abrem para dentro"
    ],
    process: [
      "Análise de área e carga de incêndio",
      "Projeto de sinalização e extintores",
      "Protocolo e Certificação"
    ]
  },
  {
    id: "saude",
    title: "Hospitais e Prontos-Socorros",
    h1: "AVCB para Hospitais em Montes Claros",
    aiSummary: "Ambientes hospitalares exigem conformidade rigorosa com a IT 13, focando na proteção de pacientes acamados. Sistemas de detecção precoce e compartimentação são vitais para garantir tempo de evacuação assistida.",
    technicalOverview: "Hospitais são classificados como ocupações de alto risco devido à carga de incêndio e à dificuldade de locomoção dos ocupantes. A FIREX projeta sistemas que garantem a continuidade operacional e a segurança absoluta dos pacientes.",
    requirements: [
      "Compartimentação horizontal e vertical (IT 09)",
      "Sistemas de detecção e alarme endereçáveis",
      "Controle de gases medicinais (IT 13)",
      "Plano de abandono assistido para pacientes"
    ],
    risks: [
      "Propagação de fumaça em dutos de ventilação",
      "Vazamento de oxigênio alimentando chamas",
      "Pânico em áreas de UTI e centros cirúrgicos"
    ],
    systems: [
      "Rede de hidrantes e sprinklers",
      "Detectores de fumaça a laser (alta sensibilidade)",
      "Portas corta-fogo com fechamento automático",
      "Iluminação de emergência em blocos cirúrgicos"
    ],
    commonErrors: [
      "Portas corta-fogo mantidas abertas por calços",
      "Falta de treinamento de brigada para remoção de macas",
      "Obstrução de rotas de fuga por equipamentos médicos"
    ],
    process: [
      "Auditoria técnica de sistemas existentes",
      "Projeto executivo de alta complexidade",
      "Treinamento de brigada hospitalar",
      "Certificação Final"
    ]
  },
  {
    id: "clinicas",
    title: "Clínicas e Consultórios",
    h1: "AVCB para Clínicas e Consultórios em Montes Claros",
    aiSummary: "Clínicas devem seguir a IT 13, priorizando a evacuação de pessoas com mobilidade reduzida. É essencial o controle de gases medicinais e a compartimentação de áreas de risco.",
    technicalOverview: "Edificações de saúde em Montes Claros exigem um olhar atento à IT 13 do CBMMG. A prioridade é a vida dos pacientes que podem ter dificuldades de locomoção em caso de sinistro.",
    requirements: [
      "Rampas com inclinação normativa",
      "Portas corta-fogo em áreas de internação",
      "Sinalização tátil e visual"
    ],
    risks: [
      "Pânico em áreas de espera lotadas",
      "Vazamento de oxigênio medicinal",
      "Dificuldade de remoção de pacientes acamados"
    ],
    systems: [
      "Alarmes de incêndio endereçáveis",
      "Detectores de fumaça em áreas críticas",
      "Sistemas de hidrantes (dependendo da área)"
    ],
    commonErrors: [
      "Corredores estreitos demais para macas",
      "Falta de brigada de incêndio treinada para evacuação médica",
      "Sinalização de emergência insuficiente"
    ],
    process: [
      "Levantamento de fluxos de evacuação",
      "Projeto técnico detalhado (IT 13)",
      "Aprovação e Treinamento de Equipe"
    ]
  },
  {
    id: "industria",
    title: "Indústrias e Logística",
    h1: "AVCB para Galpões Industriais em Montes Claros",
    aiSummary: "Galpões industriais exigem cálculo hidráulico preciso para hidrantes e sprinklers, conforme IT 19 e 20. A compartimentação e o controle de fumaça são vitais para grandes áreas.",
    technicalOverview: "No Distrito Industrial de Montes Claros, os galpões enfrentam desafios de grandes áreas abertas. O controle de propagação de calor e fumaça é o foco principal dos projetos da FIREX.",
    requirements: [
      "Cálculo hidráulico de rede de hidrantes",
      "Reserva técnica de incêndio (RTI) dimensionada",
      "Compartimentação de grandes áreas"
    ],
    risks: [
      "Colapso estrutural por calor excessivo",
      "Propagação horizontal ultra-rápida",
      "Dificuldade de combate interno pelo Corpo de Bombeiros"
    ],
    systems: [
      "Sprinklers (chuveiros automáticos)",
      "Canhões monitores (em casos específicos)",
      "Sistemas de detecção linear de calor"
    ],
    commonErrors: [
      "Bomba de incêndio com pressão insuficiente",
      "Falta de acesso para viaturas dos Bombeiros",
      "Armazenamento acima da altura permitida pelo projeto"
    ],
    process: [
      "Cálculo de carga de incêndio real",
      "Dimensionamento hidráulico complexo",
      "Execução e Teste de Performance"
    ]
  },
  {
    id: "supermercados",
    title: "Supermercados",
    h1: "AVCB para Supermercados em Montes Claros",
    aiSummary: "Supermercados combinam alta carga de incêndio em estoques com grande fluxo de público. Exigem sistemas robustos de alarme, hidrantes e rotas de fuga amplas.",
    technicalOverview: "O desafio dos supermercados é a dualidade entre a área de vendas (público) e o depósito (carga de incêndio). A FIREX projeta soluções que garantem a segurança sem interferir na logística.",
    requirements: [
      "Sistemas de hidrantes em toda a edificação",
      "Alarmes de incêndio com acionadores manuais",
      "Brigada de incêndio profissional"
    ],
    risks: [
      "Pânico generalizado em caso de alarme falso ou real",
      "Incêndio em depósitos de alta densidade",
      "Falha em sistemas de refrigeração gerando curtos"
    ],
    systems: [
      "Rede de hidrantes e mangotinhos",
      "Iluminação de aclaramento e balizamento",
      "Sinalização de saídas de emergência iluminadas"
    ],
    commonErrors: [
      "Saídas de emergência trancadas ou obstruídas",
      "Extintores vencidos ou escondidos atrás de mercadorias",
      "Falta de treinamento da equipe de frente de caixa"
    ],
    process: [
      "Análise de fluxo de público",
      "Projeto de hidrantes e alarmes",
      "Vistoria e Treinamento"
    ]
  },
  {
    id: "escolas",
    title: "Escolas",
    h1: "AVCB para Escolas em Montes Claros",
    aiSummary: "A regularização escolar foca na evacuação rápida de crianças e jovens. Exige alarmes audíveis em todas as salas, sinalização lúdica/clara e treinamento constante de abandono.",
    technicalOverview: "Escolas em Montes Claros devem ser ambientes seguros por excelência. O projeto deve prever a evacuação total em poucos minutos, considerando a idade dos alunos.",
    requirements: [
      "Alarmes de incêndio com som distinto",
      "Sinalização fotoluminescente em altura adequada",
      "Plano de abandono de edificação"
    ],
    risks: [
      "Dificuldade de controle de crianças em pânico",
      "Incêndios em laboratórios ou cantinas",
      "Obstrução de corredores por mobiliário escolar"
    ],
    systems: [
      "Extintores de fácil acesso para adultos",
      "Iluminação de emergência em escadas e corredores",
      "Portas corta-fogo em laboratórios"
    ],
    commonErrors: [
      "Grades em janelas impedindo ventilação/fuga",
      "Falta de simulados de incêndio periódicos",
      "Sinalização em locais muito altos"
    ],
    process: [
      "Mapeamento de salas e ocupação",
      "Projeto de rotas de fuga e alarmes",
      "Simulado de abandono assistido"
    ]
  },
  {
    id: "igrejas",
    title: "Igrejas e Templos",
    h1: "AVCB para Igrejas e Templos em Montes Claros",
    aiSummary: "Igrejas exigem atenção às saídas de emergência proporcionais à lotação máxima. O uso de materiais combustíveis em decorações e carpetes deve ser controlado.",
    technicalOverview: "Templos religiosos costumam ter grandes vãos livres e alta concentração de pessoas. A regularização deve focar na largura das portas de saída e na resistência ao fogo dos materiais internos.",
    requirements: [
      "Cálculo de lotação máxima permitida",
      "Saídas de emergência com barras antipânico",
      "Controle de materiais de acabamento (CMAR)"
    ],
    risks: [
      "Pânico em grandes aglomerações",
      "Incêndios causados por velas ou sistemas de som",
      "Dificuldade de evacuação de idosos"
    ],
    systems: [
      "Iluminação de emergência potente",
      "Sinalização de saída visível de qualquer ponto",
      "Extintores estrategicamente posicionados"
    ],
    commonErrors: [
      "Lotação acima do permitido pelo AVCB",
      "Uso de cortinas e carpetes sem tratamento antichama",
      "Saídas de emergência reduzidas por reformas"
    ],
    process: [
      "Cálculo de público e saídas",
      "Projeto de sinalização e CMAR",
      "Aprovação e Certificação"
    ]
  },
  {
    id: "academias",
    title: "Academias",
    h1: "AVCB para Academias em Montes Claros",
    aiSummary: "Academias requerem regularização com foco em rotas de fuga entre equipamentos e ventilação adequada. A sinalização deve ser visível mesmo em ambientes com música e luzes baixas.",
    technicalOverview: "Academias em Montes Claros muitas vezes ocupam espaços adaptados. A FIREX garante que a disposição dos aparelhos não comprometa a segurança dos alunos.",
    requirements: [
      "Espaçamento mínimo entre equipamentos para fuga",
      "Sinalização de emergência em áreas de treino",
      "Extintores para equipamentos elétricos (CO2)"
    ],
    risks: [
      "Curto-circuito em esteiras e aparelhos elétricos",
      "Quedas durante evacuação apressada",
      "Dificuldade de audição do alarme devido à música alta"
    ],
    systems: [
      "Alarmes visuais (strobe lights) além de sonoros",
      "Iluminação de emergência em vestiários e salas de aula",
      "Extintores de CO2 e PQS"
    ],
    commonErrors: [
      "Aparelhos obstruindo extintores ou saídas",
      "Falta de sinalização em salas de ginástica coletiva",
      "Fiação exposta ou sobrecarregada"
    ],
    process: [
      "Layout de segurança de equipamentos",
      "Projeto de alarmes e sinalização",
      "Vistoria e Liberação"
    ]
  },
  {
    id: "restaurantes",
    title: "Restaurantes",
    h1: "AVCB para Restaurantes em Montes Claros",
    aiSummary: "Restaurantes exigem proteção especial em cozinhas (IT 38). Sistemas de supressão em coifas e extintores classe K são fundamentais para evitar incêndios em gordura.",
    technicalOverview: "O coração do risco em restaurantes é a cozinha. A FIREX aplica as normas de proteção para cozinhas profissionais, garantindo que um fogo em uma fritadeira não destrua o negócio.",
    requirements: [
      "Sistema de supressão fixa em coifas",
      "Extintores classe K para óleos e gorduras",
      "Central de GLP externa e sinalizada"
    ],
    risks: [
      "Incêndio em dutos de gordura acumulada",
      "Vazamento de gás de cozinha (GLP)",
      "Pânico na área de mesas"
    ],
    systems: [
      "Detecção de gás com corte automático",
      "Sinalização de saídas de emergência",
      "Iluminação de emergência na área de público e cozinha"
    ],
    commonErrors: [
      "Falta de limpeza periódica em coifas",
      "Botijões de gás dentro da cozinha",
      "Obstrução de saídas por mesas extras"
    ],
    process: [
      "Vistoria técnica de cozinha e gás",
      "Projeto de supressão e saídas",
      "Aprovação e Treinamento de Brigada"
    ]
  },
  {
    id: "padarias",
    title: "Padarias",
    h1: "AVCB para Padarias em Montes Claros",
    aiSummary: "Padarias combinam riscos de cozinhas industriais com áreas de atendimento ao público. O foco deve ser na proteção dos fornos, central de gás e rotas de fuga desimpedidas.",
    technicalOverview: "Padarias são estabelecimentos complexos que operam com fornos de alta temperatura e, frequentemente, com grandes estoques de materiais combustíveis (farinha, embalagens). A regularização em Montes Claros exige atenção à IT 38 e IT 08.",
    requirements: [
      "Isolamento térmico de fornos e dutos de exaustão",
      "Central de GLP em conformidade com a IT 23",
      "Extintores dimensionados para a área de produção e vendas",
      "Sinalização de emergência clara para clientes e funcionários"
    ],
    risks: [
      "Superaquecimento de fornos e sistemas elétricos",
      "Explosão por vazamento de gás em áreas de produção",
      "Incêndio em depósitos de embalagens e insumos secos"
    ],
    systems: [
      "Extintores de PQS e CO2",
      "Iluminação de emergência em áreas de circulação",
      "Sinalização de rota de fuga e saídas",
      "Detectores de fumaça em áreas de estoque"
    ],
    commonErrors: [
      "Fornos instalados muito próximos a materiais combustíveis",
      "Fiação elétrica exposta ou sobrecarregada na área de produção",
      "Central de gás sem proteção ou em local inadequado"
    ],
    process: [
      "Análise de carga de incêndio e riscos térmicos",
      "Projeto de proteção de fornos e rede de gás",
      "Protocolo e Certificação junto ao CBMMG"
    ]
  },
  {
    id: "condominios",
    title: "Condomínios",
    h1: "AVCB para Condomínios em Montes Claros",
    aiSummary: "Condomínios residenciais e comerciais exigem AVCB atualizado para validade de seguros e segurança dos moradores. O foco é em hidrantes, alarmes, iluminação de emergência e brigada.",
    technicalOverview: "A responsabilidade do síndico em Montes Claros é civil e criminal quanto à segurança contra incêndio. Condomínios exigem manutenção rigorosa de sistemas complexos como bombas de incêndio e geradores.",
    requirements: [
      "Manutenção mensal de extintores e hidrantes",
      "Teste de performance da bomba de incêndio",
      "Treinamento de brigada de incêndio para moradores e funcionários",
      "Laudo de estanqueidade da rede de gás canalizado"
    ],
    risks: [
      "Dificuldade de evacuação em edifícios altos",
      "Sistemas de segurança inoperantes por falta de manutenção",
      "Incêndios em garagens com propagação entre veículos",
      "Pânico em escadarias sem iluminação de emergência"
    ],
    systems: [
      "Rede de hidrantes e mangotinhos",
      "Alarme de incêndio com acionadores em todos os andares",
      "Portas corta-fogo em escadarias de emergência",
      "Sistemas de pressurização de escadas (se aplicável)"
    ],
    commonErrors: [
      "Portas corta-fogo mantidas abertas com calços",
      "Bombas de incêndio desligadas ou sem manutenção",
      "Extintores com carga vencida ou sem sinalização"
    ],
    process: [
      "Vistoria técnica predial completa",
      "Atualização de projeto ou renovação de AVCB",
      "Treinamento de Brigada e Simulado de Abandono"
    ]
  }
];
