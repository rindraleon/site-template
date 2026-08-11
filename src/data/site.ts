export const SITE = {
  name: 'ESSG',
  fullName: 'École Supérieure des Sciences Géomatiques',
  tagline: 'Mesurer la Terre, façonner l\'avenir',
  shortDescription:
    'Grande école publique dédiée à la géomatique, l\'aménagement du territoire, l\'environnement et la science des données spatiales.',
  email: 'contact@essg.edu',
  phone: '+212 5XX-XXXXXX',
  address: 'Av. des Sciences Géomatiques, Rabat, Maroc',
  hours: 'Lun – Ven, 08h30 – 17h00',
  social: {
    linkedin: '#',
    twitter: '#',
    youtube: '#',
    facebook: '#',
  },
} as const;

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: '30+', label: 'Années d\'excellence' },
  { value: '12', label: 'Filières spécialisées' },
  { value: '4 500+', label: 'Diplômés actifs' },
  { value: '60+', label: 'Partenaires institutionnels' },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export const CERTIFICATIONS: Certification[] = [
  { title: 'Habilitation MESRSFC', issuer: 'Ministère de l\'Enseignement Supérieur', year: '2024' },
  { title: 'Label Qualité LMD', issuer: 'Commission Nationale d\'Évaluation', year: '2023' },
  { title: 'Certification ISO 9001', issuer: 'Bureau de Certification', year: '2022' },
  { title: 'Prix de l\'Innovation Pédagogique', issuer: 'Forum International de la Géomatique', year: '2023' },
  { title: 'Accréditation Euro-Geographics', issuer: 'Association Européenne', year: '2024' },
  { title: 'Prix du Développement Durable', issuer: 'Ministère de l\'Environnement', year: '2022' },
];

export type FormationLevel = 'Licence' | 'Master' | 'Doctorat' | 'Cycle Ingénieur';

export interface Filiere {
  id: string;
  name: string;
  description: string;
  objectives: string[];
  outcomes: string[];
  duration: string;
  level: FormationLevel;
  domain: string;
  icon: string;
}

export interface Domain {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  filieres: Filiere[];
}

export const DOMAINS: Domain[] = [
  {
    id: 'geomatique-applications',
    name: 'Géomatique et Applications',
    tagline: 'Mesurer, modéliser, aménager le monde réel',
    description:
      'Une formation qui combine la précision de la mesure terrain avec la puissance de l\'analyse spatiale pour répondre aux enjeux de l\'aménagement et de l\'environnement.',
    image: 'https://images.pexels.com/photos/36930873/pexels-photo-36930873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Map',
    color: 'brand',
    filieres: [
      {
        id: 'geom-topographe',
        name: 'Géomètre et topographe urbain',
        description:
          'Formation des spécialistes de la mesure précise du territoire, du cadastre et de la topographie en milieu urbain.',
        objectives: [
          'Maîtriser les techniques de levé topographique et GNSS',
          'Réaliser des plans cadastraux et fonciers',
          'Intégrer les normes juridiques du foncier',
        ],
        outcomes: ['Géomètre-expert', 'Topographe en bureau d\'études', 'Cadastre et foncier public', 'Travaux publics'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Géomatique et Applications',
        icon: 'Ruler',
      },
      {
        id: 'geom-urbanisme',
        name: 'Urbanisme et aménagement territorial',
        description:
          'Concevoir des villes durables et des territoires équilibrés en s\'appuyant sur l\'analyse spatiale et la prospective.',
        objectives: [
          'Analyser les dynamiques territoriales par la géomatique',
          'Élaborer des plans d\'aménagement et de développement',
          'Intégrer les enjeux de durabilité et de mobilité',
        ],
        outcomes: ['Urbaniste', 'Chargé d\'aménagement en collectivité', 'Planificateur territorial', 'Consultant en smart city'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Géomatique et Applications',
        icon: 'Building2',
      },
      {
        id: 'geom-environnement',
        name: 'Environnement et ressources naturelles',
        description:
          'Surveiller, évaluer et gérer les ressources naturelles par la télédétection et les systèmes d\'information géographique.',
        objectives: [
          'Exploiter l\'imagerie satellitaire pour le suivi environnemental',
          'Modéliser les risques naturels et la dégradation',
          'Concevoir des observatoires environnementaux',
        ],
        outcomes: ['Chargé d\'étude environnement', 'Télédétection et SIG', 'Gestion des risques', 'Observatoire territorial'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Géomatique et Applications',
        icon: 'Leaf',
      },
      {
        id: 'geom-cartographe',
        name: 'Cartographe et numérisation de données',
        description:
          'Produire des cartes et des bases de données géographiques numériques de haute qualité pour la diffusion et la décision.',
        objectives: [
          'Concevoir des cartographies thématiques et web',
          'Numériser et structurer les données géographiques',
          'Développer des visualisations interactives',
        ],
        outcomes: ['Cartographe', 'Spécialiste SIG', 'Visualisation de données', 'Cartographie web et mobile'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Géomatique et Applications',
        icon: 'MapPin',
      },
    ],
  },
  {
    id: 'geomatique-management',
    name: 'Géomatique et Management',
    tagline: 'Conjuguer expertise technique et pilotage stratégique',
    description:
      'Une filière qui forme des cadres capables de piloter des projets géomatiques, de gérer des équipes et d\'inscrire la technologie dans une logique de territoire et de développement.',
    image: 'https://images.pexels.com/photos/16827297/pexels-photo-16827297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Briefcase',
    color: 'accent',
    filieres: [
      {
        id: 'mgmt-topographe',
        name: 'Géomètre et topographe',
        description:
          'Mesure du territoire avec une dimension renforcée en gestion de projets et conduite de chantiers.',
        objectives: [
          'Piloter des campagnes de levé à grande échelle',
          'Gérer la qualité et la traçabilité des données',
          'Encadrer des équipes terrain et bureau',
        ],
        outcomes: ['Chef de projet topographie', 'Géomètre indépendant', 'Maître d\'ouvrage public'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Géomatique et Management',
        icon: 'Ruler',
      },
      {
        id: 'mgmt-urbain',
        name: 'Développement urbain et environnement',
        description:
          'Pilotage de projets urbains durables, de la concertation à la mise en œuvre opérationnelle.',
        objectives: [
          'Gérer des projets urbains complexes',
          'Articuler aménagement et durabilité',
          'Animer la concertation avec les parties prenantes',
        ],
        outcomes: ['Chef de projet urbain', 'Chargé de mission développement durable', 'Bureau d\'études urbain'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Géomatique et Management',
        icon: 'Building2',
      },
      {
        id: 'mgmt-securite',
        name: 'Sécurité et gestion',
        description:
          'Application de la géomatique à la sécurité des biens et des personnes, et à la gestion des risques.',
        objectives: [
          'Cartographier les vulnérabilités et les risques',
          'Mettre en place des dispositifs de veille et d\'alerte',
          'Gérer la réponse opérationnelle aux crises',
        ],
        outcomes: ['Risque majeur et sécurité civile', 'Gestion de crise', 'Veille territoriale'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Géomatique et Management',
        icon: 'ShieldCheck',
      },
      {
        id: 'mgmt-commerce',
        name: 'Commerce et entrepreneuriat',
        description:
          'Créer et développer des entreprises dans le champ des services géomatiques et de l\'innovation territoriale.',
        objectives: [
          'Concevoir un modèle d\'affaires géomatique',
          'Maîtriser le marketing et la vente de services techniques',
          'Piloter la croissance d\'une jeune pousse',
        ],
        outcomes: ['Entrepreneur géomatique', 'Business development', 'Conseil et services SIG'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Géomatique et Management',
        icon: 'TrendingUp',
      },
      {
        id: 'mgmt-eco',
        name: 'Économie et gestion de territoire',
        description:
          'Analyse économique des territoires et pilotage des politiques publiques locales par les données.',
        objectives: [
          'Évaluer la performance économique des territoires',
          'Concevoir des indicateurs territoriaux pertinents',
          'Éclairer la décision publique par la donnée',
        ],
        outcomes: ['Chargé d\'études économiques', 'Gestionnaire de collectivité', 'Observatoire économique'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Géomatique et Management',
        icon: 'BarChart3',
      },
    ],
  },
  {
    id: 'informatique-donnees',
    name: 'Informatique et Données Spatiales',
    tagline: 'Architectures, bases de données et intelligence géographique',
    description:
      'Une filière au croisement de l\'informatique et de la géomatique pour concevoir les systèmes d\'information géographique, exploiter les données spatiales et développer des applications cartographiques modernes.',
    image: 'https://images.pexels.com/photos/586104/pexels-photo-586104.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Database',
    color: 'brand',
    filieres: [
      {
        id: 'info-si',
        name: 'Développement et gestion de systèmes d\'information',
        description:
          'Concevoir, développer et administrer des systèmes d\'information géographique robustes et évolutifs.',
        objectives: [
          'Modéliser des bases de données spatiales',
          'Développer des applications SIG web et mobile',
          'Administrer et sécuriser des infrastructures géo',
        ],
        outcomes: ['Développeur SIG', 'Architecte de bases de données géo', 'Administrateur systèmes géospatiaux'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Informatique et Données Spatiales',
        icon: 'Code2',
      },
      {
        id: 'info-observation',
        name: 'Géomatique et observation des ressources',
        description:
          'Exploiter l\'observation spatiale pour suivre et gérer les ressources naturelles et leur évolution.',
        objectives: [
          'Traiter et analyser l\'imagerie satellitaire',
          'Suivre les ressources en eau, forêts et sols',
          'Produire des indicateurs d\'état et de pression',
        ],
        outcomes: ['Télédétection', 'Observation des ressources', 'Suivi environnemental par satellite'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Informatique et Données Spatiales',
        icon: 'Satellite',
      },
      {
        id: 'info-donnees',
        name: 'Géomatique et gestion des données',
        description:
          'Maîtriser le cycle de vie de la donnée géographique, de l\'acquisition à l\'exploitation décisionnelle.',
        objectives: [
          'Structurer et qualifier les données géographiques',
          'Mettre en place des entrepôts de données géo',
          'Exploiter la donnée pour le pilotage et la décision',
        ],
        outcomes: ['Data manager géo', 'Chef de projet données', 'Business intelligence territoriale'],
        duration: '3 ans',
        level: 'Cycle Ingénieur',
        domain: 'Informatique et Données Spatiales',
        icon: 'Database',
      },
    ],
  },
];

export const ALL_FILIERES: Filiere[] = DOMAINS.flatMap((d) => d.filieres);

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
}

export const NEWS: NewsItem[] = [
  {
    id: 'rentree-2025',
    title: 'Rentrée solennelle 2025 : l\'ESSG accueille 420 nouveaux étudiants',
    excerpt:
      'La cérémonie de rentrée a réuni étudiants, corps professoral et partenaires autour de l\'ambition d\'une géomatique au service du développement durable.',
    category: 'Événement académique',
    date: '2025-09-15',
    image: 'https://images.pexels.com/photos/8197508/pexels-photo-8197508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'promo-2024',
    title: 'Sortie de promotion : 180 ingénieurs géomaticiens diplômés',
    excerpt:
      'Une promotion brillante qui rejoint les plus grands bureaux d\'études, collectivités et entreprises du secteur géospatial.',
    category: 'Sortie de promotion',
    date: '2025-07-12',
    image: 'https://images.pexels.com/photos/7972735/pexels-photo-7972735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'conference-sig',
    title: 'Conférence internationale : « SIG et villes intelligentes »',
    excerpt:
      'Des experts internationaux ont partagé leurs avancées en matière de gestion urbaine par les systèmes d\'information géographique.',
    category: 'Conférence',
    date: '2025-06-20',
    image: 'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'voyage-etudes',
    title: 'Voyage d\'études : terrain de topographie dans le Haut Atlas',
    excerpt:
      'Les étudiants de 2e année ont mené une campagne de levé topographique de haute précision en montagne, appliquant GNSS et photogrammétrie.',
    category: 'Voyage d\'études',
    date: '2025-05-08',
    image: 'https://images.pexels.com/photos/24245275/pexels-photo-24245275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'labo-geodata',
    title: 'Lancement du Laboratoire GéoData & Intelligence Territoriale',
    excerpt:
      'Un nouveau laboratoire de recherche dédié à l\'exploitation des données spatiales pour la gouvernance des territoires.',
    category: 'Recherche',
    date: '2025-04-02',
    image: 'https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'partenariat-euro',
    title: 'Nouveau partenariat avec un institut européen de télédétection',
    excerpt:
      'Un accord de coopération pour la mobilité des étudiants, la recherche conjointe et la double diplomation en télédétection.',
    category: 'Partenariat',
    date: '2025-03-18',
    image: 'https://images.pexels.com/photos/3183174/pexels-photo-3183174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'International' | 'Service public' | 'Recherche & innovation' | 'Partenariat';
  status: string;
  image: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'geodata-afrique',
    title: 'GéoData Afrique : infrastructure de données spatiales continentales',
    description:
      'Un projet international visant à construire une infrastructure de données spatiales partagée entre plusieurs pays africains pour appuyer les politiques d\'aménagement et de gestion des risques.',
    category: 'International',
    status: 'En cours',
    image: 'https://images.pexels.com/photos/30596226/pexels-photo-30596226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Données spatiales', 'Coopération internationale', 'Infrastructure'],
  },
  {
    id: 'observatoire-cotes',
    title: 'Observatoire du littoral : suivi de l\'érosion côtière par satellite',
    description:
      'Un projet de recherche qui combine télédétection et terrain pour cartographier et anticiper l\'érosion du trait de côte, au service des collectivités littorales.',
    category: 'Recherche & innovation',
    status: 'En cours',
    image: 'https://images.pexels.com/photos/30596258/pexels-photo-30596258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Télédétection', 'Littoral', 'Changement climatique'],
  },
  {
    id: 'cadastre-numerique',
    title: 'Cadastre numérique : modernisation du foncier national',
    description:
      'Projet de service public accompagnant la numérisation du cadastre et la sécurisation foncière à grande échelle, avec la formation des agents et la production de données.',
    category: 'Service public',
    status: 'En cours',
    image: 'https://images.pexels.com/photos/108942/pexels-photo-108942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Cadastre', 'Foncier', 'Service public'],
  },
  {
    id: 'smart-city',
    title: 'Smart City Lab : la carte au service de la ville intelligente',
    description:
      'Un laboratoire d\'innovation qui développe des applications cartographiques pour la mobilité, l\'énergie et la participation citoyenne dans les villes moyennes.',
    category: 'Recherche & innovation',
    status: 'En cours',
    image: 'https://images.pexels.com/photos/16827297/pexels-photo-16827297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Smart city', 'Mobilité', 'Innovation'],
  },
  {
    id: 'energie-renouvelable',
    title: 'Géomatique des énergies renouvelables',
    description:
      'Cartographie du potentiel solaire et éolien du territoire national pour guider l\'implantation des parcs et l\'atteinte des objectifs de transition énergétique.',
    category: 'Service public',
    status: 'En cours',
    image: 'https://images.pexels.com/photos/6837810/pexels-photo-6837810.png?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Énergie', 'Développement durable', 'Cartographie'],
  },
  {
    id: 'coop-euro',
    title: 'Coopération européenne : double diplomation en télédétection',
    description:
      'Un programme de partenariat avec un institut européen permettant la mobilité, la recherche conjointe et une double diplomation en observation de la Terre.',
    category: 'Partenariat',
    status: 'En cours',
    image: 'https://images.pexels.com/photos/3183126/pexels-photo-3183126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Mobilité', 'Double diplomation', 'Télédétection'],
  },
];

export interface Partner {
  id: string;
  name: string;
  type: string;
  description: string;
}

export const PARTNERS: Partner[] = [
  { id: 'p1', name: 'Ministère de l\'Aménagement du Territoire', type: 'Institutionnel', description: 'Politique d\'aménagement et de gestion du territoire national.' },
  { id: 'p2', name: 'Agence Nationale de la Cartographie', type: 'Institutionnel', description: 'Production cartographique officielle et données de référence.' },
  { id: 'p3', name: 'Agence Urbaine de Rabat', type: 'Collectivité', description: 'Aménagement urbain et suivi de la planification territoriale.' },
  { id: 'p4', name: 'Institut Européen de Télédétection', type: 'Académique', description: 'Recherche conjointe, mobilité et double diplomation.' },
  { id: 'p5', name: 'Office National de l\'Eau', type: 'Institutionnel', description: 'Gestion des ressources en eau et suivi des bassins versants.' },
  { id: 'p6', name: 'Bureau d\'Études GéoSolutions', type: 'Entreprise', description: 'Stage, recrutement et projets appliqués en géomatique.' },
  { id: 'p7', name: 'EuroGeographics', type: 'International', description: 'Association européenne des agences cartographiques nationales.' },
  { id: 'p8', name: 'Conseil Régional', type: 'Collectivité', description: 'Co-financement de projets et de bourses de recherche.' },
  { id: 'p9', name: 'TechTerre Startup Studio', type: 'Entreprise', description: 'Incubation de projets étudiants en géotechnologies.' },
  { id: 'p10', name: 'Observatoire National de l\'Environnement', type: 'Institutionnel', description: 'Suivi environnemental et indicateur de durabilité.' },
  { id: 'p11', name: 'Université Internationale de l\'Eau', type: 'Académique', description: 'Recherche sur la gestion des ressources et la modélisation.' },
  { id: 'p12', name: 'Groupement des Géomètres Indépendants', type: 'Professionnel', description: 'Réseau professionnel et insertion des diplômés.' },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AdmissionFaq {
  section: string;
  items: FaqItem[];
}

export const ADMISSION_FAQ: AdmissionFaq[] = [
  {
    section: 'Procédure d\'admission',
    items: [
      {
        question: 'Comment déposer une candidature à l\'ESSG ?',
        answer:
          'La candidature se fait en ligne via le formulaire d\'inscription. Vous devez créer un compte, remplir le formulaire, téléverser vos pièces justificatives et soumettre avant la date limite indiquée sur le site.',
      },
      {
        question: 'Quelles pièces justificatives sont requises ?',
        answer:
          'Une pièce d\'identité, le relevé de notes du baccalauréat (ou équivalent), les relevés des études supérieures, une lettre de motivation, un CV et deux photos d\'identité. Les documents doivent être au format PDF.',
      },
      {
        question: 'Quels sont les critères de sélection ?',
        answer:
          'La sélection s\'appuie sur l\'excellence académique, la cohérence du projet avec la géomatique, les résultats aux épreuves d\'admission et un entretien de motivation devant un jury.',
      },
      {
        question: 'Y a-t-il des frais de dossier ?',
        answer:
          'Oui, des frais de dossier non remboursables sont demandés au moment de la soumission. Le montant exact est communiqué sur la page d\'inscription au début de chaque campagne.',
      },
    ],
  },
  {
    section: 'Cursus & vie étudiante',
    items: [
      {
        question: 'Le cycle ingénieur est-il accessible après un bac+2 ?',
        answer:
          'Oui. L\'accès au cycle ingénieur se fait sur concours après un bac+2 (classes préparatoires, DUT, DEUG ou équivalent). Une voie d\'admission directe en 1re année existe aussi pour les bacheliers scientifiques.',
      },
      {
        question: 'L\'ESSG propose-t-elle des licences et masters ?',
        answer:
          'Oui. L\'offre de formation couvre les trois grades LMD : Licence, Master et Doctorat, répartis dans plusieurs domaines liés à la géomatique, à l\'aménagement et à la science des données spatiales.',
      },
      {
        question: 'Existe-t-il des bourses d\'études ?',
        answer:
          'L\'ESSG étant une école publique, les étudiants peuvent prétendre aux bourses de l\'enseignement supérieur selon les critères sociaux en vigueur. Des bourses au mérite et des aides à la mobilité internationale sont également disponibles.',
      },
      {
        question: 'Les cours sont-ils dispensés en français ?',
        answer:
          'Le français est la langue principale d\'enseignement. Des modules en anglais sont proposés à partir du master, notamment dans le cadre des programmes de coopération internationale.',
      },
      {
        question: 'Peut-on faire un semestre à l\'étranger ?',
        answer:
          'Oui. Grâce aux partenariats académiques de l\'ESSG, les étudiants peuvent effectuer un semestre de mobilité ou un stage international dans des instituts partenaires en Europe et en Afrique.',
      },
    ],
  },
];

export interface NavLink {
  label: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Formations', path: '/formations' },
  { label: 'Projets', path: '/projets' },
  { label: 'Actualités', path: '/actualites' },
  { label: 'Partenaires', path: '/partenaires' },
  { label: 'Admission', path: '/admission' },
  { label: 'Contact', path: '/contact' },
];
