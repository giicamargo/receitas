document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const categoryMenu = document.getElementById('categoryMenu');
    const mainContent = document.getElementById('mainContent');
    const homeButton = document.getElementById('homeButton');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // --- Dados para as receitas (simulando um banco de dados) ---
    // Cada receita tem um 'category' (categoria principal) e um 'title' específico.
    const recipes = {
        // Bolos
        'bolo-chocolate': {
            title: 'Bolo de Chocolate Clássico',
            category: 'bolos',
            ingredients: [
                '2 xícaras de farinha de trigo',
                '1 xícara de açúcar',
                '3 ovos grandes',
                '1/2 xícara de chocolate em pó 50%',
                '1 xícara de leite integral',
                '1/2 xícara de óleo vegetal',
                '1 colher de sopa de fermento em pó',
                'Pitada de sal fino'
            ],
            instructions: [
                'Pré-aqueça o forno a 180°C. Unte e enfarinhe uma forma de 24cm.',
                'Em uma tigela grande, peneire a farinha, o açúcar, o chocolate em pó e o sal. Misture bem.',
                'Em outra tigela, bata os ovos, o leite e o óleo até incorporar.',
                'Despeje os líquidos sobre os ingredientes secos e misture delicadamente com um fouet ou espátula até obter uma massa homogênea.',
                'Por último, adicione o fermento em pó e misture suavemente apenas para incorporar.',
                'Despeje a massa na forma preparada e leve ao forno por aproximadamente 35-45 minutos, ou até que um palito inserido no centro saia limpo.',
                'Retire do forno, espere amornar para desenformar e sirva simples ou com uma cobertura de sua preferência.'
            ]
        },
        'bolo-cenoura': {
            title: 'Bolo de Cenoura com Cobertura de Chocolate',
            category: 'bolos',
            ingredients: [
                '3 cenouras médias picadas',
                '4 ovos',
                '1 xícara de óleo',
                '2 xícaras de açúcar',
                '2 xícaras de farinha de trigo',
                '1 colher de sopa de fermento em pó',
                'Para a Cobertura: 1 lata de leite condensado, 1 colher de sopa de manteiga, 3 colheres de sopa de chocolate em pó'
            ],
            instructions: [
                'No liquidificador, bata as cenouras, os ovos e o óleo até obter uma mistura homogênea.',
                'Em uma tigela grande, despeje a mistura do liquidificador. Adicione o açúcar e a farinha de trigo peneirados, misturando bem.',
                'Por último, acrescente o fermento e incorpore delicadamente.',
                'Despeje a massa em uma forma untada e enfarinhada e asse em forno pré-aquecido a 180°C por cerca de 40-50 minutos, ou até dourar.',
                'Para a cobertura: Em uma panela, misture o leite condensado, a manteiga e o chocolate em pó. Leve ao fogo baixo, mexendo sempre, até engrossar. Despeje sobre o bolo ainda quente.'
            ]
        },
        'bolo-milho': {
            title: 'Bolo Cremoso de Milho Verde',
            category: 'bolos',
            ingredients: [
                '3 espigas de milho verde (ou 2 latas de milho escorrido)',
                '1 xícara de açúcar',
                '1/2 xícara de óleo',
                '3 ovos',
                '1/2 xícara de leite',
                '1/2 xícara de fubá',
                '1 colher de sopa de fermento em pó'
            ],
            instructions: [
                'Debulhe o milho das espigas (ou use o milho de lata).',
                'No liquidificador, bata o milho, o açúcar, o óleo, os ovos e o leite até ficar homogêneo.',
                'Despeje a mistura em uma tigela, adicione o fubá e o fermento, misturando bem com uma colher.',
                'Despeje a massa em uma forma untada e enfarinhada (ou untada com manteiga e polvilhada com fubá).',
                'Asse em forno pré-aquecido a 180°C por cerca de 40-50 minutos, ou até que esteja firme e dourado.'
            ]
        },

        // Sopas
        'sopa-legumes': {
            title: 'Sopa Cremosa de Legumes',
            category: 'sopas',
            ingredients: [
                '1 cebola média picada',
                '2 dentes de alho amassados',
                '2 batatas médias picadas',
                '1 cenoura grande picada',
                '1 abobrinha pequena picada',
                '1/2 xícara de vagem picada',
                '1 litro de caldo de legumes caseiro (ou água)',
                '2 colheres de sopa de azeite de oliva',
                'Sal e pimenta do reino a gosto',
                'Salsinha picada para finalizar'
            ],
            instructions: [
                'Em uma panela grande, aqueça o azeite em fogo médio. Refogue a cebola até ficar transparente e, em seguida, adicione o alho, refogando por mais 1 minuto.',
                'Adicione todos os legumes picados à panela e refogue por cerca de 5 minutos, mexendo ocasionalmente.',
                'Despeje o caldo de legumes (ou água), tempere com sal e pimenta. Aumente o fogo e, assim que ferver, reduza para médio-baixo e cozinhe com a panela semi-tampada até que os legumes estejam bem macios (cerca de 20-25 minutos).',
                'Com um mixer de mão ou liquidificador, bata parte ou toda a sopa até atingir a cremosidade desejada. Se usar liquidificador, bata em partes e com cuidado, pois o vapor pode causar pressão.',
                'Ajuste o tempero se necessário. Sirva quente, finalizando com salsinha fresca picada.'
            ]
        },
        'sopa-mandioquinha': {
            title: 'Sopa de Mandioquinha com Carne Seca',
            category: 'sopas',
            ingredients: [
                '500g de mandioquinha (batata baroa) picada',
                '200g de carne seca desfiada e dessalgada',
                '1 cebola picada',
                '2 dentes de alho amassados',
                '1 litro de caldo de carne',
                '2 colheres de sopa de azeite',
                'Sal e cheiro-verde a gosto'
            ],
            instructions: [
                'Em uma panela de pressão, cozinhe a carne seca já dessalgada até ficar macia. Desfie e reserve.',
                'Na mesma panela, aqueça o azeite e refogue a cebola e o alho.',
                'Adicione a mandioquinha picada e refogue por alguns minutos. Junte o caldo de carne e a carne seca desfiada.',
                'Cozinhe até a mandioquinha ficar macia. Desligue o fogo e bata a sopa no liquidificador (se preferir mais cremosa, bata toda).',
                'Volte ao fogo, ajuste o sal e sirva com cheiro-verde picado.'
            ]
        },

        // Bebidas Quentes
        'cha-gengibre': {
            title: 'Chá de Gengibre Refrescante',
            category: 'bebidas',
            ingredients: [
                '1 pedaço de gengibre (cerca de 3cm) fatiado',
                '500 ml de água',
                'Mel e limão a gosto (opcional)'
            ],
            instructions: [
                'Em uma panela, adicione a água e as fatias de gengibre.',
                'Leve ao fogo e deixe ferver por 5 a 10 minutos (quanto mais tempo, mais forte o sabor).',
                'Retire do fogo, coe o chá para remover o gengibre.',
                'Sirva quente, adicionando mel e rodelas de limão a gosto, se desejar.'
            ]
        },
        'cafe-cremoso': {
            title: 'Café Cremoso Caseiro',
            category: 'bebidas',
            ingredients: [
                '1 xícara de açúcar',
                '50g de café solúvel',
                '1 xícara de água fervente',
                'Leite quente para servir'
            ],
            instructions: [
                'Em uma batedeira, coloque o açúcar, o café solúvel e a água fervente.',
                'Bata em velocidade alta por cerca de 8 a 10 minutos, ou até obter um creme claro e volumoso.',
                'Guarde o creme em um pote fechado na geladeira por até 10 dias ou no freezer por mais tempo.',
                'Para servir, coloque 2 colheres de sopa do creme em uma xícara e adicione leite quente, misturando bem.'
            ]
        },

        // Salgados
        'pao-queijo': {
            title: 'Pão de Queijo Tradicional Mineiro',
            category: 'salgados',
            ingredients: [
                '500g de polvilho doce',
                '250ml de leite',
                '150ml de óleo',
                '2 ovos grandes',
                '200g de queijo minas curado ralado (ou meia cura)',
                '1 colher de chá de sal (ou a gosto)'
            ],
            instructions: [
                'Em uma panela, aqueça o leite, o óleo e o sal até ferver. Desligue o fogo.',
                'Em uma tigela grande, coloque o polvilho doce. Despeje a mistura quente da panela sobre o polvilho e mexa vigorosamente com uma colher de pau até incorporar e escaldar bem o polvilho.',
                'Deixe a massa amornar. Em seguida, adicione os ovos, um a um, sovando bem a massa a cada adição. A massa deve ficar homogênea e um pouco pegajosa.',
                'Por último, adicione o queijo ralado e continue sovando até que o queijo esteja completamente incorporado à massa.',
                'Com as mãos levemente untadas, faça bolinhas do tamanho desejado e coloque-as em uma assadeira sem untar (o pão de queijo não gruda).',
                'Asse em forno pré-aquecido a 180°C por cerca de 25-35 minutos, ou até que estejam dourados e crescidos. Sirva quentinho.'
            ]
        },
        'coxinha-frango': {
            title: 'Coxinha de Frango com Requeijão',
            category: 'salgados',
            ingredients: [
                'Massa: 2 xícaras de farinha de trigo, 2 xícaras de caldo de frango, 2 colheres de sopa de margarina, sal a gosto',
                'Recheio: 300g de peito de frango cozido e desfiado, 1/2 cebola picada, 1 dente de alho picado, 2 colheres de sopa de requeijão cremoso, salsinha a gosto',
                'Para empanar: 1 ovo batido, farinha de rosca'
            ],
            instructions: [
                'Recheio: Em uma panela, refogue a cebola e o alho no azeite. Adicione o frango desfiado, tempere e refogue. Misture o requeijão e a salsinha. Reserve.',
                'Massa: Em outra panela, ferva o caldo de frango com a margarina e o sal. Desligue o fogo e adicione a farinha de trigo de uma vez, mexendo vigorosamente até desgrudar do fundo da panela. Cozinhe por mais 2 minutos, mexendo.',
                'Transfira a massa para uma superfície untada e sove enquanto estiver morna até ficar lisa.',
                'Pegue pequenas porções da massa, abra na palma da mão, coloque uma porção do recheio no centro e modele as coxinhas. ',
                'Passe as coxinhas no ovo batido e depois na farinha de rosca.',
                'Frite em óleo quente até dourarem. Escorra em papel toalha e sirva.'
            ]
        },

        // Café da Manhã
        'omelete': {
            title: 'Omelete Simples e Rápida',
            category: 'cafe_da_manha',
            ingredients: [
                '3 ovos grandes',
                '2 colheres de sopa de leite',
                'Sal e pimenta do reino a gosto',
                '1 colher de chá de manteiga ou azeite',
                'Opcional: queijo ralado, presunto picado, tomate picado'
            ],
            instructions: [
                'Em uma tigela, bata os ovos com o leite, sal e pimenta até as gemas e claras se misturarem, mas sem bater demais.',
                'Aqueça a manteiga ou azeite em uma frigideira antiaderente em fogo médio.',
                'Despeje a mistura de ovos na frigideira. Se for adicionar recheios (queijo, presunto, etc.), espalhe-os sobre os ovos enquanto eles ainda estão líquidos na superfície.',
                'Cozinhe até as bordas começarem a firmar e o centro ainda estiver um pouco úmido. Dobre a omelete ao meio com uma espátula.',
                'Deixe cozinhar por mais um minuto ou dois, dependendo da sua preferência de cozimento.',
                'Sirva imediatamente.'
            ]
        },
        'tapioca-queijo': {
            title: 'Tapioca com Queijo Coalho',
            category: 'cafe_da_manha',
            ingredients: [
                '1 xícara de goma de tapioca hidratada',
                '100g de queijo coalho ralado ou picado',
                'Manteiga para untar a frigideira',
                'Sal a gosto (se o queijo não for muito salgado)'
            ],
            instructions: [
                'Aqueça uma frigideira antiaderente em fogo médio.',
                'Peneire a goma de tapioca diretamente sobre a frigideira quente, cobrindo o fundo de forma uniforme (como uma panqueca fina).',
                'Deixe cozinhar por cerca de 1 a 2 minutos, ou até as bordas começarem a se soltar e a massa grudar.',
                'Espalhe o queijo coalho sobre metade da tapioca. Se desejar, adicione uma pitada de sal.',
                'Dobre a tapioca ao meio, formando uma meia-lua. Pressione levemente com a espátula para o queijo derreter.',
                'Cozinhe por mais 1-2 minutos de cada lado, até o queijo estar derretido e a tapioca levemente dourada.',
                'Sirva quente.'
            ]
        },

        // Alimentação Saudável
        'salada-graos': {
            title: 'Salada de Grãos Mediterrânea',
            category: 'alimentacao_saudavel',
            ingredients: [
                '1 xícara de grão de bico cozido',
                '1 xícara de quinoa cozida',
                '1/2 pepino picado',
                '1/2 pimentão vermelho picado',
                '1/4 cebola roxa fatiada finamente',
                '1/2 xícara de tomate cereja cortado ao meio',
                'Para o molho: suco de 1 limão, 3 colheres de sopa de azeite, sal e pimenta do reino a gosto, 1 colher de sopa de hortelã fresca picada'
            ],
            instructions: [
                'Em uma tigela grande, combine o grão de bico cozido, a quinoa cozida, o pepino, o pimentão, a cebola roxa e o tomate cereja.',
                'Prepare o molho: Em um recipiente pequeno, misture o suco de limão, o azeite, o sal, a pimenta e a hortelã picada.',
                'Despeje o molho sobre a salada de grãos e misture delicadamente para que todos os ingredientes fiquem bem temperados.',
                'Cubra e leve à geladeira por pelo menos 30 minutos antes de servir para que os sabores se incorporem.',
                'Sirva fria como acompanhamento ou prato principal leve.'
            ]
        },
        'smoothie-verde': {
            title: 'Smoothie Verde Detox',
            category: 'alimentacao_saudavel',
            ingredients: [
                '1 folha grande de couve manteiga (sem o talo)',
                '1/2 maçã verde picada',
                '1/2 pepino picado',
                '1 pedaço pequeno de gengibre (sem casca)',
                '200ml de água de coco ou água filtrada',
                'Suco de 1/2 limão',
                'Opcional: 1 colher de chá de semente de chia ou linhaça'
            ],
            instructions: [
                'Lave bem a folha de couve, a maçã e o pepino.',
                'No liquidificador, coloque a couve (rasgada), a maçã, o pepino, o gengibre, a água de coco (ou água) e o suco de limão.',
                'Bata em velocidade alta até obter uma mistura homogênea e cremosa. Se estiver muito grosso, adicione um pouco mais de água.',
                'Se desejar, adicione a semente de chia ou linhaça e bata rapidamente novamente.',
                'Sirva imediatamente para aproveitar todos os nutrientes.'
            ]
        }
    };

    // --- Menu Toggle ---
    menuButton.addEventListener('click', () => {
        categoryMenu.classList.toggle('active');
    });

    // --- Home Button ---
    homeButton.addEventListener('click', loadHomePage);

    // --- Category Click (Event Delegation) ---
    categoryMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault(); // Previne o comportamento padrão do link
            const category = event.target.dataset.category;
            loadRecipesByCategory(category);
            categoryMenu.classList.remove('active'); // Esconde o menu após a seleção
        }
    });

    // --- Search Functionality ---
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm === '') {
            alert('Por favor, digite algo para pesquisar.');
            return;
        }

        const foundRecipeKeys = Object.keys(recipes).filter(key =>
            recipes[key].title.toLowerCase().includes(searchTerm) ||
            recipes[key].category.toLowerCase().includes(searchTerm) ||
            recipes[key].ingredients.some(ing => ing.toLowerCase().includes(searchTerm)) // Busca também nos ingredientes
        );

        if (foundRecipeKeys.length > 0) {
            displaySearchResults(foundRecipeKeys, searchTerm);
        } else {
            mainContent.innerHTML = `
                <h2>Nenhuma Receita Encontrada</h2>
                <p>Desculpe, não encontramos nenhuma receita para "${searchTerm}".</p>
                <p>Tente um termo diferente ou explore nossas categorias no menu.</p>
            `;
        }
        categoryMenu.classList.remove('active'); // Esconde o menu
    }

    function displaySearchResults(recipeKeys, searchTerm) {
        let html = `<h2>Resultados da Pesquisa para "${searchTerm}"</h2><div class="home-buttons-grid">`;
        if (recipeKeys.length > 0) {
            recipeKeys.forEach(key => {
                const recipe = recipes[key];
                html += `
                    <button class="recipe-card-button" data-recipe="${key}">${recipe.title}</button>
                `;
            });
            html += `</div>`;
        } else {
            html = `<p>Nenhuma receita encontrada para esta pesquisa.</p>`; // fallback, should not be hit if recipeKeys is empty
        }
        mainContent.innerHTML = html;
        addRecipeButtonClickListeners(); // Re-adiciona listeners para os novos botões
    }

    // --- Carregar Detalhes da Receita ---
    function loadRecipe(recipeKey) {
        const recipe = recipes[recipeKey];
        if (recipe) {
            let ingredientsHtml = recipe.ingredients.map(item => `<li>${item}</li>`).join('');
            let instructionsHtml = recipe.instructions.map(item => `<li>${item}</li>`).join('');

            mainContent.innerHTML = `
                <div class="recipe-detail">
                    <h2>${recipe.title}</h2>
                    <h3>Ingredientes:</h3>
                    <ul>
                        ${ingredientsHtml}
                    </ul>
                    <h3>Modo de Preparo:</h3>
                    <ol>
                        ${instructionsHtml}
                    </ol>
                    <button class="back-button" onclick="window.history.back()">Voltar</button>
                </div>
            `;
        } else {
            mainContent.innerHTML = `<h2>Receita não encontrada!</h2><p>Desculpe, a receita que você procura não está disponível.</p>`;
        }
    }

    // --- Carregar Receitas por Categoria ---
    function loadRecipesByCategory(category) {
        const filteredRecipes = Object.keys(recipes).filter(key => recipes[key].category === category);
        const categoryDisplayName = event.target.textContent; // Pega o texto do link da categoria clicada

        let html = `<h2>Receitas de ${categoryDisplayName}</h2><div class="home-buttons-grid">`;

        if (filteredRecipes.length > 0) {
            filteredRecipes.forEach(key => {
                const recipe = recipes[key];
                html += `
                    <button class="recipe-card-button" data-recipe="${key}">${recipe.title}</button>
                `;
            });
            html += `</div>`;
        } else {
            html = `<p>Nenhuma receita encontrada nesta categoria ainda.</p>`;
        }
        mainContent.innerHTML = html;
        addRecipeButtonClickListeners(); // Re-adiciona listeners para os novos botões
    }

    // --- Carregar Página Inicial ---
    function loadHomePage() {
        mainContent.innerHTML = `
            <h2>Bem-vindo ao QueroMais Receitas!</h2>
            <p>Descubra o sabor da culinária com nossas receitas selecionadas.</p>
            <div class="home-buttons-grid">
                <button class="recipe-card-button" data-recipe="bolo-chocolate">Bolo de Chocolate Clássico</button>
                <button class="recipe-card-button" data-recipe="sopa-legumes">Sopa Cremosa de Legumes</button>
                <button class="recipe-card-button" data-recipe="cha-gengibre">Chá de Gengibre Refrescante</button>
                <button class="recipe-card-button" data-recipe="pao-queijo">Pão de Queijo Tradicional</button>
                <button class="recipe-card-button" data-recipe="omelete">Omelete Simples e Rápida</button>
                <button class="recipe-card-button" data-recipe="salada-graos">Salada de Grãos Mediterrânea</button>
            </div>
        `;
        addRecipeButtonClickListeners();
    }

    // --- Adicionar listeners de clique para os botões de receita (na home, busca, categoria) ---
    function addRecipeButtonClickListeners() {
        document.querySelectorAll('.recipe-card-button').forEach(button => {
            button.addEventListener('click', () => {
                const recipeKey = button.dataset.recipe;
                loadRecipe(recipeKey);
            });
        });
    }

    // Carregamento inicial da página Home
    loadHomePage();
});