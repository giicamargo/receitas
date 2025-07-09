document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResultsDiv = document.getElementById('searchResults');
    const menuButton = document.getElementById('menuButton');
    const categoryList = document.getElementById('categoryList');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const closePopupBtn = document.getElementById('closePopup');
    const popupContent = document.getElementById('popupContent');
    const coffeeCupIcon = document.querySelector('.coffee-cup-icon');

    // Sample data for recipes and categories. In a real application, this would come from a database.
    const recipes = [
        { name: 'Café Expresso', category: 'cafes', content: '<p>O café expresso é a base de muitas bebidas. Preparado com água quente sob alta pressão, resultando em uma bebida concentrada e cremosa.</p><p><strong>Ingredientes:</strong> Grãos de café finamente moídos, água.</p><p><strong>Preparo:</strong> Utilize uma máquina de expresso para extrair 30ml de café em 25-30 segundos.</p>' },
        { name: 'Cappuccino Clássico', category: 'cafes', content: '<p>Uma bebida italiana com partes iguais de expresso, leite vaporizado e espuma de leite.</p><p><strong>Ingredientes:</strong> 1/3 expresso, 1/3 leite vaporizado, 1/3 espuma de leite.</p><p><strong>Preparo:</strong> Prepare um expresso, aqueça e vaporize o leite, combine e decore com cacau em pó se desejar.</p>' },
        { name: 'Café Gelado com Baunilha', category: 'cafes', content: '<p>Perfeito para dias quentes, com um toque doce de baunilha.</p><p><strong>Ingredientes:</strong> 1 xícara de café forte gelado, 1/2 xícara de leite, 1 colher de chá de extrato de baunilha, gelo, açúcar a gosto.</p><p><strong>Preparo:</strong> Misture todos os ingredientes e sirva com gelo.</p>' },
        { name: 'Latte Macchiato', category: 'cafes', content: '<p>Leite "manchado" com café. Uma bebida de camadas, com leite, expresso e espuma.</p><p><strong>Ingredientes:</strong> Leite vaporizado, 1 dose de expresso.</p><p><strong>Preparo:</strong> Despeje o leite vaporizado em um copo alto, adicione o expresso lentamente por cima para criar as camadas.</p>' },
        { name: 'Chocolate Quente Cremoso', category: 'bebidas-quentes', content: '<p>Um clássico reconfortante para aquecer o corpo e a alma.</p><p><strong>Ingredientes:</strong> Leite, chocolate em pó ou barra, açúcar, amido de milho (opcional para cremosidade).</p><p><strong>Preparo:</strong> Aqueça o leite, dissolva o chocolate e açúcar, adicione amido de milho dissolvido em um pouco de leite para engrossar. Mexa até ficar cremoso.</p>' },
        { name: 'Chá de Gengibre com Limão', category: 'bebidas-quentes', content: '<p>Uma bebida revigorante e cheia de sabor.</p><p><strong>Ingredientes:</strong> Água, gengibre fresco fatiado, rodelas de limão, mel a gosto.</p><p><strong>Preparo:</strong> Ferva a água com o gengibre. Deixe em infusão por 5-10 minutos. Coe, adicione limão e mel.</p>' },
        { name: 'Smoothie de Frutas Vermelhas', category: 'bebidas-frias', content: '<p>Um smoothie refrescante e nutritivo, perfeito para qualquer hora do dia.</p><p><strong>Ingredientes:</strong> Frutas vermelhas congeladas, iogurte natural, um pouco de mel ou adoçante, leite ou água.</p><p><strong>Preparo:</strong> Bata todos os ingredientes no liquidificador até ficar homogêneo.</p>' },
        { name: 'Suco Verde Detox', category: 'bebidas-frias', content: '<p>Para desintoxicar o corpo e obter energia.</p><p><strong>Ingredientes:</strong> Couve, maçã, pepino, gengibre, água de coco ou água.</p><p><strong>Preparo:</strong> Bata todos os ingredientes no liquidificador até ficar homogêneo. Coe se preferir.</p>' },
        { name: 'Sanduíche Natural de Frango', category: 'lanches-saudaveis', content: '<p>Uma opção leve e saborosa para o seu lanche.</p><p><strong>Ingredientes:</strong> Pão integral, peito de frango desfiado, cenoura ralada, alface, tomate, maionese light (ou iogurte natural).</p><p><strong>Preparo:</strong> Misture o frango com a cenoura e maionese. Monte o sanduíche com os vegetais.</p>' },
        { name: 'Pão de Queijo Fit', category: 'lanches-saudaveis', content: '<p>A versão mais saudável do pão de queijo tradicional.</p><p><strong>Ingredientes:</strong> Polvilho doce, queijo minas light, ovo, azeite, água, sal.</p><p><strong>Preparo:</strong> Misture todos os ingredientes até formar uma massa. Enrole pequenas bolinhas e asse até dourarem.</p>' },
        { name: 'Bolo de Cenoura com Cobertura de Chocolate', category: 'bolos', content: '<p>Um clássico da culinária brasileira, fofinho e delicioso.</p><p><strong>Ingredientes:</strong> Cenouras, ovos, óleo, farinha de trigo, açúcar, fermento. Para a cobertura: chocolate em pó, leite, açúcar, margarina.</p><p><strong>Preparo:</strong> Bata as cenouras, ovos e óleo no liquidificador. Misture com os secos. Asse. Prepare a cobertura e cubra o bolo.</p>' },
        { name: 'Bolo de Banana Integral', category: 'bolos', content: '<p>Uma opção mais saudável para os amantes de bolo de banana.</p><p><strong>Ingredientes:</strong> Bananas maduras, ovos, óleo de coco, farinha de trigo integral, aveia, canela, fermento.</p><p><strong>Preparo:</strong> Amasse as bananas. Misture com os outros ingredientes úmidos e depois os secos. Asse em forno pré-aquecido.</p>' },
        { name: 'Empada de Palmito', category: 'salgados', content: '<p>Uma empada deliciosa com recheio cremoso de palmito.</p><p><strong>Ingredientes:</strong> Farinha de trigo, manteiga, ovo, sal (para a massa). Palmito, cebola, alho, creme de leite, temperos (para o recheio).</p><p><strong>Preparo:</strong> Prepare a massa, recheie com o palmito refogado e cremoso. Asse até dourar.</p>' },
        { name: 'Coxinha de Frango', category: 'salgados', content: '<p>Um dos salgados mais amados do Brasil, com massa macia e recheio de frango desfiado.</p><p><strong>Ingredientes:</strong> Frango, farinha de trigo, caldo de galinha, temperos. Farinha de rosca para empanar.</p><p><strong>Preparo:</strong> Cozinhe e desfie o frango. Faça a massa com o caldo. Monte as coxinhas, empane e frite.</p>' },
        { name: 'Brigadeiro Gourmet', category: 'doces-sobremesas', content: '<p>A versão sofisticada do brigadeiro tradicional.</p><p><strong>Ingredientes:</strong> Leite condensado, creme de leite, chocolate de boa qualidade, manteiga, granulado belga.</p><p><strong>Preparo:</strong> Misture os ingredientes em uma panela em fogo baixo até desgrudar do fundo. Enrole e decore com granulado.</p>' },
        { name: 'Mousse de Maracujá', category: 'doces-sobremesas', content: '<p>Uma sobremesa leve, refrescante e azedinha.</p><p><strong>Ingredientes:</strong> Leite condensado, creme de leite, suco de maracujá concentrado, gelatina incolor (opcional).</p><p><strong>Preparo:</strong> Bata todos os ingredientes no liquidificador. Leve à geladeira até firmar.</p>' },
        { name: 'Mini Pizzas de Abobrinha', category: 'petiscos', content: '<p>Uma opção leve e rápida de petisco.</p><p><strong>Ingredientes:</strong> Abobrinha fatiada, molho de tomate, queijo, orégano, temperos.</p><p><strong>Preparo:</strong> Fatie a abobrinha, coloque molho, queijo e orégano. Leve ao forno até o queijo derreter.</p>' },
        { name: 'Bruschetta de Tomate e Manjericão', category: 'petiscos', content: '<p>Um clássico aperitivo italiano, simples e delicioso.</p><p><strong>Ingredientes:</strong> Pão italiano, tomate picado, manjericão fresco, alho, azeite de oliva, sal e pimenta.</p><p><strong>Preparo:</strong> Toste o pão, esfregue alho, regue com azeite. Misture o tomate com manjericão e tempere. Coloque sobre o pão.</p>' },
    ];

    const categoriesContent = {
        'bebidas-quentes': {
            title: 'Bebidas Quentes',
            description: 'Aqueça seu coração e seu corpo com estas deliciosas opções de bebidas quentes, perfeitas para qualquer hora do dia.',
            recipes: recipes.filter(r => r.category === 'bebidas-quentes')
        },
        'bebidas-frias': {
            title: 'Bebidas Frias',
            description: 'Refresque-se com nossas sugestões de bebidas geladas, ideais para os dias mais quentes ou para um boost de energia.',
            recipes: recipes.filter(r => r.category === 'bebidas-frias')
        },
        'cafes': {
            title: 'Tudo sobre Cafés',
            description: `
                <h4>A Fascinante História do Café</h4>
                <p>O café tem uma história rica e cativante que remonta a séculos. A lenda mais popular narra a descoberta por um pastor de cabras etíope chamado Kaldi, por volta do século IX. Ele notou que suas cabras ficavam mais enérgicas e "dançavam" após comerem os frutos vermelhos de uma determinada árvore. Kaldi experimentou os frutos e sentiu o mesmo efeito revigorante.</p>
                <p>A partir da Etiópia, o café viajou para a Península Arábica, onde foi cultivado pela primeira vez no Iêmen e se tornou popular entre os sufistas para ajudá-los a permanecerem acordados durante as orações noturnas. Os árabes foram os primeiros a torrar e moer os grãos para fazer a bebida que conhecemos hoje.</p>
                <p>No século XVII, o café chegou à Europa através de Veneza, e rapidamente se espalhou, tornando-se uma bebida popular entre todas as classes sociais. As casas de café, ou "coffehouses", floresceram como centros sociais e intelectuais, onde as pessoas se reuniam para discutir política, filosofia e arte.</p>
                <p>O café chegou ao Brasil no século XVIII, trazido por Francisco de Melo Palheta, e encontrou no país um solo e clima ideais para seu cultivo. O Brasil se tornou o maior produtor de café do mundo, impulsionando sua economia e cultura.</p>
                <p>Hoje, o café é a segunda commodity mais comercializada no mundo (depois do petróleo) e é apreciado por bilhões de pessoas em diversas formas, cada uma com sua própria história e método de preparo.</p>
                <h4>Tipos de Café e Receitas Populares:</h4>
            `,
            recipes: recipes.filter(r => r.category === 'cafes')
        },
        'lanches-saudaveis': {
            title: 'Lanches Saudáveis',
            description: 'Opções nutritivas e deliciosas para seus lanches intermediários, mantendo a energia e o bem-estar.',
            recipes: recipes.filter(r => r.category === 'lanches-saudaveis')
        },
        'bolos': {
            title: 'Bolos',
            description: 'Receitas irresistíveis de bolos para todas as ocasiões, do tradicional ao mais inovador.',
            recipes: recipes.filter(r => r.category === 'bolos')
        },
        'salgados': {
            title: 'Salgados',
            description: 'Descubra uma variedade de salgados perfeitos para festas, lanches ou para acompanhar seu café.',
            recipes.filter(r => r.category === 'salgados')
        },
        'doces-sobremesas': {
            title: 'Doces e Sobremesas',
            description: 'Finalize sua refeição com chave de ouro ou mime-se com estas delícias açucaradas.',
            recipes.filter(r => r.category === 'doces-sobremesas')
        },
        'petiscos': {
            title: 'Petiscos',
            description: 'Pequenas porções de sabor para compartilhar com amigos ou desfrutar em um momento descontraído.',
            recipes.filter(r => r.category === 'petiscos')
        },
    };

    // --- Search Functionality ---
    const filterRecipes = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        return recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(lowerCaseQuery)
        );
    };

    const displaySearchResults = (filteredRecipes) => {
        searchResultsDiv.innerHTML = '';
        if (filteredRecipes.length > 0) {
            filteredRecipes.forEach(recipe => {
                const button = document.createElement('button');
                button.textContent = recipe.name;
                button.onclick = () => showRecipe(recipe);
                searchResultsDiv.appendChild(button);
            });
            searchResultsDiv.style.display = 'block';
        } else {
            searchResultsDiv.style.display = 'none';
        }
    };

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.length > 0) {
            const filtered = filterRecipes(query);
            displaySearchResults(filtered);
        } else {
            searchResultsDiv.style.display = 'none';
        }
    });

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        if (query.length > 0) {
            const filtered = filterRecipes(query);
            displaySearchResults(filtered);
        } else {
            alert('Por favor, digite algo para pesquisar.');
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResultsDiv.contains(e.target) && e.target !== searchInput && e.target !== searchButton) {
            searchResultsDiv.style.display = 'none';
        }
    });

    // --- Popup (Recipe/Category Page) Functionality ---
    const showPopup = () => {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    };

    const hidePopup = () => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        popupContent.innerHTML = ''; // Clear content
    };

    closePopupBtn.addEventListener('click', hidePopup);
    overlay.addEventListener('click', hidePopup); // Close when clicking outside popup

    const showRecipe = (recipe) => {
        popupContent.innerHTML = `<h4>${recipe.name}</h4>${recipe.content}`;
        showPopup();
    };

    const showCategory = (categoryData) => {
        let contentHtml = `<h4>${categoryData.title}</h4>`;
        contentHtml += categoryData.description;

        if (categoryData.recipes && categoryData.recipes.length > 0) {
            contentHtml += '<ul>';
            categoryData.recipes.forEach(recipe => {
                contentHtml += `<li><button class="recipe-link-btn" data-recipe-name="${recipe.name}">${recipe.name}</button></li>`;
            });
            contentHtml += '</ul>';
        } else {
            contentHtml += '<p>Nenhuma receita encontrada para esta categoria ainda.</p>';
        }

        popupContent.innerHTML = contentHtml;
        showPopup();

        // Add event listeners to newly created recipe buttons within the category popup
        document.querySelectorAll('.recipe-link-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const recipeName = e.target.dataset.recipeName;
                const selectedRecipe = recipes.find(r => r.name === recipeName);
                if (selectedRecipe) {
                    showRecipe(selectedRecipe);
                }
            });
        });
    };

    // --- Menu Button Functionality ---
    menuButton.addEventListener('click', () => {
        // Toggle visibility of category list (sidebar-right) or could show a modal/dropdown
        const sidebarRight = document.querySelector('.sidebar-right');
        if (window.innerWidth <= 768) { // For mobile, show as a popup/modal
            let menuHtml = '<h4>Categorias</h4><ul>';
            Object.keys(categoriesContent).forEach(key => {
                const category = categoriesContent[key];
                menuHtml += `<li><button class="category-btn-in-menu" data-category="${key}">${category.title}</button></li>`;
            });
            menuHtml += '</ul>';
            popupContent.innerHTML = menuHtml;
            showPopup();

            // Add event listeners to newly created category buttons in the menu popup
            document.querySelectorAll('.category-btn-in-menu').forEach(button => {
                button.addEventListener('click', (e) => {
                    const categoryKey = e.target.dataset.category;
                    const selectedCategory = categoriesContent[categoryKey];
                    if (selectedCategory) {
                        showCategory(selectedCategory);
                    }
                });
            });
        } else {
            // For larger screens, sidebar is always visible as per initial design.
            // This button might not be strictly necessary for desktop based on the image,
            // but it's good to have for consistency or future expansion.
            alert('As categorias já estão visíveis no lado direito!');
        }
    });

    // --- Category Buttons Functionality (in sidebar) ---
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const categoryKey = e.target.dataset.category;
            const selectedCategory = categoriesContent[categoryKey];
            if (selectedCategory) {
                showCategory(selectedCategory);
            }
        });
    });

    // --- "Voltar para a Página Inicial" button in popup ---
    window.goToHome = () => {
        hidePopup();
        // You could add logic here to reset the main page if needed,
        // but for this setup, simply closing the popup is enough to "return" to index.html content.
    };

    // --- Coffee Cup Icon Click (goes to "Cafés" category) ---
    coffeeCupIcon.addEventListener('click', () => {
        const cafesCategory = categoriesContent['cafes'];
        if (cafesCategory) {
            showCategory(cafesCategory);
        }
    });

    // Initial content for popup for the coffee history example
    // This is just to demonstrate the content, it won't show on load
    // unless explicitly called. The user interaction will trigger it.
});