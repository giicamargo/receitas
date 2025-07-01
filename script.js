document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const categoryLinks = document.querySelectorAll('.category-link');
    const categoryDisplay = document.getElementById('categoryDisplay');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Toggle do menu dropdown
    menuButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    // Fechar o dropdown ao clicar fora
    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Dados de exemplo para as receitas (simulando um banco de dados)
    const recipesData = {
        bolos: [
            { name: 'Bolo de Cenoura', file: 'bolo-de-cenoura.html' },
            { name: 'Bolo de Chocolate', file: 'bolo-de-chocolate.html' },
            { name: 'Bolo de Fubá Cremoso', file: 'bolo-de-fuba-cremoso.html' }
        ],
        sopas: [
            { name: 'Sopa de Legumes', file: 'sopa-de-legumes.html' },
            { name: 'Sopa de Abóbora com Gengibre', file: 'sopa-de-abobora.html' },
            { name: 'Caldo Verde', file: 'caldo-verde.html' }
        ],
        cafes: [
            { name: 'Café Expresso', file: 'cafe-expresso.html' },
            { name: 'Cappuccino Cremoso', file: 'cappuccino-cremoso.html' },
            { name: 'Latte Macchiato', file: 'latte-macchiato.html' }
        ],
        salgados: [
            { name: 'Coxinha de Frango', file: 'coxinha-de-frango.html' },
            { name: 'Pão de Queijo', file: 'pao-de-queijo.html' },
            { name: 'Empada de Palmito', file: 'empada-de-palmito.html' }
        ],
        omeletes: [
            { name: 'Omelete de Legumes', file: 'omelete-de-legumes.html' },
            { name: 'Omelete de Queijo e Presunto', file: 'omelete-queijo-presunto.html' },
            { name: 'Omelete de Cogumelos', file: 'omelete-cogumelos.html' }
        ],
        vitaminas: [
            { name: 'Vitamina de Frutas', file: 'vitamina-de-frutas.html' },
            { name: 'Vitamina de Banana e Aveia', file: 'vitamina-banana-aveia.html' },
            { name: 'Suco Verde Detox', file: 'suco-verde-detox.html' }
        ]
    };

    // Função para exibir as receitas de uma categoria
    function displayRecipes(category) {
        if (recipesData[category]) {
            let html = `<h2>Receitas de ${category.charAt(0).toUpperCase() + category.slice(1)}</h2><div class="recipe-list">`;
            recipesData[category].forEach(recipe => {
                html += `<div class="recipe-item"><a href="receitas/${category}/${recipe.file}">${recipe.name}</a></div>`;
            });
            html += `</div>`;
            categoryDisplay.innerHTML = html;
            categoryDisplay.style.display = 'block'; // Garante que a seção esteja visível
        } else {
            categoryDisplay.innerHTML = `<p>Nenhuma receita encontrada para esta categoria.</p>`;
            categoryDisplay.style.display = 'block';
        }
        window.scrollTo({ top: categoryDisplay.offsetTop - 80, behavior: 'smooth' }); // Rolagem suave
    }

    // Event listeners para os links de categoria
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = event.target.dataset.category;
            displayRecipes(category);
            dropdownMenu.classList.remove('show'); // Fecha o menu após clicar
        });
    });

    // Funcionalidade de pesquisa
    searchButton.addEventListener('click', () => {
        performSearch();
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let foundRecipes = [];

        if (searchTerm === '') {
            categoryDisplay.innerHTML = `<p>Digite algo para pesquisar.</p>`;
            categoryDisplay.style.display = 'block';
            window.scrollTo({ top: categoryDisplay.offsetTop - 80, behavior: 'smooth' });
            return;
        }

        for (const category in recipesData) {
            recipesData[category].forEach(recipe => {
                if (recipe.name.toLowerCase().includes(searchTerm)) {
                    foundRecipes.push({ category: category, ...recipe });
                }
            });
        }

        if (foundRecipes.length > 0) {
            let html = `<h2>Resultados da Pesquisa para "${searchTerm}"</h2><div class="recipe-list">`;
            foundRecipes.forEach(recipe => {
                html += `<div class="recipe-item"><a href="receitas/${recipe.category}/${recipe.file}">${recipe.name}</a></div>`;
            });
            html += `</div>`;
            categoryDisplay.innerHTML = html;
            categoryDisplay.style.display = 'block';
        } else {
            categoryDisplay.innerHTML = `<p>Nenhuma receita encontrada para "${searchTerm}".</p>`;
            categoryDisplay.style.display = 'block';
        }
        window.scrollTo({ top: categoryDisplay.offsetTop - 80, behavior: 'smooth' });
    }
});

// Lógica para o botão "Voltar" (deve estar em cada página de receita)
// Exemplo em uma página de receita HTML:
/*
<a href="javascript:history.back()" class="back-button">Voltar</a>
*/