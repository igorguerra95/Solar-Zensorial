import { SpecialtyArea, FaqItem } from '../types';

export const SPECIALTY_AREAS: SpecialtyArea[] = [
  {
    id: 'ansiedade',
    number: '01',
    title: 'Ansiedade & Síndrome do Pânico',
    subtitle: 'Reorganização do sistema de alerta e serenidade mental',
    description: 'Quando os pensamentos aceleram e o corpo responde com tensão ou aperto no peito, a psicoterapia oferece ferramentas baseadas em evidências para regular o sistema nervoso autônomo e resgatar o controle da sua rotina.',
    signs: [
      'Preocupação crônica com cenários futuros e catastrofização',
      'Taquicardia, falta de ar e sensação iminente de perda de controle',
      'Dificuldade constante para relaxar ou desligar os pensamentos à noite',
      'Evitação de compromissos sociais ou profissionais por apreensão'
    ],
    approach: 'Terapia Cognitivo-Comportamental aliada a técnicas de desativação fisiológica e mindfulness somático.'
  },
  {
    id: 'depressao',
    number: '02',
    title: 'Depressão & Sentido de Vida',
    subtitle: 'Ressignificação da dor e reencontro com o entusiasmo',
    description: 'Um espaço seguro e acolhedor para compreender a raiz do desânimo persistente, superar o isolamento e reconstruir, passo a passo, o vínculo com os próprios desejos, valores e potência vital.',
    signs: [
      'Sensação de vazio ou tristeza contínua que não se dissipa',
      'Perda de interesse por atividades que antes traziam satisfação',
      'Sensação constante de fadiga corporal e falta de energia mental',
      'Sentimento de inadequação pessoal ou desesperança quanto ao futuro'
    ],
    approach: 'Psicoterapia Humanista e Ativação Comportamental voltadas para o resgate de propósito e vitalidade.'
  },
  {
    id: 'casal',
    number: '03',
    title: 'Terapia de Casal & Relações',
    subtitle: 'Comunicação empática, intimidade e resolução de impasses',
    description: 'Espaço neutro e mediado para casais que buscam superar desgastes cotidianos, alinhar expectativas, curar feridas relacionais ou tomar decisões maduras sobre o futuro do relacionamento.',
    signs: [
      'Ciclos repetitivos de discussões que terminam em mágoa ou silêncio',
      'Distanciamento afetivo, perda de cumplicidade ou frieza na intimidade',
      'Dificuldade em lidar com transições (filhos, carreira, finanças)',
      'Quebra de confiança que demanda reconciliação e cuidado consciente'
    ],
    approach: 'Terapia Sistêmica Relacional focada em desarmar defesas e construir diálogo transparente.'
  },
  {
    id: 'burnout',
    number: '04',
    title: 'Burnout & Esgotimento Mental',
    subtitle: 'Recuperação do desgaste crônico e limites saudáveis',
    description: 'Para profissionais em estado de sobrecarga severa. Ajudamos a desvencilhar o valor pessoal da produtividade tóxica, restabelecer limites claros no trabalho e recuperar a saúde psicossomática.',
    signs: [
      'Exaustão emocional que persiste mesmo após finais de semana ou férias',
      'Cinismo, irritabilidade e distanciamento afetivo do trabalho',
      'Queda drástica na concentração e sensação de ineficácia profissional',
      'Insônia, dores tensionais e sintomas digestivos relacionados à rotina'
    ],
    approach: 'Manejo de estresse agudo, reorganização de rotina e reavaliação de identidade profissional.'
  },
  {
    id: 'luto-transicoes',
    number: '05',
    title: 'Luto & Transições Vitais',
    subtitle: 'Acolhimento de perdas e travessia consciente de mudanças',
    description: 'Mudanças de carreira, divórcios, imigração ou a perda de entes queridos exigem um tempo próprio de elaboração. Oferecemos continência para que a dor possa ser acolhida e integrada à sua história.',
    signs: [
      'Dificuldade em assimilar o fim de um ciclo ou a ausência de alguém',
      'Sensação de desorientação diante de uma nova fase da vida',
      'Sentimento de culpa ou paralisia frente a escolhas difíceis',
      'Desejo de encontrar significado após uma ruptura dolorosa'
    ],
    approach: 'Abordagem Fenomenológico-Existencial com acolhimento compassivo do tempo subjetivo.'
  },
  {
    id: 'autoconhecimento',
    number: '06',
    title: 'Autoconhecimento & Autoestima',
    subtitle: 'Desconstrução de padrões limitantes e autonomia emocional',
    description: 'Processo profundo de investigação sobre quem você é para além das expectativas alheias. Fortalecimento da segurança interna, regulação da autocrítica e afirmação de limites conscientes.',
    signs: [
      'Necessidade constante de validação e aprovação externa',
      'Dificuldade em dizer "não" e tendência a agradar aos outros',
      'Voz autocrítica severa que invalida conquistas próprias',
      'Vontade de tomar rédeas da própria trajetória com clareza'
    ],
    approach: 'Psicologia Analítica e Psicodinâmica com foco em integração de potências e individuação.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a primeira sessão de acolhimento?',
    answer: 'O primeiro encontro é um espaço dedicado a ouvir sua história no seu próprio ritmo. Não há pressão para expor tudo de imediato. Avaliamos suas queixas principais, alinhamos expectativas mútuas e estruturamos um plano terapêutico personalizado que respeite seus objetivos e sua rotina.'
  },
  {
    id: 'faq-2',
    question: 'O atendimento online tem a mesma eficácia que o presencial?',
    answer: 'Sim. Inúmeros estudos científicos internacionais e as diretrizes do Conselho Federal de Psicologia (CFP) comprovam que a psicoterapia online apresenta os mesmos níveis de eficácia e vínculo que a modalidade presencial. Utilizamos salas de atendimento virtuais criptografadas ponta a ponta.'
  },
  {
    id: 'faq-3',
    question: 'Vocês emitem recibo para reembolso no plano de saúde?',
    answer: 'Sim, emitimos recibos e notas fiscais com todas as especificações técnicas exigidas (número de registro no CRP, CPF/CNPJ e descrição da consulta) para que você solicite o reembolso integral ou parcial junto à sua operadora de saúde com total facilidade.'
  },
  {
    id: 'faq-4',
    question: 'Qual é a duração e a frequência habitual das consultas?',
    answer: 'Cada sessão tem a duração de 50 minutos. A frequência recomendada no início do tratamento costuma ser semanal, permitindo a consolidação do vínculo e a continuidade das reflexões. Conforme o progresso, as sessões podem ser espaçadas para quinzenais.'
  },
  {
    id: 'faq-5',
    question: 'Como funciona o sigilo profissional na terapia?',
    answer: 'O sigilo é a pedra angular da nossa prática. Todas as informações compartilhadas durante os atendimentos são rigorosamente protegidas pelo Código de Ética Profissional do Psicólogo (Art. 9º). Nada do que é falado em sessão pode ser divulgado a terceiros.'
  },
  {
    id: 'faq-6',
    question: 'Como sei se a terapia é indicada para o meu momento?',
    answer: 'A psicoterapia não é exclusiva para momentos de crise aguda. Ela é indicada para qualquer pessoa que sinta desconforto emocional, queira melhorar seus relacionamentos, esteja enfrentando decisões importantes ou deseje desenvolver autoconhecimento para viver com maior coerência e paz interior.'
  }
];
