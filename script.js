document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const categorySidebar = document.getElementById('categorySidebar');
    const homeButton = document.getElementById('homeButton');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Data for recipes and categories
    const recipes = {
        // Bolos
        'bolo-cenoura': {
            title: 'Bolo de Cenoura com Cobertura de Chocolate',
            category: 'Bolos',
            ingredients: [
                '3 cenouras médias picadas',
                '4 ovos',
                '2 xícaras de açúcar',
                '1/2 xícara de óleo',
                '2 xícaras de farinha de trigo',
                '1 colher de sopa de fermento em pó',
                'Para a cobertura:',
                '1 xícara de chocolate em pó',
                '1/2 xícara de açúcar',
                '1/2 xícara de leite',
                '2 colheres de sopa de manteiga'
            ],
            instructions: [
                'No liquidificador, bata a cenoura, os ovos, o açúcar e o óleo até ficar homogêneo.',
                'Em uma tigela, misture a farinha de trigo e o fermento.',
                'Despeje a mistura do liquidificador na tigela e misture bem.',
                'Despeje a massa em uma forma untada e enfarinhada e asse em forno pré-aquecido a 180°C por cerca de 35-40 minutos.',
                'Para a cobertura: em uma panela, misture todos os ingredientes e leve ao fogo baixo, mexendo sempre até engrossar. Despeje sobre o bolo ainda quente.'
            ]
        },
        'bolo-chocolate': {
            title: 'Bolo de Chocolate Simples',
            category: 'Bolos',
            ingredients: [
                '3 ovos',
                '1 xícara de açúcar',
                '1/2 xícara de óleo',
                '1 xícara de leite',
                '2 xícaras de farinha de trigo',
                '1 xícara de chocolate em pó',
                '1 colher de sopa de fermento em pó'
            ],
            instructions: [
                'Bata os ovos, açúcar e óleo no liquidificador.',
                'Adicione o leite e bata novamente.',
                'Em uma tigela, misture a farinha, chocolate em pó e fermento.',
                'Despeje a mistura líquida sobre os secos e misture bem.',
                'Leve ao forno pré-aquecido a 180°C por aproximadamente 30-40 minutos.'
            ]
        },
        // Sopas
        'sopa-legumes': {
            title: 'Sopa Cremosa de Legumes',
            category: 'Sopas',
            ingredients: [
                '1 cebola picada',
                '2 dentes de alho picados',
                '2 batatas picadas',
                '1 cenoura picada',
                '1 abobrinha picada',
                '1 tomate picado',
                '1 litro de caldo de legumes',
                'Sal e pimenta a gosto',
                'Salsinha picada para finalizar'
            ],
            instructions: [
                'Em uma panela, refogue a cebola e o alho em um pouco de azeite.',
                'Adicione os legumes picados e refogue por alguns minutos.',
                'Despeje o caldo de legumes, tempere com sal e pimenta, e cozinhe até os legumes ficarem macios.',
                'Se desejar, bata uma parte da sopa no liquidificador para deixá-la mais cremosa. Volte para a panela e aqueça.',
                'Sirva com salsinha picada.'
            ]
        },
        'sopa-ervilha': {
            title: 'Sopa de Ervilha com Bacon',
            category: 'Sopas',
            ingredients: [
                '500g de ervilha seca',
                '100g de bacon picado',
                '1 cebola picada',
                '2 dentes de alho picados',
                'Caldo de carne ou legumes a gosto',
                'Sal e pimenta do reino'
            ],
            instructions: [
                'Deixe a ervilha de molho por pelo menos 4 horas (idealmente da noite para o dia).',
                'Refogue o bacon em uma panela grande até ficar crocante. Retire o bacon e reserve, deixando a gordura na panela.',
                'Na mesma panela, refogue a cebola e o alho.',
                'Adicione a ervilha escorrida e o caldo (cobrindo a ervilha). Cozinhe até a ervilha ficar macia.',
                'Bata no liquidificador até obter um creme. Volte para a panela, ajuste o tempero e aqueça.',
                'Sirva com o bacon crocante por cima.'
            ]
        },
        // Bebidas quentes
        'cafe-expresso': {
            title: 'Café Expresso Perfeito',
            category: 'Bebidas quentes',
            ingredients: [
                'Grãos de café frescos e de boa qualidade',
                'Água filtrada'
            ],
            instructions: [
                'Moa os grãos de café na hora, com moagem fina (quase um pó).',
                'Use 7-8 gramas de café moído por xícara (dose única).',
                'Pré-aqueça sua máquina de expresso e a xícara.',
                'Compacte o café moído no porta-filtro com a pressão correta.',
                'Extraia o café por 25-30 segundos para uma dose de 30ml.',
                'Sirva imediatamente.'
            ]
        },
        'chocolate-quente': {
            title: 'Chocolate Quente Cremoso',
            category: 'Bebidas quentes',
            ingredients: [
                '2 xícaras de leite',
                '2 colheres de sopa de chocolate em pó 50% cacau',
                '1 colher de sopa de amido de milho',
                '2 colheres de sopa de açúcar (ou a gosto)',
                'Canela em pó (opcional)'
            ],
            instructions: [
                'Em uma panela, dissolva o amido de milho em um pouco de leite frio.',
                'Adicione o restante do leite, o chocolate em pó e o açúcar.',
                'Leve ao fogo baixo, mexendo sempre, até engrossar.',
                'Sirva quente, polvilhado com canela se desejar.'
            ]
        },
        // Salgados
        'coxinha-frango': {
            title: 'Coxinha de Frango com Requeijão',
            category: 'Salgados',
            ingredients: [
                '500g de peito de frango cozido e desfiado',
                '1 xícara de requeijão cremoso',
                '1/2 cebola picada',
                '2 dentes de alho picados',
                'Caldo do cozimento do frango',
                '2 xícaras de farinha de trigo',
                'Sal e pimenta do reino a gosto',
                'Farinha de rosca para empanar',
                'Óleo para fritar'
            ],
            instructions: [
                'Refogue a cebola e o alho em um pouco de óleo. Adicione o frango desfiado e refogue bem.',
                'Acrescente o requeijão e misture até incorporar.',
                'Em outra panela, ferva 2 xícaras do caldo do frango com sal. Abaixe o fogo, adicione a farinha de trigo de uma vez e mexa vigorosamente até desgrudar do fundo da panela. Cozinhe por mais 1 minuto.',
                'Deixe a massa amornar. Sove bem a massa em uma superfície limpa.',
                'Pegue pequenas porções de massa, abra na palma da mão, coloque um pouco de recheio e modele as coxinhas.',
                'Passe as coxinhas no caldo restante e depois na farinha de rosca.',
                'Frite em óleo quente até dourarem.'
            ]
        },
        'pao-queijo': {
            title: 'Pão de Queijo Mineiro',
            category: 'Salgados',
            ingredients: [
                '500g de polvilho doce',
                '1 copo (americano) de leite',
                '1/2 copo (americano) de óleo',
                '1 colher de sopa de sal',
                '3 ovos',
                '300g de queijo minas curado ralado'
            ],
            instructions: [
                'Em uma panela, aqueça o leite, o óleo e o sal até ferver. Desligue o fogo.',
                'Em uma tigela grande, coloque o polvilho. Despeje a mistura quente sobre o polvilho e misture bem com uma colher, escaldando o polvilho.',
                'Deixe esfriar um pouco. Adicione os ovos um a um, sovando bem a massa a cada adição, até obter uma massa homogênea e elástica.',
                'Adicione o queijo ralado e incorpore bem na massa.',
                'Faça bolinhas e coloque em uma assadeira untada ou com papel manteiga.',
                'Asse em forno pré-aquecido a 180°C por cerca de 30-40 minutos, ou até dourar.'
            ]
        },
        // Café da manhã
        'omelete-legumes': {
            title: 'Omelete de Legumes',
            category: 'Café da manhã',
            ingredients: [
                '2 ovos',
                '1/4 xícara de leite',
                'Sal e pimenta a gosto',
                '1/4 cebola picada',
                '1/4 pimentão picado',
                '1/4 xícara de espinafre picado',
                'Queijo ralado (opcional)'
            ],
            instructions: [
                'Bata os ovos com o leite, sal e pimenta.',
                'Em uma frigideira antiaderente, refogue a cebola, pimentão e espinafre até ficarem macios.',
                'Despeje a mistura de ovos sobre os legumes na frigideira.',
                'Cozinhe em fogo baixo até as bordas começarem a firmar.',
                'Se desejar, polvilhe queijo ralado.',
                'Dobre ao meio e cozinhe por mais alguns minutos até o queijo derreter e a omelete estar cozida ao seu gosto.'
            ]
        },
        'panquecas-frutas': {
            title: 'Panquecas com Frutas Frescas',
            category: 'Café da manhã',
            ingredients: [
                '1 xícara de farinha de trigo',
                '1 colher de sopa de açúcar',
                '1 colher de chá de fermento em pó',
                '1/2 colher de chá de bicarbonato de sódio',
                '1/4 colher de chá de sal',
                '1 ovo grande',
                '1 xícara de leite',
                '2 colheres de sopa de manteiga derretida',
                'Frutas frescas para servir (morangos, bananas, mirtilos)'
            ],
            instructions: [
                'Em uma tigela grande, misture a farinha, açúcar, fermento, bicarbonato e sal.',
                'Em outra tigela, bata o ovo, o leite e a manteiga derretida.',
                'Despeje os ingredientes líquidos sobre os secos e misture até incorporar (não precisa ficar perfeito, umas bolinhas na massa são normais).',
                'Aqueça uma frigideira antiaderente untada em fogo médio.',
                'Despeje cerca de 1/4 xícara de massa para cada panqueca.',
                'Cozinhe por 2-3 minutos de cada lado, ou até dourar e as bolhas aparecerem na superfície.',
                'Sirva com suas frutas frescas favoritas e um pouco de mel ou xarope.'
            ]
        },
        // Alimentação saudável
        'vitamina-frutas': {
            title: 'Vitamina Energizante de Frutas',
            category: 'Alimentação saudável',
            ingredients: [
                '1 banana congelada',
                '1/2 xícara de frutas vermelhas congeladas',
                '1/2 xícara de espinafre baby (opcional, não altera o sabor)',
                '1 xícara de leite (vegetal ou comum)',
                '1 colher de sopa de sementes de chia ou linhaça',
                'Mel ou adoçante a gosto (opcional)'
            ],
            instructions: [
                'Coloque todos os ingredientes no liquidificador.',
                'Bata até obter uma mistura homogênea e cremosa.',
                'Sirva imediatamente.'
            ]
        },
        'salada-quinoa': {
            title: 'Salada de Quinoa com Legumes',
            category: 'Alimentação saudável',
            ingredients: [
                '1 xícara de quinoa cozida',
                '1/2 pepino picado',
                '1/2 pimentão vermelho picado',
                '1/4 cebola roxa picada',
                '1/2 xícara de tomate cereja cortado ao meio',
                '2 colheres de sopa de salsinha picada',
                'Suco de 1 limão',
                '3 colheres de sopa de azeite de oliva extra virgem',
                'Sal e pimenta do reino a gosto'
            ],
            instructions: [
                'Em uma tigela grande, misture a quinoa cozida e todos os legumes picados.',
                'Em um pote pequeno, misture o suco de limão, azeite, sal e pimenta para fazer o molho.',
                'Despeje o molho sobre a salada e misture bem.',
                'Sirva fria ou em temperatura ambiente.'
            ]
        }
    };

    // Helper function to get URL parameters
    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    // Universal Header & Sidebar Logic
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            categorySidebar.classList.toggle('hidden');
        });
    }

    if (homeButton) {
        homeButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Category links in sidebar
    const categoryLinks = categorySidebar ? categorySidebar.querySelectorAll('a[data-category]') : [];
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = event.target.dataset.category;
            window.location.href = `category.html?category=${encodeURIComponent(category)}`;
        });
    });

    // Search functionality
    if (searchButton && searchInput) {
        const performSearch = () => {
            const query = searchInput.value.toLowerCase();
            if (query) {
                // Collect all matching recipe IDs
                const matchingRecipeIds = Object.keys(recipes).filter(id =>
                    recipes[id].title.toLowerCase().includes(query) ||
                    recipes[id].category.toLowerCase().includes(query) ||
                    recipes[id].ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
                );

                if (matchingRecipeIds.length > 0) {
                    // Redirect to a specific recipe if only one is found, otherwise to a search results page (not implemented, will use category.html for now)
                    if (matchingRecipeIds.length === 1) {
                        window.location.href = `recipes.html?recipeId=${encodeURIComponent(matchingRecipeIds[0])}`;
                    } else {
                        // For multiple results, we'll simulate a category page with "Search Results"
                        // This is a simplified approach. A real search results page would be better.
                        const resultsString = matchingRecipeIds.join(','); // Pass multiple IDs
                        window.location.href = `category.html?category=Resultados da Pesquisa&recipeIds=${encodeURIComponent(resultsString)}`;
                    }
                } else {
                    alert('Nenhuma receita encontrada para sua pesquisa.');
                }
            } else {
                alert('Por favor, digite algo para pesquisar.');
            }
        };

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }


    // Logic for `index.html` (Home Page specific)
    if (document.body.classList.contains('index-page')) { // Add a class to body in index.html for clarity
        const recipeCards = document.querySelectorAll('.recipe-card');
        recipeCards.forEach(card => {
            card.addEventListener('click', (event) => {
                const recipeId = event.target.dataset.recipeId;
                if (recipeId) {
                    window.location.href = `recipes.html?recipeId=${encodeURIComponent(recipeId)}`;
                }
            });
        });
    }


    // Logic for `category.html`
    if (document.getElementById('categoryTitle') && document.getElementById('recipeList')) {
        const categoryTitleElement = document.getElementById('categoryTitle');
        const recipeListElement = document.getElementById('recipeList');
        const categoryName = getUrlParameter('category');
        const recipeIdsFromSearch = getUrlParameter('recipeIds'); // For search results

        if (categoryName) {
            categoryTitleElement.textContent = categoryName;
            recipeListElement.innerHTML = ''; // Clear previous content

            let filteredRecipes = [];
            if (categoryName === 'Resultados da Pesquisa' && recipeIdsFromSearch) {
                const ids = recipeIdsFromSearch.split(',');
                filteredRecipes = ids.map(id => ({ id: id, data: recipes[id] }));
            } else {
                for (const id in recipes) {
                    if (recipes[id].category === categoryName) {
                        filteredRecipes.push({ id: id, data: recipes[id] });
                    }
                }
            }

            if (filteredRecipes.length > 0) {
                filteredRecipes.forEach(recipe => {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = `recipes.html?recipeId=${encodeURIComponent(recipe.id)}`;
                    link.textContent = recipe.data.title;
                    listItem.appendChild(link);
                    recipeListElement.appendChild(listItem);
                });
            } else {
                recipeListElement.innerHTML = `<li>Nenhuma receita encontrada para a categoria "${categoryName}".</li>`;
            }
        }
    }


    // Logic for `recipes.html`
    if (document.getElementById('recipeTitle') && document.getElementById('recipeDetails')) {
        const recipeTitleElement = document.getElementById('recipeTitle');
        const recipeDetailsElement = document.getElementById('recipeDetails');
        const recipeId = getUrlParameter('recipeId');

        if (recipeId && recipes[recipeId]) {
            const recipe = recipes[recipeId];
            recipeTitleElement.textContent = recipe.title;

            let detailsHtml = '<h3>Ingredientes:</h3><ul>';
            recipe.ingredients.forEach(item => {
                detailsHtml += `<li>${item}</li>`;
            });
            detailsHtml += '</ul><h3>Modo de Preparo:</h3><ol>';
            recipe.instructions.forEach(step => {
                detailsHtml += `<li>${step}</li>`;
            });
            detailsHtml += '</ol>';
            recipeDetailsElement.innerHTML = detailsHtml;

            document.title = `QueroMais - ${recipe.title}`; // Update page title
        } else {
            recipeTitleElement.textContent = 'Receita Não Encontrada';
            recipeDetailsElement.innerHTML = '<p>Desculpe, a receita que você procura não foi encontrada.</p>';
        }
    }
});