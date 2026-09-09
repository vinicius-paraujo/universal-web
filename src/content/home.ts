export const home = {
	title: 'Universal — Realidade virtual e educação',
	description: 'Pesquisa interdisciplinar em realidade virtual aplicada ao ensino e à aprendizagem. Conheça as investigações e os projetos do Universal.',
	navigation: [
		{ label: 'Início', href: '/#inicio' },
		{ label: 'A pesquisa', href: '/#pesquisa' },
		{ label: 'Projetos', href: '/#projetos' },
		{ label: 'Parceiros', href: '/#parceiros' },
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
				video: {
					title: 'Demonstração do ecossistema VR Player',
					youtubeId: 'UaYAu71MCr0',
				},
				publications: [
					{
						citation: 'CAETANO, Guilherme Alfaia; ARAUJO, Marcos Vinicius Pereira; RODRIGUES, Edson Coelho; GOMES, George A. M.; CAVALCANTE NETO, Joaquim Bento; VIDAL, Creto Augusto; LEITE JÚNIOR, Antonio J. M. A VR Content Creation, Delivery, and Navigation Ecosystem Based on the Slideshow Metaphor. In: SYMPOSIUM ON VIRTUAL AND AUGMENTED REALITY (SVR), 2026. Anais [...]. 2026.',
					},
				],
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
				shortName: 'UFC',
				role: 'Instituição de pesquisa',
				href: 'https://www.ufc.br/',
			},
			{
				name: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
				shortName: 'CNPq',
				role: 'Apoio à pesquisa',
				href: 'https://www.gov.br/cnpq/pt-br',
			},
			{
				name: 'Grupo de Computação Gráfica, Realidade Virtual, Animação e Visualização',
				shortName: 'CRAb',
				role: 'Grupo de pesquisa parceiro',
				href: 'https://crab.ufc.br/pt/',
				logo: '/partners/crab/logo.png',
			},
		],
	},
};
