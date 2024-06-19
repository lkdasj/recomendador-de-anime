// Variables globales
const animesPerPage = 12; // Número de animes por página
let currentPage = 1;      // Página actual inicialmente
let filteredAnimes = [...animes]; // Copia inicial de todos los animes

// Función para mostrar los animes en la página actual
function showAnimes() {
    const startIndex = (currentPage - 1) * animesPerPage;
    const endIndex = startIndex + animesPerPage;
    const paginatedAnimes = filteredAnimes.slice(startIndex, endIndex);

    const animeListContent = document.getElementById('animeListContent');
    const noResultsMessage = document.getElementById('noResultsMessage');
    const paginationButtons = document.getElementById('paginationButtons');

    animeListContent.innerHTML = '';

    if (paginatedAnimes.length === 0) {
        noResultsMessage.style.display = 'block';
        paginationButtons.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'none';
        paginationButtons.style.display = 'flex';

        // Generar la cuadrícula de animes
        const animeGrid = document.createElement('div');
        animeGrid.classList.add('anime-grid');

        paginatedAnimes.forEach((anime, index) => {
            const animeCell = document.createElement('div');
            animeCell.classList.add('anime-cell');
            animeCell.innerHTML = `
                <div class="anime-info">
                    <div class="anime-id">${startIndex + index + 1}</div>
                    <img src="${anime.image_url}" alt="${anime.title}" class="anime-image">
                    <div class="anime-details">
                        <p class="anime-title">${anime.title}</p>
                        <p class="anime-year">${anime.start_date}</p>
                    </div>
                </div>
            `;
            animeGrid.appendChild(animeCell);
        });

        animeListContent.appendChild(animeGrid);
    }

    updatePaginationButtons();
}

// Función para actualizar los botones de paginación
function updatePaginationButtons() {
    const prevPageButton = document.getElementById('prevPageButton');
    const nextPageButton = document.getElementById('nextPageButton');
    const currentPageSpan = document.getElementById('currentPage');

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === Math.ceil(filteredAnimes.length / animesPerPage);

    currentPageSpan.textContent = currentPage;
}

// Función para cambiar de página
function changePage(direction) {
    currentPage += direction;
    showAnimes();
}

// Función para buscar animes por nombre
function searchAnime() {
    const searchInput = document.getElementById('searchBox').value.toLowerCase();
    filteredAnimes = animes.filter(anime => anime.title.toLowerCase().includes(searchInput));
    currentPage = 1;
    showAnimes();
}

// Función para filtrar animes por letra
function filterByLetter() {
    const filterLetter = document.getElementById('filterComboBox').value.toLowerCase();
    if (filterLetter) {
        filteredAnimes = animes.filter(anime => anime.title.toLowerCase().startsWith(filterLetter));
    } else {
        filteredAnimes = [...animes]; // Copia de seguridad si no hay filtro seleccionado
    }
    currentPage = 1;
    showAnimes();
}

// Inicialización al cargar la página
showAnimes(); // Mostrar animes al cargar la página

function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    if (menuItems.style.display === 'block') {
        menuItems.style.display = 'none';
    } else {
        menuItems.style.display = 'block';
    }
}