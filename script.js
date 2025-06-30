document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const categoryMenu = document.getElementById('categoryMenu');
    const mainContent = document.getElementById('mainContent');
    const homeButton = document.getElementById('homeButton');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // --- Data for recipes (simulate a database) ---
    const recipes = {
        'bolo-chocolate': {
            title: 'Bolo de Chocolate Elegante',
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
        'sopa-legumes': {
            title: 'Sopa de Legumes Cremosa',
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
        'cha-ervas': {
            title: 'Chá de Ervas Aromático',
            category: 'bebidas',
            ingredients: [
                '1 colher de sopa de folhas secas de camomila ou erva-cidreira',
                '250 ml de água filtrada',
                'Mel ou rodela de limão para servir (opcional)'
            ],
            instructions: [
                'Ferva a água em uma chaleira ou panela.',
                'Em uma xícara ou bule, coloque as folhas secas da erva de sua preferência.',
                'Despeje a água fervente sobre as ervas.',
                'Cubra e deixe em infusão por 5 a 7 minutos para que as propriedades e o aroma se liberem.',
                'Coa o chá para remover as folhas.',
                'Sirva quente, adicionando mel ou uma rodela de limão se desejar.'
            ]
        },
        'pao-queijo': {
            title: 'Pão de Queijo Cremoso',
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
        'ovos-mexidos': {
            title: 'Ovos Mexidos Perfeitos',
            category: 'cafe_da_manha',
            ingredients: [
                '3 ovos grandes',
                '2 colheres de sopa de leite integral (ou creme de leite)',
                '1/2 colher de chá de manteiga sem sal',
                'Sal e pimenta do reino moída na hora a gosto',
                'Opcional: ciboulette picada ou queijo ralado'
            ],
            instructions: [
                'Em uma tigela, quebre os ovos. Adicione o leite, o sal e a pimenta. Bata levemente com um garfo ou fouet, apenas para misturar as gemas e claras, sem incorporar muito ar.',
                'Aqueça uma frigideira antiaderente pequena em fogo médio-baixo. Adicione a manteiga e deixe derreter.',
                'Despeje a mistura de ovos na frigideira. Deixe cozinhar por cerca de 30 segundos sem mexer, para formar uma base.',
                'Com uma espátula de silicone ou madeira, comece a empurrar os ovos das bordas para o centro, dobrando-os suavemente. Continue mexendo e dobrando até os ovos atingirem a consistência desejada – cremosos e úmidos, mas não líquidos.',
                'Retire do fogo um pouco antes de estarem totalmente prontos, pois eles continuarão cozinhando com o calor residual.',
                'Sirva imediatamente. Se desejar, polvilhe com ciboulette picada ou queijo ralado.'
            ]
        },
        'salada-frutas': {
            title: 'Salada de Frutas Tropical',
            category: 'alimentacao_saudavel',
            ingredients: [
                '1 maçã picada em cubos',
                '1 banana fatiada',
                '1 xícara de melão picado',
                '1 xícara de uvas sem sementes (cortadas ao meio)',
                '1/2 xícara de morangos fatiados',
                'Suco de 1 laranja média',
                'Folhas de hortelã para decorar (opcional)'
            ],
            instructions: [
                'Lave bem todas as frutas.',
                'Descasque e pique as frutas conforme indicado, retirando sementes quando necessário.',
                'Em uma tigela grande, combine todas as frutas picadas.',
                'Esprema o suco da laranja sobre as frutas. O suco ajuda a manter as frutas frescas e adiciona um toque cítrico.',
                'Misture delicadamente para que o suco cubra todas as frutas.',
                'Leve à geladeira por pelo menos 30 minutos antes de servir para que a salada fique bem gelada e os sabores se misturem.',
                'Sirva em taças individuais, decorando com folhas de hortelã se desejar.'
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
            event.preventDefault(); // Prevent default link behavior
            const category = event.target.dataset.category;
            loadRecipesByCategory(category);
            categoryMenu.classList.remove('active'); // Hide menu after selection
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
            recipes[key].ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
        );

        if (foundRecipeKeys.length > 0) {
            displaySearchResults(foundRecipeKeys);
        } else {
            mainContent.innerHTML = `
                <h2>Nenhuma receita encontrada</h2>
                <p>Desculpe, não encontramos nenhuma receita para "${searchTerm}".</p>
                <p>Tente um termo diferente ou explore nossas categorias.</p>
            `;
        }
        categoryMenu.classList.remove('active'); // Hide menu
    }

    function displaySearchResults(recipeKeys) {
        let html = `<h2>Resultados da Pesquisa</h2><div class="home-buttons-grid">`;
        if (recipeKeys.length > 0) {
            recipeKeys.forEach(key => {
                const recipe = recipes[key];
                html += `
                    <button class="food-button" data-recipe="${key}">${recipe.title}</button>
                `;
            });
            html += `</div>`;
        } else {
            // This else block might not be strictly needed due to the outer check, but good for clarity.
            html = `<p>Nenhuma receita encontrada para esta pesquisa.</p>`;
        }
        mainContent.innerHTML = html;
        addFoodButtonClickListeners(); // Re-add listeners for newly loaded buttons
    }


    // --- Load Recipe Details ---
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

    // --- Load Recipes by Category ---
    function loadRecipesByCategory(category) {
        const filteredRecipes = Object.keys(recipes).filter(key => recipes[key].category === category);
        const categoryName = category.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        let html = `<h2>Receitas de ${categoryName}</h2><div class="home-buttons-grid">`;

        if (filteredRecipes.length > 0) {
            filteredRecipes.forEach(key => {
                const recipe = recipes[key];
                html += `
                    <button class="food-button" data-recipe="${key}">${recipe.title}</button>
                `;
            });
            html += `</div>`;
        } else {
            html = `<p>Nenhuma receita encontrada nesta categoria ainda.</p>`;
        }
        mainContent.innerHTML = html;
        addFoodButtonClickListeners(); // Re-add listeners for newly loaded buttons
    }

    // --- Home Page Loading ---
    function loadHomePage() {
        mainContent.innerHTML = `
            <h2>Bem-vindo ao QueroMais Receitas!</h2>
            <p>Descubra uma coleção de receitas deliciosas e fáceis de preparar.</p>
            <div class="home-buttons-grid">
                <button class="food-button" data-recipe="bolo-chocolate">Bolo de Chocolate Elegante</button>
                <button class="food-button" data-recipe="sopa-legumes">Sopa de Legumes Cremosa</button>
                <button class="food-button" data-recipe="cha-ervas">Chá de Ervas Aromático</button>
                <button class="food-button" data-recipe="pao-queijo">Pão de Queijo Cremoso</button>
                <button class="food-button" data-recipe="ovos-mexidos">Ovos Mexidos Perfeitos</button>
                <button class="food-button" data-recipe="salada-frutas">Salada de Frutas Tropical</button>
            </div>
        `;
        addFoodButtonClickListeners();
    }

    // --- Add click listeners for home page food buttons ---
    function addFoodButtonClickListeners() {
        document.querySelectorAll('.food-button').forEach(button => {
            button.addEventListener('click', () => {
                const recipeKey = button.dataset.recipe;
                loadRecipe(recipeKey);
            });
        });
    }

    // Initial load for the home page
    loadHomePage();
});