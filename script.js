
const form = document.getElementById('feedbackForm');
const input = document.getElementById('feedbackInput');
const message = document.getElementById('feedbackMsg');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value.trim() !== "") {
        message.classList.remove('hidden');
        input.value = "";
    }
});


const recipes = [
    {
        id: 1,
        title: "Omelete",
        image: "https://www.kitano.com.br/wp-content/uploads/2019/08/SSP_2014-Ometele-de-frios-com-cebolinha-e-salsa-1.jpg",
        time: "20 min",
        difficulty: "Fácil",
        servings: "1 porções",
        category: "Saudaveis",
        ingredients: [
            "2 ovos",
            "1 fatia de presunto",
            "tempero verde a gosto",
            "1 pitada de sal",
            "2 fatias de queijo",
            "caldo de galinha a gosto"
        ],
        instructions: [
            "Bata os 2 ovos, pode ser na batedeira ou não.",
            "Após ter batido bem, coloque-o na frigideira já untada com óleo, acrescente o sal, o presunto picado em quadradinhos e as duas fatias de queijo (não precisa picar o queijo).",
            "Coloque os temperos a gosto, espere ficar firme, e vire o omelete.",
            "Está pronto um omelete delicioso, bom apetite!",
        ]
    },
    {
        id: 2,
        title: "Café gelado",
        image: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/6ce10070ca590097bf7241c8cd5951d9.jpg?itok=u4POTa93",
        time: "20 min",
        difficulty: "Fácil",
        servings: "1 porções",
        category: "Bebidas",
        ingredients: [
            "2 colheres de sopa de café solúvel",
            "1/2 colher de sopa de açúcar",
            "200 ml de leite gelado",
            "2 colheres de sopa de água bem gelada",
            "Gelo a gosto",
            "Essência de baunilha a gosto (opcional)"
        ],
        instructions: [
            "Reúna todos os ingredientes para preparar um delicioso café gelado cremoso superfácil.",
            "Em um recipiente, adicione o café, o açúcar, a água gelada e bata rapidamente por cerca de 5 minutos até formar um creme espesso.",
            "Em um copo, coloque gelo, leite e essência de baunilha.",
            "Adicione 2 a 3 colheres de sopa do café cremoso e misture levemente.",
            "Sirva com mais gelo, se desejar."
        ]
    },
    {
        id: 3,
        title: "Bolo de chocolate",
        image: "https://i.ytimg.com/vi/s9FGma9ORuQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCwyx0GJtiz6X8YCRGX5EAlN7U_oQ",
        time: "20 min",
        difficulty: "Fácil",
        servings: "1 porções",
        category: "Doces",
        ingredients: [
            "3 ovos",
            "2 xícaras (chá) de farinha de trigo",
            "1/2 xícara (chá) de óleo",
            "1 pitada de sal",
            "1 e 1/2 xícara (chá) de açúcar",
            "1 xícara (chá) de chocolate em pó ou achocolatado",
            "1 colher (sopa) de fermento em pó",
            "1 xícara (chá) de água quente"
        ],
        instructions: [
            "Em um liquidificador, bata os ovos, o açúcar, o óleo, o achocolatado e a farinha de trigo.",
            "Despeje a massa em uma tigela e adicione a água quente e o fermento, misturando bem.",
            "Despeje a massa em uma forma untada e asse em forno médio-alto (200° C), preaquecido, por 40 minutos.",
            "Desenforme ainda quente.",
            "Cozinhe até firmar e sirva."
        ]
    },
    {
        id: 4,
        title: "Sanduíche Natural",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdVM9EBAzWhcCHK6NUL_uQwXTvBdWMRulXgXFtgaBFEFZTYQuFSJfb7lu&s=10",
        time: "20 min",
        difficulty: "Fácil",
        servings: "1 porções",
        category: "Saudaveis",
        ingredients: [
            "100 g de frango desfiado pré-cozido",
            "1/2 tomate picado",
            "1/2 lata de milho verde",
            "sal a gosto",
            "pão de forma",
            "1/2 cebola pequena picada",
            "1 cenoura pequena ralada",
            "salsinha e cebolinha a gosto",
            "maionese light a gosto"
        ],
        instructions: [
            "Refogue o frango desfiado com azeite, alho e cebola em uma panela.",
            "Misture a cebola e o tomate picados, a cenoura ralada, o milho, a salsa, a cebolinha e o sal.",
            "Adicione maionese até a obter a consistência desejada do recheio.",
            "Cremosa ou mais consistente, como você preferir.",
            "Para concluir, coloque o recheio entre 2 fatias de pão de forma."
        ]
    },
    {
        id: 5,
        title: "Chocolate Quente",
        image: "https://monologosdoarroz.com.br/wp-content/uploads/2025/05/chocolate-quente-cremoso-blog-monologos-do-arroz.webp",
         time: "20 min",
        difficulty: "Fácil",
        servings: "1 porções",
        category: "Bebidas quentes",
        ingredients: [
            "2 xícaras (chá) de leite",
            "3 colheres (sopa) de chocolate em pó",
            "1 canela em pau",
            "1 colher (sopa) de amido de milho",
            "4 colheres (sopa) de açúcar",
            "1 caixinha de creme de leite"
        ],
        instructions: [
            "Em um liquidificador, bata o leite, o amido de milho, o chocolate em pó e o açúcar.",
            "Despeje a mistura em uma panela com a canela e leve ao fogo baixo, mexendo sempre até ferver.",
            "Desligue, adicione o creme de leite e mexa bem até obter uma mistura homogênea.",
            "Retire a canela e sirva quente."
        ]
    },
    {
        id: 6,
        title: "Vitamina",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHr5cTEkMp0_zNZVlDg1eBskZnygXFXyKcc1ZWIhzIeuTR14GLu9BEIevb5lvXlMUR6LI&usqp=CAU",
         time: "20 min",
        difficulty: "Fácil",
        servings: "1 porções",
        category: "Bebidas",

        ingredients: [
            "2 copos de leite",
            "1 banana media",
            "Meia porção de morangos (+ 6)",
            "1 colher de mel",
            "3 colheres de sopa de açúcar",
            "1/2 mamão",
            "2 colheres de aveia em flocos"
        ],
        instructions: [
            "Bater tudo no liquidificador e acrescentar gelo picado.",
            "Beber em seguida.",
            "Essa vitamina subistitui o café da manhã e é muito saudavel!."
        ]
    },
    {
        id: 7,
        title: "Cappucino",
        image: "https://sachefmio.blob.core.windows.net/fotos/cappuccino-mineiro-gelado-200ml-e3dfa819-aa88-4569-b8c7-f98742ba71c6.jpg",
         time: "20 min",
        difficulty: "Fácil",
        servings: "15 porções",
        category: "Bebidas quentes",

        ingredients: [
            "50 g de café solúvel",
            "3 colheres (sopa) de chocolate em pó (não pode ser achocolatado)",
            "1 colher (chá) de canela em pó",
            "250 g de leite em pó (integral ou desnatado)",
            "1 colher (chá) de bicarbonato de sódio",
            "250 g de açúcar (ou equivalente em adoçante)"
        ],
        instructions: [
            "Bater no liquidificador o café até ficar fino. Acrescentar aos outros ingredientes em uma tigela e peneirar tudo junto em outra.",
            "A validade é de 6 meses.",
            "Use 2 colheres de sobremesa para 1 xícara de água fervente. Sirva-se!!"
        ]
    }
];


const recipesContainer = document.getElementById('recipes-container');
const categoryButtons = document.querySelectorAll('.category-btn');
const modal = document.getElementById('recipe-modal');
const closeModal = document.getElementById('close-modal');


function displayRecipes(recipesToDisplay) {
    recipesContainer.innerHTML = '';
    
    recipesToDisplay.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-amber-800">${recipe.title}</h3>
                    <span class="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">${recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600 mb-3">
                    <i class="fas fa-clock mr-1"></i>
                    <span class="mr-3">${recipe.time}</span>
                    <i class="fas fa-utensils mr-1"></i>
                    <span>${recipe.servings}</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-sm font-medium ${getDifficultyColor(recipe.difficulty)}">${recipe.difficulty}</span>
                    <button class="view-recipe-btn bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm transition" data-id="${recipe.id}">
                        Ver Receita <i class="fas fa-arrow-right ml-1"></i>
                    </button>
                </div>
            </div>
        `;
        recipesContainer.appendChild(recipeCard);
    });

    document.querySelectorAll('.view-recipe-btn').forEach(button => {
        button.addEventListener('click', () => {
            const recipeId = parseInt(button.dataset.id);
            const recipe = recipes.find(r => r.id === recipeId);
            openRecipeModal(recipe);
        });
    });
}

function getDifficultyColor(difficulty) {
    switch(difficulty) {
        case 'Muito Fácil': return 'text-green-600';
        case 'Fácil': return 'text-amber-600';
        case 'Médio': return 'text-orange-600';
        case 'Difícil': return 'text-red-600';
        default: return 'text-gray-600';
    }
}

function openRecipeModal(recipe) {
    document.getElementById('modal-title').textContent = recipe.title;
    document.getElementById('modal-image').src = recipe.image;
    document.getElementById('modal-image').alt = recipe.title;
    document.getElementById('modal-time').textContent = recipe.time;
    document.getElementById('modal-difficulty').textContent = recipe.difficulty;
    document.getElementById('modal-servings').textContent = recipe.servings;
    document.getElementById('modal-category').textContent = recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1);
    
    const ingredientsList = document.getElementById('modal-ingredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    const instructionsList = document.getElementById('modal-instructions');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    modal.classList.remove('invisible');
    modal.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
}


categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active-category'));
        button.classList.add('active-category');
        
        const category = button.dataset.category;
        if (category === 'all') {
            displayRecipes(recipes);
        } else {
            const filteredRecipes = recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase());
            displayRecipes(filteredRecipes);
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('opacity-100');
    modal.classList.add('invisible');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('opacity-100');
        modal.classList.add('invisible');
        document.body.style.overflow = 'auto';
    }
});

displayRecipes(recipes);
