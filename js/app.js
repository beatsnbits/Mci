var app = angular.module('myApp', ['ngRoute', 'ngMessages', 'angucomplete-alt']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'views/home.html' 
    })	
	.when('/1', {
        controller:'InApp',
		templateUrl: 'views/conhecercadeiras/app.html'
	})
	.when('/2', {
        controller:'InApp',
		templateUrl: 'views/planejarmatriz/app.html'
	})
	.when('/3', {
        controller:'InApp',
		templateUrl: 'views/comentarcadeira/app.html'
	})
	.when('/404', {
		templateUrl: 'views/404.html'
	})
    .otherwise({ 
      redirectTo: '/404' 
    }); 
});

app.factory('userService', function($http){
	var service = {   
		selectedObject: {
        id:0,
        name:'Nome da Cadeira',
         color:'#c0392B',
         tipo: 'Tipo da cadeira',
         chp: 0,
         cht: 0,
         professor: 'Professor(a)(es): -------',
         ementa: 'Ementa',
         pre:'------',
         comentarios: [
         {
            avatar:'https://68.media.tumblr.com/avatar_16b98ea93eb7_128.png',
            nick:'Nick',
            numero:'2',
            titulo:'Estudo muito mas não passo nessa cadeira',
            coment:'Talvez o tempo te ponha na sua escola pois não terás melhor professor que ele.'
         }
         ]
        },
        trilhas: [
                    {
                        matriz:[        [ '6', '5', '7', '8', '9', ''],
                                        ['10','11','12','13','14', ''],
                                        [ '0', '1', '2', '3', '4', ''],
                                        ['15','21','25','26',  '', ''],
                                        ['27','29','30','53','60', ''],
                                        ['16','17','44','66','68', ''],
                                        ['18','80','46','79',  '', ''],
                                        [ '19','20', '',  '',  '', '']
                                                                     ],
                        nome: 'Audiovisual',
                        fixa: true
                },  
        ],
        matriz: [
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','','']
        ],     
        filterBy: [],        
		perfil: { 
			avatar: 'https://pbs.twimg.com/profile_images/658761489017344000/n3wFCZov_reasonably_small.jpg',
			nick: 'Estudante que não gosta de problematizar'
		},
		cadeiras: [
    {	
    	id: 0,
    	name:'Design de Interfaces Gráficas',
    	 color:'#c0392B',
    	 tipo: 'Obrigatória',
    	 chp: 4,
    	 cht: 0,
    	 professor: 'Professora: Estér Farias',
    	 ementa: 'Introdução às interfaces gráficas. Design gráfico aplicado às interfaces gráficas. Tecnologias de interfaces gráficas. Interfaces gráficas em sistemas multimídia online e offline. Interfaces gráficas em sistemas embarcados. Interfaces gráficas para jogos digitais. Avaliação e testes. Estudos de Caso ',
    	 pre:'Comunicação Visual I',
          matriz: true,
    	 comentarios: [
    	 {
    	 	avatar:'https://68.media.tumblr.com/avatar_bf63549f5238_128.png',
    	 	nick:'Estudante esforçado',
    	 	numero:'4',
    	 	titulo:'Ouvindo a música que eu acabei de fazer',
    	 	coment:'Educação é o que resta depois de ter esquecido tudo que se aprendeu na escola.'
    	 }
    	 ]
    	},

    {
    	id:1,
    	name:'Interação Humano-Computador',
    	 color:'#c0392B',
    	 tipo: 'Obrigatória',
    	 chp: 2,
    	 cht: 2,
    	 professor: 'Professora: Cátia ',
    	 ementa:'Introdução à interação humano-computador. Fatores de Qualidade de Uso. Fatores humanos em interação humano-computador. Análises e reflexões sobre design industrial e ergonomia. Análise de interfaces gráficas. Design Centrado no Usuário. Design de interação. Avaliação e testes. Estudos de caso.',
    	 pre: 'Nenhum',
          
         matriz: true, comentarios: []
    	},
    {
    	id:2,
    	name:'Introdução à Cibercultura',
    	 color:'#c0392B',
    	 tipo: 'Obrigatória',
    	 chp: 0,
    	 cht: 4,
    	 professor: 'Professor: Fernando Lincoln',
    	 ementa: 'Princípios teóricos da cibercultura, Inclusão digital e social, Ciberativismo e Cultura Livre, Redes Sociais Virtuais, Liberdade e Privacidade na internet.',
    	 pre:'Nenhum',
          
         matriz: true, comentarios: []
    	},
    {
    	id:3,
    	name:'Autoração Multimídia II',
    	 color:'#c0392B',
    	 tipo: 'Obrigatória',
    	 chp: 4,
    	 cht: 0,
    	 professor: 'Professor: Arthur ',
    	 ementa:'Técnicas de animação digital: princípios e técnicas básicos, geração de clips de filme e sonorização. Técnicas de interatividade digital: geração e programação de elementos interativos. Publicação/disponibilização de aplicação final. Integração de mídia externa, geração de bibliotecas e uso de componentes. Desenvolvimento de projeto final.',
    	 pre:'Autoração Multimídia I',
          
         matriz: true, comentarios: []
    	},
    {
    	id:4,
    	name:'Projeto Integrado I',
    	 color:'#c0392B',
    	 tipo: 'Obrigatória',
    	 chp: 4,
    	 cht: 0,
    	 professor: 'Professores: Arthur, Cátia, Lincoln, Estér',
    	 ementa:'Definição de características iniciais do produto multimídia de complexidade baixa. Estabelecimento de metodologia de desenvolvimento. Geração de produto, de acordo com a metodologia previamente adotada. Apresentação e discussão de resultados intermediários e finais.',
    	 pre:'Comunicação Visual I, Programação I',
          
         matriz: true, comentarios: []
    	},
    {
    	id:5,
    	name:'Autoração Multimídia I',
    	 color:'#c0392B',
    	 tipo: 'Obrigatória',
    	 chp: 4,
    	 cht: 0,
    	 professor: 'Professora: Mara',
    	 ementa:'Imagem estática bitmap: seleção, recorte, tratamento, colorização e filtragem. Imagem estática vetorial: primitivas gráficas e suas propriedades, introdução à ilustração digital e técnica de vetorização. Imagem animada: animação quadro a quadro, animação por interpolação de posição, rotação, escala e forma. Imagem interativa: componentes interativos e programação de resposta a eventos.',
    	 pre:'Nenhum',
          
         matriz: true, comentarios: []
    	},
    {
        id:6,
        name:'Desenho I',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'Técnicas e uso dos instrumentos de desenho. Desenho a mão livre e expressão gráfica. Técnica de composição. Proporção, luz, sombra, textura, fundo e figura. Noções básicas de desenho auxiliado por computador.',
         pre:'Nenhum',
          
         matriz: true, comentarios: []
        },
    {
        id:7,
        name:'História do Design',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Conceitos de design. Transformações sócio-culturais na história do design. Principais movimentos, designers e artefatos da história do design. O design no Brasil. Design, arte e cultura material.',
         pre:'Nenhum',
          
         matriz: true, comentarios: []
        },
    {
        id:8,
        name:'Introdução a Sistemas e Mídias Digitais',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Introdução à mídia digital. Fundamentos da comunicação e mídias digitais. Convergência de mídias. Entretenimento digital e jogos eletrônicos. Cadeia produtiva de mídia digital interativa: etapas, processos, técnicas, profissionais, equipes e produtos. Aspectos psicológicos e comportamento do usuário em produtos multimídia.',
         pre:'Nenhum',
          
         matriz: true, comentarios: []
        },
    {
        id:9,
        name:'Programação I',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Conceitos de linguagens de programação. Introdução aos paradigmas de programação. Orientação a Objetos: Classe, Objeto, Atributos, Eventos/Métodos e encapsulamento. Problemas formais e resolução de problemas. Utilização de uma linguagem em pseudocódigo ou visual (Visual Programming Language - VPL). Conceitos e estruturas básicas de Algoritmos. Programação de algoritmos. Estruturas condicionais e de repetições. Variáveis compostas homogêneas unidimensionais (Vetores). Prática direcionada.',
         pre:'Nenhum', 
          
         matriz: true, comentarios: []
        },
    {
        id:10,
        name:'Cognição e Tecnologias Digitais',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Principais teorias do desenvolvimento cognitivo e suas aplicações na criação de design WEB e Interfaces Digitais. Desenvolvimento cognitivo na cibercultura. Tecnologias digitais e teorias recentes sobre Cognição: cognição situada e cognição distribuída. Contribuições da linguística na compreensão de gêneros textuais emergentes.',
         pre:'Nenhum', 
          
         matriz: true, comentarios: []
        },
    {
        id:11,
        name:'Matemática Aplicada a Multimídia I',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Introdução: sistemas, mídias e matemática. Funções. Geometria Euclidiana: conceitos e exemplos práticos. Coordenadas polares. Lugares geométricos: definições, equações e aplicações. Conjuntos. Cardinalidade. Diagramas de Venn e de Euler. Operações com conjuntos. Relações entre conjuntos. Combinatória. Fenômenos aleatórios, frequência, e exemplos práticos. População, amostra, e amostragem. Média, mediana e moda: definição, significado e aplicações. Amplitude, variância e desvios. Distribuição normal e distribuição de Poisson.',
         pre:'Nenhum', 
          
         matriz: true, comentarios: []
        },
    {
        id:12,
        name:'Comunicação Visual I',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Conceitos e elementos da Comunicação Visual: elementos e propriedades gráficas e níveis da linguagem visual. Teoria da Gestalt aplicada à comunicação visual. Técnicas básicas de composição visual e layout. Princípios de design gráfico. Tipografia e harmonias cromáticas. Definição de identidade visual.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:13,
        name:'Programação II',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Projeto Integrado I, Analise e Projeto de Sistemas, Estrutura de Dados, Rede de Computadores, Desenvolvimento de Jogos Casuais, Inteligência Computacional Aplicada a Jogos I, Laboratório de Programação, Linguagem de Programação Script, Matemática e Física para Jogos, Programação para Web I.',
         pre:'Programação I', 
          
         matriz: true, comentarios: []
        },
    {
        id:14,
        name:'Narrativas Multimídia',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Bases da narrativa a partir de elementos da análise do discurso. Roteiro e suas características a partir da mídia utilizada. Documentação e suas ferramentas: storyboard, storyreel, timeline, interação entre as mídias. Navegabilidade. Arquitetura da informação e suas fases: esquema de organização, modelo de narrativa e sistema de rotulação.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:15,
        name:'Metodologia de Pesquisa Científica',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Fundamentos de metodologia científica. Noções de processo de elaboração de projetos. Elementos do projeto: motivação, justificativa, problema, referencial teórico, objetivo, metodologia, referências bibliográficas. Modalidades de TCC. Normas de trabalho científico. Elaboração e apresentação de projetos em multimídia.',
         pre:'Projeto Integrado I',
          
         matriz: true, comentarios: []
        },
    {
        id:16,
        name:'Ética e Política Autoral',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Ética, Moral e Liberdade – relações e conceitos. A Ética na História. A Ética e a Moral nos campos social e profissional. A Propriedade Intelectual. Códigos de Ética Profissional. Ética hacker. Novas Tecnologias associadas ao Direito Autoral. Legislação vigente relacionada ao Direito Autoral. Mídia, direitos humanos e cidadania.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:17,
        name:'Gestão de Projetos Multimídia',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Introdução a Gestão de Projetos. Características dos Projetos Multimídia. Modelos de Projetos Multimídia. Os Profissionais envolvidos em Projetos Multimídia. Ciclo de Vida de Projetos Multimídia. Gerenciamento da Equipe. Gerenciamento do Cronograma. Gerenciamento dos Riscos. Gerenciamento da Qualidade. Plano de Comunicação. Implantação e Pesquisa de Opinião com o Cliente. Ferramentas de Acompanhamento. Economia Criativa. Elaboração de Plano de Negócio.',
         pre:'Projeto Integrado I',
         matriz: true, comentarios: []
        },
    {
        id:18,
        name:'Trabalho de Conclusão do Curso I',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Processo de elaboração de projetos. Roteiro: título, caracterização do problema e justificativa, objetivos, metas, metodologia, cronograma e referências bibliográficas. Formulação, apresentação e defesa de projeto.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:19,
        name:'Trabalho de Conclusão do Curso II',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'Processo de elaboração de projetos. Roteiro: título, caracterização do problema e justificativa, objetivos, metas, metodologia, cronograma e referências bibliográficas. Formulação, apresentação e defesa de projeto.',
         pre:'Metodologia de Pesquisa Científica',
         matriz: true, comentarios: []
        },
    {
        id:20,
        name:'Seminários em Multimídia',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Eventos com convidados apresentando tendências nas áreas relacionadas a Sistemas e Mídias Digitais. Leitura e análise de artigos de congressos e publicações relacionadas com Sistemas e Mídias Digitais. Discussões dos assuntos abordados',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:21,
        name:'Análise e Prejeto de Sistemas',
         color:'#27AE60',
         tipo: 'Eletiva',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Introdução à análise de sistemas. Ciclo de vida e os paradigmas de desenvolvimento de software. Abordagens de desenvolvimento e projeto de sistemas. Metodologias de modelagem de sistemas. UML - Unified Modeling Language. Especificação e documentação em UML com Ferramentas CASE. Desenvolvimento de projetos de sistemas em UML. Mapeamento Objeto-Relacional. Uso de um Processo de Desenvolvimento voltado para Sistemas Multimídia.',
         pre:'PRogramação II',
         matriz: true, comentarios: []
        },
    {
        id:22,
        name:'Estruturas de Dados',
         color:'#27AE60',
         tipo: 'Eletiva',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Programação C. Listas: estática, dinâmica, simplesmente encadeada, duplamente encadeada, circular etc. Fila em Estrutura Dinâmica e estática. Pilha em estrutura dinâmica e estática. Árvores binárias e balanceadas. Algoritmos de ordenação e de busca. Complexidade. Recursividade.',
         pre:'Programação II',
         matriz: true, comentarios: []
        },
    {
        id:23,
        name:'Redes de Computadores',
         color:'#27AE60',
         tipo: 'Eletiva',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Introdução às redes de computadores e a Internet. Estudo aprofundado das camadas TCP/IP: Aplicação, Transporte, Rede, Enlace e Física. Teoria e Prática com os protocolos da camada aplicação mais utilizados: (HTTP. SMTP, FTP, VoiP, DNS, etc.). Controle de Congestionamento e Fluxo em TCP. Topologia, Endereçamento e Roteamento em redes TCP/IP. Redes P2P. Programação em Sockets TCP e UDP.',
         pre:'PRogramação II',
         matriz: true, comentarios: []
        },
    {
        id:24,
        name:'Desenho II',
         color:'#27AE60',
         tipo: 'Eletiva',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'Linguagem e criação visual. Técnicas de representação e elementos gráficos. Técnicas de desenho manual e digital. Análise e experimentação gráfica. Representação visual aplicada',
         pre:'Desenho I',
         matriz: true, comentarios: []
        },
    {
        id:25,
        name:'Fotografia',
         color:'#27AE60',
         tipo: 'Eletiva',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Compreender os conceitos de imagem e fotografia, conhecendo e explorando as potencialidades artísticas e documentais da captura de imagens digitais, a partir do domínio técnico da câmera digital e do conhecimento dos gêneros, práticas e expermentos na produção contemporânea das imagens.',
         pre:'Comunicação Visual I',
         matriz: true, comentarios: []
        },
    {
        id:26,
        name:'Semiótica Aplicada',
         color:'#27AE60',
         tipo: 'Eletiva',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Perspectiva histórica e contemporânea da semiótica e sua relação com as mídias digitais, com particular ênfase às teorias semióticas e à semiótica da cultura e da arte. Conceitos de signo e significação. Principais elementos de semiótica aplicada.Elementos da retórica na arte e na mídia.',
         pre:'Comunicação Visual I',
         matriz: true, comentarios: []
        },
    {
        id:27,
        name:'Engenharia de Software',
         color:'#27AE60',
         tipo: 'Eletiva',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Evolução, terminologia e estado da arte da Engenharia de Software. Modelos de processo de desenvolvimento. Fases do processo de desenvolvimento. Principais modelos, metodologias, técnicas e ferramentas utilizadas na Engenharia de Software.Qualidade do produto e processo. Padrões de desenvolvimento.',
         pre:'Análise e Projeto de Sistemas',
         matriz: true, comentarios: []
        },
    {
        id:28,
        name:'Banco de Dados I',
         color:'#27AE60',
         tipo: 'Eletiva',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Sistemas de Banco de Dados. Modelo Entidade-Relacionamento. Modelo Relacional. Projeto de banco de dados. Linguagem SQL. Aplicações em Bancos de Dados. Restrições de integridade em banco de dados relacional.',
         pre:'Estrutura de Dados',
         matriz: true, comentarios: []
        },
    {
        id:29,
        name:'Comunicação Visual II',
         color:'#27AE60',
         tipo: 'Eletiva',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'Materiais. Construção do significado. Gestalt aplicada à programação visual. Uso da cor e harmonias cromáticas. Criatividade. Sistemas de identidade visual. A comunicação visual aplicada a sistemas digitais.',
         pre:'Comunicação Visual I',
         matriz: true, comentarios: []
        },
    {
        id:30,
        name:'Design de Som',
         color:'#27AE60',
         tipo: 'Eletiva',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'>O universo sonoro e a estética do som. Fundamentos de composição musical. Estilos musicais e suas perspectivas midiáticas. Uso narrativo da trilha sonora e de efeitos sonoros em projetos multimídia. Técnicas de captura, tratamento e edição de som. Experimentos em sonorização.',
         pre:'Narrativas Multimídias',
         matriz: true, comentarios: []
        },
    {
        id:31,
        name:'Banco de Dados Aplicado à Multimídia',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Sistemas de Banco de Dados. Modelo Entidade-Relacionamento. Modelo Relacional. Projeto de banco de dados. Linguagem SQL. Aplicações em Bancos de Dados. Restrições de integridade em banco de dados relacional.',
         pre:'Banco de Dados I',
         matriz: true, comentarios: []
        },
    {
        id:32,
        name:'Cibercultura E Educação: Novas Práticas',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'Desenvolvimento de projetos aplicados incorporando novas formas de ensinar e de aprender e novas tecnologias digitais em rede. Paradigmas teóricos da cibercultura e da interdisciplinaridade. Práticas educativas na cibercultura e com as novas tecnologias em rede. Novas metodologias de docência e aprendizagem.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:33,
        name:'Computação Física',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Introdução a Interação Humano-Computador. Fatores Humanos em Interação Humano-Computador. Análise e reflexão sobre Design. Métodos e técnicas utilizadas em Interação Humano-Computador. Projeto Prático.',
         pre:'Programação I',
         matriz: true, comentarios: []
        },
    {
        id:34,
        name:'Computação Gráfica',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Introdução, Sistemas Gráficos, Primitivas Gráficas, Rasterização e Algoritmos de Bresenham, Representação e Modelagem de Objetos, Cor e sistemas de cores, OpenGL, Transformações Geométricas 2D e 3D, Projeções Paralelas e Perspectivas, Matrizes de Visualização e de Projeção, Z-Buffer e buffers de vídeo, Texturização e Listas de Exibição, Iluminação, Projetos em Computação Gráfica.',
         pre:'Laboratório de Programação',
         matriz: true, comentarios: []
        },
    {
        id:35,
        name:'Comunicação em Novas Mídias',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'',
         pre:'Narrativas Multimídias',
         matriz: true, comentarios: []
        },
    {
        id:36,
        name:'Concepção de Cenários e Personagens',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Ferramentas de Modelagem Tridimensional I',
         matriz: true, comentarios: []
        },
    {
        id:37,
        name:'Cultura de Jogos',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Definição e conceituação de jogos eletrônicos. Narratologia e Ludologia. História dos Jogos eletrônicos. Plataformas e dispositivos. Influências dos jogos na cultura contemporânea. Tipologia dos jogos eletrônicos. Avaliação e Crítica de Games.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:38,
        name:'Desenvolvimento de Aplicações Distribuídas',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Sistemas Distribuídos',
         matriz: true, comentarios: []
        },
    {
        id:39,
        name:'Desenvolvimento de Jogos Casuais',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'Apresentação da ideia de jogos casuais e respectivos conceitos envolvidos (diversão, jogabilidade, imersão, simplicidade de uso, etc.). Discussão e prática de técnicas e tecnologias voltadas ao desenvolvimento de jogos casuais. Especificação de jogo casual. Desenvolvimento de jogo casual. Aplicação de jogo casual. Avaliação de jogo casual.',
         pre:'Programação II',
         matriz: true, comentarios: []
        },
    {
        id:40,
        name:'Desenvolvimento de Motores Gráficos',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'Conceitos fundamentais. Pipelines gráficas. Pipelines gráficas programáveis. Câmeras. Malhas. Materiais. Animação. Representação de cenas. Estruturas de dados e algoritmos para aceleração gráfica. Técnicas básicas de renderização de efeitos especiais. Construção de uma API de alto nível. Aspectos de integração com outros componentes. Estudos de casos.',
         pre:'Computação Gráfica, Programação para Jogos II',
         matriz: true, comentarios: []
        },
    {
        id:41,
        name:'Design de Jogos Digitais',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'',
         pre:'Narrativas Multimídia',
         matriz: true, comentarios: []
        },
    {
        id:42,
        name:'Design Instrucional',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Fundamentos de Material Didático para EAD',
         matriz: true, comentarios: []
        },
    {
        id:43,
        name:'Direção de Arte para Multimídia',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Autoração Multimídia I',
         matriz: true, comentarios: []
        },
    {
        id:44,
        name:'Edição Audiovisual',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Linguagem Audiovisual',
         matriz: true, comentarios: []
        },
    {
        id:45,
        name:'Educomunicação',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Fundamentos epistemológicos da inter-relação entre comunicação e educação. Aspectos históricos da educomunicação. Mídia e educação. As contribuições ibero-americana, europeia e norte-americana. A teoria das mediações. Educomunicação, movimentos sociais e terceiro setor. O perfil do profissional educomunicador. Pesquisa acadêmica em educomunicação. Políticas públicas na área de educomunicação.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:46,
        name:'Experimentos em Multimídia I',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'Apresentação, análise e discussão de tendências na área de multimídia. Avaliação de soluções técnicas e tecnológicas que viabilizem a construção de produtos/artefatos de mídia digital de diversos gêneros (aplicativos, serviços online, jogos eletrônicos, instalações multimídia interativas, etc). Construção de protótipos, realização de testes, avaliação de resultados, desenvolvimento de modelos finais e exposição/aplicação junto à comunidade.',
         pre:'Autoração Multimídia I, Programação I.',
         matriz: true, comentarios: []
        },
    {
        id:47,
        name:'Experimentos em Tipografia Digital',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Tipografia: história e evolução. Nomenclatura e classificação dos tipos. A tipografia como meio de expressão. Aplicação em projetos gráficos.',
         pre:'Comunicação Visual I',
         matriz: true, comentarios: []
        },
    {
        id:48,
        name:'Ferramentas de Modelagem Tridimensional',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Comunicação Visual I',
         matriz: true, comentarios: []
        },
    {
        id:49,
        name:'Filosofia da Tecnologia',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Filosofia da ciência e da tecnologia, o que é tecnologia? Racionalidade tecnológica, determinismo tecnológico, mulheres feminismo e tecnologia e antitecnologia.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:50,
        name:'Frameworks de Software',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'Definir frameworks de software. Estudar frameworks de persistência de dados, log de operações, gráficos, geração de relatórios. Estudar tópicos avançados ou atuais em frameworks de software.',
         pre:'Engenharia de Software',
         matriz: true, comentarios: []
        },
    {
        id:51,
        name:'Gerência de Projetos de Software',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:52,
        name:'Gestão de Negócios em Multimídia',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:53,
        name:'Instalações Multimídia',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Apresentação, análise e discussão do conceito de instalação multimídia. Avaliação de soluções técnicas e tecnológicas que viabilizem a construção de instalações multimídia interativas de diversos gêneros. Construção de protótipos, realização de testes, avaliação de resultados, desenvolvimento de modelos finais e exposição/aplicação junto à comunidade.',
         pre:'Matemática Aplicada a Multimídia, Comunicação Visual I',
         matriz: true, comentarios: []
        },
    {
        id:54,
        name:'Inteligência Computacional Aplicada a Jogos I',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'',
         pre:'Programação II',
         matriz: true, comentarios: []
        },
    {
        id:55,
        name:'Inteligência Computacional Aplicada a Jogos I',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Tópicos avançados em inteligência computacional para jogos. Sistemas multiagentes, aprendizado de máquina, redes neurais, motores para jogos e projetos de inteligência computacional para jogos.',
         pre:'Inteligência Computacional Aplicada a Jogos I',
         matriz: true, comentarios: []
        },
    {
        id:56,
        name:'Introdução a Computação Móvel e Ubíqua',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Computação Ubíqua – Conceitos e Tecnologias, Histórico. Principais Características. Cenários. Aplicações. Desafios. Tecnologias de comunicação sem fio. Sensibilidade ao Contexto. Adaptabilidade e Adaptatividade. Personalização, Customização. Adaptação Estática e Adaptação Dinâmica. Sensores. Desenvolvimento de software móvel. Fragmentação e seus desafios. Técnicas de programação para dispositivos móveis. Plataformas. Explorando novos recursos.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:57,
        name:'Jogos Distribuídos',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Sistemas Distribuídos',
         matriz: true, comentarios: []
        },
    {
        id:58,
        name:'Jogos Multiplataforma',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'',
         pre:'Programação para Jogos I',
         matriz: true, comentarios: []
        },
    {
        id:59,
        name:'Jogos para Consoles',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Introdução e histórico. Arquiteturas modernas de microprocessadores. Análise das cargas de trabalho nos jogos. Gargalos computacionais. Arquiteturas de console. Hardware gráfico. Processo de desenvolvimento: técnicas de programação e ferramentas. Distribuição de jogos. Estudo de caso.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:60,
        name:'Laboratório de Criatividade',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'Definições de criação, inovação e criatividade. Os processos criativos e seu uso no Design. Desenvolvimento e a aplicação prática de técnicas criativas. Bloqueios e Desbloqueadores. Técnicas de geração de ideias.',
         pre:'Comunicação Visual I',
         matriz: true, comentarios: []
        },
    {
        id:61,
        name:'Laboratório de Programação',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Programação II',
         matriz: true, comentarios: []
        },
    {
        id:62,
        name:'Linguagem Audiovisual',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'',
         pre:'Narrativas Multimídias',
         matriz: true, comentarios: []
        },
    {
        id:63,
        name:'Linguagem de Programação Script',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Introdução a linguagem script. Linguagem compilada X interpretada. Prototipagem. Programação Web. Scripts para configuração e extensão de softwares. Programação em uma linguagem de programação script.',
         pre:'Programação II',
         matriz: true, comentarios: []
        },
    {
        id:64,
        name:'Matemática e Física para Jogos',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'',
         pre:'Programação II',
         matriz: true, comentarios: []
        },
    {
        id:65,
        name:'Mitologia Universais',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Mitologia, simbolismo e características das civilizações grega, egípcia e nórdica. Outras mitologias e civilizações menos conhecidas. Comparação entre essas civilizações e mitologias, e semelhança de seus simbolismos. Geração de civilizações fictícias a partir do entendimento das bases reais.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:66,
        name:'Mitos e Arquétipos',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'O que é mito. O que são arquétipos. Tipos de arquétipos. Origens dos mitos. Jornada do herói. Mitos de Criação. Mitos de Metamorfoses. Criaturas. Universos Fictícios. Heróis, heroínas e anti-heróis. Mitos modernos.',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:67,
        name:'Procecessamento de Áudio',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 0,
         cht: 4,
         professor: 'Professor:',
         ementa:'Introdução, aspectos históricos, princípios matemáticos e som perceptual.Representação digital de áudio, Teorema de Nyquist, qualidade de áudio, codificação e streaming. Processamento, mixagem, filtragem, controle de frequência, remoção de ruído e restauração. Síntese de som: instrumentos virtuais, saída digital de áudio, som tridimensional, sincronização e projeto de sistema básico de áudio.',
         pre:'Programação I',
         matriz: true, comentarios: []
        },
    {
        id:68,
        name:'Produção Audiovisual',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Edição Audiovisual',
         matriz: true, comentarios: []
        },
    {
        id:69,
        name:'Programação para Jogos I',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Programação II',
         matriz: true, comentarios: []
        },
    {
        id:70,
        name:'Programação para Jogos II',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Programação para Jogos I',
         matriz: true, comentarios: []
        },
    {
        id:71,
        name:'Programação para Web I',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Programação II',
         matriz: true, comentarios: []
        },
    {
        id:72,
        name:'Programação para Web II',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Programação para Web I',
         matriz: true, comentarios: []
        },
    {
        id:73,
        name:'Redação para Mídias Digitais',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'',
         pre:'Narrativas Multimídias, Semiótica Aplicada',
         matriz: true, comentarios: []
        },
    {
        id:74,
        name:'Sistemas Distribuídos',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'',
         pre:'Redes de Computadores, Programação II',
         matriz: true, comentarios: []
        },
    {
        id:75,
        name:'Sistemas Embarcados',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'',
         pre:'Análise e Projeto de Sistemas',
         matriz: true, comentarios: []
        },
    {
        id:76,
        name:'Técnicas de Animação Analógica',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Desenho I',
         matriz: true, comentarios: []
        },
    {
        id:77,
        name:'Técnicas de Animação Digital I',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'Técnicas de Animação Analógica',
         pre:'Nenhum',  
         matriz: true, comentarios: []
        },
    {
        id:78,
        name:'Teste de Software Aplicado',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 2,
         cht: 2,
         professor: 'Professor:',
         ementa:'Introdução a Testes de Software. Conceitos e Tipos de Testes de Software. Processos de Testes de Software. Testes Unitários. TDD.',
         pre:'Programação I',
         matriz: true, comentarios: []
        },
    {
        id:79,
        name:'Videografismo',
         color:'#2980B9',
         tipo: 'Optativa',
         chp: 4,
         cht: 0,
         professor: 'Professor:',
         ementa:'',
         pre:'Edição Audiovisual, Ferramentas de Modelagem Tridimensional I',
         matriz: true, comentarios: []
        },
    {
        id:80,
        name:'Projeto Integrado II',
         color:'#c0392B',
         tipo: 'Obrigatória',
         chp: 4,
         cht: 0,
         professor: 'Professores: Arthur, Cátia, Lincoln, Estér',
         ementa:'Definição de características iniciais do produto multimídia de complexidade baixa. Estabelecimento de metodologia de desenvolvimento. Geração de produto, de acordo com a metodologia previamente adotada. Apresentação e discussão de resultados intermediários e finais.',
         pre:'Comunicação Visual I, Programação I',
          
         matriz: true, comentarios: []
        },
]
	}     
	return service;
});
