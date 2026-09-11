export type Locale = 'pt-br' | 'en';

const partners = [
	{ name: 'Universidade Federal do Ceará', href: 'https://www.ufc.br/', logo: '/brand/ufc-horizontal-white.png' },
	{ name: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico', href: 'https://www.gov.br/cnpq/pt-br', logo: '/partners/cnpq/logo.png' },
	{ name: 'Grupo de Computação Gráfica, Realidade Virtual, Animação e Visualização', href: 'https://crab.ufc.br/pt/', logo: '/partners/crab/logo.png' },
	{ name: 'Curso de Design da Universidade Federal do Cariri', href: 'https://www.ufca.edu.br/cursos/graduacao/design/', logo: '/partners/ufca/logo.png' },
	{ name: 'Grupo de Redes Elétricas Inteligentes', href: 'https://dee.ufc.br/pt/sobre-o-departamento-de-engenharia-eletrica/grupo-de-redes-eletricas-inteligentes-grei/', logo: '/partners/grei/logo.png' },
	{ name: 'Vortex — Universidade de Fortaleza', href: 'https://vortex.unifor.br/', logo: '/partners/vortex/logo.png' },
	{ name: 'Núcleo de Atenção Médica Integrada — Universidade de Fortaleza', href: 'https://unifor.br/nami', logo: '/partners/unifor/logo.svg' },
];

const citation = 'CAETANO, Guilherme Alfaia; ARAUJO, Marcos Vinicius Pereira; RODRIGUES, Edson Coelho; GOMES, George A. M.; CAVALCANTE NETO, Joaquim Bento; VIDAL, Creto Augusto; LEITE JÚNIOR, Antonio J. M. A VR Content Creation, Delivery, and Navigation Ecosystem Based on the Slideshow Metaphor. In: SYMPOSIUM ON VIRTUAL AND AUGMENTED REALITY (SVR), 2026. Anais [...]. 2026.';
const project = { id: 'vr-player', title: 'VR Player', logo: '/projects/vr-player/logo.svg', resources: [] };

const pt = {
	locale: 'pt-br' as Locale, htmlLang: 'pt-BR', ogLocale: 'pt_BR', path: '/',
	title: 'Universal — Realidade virtual e educação',
	description: 'Pesquisa interdisciplinar em realidade virtual aplicada ao ensino e à aprendizagem. Conheça as investigações e os projetos do Universal.',
	socialImageAlt: 'Portal Universal: realidade virtual para o ensino e a aprendizagem',
	ui: {
		skipLink: 'Pular para o conteúdo', navigationLabel: 'Principal', menuLabel: 'Menu', languageLabel: 'Selecionar idioma', currentLanguage: 'PT-BR',
		projectListLabel: 'Projetos do Universal', areasLabel: 'Áreas relacionadas', resourcesLabel: 'Recursos de', resultLinkLabel: 'Acessar resultado',
		dateLabel: 'Data', locationLabel: 'Local', participationLabel: 'Participação do Universal', eventSiteLabel: 'Site do evento', eventSiteAriaPrefix: 'Site oficial do',
		footerNavigationLabel: 'Navegação do rodapé', portalLabel: 'Portal', affiliationLabel: 'Vínculo acadêmico', location: 'Fortaleza, Ceará',
	},
	navigation: [
		{ label: 'Início', href: '/#inicio' }, { label: 'A pesquisa', href: '/#pesquisa' }, { label: 'Projetos', href: '/#projetos' },
		{ label: 'Parceiros', href: '/#parceiros' }, { label: 'Resultados', href: '/#resultados' }, { label: 'Eventos', href: '/#eventos' },
	],
	hero: { title: 'Realidade virtual para o ensino e a aprendizagem.', introduction: 'O Universal investiga a criação e o uso de ambientes virtuais em diferentes contextos educacionais, aproximando computação, práticas de ensino e experiências de aprendizagem.', linkLabel: 'Conheça a pesquisa' },
	research: { title: 'Realidade virtual, diferentes contextos de aprendizagem.', paragraphs: [
		'Criar simulações em realidade virtual ainda exige conhecimentos técnicos especializados. Uma das frentes investigadas pelo Universal busca simplificar esse processo, permitindo que professores e estudantes criem, adaptem e reutilizem ambientes virtuais.',
		'O desenvolvimento das ferramentas e a avaliação de suas aplicações se complementam: cada contexto educacional contribui para aprimorar os recursos e compreender suas possibilidades de uso.',
	] },
	projects: { title: 'Projetos', introduction: 'Investigações do Universal que articulam computação gráfica, interação e aplicações em diferentes contextos.', items: [{ ...project,
		summary: 'Um ecossistema para criar, distribuir e apresentar experiências em realidade virtual por meio de uma estrutura familiar: a metáfora de apresentações de slides.',
		description: [
			'O projeto integra um editor acessível pelo navegador, um servidor para armazenamento e distribuição e um player executado em computadores ou dispositivos de realidade virtual. Em conjunto, esses sistemas permitem construir cenas tridimensionais sem depender diretamente de programação ou de ferramentas complexas de desenvolvimento 3D.',
			'Templates definem os ambientes; slides organizam modelos, movimentos e sons em uma narrativa sequencial. Essa estrutura aproxima especialistas de diferentes áreas da criação do conteúdo e favorece usos educacionais, clínicos e de prototipação.',
		], areas: ['Realidade virtual', 'Sistemas de autoria', 'Interação'] }] },
	partners: { title: 'Parceiros', introduction: 'Instituições que tornam possível o desenvolvimento científico, tecnológico e formativo das pesquisas do Universal.', items: partners.map((item, i) => ({ ...item, role: ['Instituição de pesquisa', 'Apoio à pesquisa', 'Grupo de pesquisa parceiro', 'Formação e pesquisa em design', 'Pesquisa em sistemas elétricos e redes inteligentes', 'Pesquisa, desenvolvimento e inovação em tecnologia da informação', 'Saúde, ensino, pesquisa e extensão'][i] })) },
	results: { title: 'Resultados', introduction: 'Publicações, demonstrações e outros materiais produzidos no desenvolvimento das pesquisas e de seus projetos.', items: [
		{ kind: 'Artigo científico', title: 'A VR Content Creation, Delivery, and Navigation Ecosystem Based on the Slideshow Metaphor', project: 'VR Player', citation, description: 'O artigo apresenta o ecossistema formado por VR Editor, VR Server e VR Player e sua avaliação com especialistas e 47 participantes não especialistas. O sistema alcançou 72,13 pontos na escala SUS, resultado classificado como bom, e satisfação média de 8,34 em 10.' },
		{ kind: 'Demonstração em vídeo', title: 'Criação, distribuição e navegação de experiências imersivas', project: 'VR Player', youtubeId: 'UaYAu71MCr0', description: 'Uma demonstração integrada do fluxo de autoria e da experiência desenvolvida para o ecossistema do VR Player.' },
	] },
	events: { title: 'Eventos', introduction: 'Atividades acadêmicas das quais o Universal participa, incluindo congressos, workshops, defesas e outros espaços de apresentação, formação e intercâmbio científico.', items: [{ name: '28th Symposium on Virtual and Augmented Reality', shortName: 'SVR 2026', type: 'Congresso', date: '29 de setembro a 2 de outubro de 2026', location: 'Goiânia, Goiás', participation: 'Apresentação de artigo científico', href: 'https://svr.sbc.org.br/2026/' }] },
	footer: { introduction: 'Pesquisa interdisciplinar em realidade virtual, computação gráfica e experiências de aprendizagem.' },
};

const en = {
	...pt, locale: 'en' as Locale, htmlLang: 'en', ogLocale: 'en_US', path: '/en/',
	title: 'Universal — Virtual reality and education', description: 'Interdisciplinary research on virtual reality for teaching and learning. Explore Universal’s research and projects.', socialImageAlt: 'Universal research portal: virtual reality for teaching and learning',
	ui: {
		skipLink: 'Skip to content', navigationLabel: 'Main navigation', menuLabel: 'Menu', languageLabel: 'Select language', currentLanguage: 'EN',
		projectListLabel: 'Universal projects', areasLabel: 'Related fields', resourcesLabel: 'Resources for', resultLinkLabel: 'View result',
		dateLabel: 'Date', locationLabel: 'Location', participationLabel: 'Universal’s participation', eventSiteLabel: 'Event website', eventSiteAriaPrefix: 'Official website for',
		footerNavigationLabel: 'Footer navigation', portalLabel: 'Portal', affiliationLabel: 'Academic affiliation', location: 'Fortaleza, Ceará, Brazil',
	},
	navigation: [
		{ label: 'Home', href: '/en/#inicio' }, { label: 'Research', href: '/en/#pesquisa' }, { label: 'Projects', href: '/en/#projetos' },
		{ label: 'Partners', href: '/en/#parceiros' }, { label: 'Outcomes', href: '/en/#resultados' }, { label: 'Events', href: '/en/#eventos' },
	],
	hero: { title: 'Virtual reality for teaching and learning.', introduction: 'Universal investigates how virtual environments can support education across different settings, bringing together computing, teaching practices, and learning experiences.', linkLabel: 'Explore our research' },
	research: { title: 'Virtual reality across learning contexts.', paragraphs: [
		'Creating virtual reality simulations still requires specialized technical knowledge. One strand of Universal’s research seeks to make this process more accessible, enabling teachers and students to create, adapt, and reuse virtual environments.',
		'Tool development and applied evaluation inform each other: every educational setting helps refine the technology and reveal new ways in which it can be used.',
	] },
	projects: { title: 'Projects', introduction: 'Universal research initiatives spanning computer graphics, interaction, and applications in a range of settings.', items: [{ ...project,
		summary: 'An ecosystem for creating, distributing, and presenting virtual reality experiences through a familiar structure: the slideshow metaphor.',
		description: [
			'The project brings together a browser-based editor, a server for storage and distribution, and a player that runs on computers and virtual reality devices. Together, these systems make it possible to build three-dimensional scenes without working directly with code or complex 3D development tools.',
			'Templates define the environments, while slides arrange models, movement, and sound into a sequence. This structure enables specialists from different fields to contribute to content creation and supports educational, clinical, and prototyping applications.',
		], areas: ['Virtual reality', 'Authoring systems', 'Interaction'] }] },
	partners: { title: 'Partners', introduction: 'Institutions that support the scientific, technological, and educational work developed through Universal.', items: partners.map((item, i) => ({ ...item, role: ['Research institution', 'Research funding', 'Partner research group', 'Design education and research', 'Research on electrical systems and smart grids', 'Information technology research, development, and innovation', 'Healthcare, education, research, and community outreach'][i] })) },
	results: { title: 'Outcomes', introduction: 'Publications, demonstrations, and other materials produced through Universal’s research and projects.', items: [
		{ kind: 'Research paper', title: 'A VR Content Creation, Delivery, and Navigation Ecosystem Based on the Slideshow Metaphor', project: 'VR Player', citation, description: 'This paper presents the ecosystem formed by VR Editor, VR Server, and VR Player, along with an evaluation involving experts and 47 non-expert participants. The system achieved a score of 72.13 on the System Usability Scale, a result rated as good, and an average satisfaction score of 8.34 out of 10.' },
		{ kind: 'Video demonstration', title: 'Creating, distributing, and navigating immersive experiences', project: 'VR Player', youtubeId: 'UaYAu71MCr0', description: 'An integrated demonstration of the authoring workflow and the immersive experience developed for the VR Player ecosystem.' },
	] },
	events: { title: 'Events', introduction: 'Academic activities involving Universal, including conferences, workshops, thesis defenses, and other opportunities for presentation, training, and scholarly exchange.', items: [{ name: '28th Symposium on Virtual and Augmented Reality', shortName: 'SVR 2026', type: 'Conference', date: 'September 29–October 2, 2026', location: 'Goiânia, Goiás, Brazil', participation: 'Research paper presentation', href: 'https://svr.sbc.org.br/2026/' }] },
	footer: { introduction: 'Interdisciplinary research in virtual reality, computer graphics, and learning experiences.' },
};

export const homes = { 'pt-br': pt, en };
export type HomeContent = typeof pt | typeof en;
