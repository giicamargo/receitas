function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("hidden");
}

function toggleSearch() {
  const input = document.getElementById("searchInput");
  input.style.display = input.style.display === "none" ? "block" : "none";
}

function searchRecipes() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("searchResults");
  const recipes = [
    { name: "Café Gelado", page: "pages/cafe.html" },
    { name: "Capuccino", page: "pages/cafe.html" },
    { name: "Bolo de café", page: "pages/bolos.html" },
    { name: "Chocolate quente", page: "pages/bebidas-quentes.html" },
    { name: "Smoothie de banana", page: "pages/lanches.html" },
  ];

  results.innerHTML = "";
  const filtered = recipes.filter(r => r.name.toLowerCase().includes(input));
  filtered.forEach(r => {
    const btn = document.createElement("button");
    btn.textContent = r.name;
    btn.onclick = () => goToPage(r.page);
    results.appendChild(btn);
  });
}

function goToPage(page) {
  window.location.href = page;
}

function goHome() {
  window.location.href = "index.html";
}

function goToCafePage() {
  window.location.href = "pages/cafe.html";
}
