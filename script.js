
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
        category: "Saudáveis",
        ingredients: [
            "2 ovos",
            "1 fatia de presunto",
            "tempero verde a gosto",
            "1 pitada de sal",
            "2 fatias de queijo",
            "caldo de galinha a gosto"
        ],
        instructions: [
            "Amasse a banana em uma tigela até ficar bem pastosa.",
            "Adicione o ovo e misture bem.",
            "Incorpore a farinha de aveia, canela e fermento em pó.",
            "Aqueça uma frigideira antiaderente em fogo médio.",
            "Despeje pequenas porções da massa na frigideira.",
            "Cozinhe por 2-3 minutos de cada lado até dourar.",
            "Sirva com mel por cima, se desejar."
        ]
    },
    {
        id: 2,
        title: "Café gelado",
        image: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/6ce10070ca590097bf7241c8cd5951d9.jpg?itok=u4POTa93",
        time: "10 min",
        difficulty: "Fácil",
        servings: "1 porção",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFoFYy5QiD_uYiCIjnNklTDFcXwD7ogq9CwA&s",
        time: "30 min",
        difficulty: "Médio",
        servings: "10 porção",
        category: "doces",
        ingredients: [
            "2 ovos",
            "1 punhado de espinafre fresco",
            "1 colher de sopa de queijo ralado",
            "Sal e pimenta a gosto",
            "1 colher de chá de azeite"
        ],
        instructions: [
            "Lave e pique o espinafre.",
            "Bata os ovos e tempere com sal e pimenta.",
            "Aqueça o azeite e refogue o espinafre por 1 minuto.",
            "Despeje os ovos e polvilhe queijo ralado.",
            "Cozinhe até firmar e sirva."
        ]
    },
    {
        id: 4,
        title: "Sanduíche Natural",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdVM9EBAzWhcCHK6NUL_uQwXTvBdWMRulXgXFtgaBFEFZTYQuFSJfb7lu&s=10",
        time: "5 min",
        difficulty: "Muito Fácil",
        servings: "1 porção",
        category: "rapidas",
        ingredients: [
            "1 polpa de açaí congelado",
            "1 banana",
            "2 colheres de sopa de granola",
            "1 colher de sopa de mel",
            "1 colher de sopa de leite em pó (opcional)"
        ],
        instructions: [
            "Bata o açaí até ficar cremoso.",
            "Despeje em uma tigela.",
            "Adicione banana, granola e mel.",
            "Sirva imediatamente."
        ]
    },
    {
        id: 5,
        title: "Tofu Mexido",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        time: "10 min",
        difficulty: "Médio",
        servings: "2 porções",
        category: "veganas",
        ingredients: [
            "200g de tofu firme",
            "1 colher de sopa de azeite",
            "1/2 cebola picada",
            "1/2 pimentão vermelho picado",
            "1 colher de chá de cúrcuma",
            "Sal e pimenta a gosto",
            "Salsinha picada para decorar"
        ],
        instructions: [
            "Esmague o tofu.",
            "Refogue cebola e pimentão.",
            "Adicione o tofu e cúrcuma.",
            "Tempere, cozinhe mais 5 minutos e sirva."
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
