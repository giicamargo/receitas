document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const menuButton = document.getElementById('menuButton');
    const dishesAndRecipesSection = document.getElementById('dishesAndRecipes');

    // Dados simulados para pratos e receitas
    const allDishes = {
        'Carnes': [
            { name: 'Picanha Assada', id: 'picanha-assada', recipe: 'Ingredientes: 1kg de picanha, sal grosso. Modo de Preparo: Cubra a picanha com sal grosso e asse em forno pré-aquecido a 200°C por 40 minutos.' },
            { name: 'Estrogonofe de Carne', id: 'estrogonofe-carne', recipe: 'Ingredientes: Carne em cubos, creme de leite, cogumelos, ketchup, mostarda. Modo de Preparo: Doure a carne, adicione os outros ingredientes e cozinhe até engrossar.' },
            { name: 'Bife à Parmegiana', id: 'bife-parmegiana', recipe: 'Ingredientes: Bife empanado, molho de tomate, queijo mussarela. Modo de Preparo: Frite o bife, cubra com molho e queijo e leve ao forno para gratinar.' }
        ],
        'Aves': [
            { name: 'Frango Assado com Batatas', id: 'frango-assado', recipe: 'Ingredientes: 1 frango inteiro, batatas, temperos. Modo de Preparo: Tempere o frango e asse com as batatas até dourar.' },
            { name: 'Risoto de Frango', id: 'risoto-frango', recipe: 'Ingredientes: Arroz arbóreo, peito de frango desfiado, queijo parmesão, caldo de galinha. Modo de Preparo: Refogue o arroz, adicione o caldo aos poucos e finalize com o frango e queijo.' }
        ],
        'Peixes e Frutos do Mar': [
            { name: 'Salmão Grelhado', id: 'salmao-grelhado', recipe: 'Ingredientes: Filé de salmão, azeite, limão, sal, pimenta. Modo de Preparo: Tempere o salmão e grelhe por alguns minutos de cada lado.' },
            { name: 'Moqueca de Camarão', id: 'moqueca-camarao', recipe: 'Ingredientes: Camarão, azeite de dendê, leite de coco, pimentões, tomate, cebola, coentro. Modo de Preparo: Refogue os temperos, adicione o camarão e cozinhe com os líquidos.' }
        ],
        // Adicione mais categorias e pratos conforme necessário
        'Sopas': [
            { name: 'Sopa de Legumes', id: 'sopa-legumes', recipe: 'Ingredientes: Cenoura, batata, chuchu, abobrinha, cebola, alho, caldo de legumes. Modo de Preparo: Cozinhe os legumes picados no caldo até ficarem macios e bata uma parte se desejar um creme.' }
        ],
        'Massas': [
            { name: 'Lasanha à Bolonhesa', id: 'lasanha-bolonhesa', recipe: 'Ingredientes: Massa de lasanha, molho bolonhesa, molho branco, queijo. Modo de Preparo: Monte em camadas e asse até gratinar.' }
        ],
        'Doces e Sobremesas': [
            { name: 'Bolo de Chocolate', id: 'bolo-chocolate', recipe: 'Ingredientes: Farinha, açúcar, chocolate em pó, ovos, leite, óleo, fermento. Modo de Preparo: Misture os ingredientes e asse em forno pré-aquecido.' }
        ],
        'Lanches': [
            { name: 'Sanduíche Natural', id: 'sanduiche-natural', recipe: 'Ingredientes: Pão integral, peito de peru, queijo branco, alface, tomate. Modo de Preparo: Monte o sanduíche com os ingredientes frescos.' }
        ],
        'Todas as Receitas': [] // Será preenchido dinamicamente
    };

    // Preenche a categoria "Todas as Receitas"
    for (const category in allDishes) {
        if (category !== 'Todas as Receitas') {
            allDishes['Todas as Receitas'] = allDishes['Todas as Receitas'].concat(allDishes[category]);
        }
    }


    // Função para exibir pratos de uma categoria
    function displayDishes(categoryName) {
        dishesAndRecipesSection.innerHTML = `<h2>${categoryName}</h2>`;
        const dishes = allDishes[categoryName] || [];
        if (dishes.length === 0) {
            dishesAndRecipesSection.innerHTML += '<p>Nenhum prato encontrado nesta categoria.</p>';
        } else {
            const dishesList = document.createElement('div');
            dishesList.classList.add('dishes-list');
            dishes.forEach(dish => {
                const dishItem = document.createElement('div');
                dishItem.classList.add('dish-item');
                dishItem.dataset.dishId = dish.id;
                dishItem.innerHTML = `<h3>${dish.name}</h3>`;
                dishItem.addEventListener('click', () => displayRecipe(dish));
                dishesList.appendChild(dishItem);
            });
            dishesAndRecipesSection.appendChild(dishesList);
        }
        dishesAndRecipesSection.classList.add('show');
    }

    // Função para exibir a receita de um prato
    function displayRecipe(dish) {
        dishesAndRecipesSection.innerHTML = `<h2>${dish.name}</h2>`;
        const recipeDetail = document.createElement('div');
        recipeDetail.classList.add('recipe-detail', 'show');
        recipeDetail.innerHTML = `
            <h3>Receita: ${dish.name}</h3>
            <p>${dish.recipe}</p>
            <button class="back-to-dishes">Voltar aos Pratos</button>
        `;
        dishesAndRecipesSection.appendChild(recipeDetail);

        recipeDetail.querySelector('.back-to-dishes').addEventListener('click', () => {
            // Volta para a lista de pratos da categoria anterior (se houver)
            // Para simplificar, vamos redesenhar a última categoria clicada ou "Todas as Receitas"
            const currentCategory = document.querySelector('.nav-item.active')?.dataset.category || 'Todas as Receitas';
            const categoryText = document.querySelector('.nav-item.active')?.textContent || 'Todas as Receitas';
            displayDishes(categoryText);
        });
    }

    // Event Listeners para os itens de navegação
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove a classe 'active' de todos os itens e adiciona ao clicado
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            const category = item.dataset.category || item.textContent; // Usa data-category ou textContent
            displayDishes(category);
        });
    });

    // Event Listener para o botão "MENU"
    menuButton.addEventListener('click', () => {
        // Remove a classe 'active' de todos os itens
        navItems.forEach(nav => nav.classList.remove('active'));
        // Exibe "Todas as Receitas" ao clicar no MENU
        displayDishes('Todas as Receitas');
    });

    // Ao carregar a página, exibe a categoria "Carnes" como ativa (como no exemplo)
    const activeCarnes = document.querySelector('.nav-item[data-category="carnes"]');
    if (activeCarnes) {
        activeCarnes.classList.add('active');
        displayDishes(activeCarnes.textContent);
    }
});