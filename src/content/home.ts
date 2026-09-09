export const home = {
	title: 'Universal — Realidade virtual e educação',
	description: 'Pesquisa interdisciplinar em realidade virtual aplicada ao ensino e à aprendizagem. Conheça as investigações e os projetos do Universal.',
	navigation: [
		{ label: 'Início', href: '/#inicio' },
		{ label: 'A pesquisa', href: '/#pesquisa' },
		{ label: 'Projetos', href: '/#projetos' },
		{ label: 'Parceiros', href: '/#parceiros' },
		{ label: 'Resultados', href: '/#resultados' },
		{ label: 'Eventos', href: '/#eventos' },
	],
	hero: {
		title: 'Realidade virtual para o ensino e a aprendizagem.',
		introduction: 'O Universal investiga a criação e o uso de ambientes virtuais em diferentes contextos educacionais, aproximando computação, práticas de ensino e experiências de aprendizagem.',
	},
	research: {
		title: 'Realidade virtual, diferentes contextos de aprendizagem.',
		paragraphs: [
			'Criar simulações em realidade virtual ainda exige conhecimentos técnicos especializados. Uma das frentes investigadas pelo Universal busca simplificar esse processo, permitindo que professores e estudantes criem, adaptem e reutilizem ambientes virtuais.',
			'O desenvolvimento das ferramentas e a avaliação de suas aplicações se complementam: cada contexto educacional contribui para aprimorar os recursos e compreender suas possibilidades de uso.',
		],
	},
	projects: {
		title: 'Projetos',
		introduction: 'Investigações do Universal que articulam computação gráfica, interação e aplicações em diferentes contextos.',
		items: [
			{
				id: 'vr-player',
				title: 'VR Player',
				summary: 'Um ecossistema para criar, distribuir e apresentar experiências em realidade virtual por meio de uma estrutura familiar: a metáfora de apresentações de slides.',
				description: [
					'O projeto integra um editor acessível pelo navegador, um servidor para armazenamento e distribuição e um player executado em computadores ou dispositivos de realidade virtual. Em conjunto, esses sistemas permitem construir cenas tridimensionais sem depender diretamente de programação ou de ferramentas complexas de desenvolvimento 3D.',
					'Templates definem os ambientes; slides organizam modelos, movimentos e sons em uma narrativa sequencial. Essa estrutura aproxima especialistas de diferentes áreas da criação do conteúdo e favorece usos educacionais, clínicos e de prototipação.',
				],
				logo: '/projects/vr-player/logo.svg',
				areas: ['Realidade virtual', 'Sistemas de autoria', 'Interação'],
				resources: [],
			},
		],
	},
	partners: {
		title: 'Parceiros',
		introduction: 'Instituições que tornam possível o desenvolvimento científico, tecnológico e formativo das pesquisas do Universal.',
		items: [
			{
				name: 'Universidade Federal do Ceará',
				role: 'Instituição de pesquisa',
				href: 'https://www.ufc.br/',
				logo: '/brand/ufc-horizontal-white.png',
			},
			{
				name: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
				role: 'Apoio à pesquisa',
				href: 'https://www.gov.br/cnpq/pt-br',
				logo: '/partners/cnpq/logo.png',
			},
			{
				name: 'Grupo de Computação Gráfica, Realidade Virtual, Animação e Visualização',
				role: 'Grupo de pesquisa parceiro',
				href: 'https://crab.ufc.br/pt/',
				logo: '/partners/crab/logo.png',
			},
			{
				name: 'Curso de Design da Universidade Federal do Cariri',
				role: 'Formação e pesquisa em design',
				href: 'https://www.ufca.edu.br/cursos/graduacao/design/',
				logo: '/partners/ufca/logo.png',
			},
			{
				name: 'Grupo de Redes Elétricas Inteligentes',
				role: 'Pesquisa em sistemas elétricos e redes inteligentes',
				href: 'https://dee.ufc.br/pt/sobre-o-departamento-de-engenharia-eletrica/grupo-de-redes-eletricas-inteligentes-grei/',
				logo: '/partners/grei/logo.png',
			},
			{
				name: 'Vortex — Universidade de Fortaleza',
				role: 'Pesquisa, desenvolvimento e inovação em tecnologia da informação',
				href: 'https://vortex.unifor.br/',
				logo: '/partners/vortex/logo.png',
			},
			{
				name: 'Núcleo de Atenção Médica Integrada — Universidade de Fortaleza',
				role: 'Saúde, ensino, pesquisa e extensão',
				href: 'https://unifor.br/nami',
				logo: '/partners/unifor/logo.svg',
			},
		],
	},
	results: {
		title: 'Resultados',
		introduction: 'Publicações, demonstrações e outros materiais produzidos no desenvolvimento das pesquisas e de seus projetos.',
		items: [
			{
				kind: 'Artigo científico',
				title: 'A VR Content Creation, Delivery, and Navigation Ecosystem Based on the Slideshow Metaphor',
				description: 'O artigo apresenta o ecossistema formado por VR Editor, VR Server e VR Player e sua avaliação com especialistas e 47 participantes não especialistas. O sistema alcançou 72,13 pontos na escala SUS, resultado classificado como bom, e satisfação média de 8,34 em 10.',
				project: 'VR Player',
				citation: 'CAETANO, Guilherme Alfaia; ARAUJO, Marcos Vinicius Pereira; RODRIGUES, Edson Coelho; GOMES, George A. M.; CAVALCANTE NETO, Joaquim Bento; VIDAL, Creto Augusto; LEITE JÚNIOR, Antonio J. M. A VR Content Creation, Delivery, and Navigation Ecosystem Based on the Slideshow Metaphor. In: SYMPOSIUM ON VIRTUAL AND AUGMENTED REALITY (SVR), 2026. Anais [...]. 2026.',
			},
			{
				kind: 'Demonstração em vídeo',
				title: 'Criação, distribuição e navegação de experiências imersivas',
				description: 'Uma demonstração integrada do fluxo de autoria e da experiência desenvolvida para o ecossistema do VR Player.',
				project: 'VR Player',
				youtubeId: 'UaYAu71MCr0',
			},
		],
	},
	events: {
		title: 'Eventos',
		introduction: 'Atividades acadêmicas das quais o Universal participa, incluindo congressos, workshops, defesas e outros espaços de apresentação, formação e intercâmbio científico.',
		items: [
			{
				name: '28th Symposium on Virtual and Augmented Reality',
				shortName: 'SVR 2026',
				type: 'Congresso',
				date: '29 de setembro a 2 de outubro de 2026',
				location: 'Goiânia, Goiás',
				participation: 'Apresentação de artigo científico',
				href: 'https://svr.sbc.org.br/2026/',
			},
		],
	},
};
