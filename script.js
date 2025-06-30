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
            title: 'Bolo de Chocolate Delicioso',
            category: 'boloscake',
            image: 'https://via.placeholder.com/400x300?text=Bolo+de+Chocolate+Pronto',
            ingredients: [
                '2 xícaras de farinha de trigo',
                '1 xícara de açúcar',
                '3 ovos',
                '1/2 xícara de chocolate em pó',
                '1 xícara de leite',
                '1/2 xícara de óleo',
                '1 colher de sopa de fermento em pó',
                'Pitada de sal'
            ],
            instructions: [
                'Em uma tigela, bata os ovos, açúcar e óleo.',
                'Adicione a farinha, chocolate em pó e sal. Misture bem.',
                'Acrescente o leite e o fermento, misturando delicadamente.',
                'Despeje em uma forma untada e enfarinhada.',
                'Asse em forno pré-aquecido a 180°C por 35-40 minutos.',
                'Deixe esfriar e sirva.'
            ]
        },
        'sopa-legumes': {
            title: 'Sopa de Legumes Nutritiva',
            category: 'sopassoup',
            image: 'https://via.placeholder.com/400x300?text=Sopa+de+Legumes+Pronta',
            ingredients: [
                '1 cenoura picada',
                '1 batata picada',
                '1/2 xícara de ervilhas',
                '1/2 xícara de vagem picada',
                '1 cebola pequena picada',
                '2 dentes de alho amassados',
                '1 litro de caldo de legumes',
                'Sal e pimenta a gosto',
                'Azeite para refogar'
            ],
            instructions: [
                'Em uma panela grande, refogue a cebola e o alho no azeite.',
                'Adicione os legumes picados e refogue por mais alguns minutos.',
                'Despeje o caldo de legumes, tempere com sal e pimenta.',
                'Cozinhe até que os legumes estejam macios.',
                'Sirva quente, se desejar, com cheiro-verde picado.'
            ]
        },
        'cha-ervas': {
            title: 'Chá de Ervas Relaxante',
            category: 'bebidasdrinks',
            image: 'https://via.placeholder.com/400x300?text=Chá+de+Ervas+Pronto',
            ingredients: [
                '1 saquinho de chá de camomila ou erva-cidreira',
                '200 ml de água quente',
                'Mel ou adoçante a gosto (opcional)'
            ],
            instructions: [
                'Ferva a água.',
                'Em uma xícara, coloque o saquinho de chá.',
                'Despeje a água quente sobre o saquinho.',
                'Deixe em infusão por 3-5 minutos.',
                'Retire o saquinho, adoce se desejar e sirva.'
            ]
        },
        'pao-queijo': {
            title: 'Pão de Queijo Mineiro',
            category: 'salgadossnacks',
            image: 'https://via.placeholder.com/400x300?text=Pão+de+Queijo+Pronto',
            ingredients: [
                '500g de polvilho doce',
                '250ml de leite',
                '150ml de óleo',
                '200g de queijo minas curado ralado',
                '3 ovos',
                'Sal a gosto'
            ],
            instructions: [
                'Em uma panela, ferva o leite com o óleo e o sal.',
                'Em uma tigela grande, coloque o polvilho. Despeje a mistura quente sobre o polvilho e misture bem até escaldar.',
                'Espere amornar e adicione os ovos, um a um, sovando a massa.',
                'Por último, acrescente o queijo ralado e amasse até incorporar.',
                'Faça bolinhas e coloque em uma assadeira untada.',
                'Asse em forno pré-aquecido a 180°C por cerca de 30 minutos ou até dourar.'
            ]
        },
        'ovos-mexidos': {
            title: 'Ovos Mexidos Cremosos',
            category: 'cafedamanhabreakfast',
            image: 'https://via.placeholder.com/400x300?text=Ovos+Mexidos+Prontos',
            ingredients: [
                '3 ovos',
                '2 colheres de sopa de leite (ou creme de leite)',
                'Sal e pimenta do reino a gosto',
                '1 colher de chá de manteiga (ou azeite)'
            ],
            instructions: [
                'Em uma tigela, bata os ovos com o leite, sal e pimenta.',
                'Aqueça a manteiga em uma frigideira antiaderente em fogo médio-baixo.',
                'Despeje os ovos batidos na frigideira.',
                'Mexa delicadamente com uma espátula, empurrando as bordas para o centro, até os ovos ficarem cremosos (não secos).',
                'Sirva imediatamente.'
            ]
        },
        'salada-frutas': {
            title: 'Salada de Frutas Refrescante',
            category: 'alimentacaosaudavelhealthy',
            image: 'https://via.placeholder.com/400x300?text=Salada+de+Frutas+Pronta',
            ingredients: [
                '1 maçã picada',
                '1 banana em rodelas',
                '1/2 mamão picado',
                '10 morangos fatiados',
                '1/2 xícara de uvas sem sementes',
                'Suco de 1 laranja'
            ],
            instructions: [
                'Lave e pique todas as frutas.',
                'Em uma tigela grande, misture todas as frutas picadas.',
                'Regue com o suco de laranja.',
                'Misture delicadamente.',
                'Leve à geladeira por pelo menos 30 minutos antes de servir para resfriar bem.'
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

        const foundRecipes = Object.keys(recipes).filter(key =>
            recipes[key].title.toLowerCase().includes(searchTerm) ||
            recipes[key].category.toLowerCase().includes(searchTerm) ||
            recipes[key].ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
        );

        if (foundRecipes.length > 0) {
            displaySearchResults(foundRecipes);
        } else {
            mainContent.innerHTML = `<h2>Nenhuma receita encontrada para "${searchTerm}"</h2><p>Tente outro termo de pesquisa ou explore nossas categorias.</p>`;
        }
        categoryMenu.classList.remove('active'); // Hide menu
    }

    function displaySearchResults(recipeKeys) {
        let html = `<h2>Resultados da Pesquisa</h2><div class="home-grid">`;
        if (recipeKeys.length > 0) {
            recipeKeys.forEach(key => {
                const recipe = recipes[key];
                html += `
                    <div class="home-item" data-recipe="${key}">
                        <img src="${recipe.image}" alt="${recipe.title}">
                        <p>${recipe.title}</p>
                    </div>
                `;
            });
            html += `</div>`;
        } else {
            html = `<p>Nenhuma receita encontrada para esta pesquisa.</p>`;
        }
        mainContent.innerHTML = html;
        addHomeItemClickListeners(); // Re-add listeners for newly loaded items
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
                    <img src="${recipe.image}" alt="${recipe.title}">
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
        let html = `<h2>Receitas de ${category.replace(/([A-Z])/g, ' $1').trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2><div class="home-grid">`;

        if (filteredRecipes.length > 0) {
            filteredRecipes.forEach(key => {
                const recipe = recipes[key];
                html += `
                    <div class="home-item" data-recipe="${key}">
                        <img src="${recipe.image}" alt="${recipe.title}">
                        <p>${recipe.title}</p>
                    </div>
                `;
            });
            html += `</div>`;
        } else {
            html = `<p>Nenhuma receita encontrada nesta categoria ainda.</p>`;
        }
        mainContent.innerHTML = html;
        addHomeItemClickListeners(); // Re-add listeners for newly loaded items
    }

    // --- Home Page Loading ---
    function loadHomePage() {
        mainContent.innerHTML = `
            <h2>Bem-vindo ao QueroMais Receitas!</h2>
            <p>Explore nossas deliciosas receitas por categoria ou use a barra de pesquisa.</p>
            <div class="home-grid">
                <div class="home-item" data-recipe="bolo-chocolate">
                    <img src="https://via.placeholder.com/200x150?text=Bolo+de+Chocolate" alt="Bolo de Chocolate">
                    <p>Bolo de Chocolate</p>
                </div>
                <div class="home-item" data-recipe="sopa-legumes">
                    <img src="https://via.placeholder.com/200x150?text=Sopa+de+Legumes" alt="Sopa de Legumes">
                    <p>Sopa de Legumes</p>
                </div>
                <div class="home-item" data-recipe="cha-ervas">
                    <img src="https://via.placeholder.com/200x150?text=Chá+de+Ervas" alt="Chá de Ervas">
                    <p>Chá de Ervas</p>
                </div>
                <div class="home-item" data-recipe="pao-queijo">
                    <img src="https://via.placeholder.com/200x150?text=Pão+de+Queijo" alt="Pão de Queijo">
                    <p>Pão de Queijo</p>
                </div>
                <div class="home-item" data-recipe="ovos-mexidos">
                    <img src="https://via.placeholder.com/200x150?text=Ovos+Mexidos" alt="Ovos Mexidos">
                    <p>Ovos Mexidos</p>
                </div>
                <div class="home-item" data-recipe="salada-frutas">
                    <img src="https://via.placeholder.com/200x150?text=Salada+de+Frutas" alt="Salada de Frutas">
                    <p>Salada de Frutas</p>
                </div>
            </div>
        `;
        addHomeItemClickListeners();
    }

    // --- Add click listeners for home grid items ---
    function addHomeItemClickListeners() {
        document.querySelectorAll('.home-item').forEach(item => {
            item.addEventListener('click', () => {
                const recipeKey = item.dataset.recipe;
                loadRecipe(recipeKey);
            });
        });
    }

    // Initial load for the home page
    loadHomePage();
});