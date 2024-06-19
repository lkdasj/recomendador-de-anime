// Función para mostrar un anime aleatorio
function showRandomAnime() {
    const randomIndex = Math.floor(Math.random() * animes.length);
    const randomAnime = animes[randomIndex];

    const animeBox = document.getElementById('animeBox');
    animeBox.innerHTML = `
        <div class="anime-card">
            <h2>${randomAnime.title}</h2>
            <img src="${randomAnime.image_url}" alt="${randomAnime.title}" class="anime-image">
            <div class="anime-details">
                <p><strong>Género:</strong> ${randomAnime.genres.join(', ')}</p>
                <p><strong>Fecha de Estreno:</strong> ${randomAnime.start_date}</p>
                <p><strong>Episodios:</strong> ${randomAnime.episodes}</p>
                <p><strong>Sinopsis:</strong> ${randomAnime.synopsis}</p>
                <div class="watch-links">
                    ${generateWatchLink("Crunchyroll", randomAnime.watch_links.crunchyroll)}
                    ${generateWatchLink("AnimeFLV", randomAnime.watch_links.animeflv)}
                    ${generateWatchLink("TioAnime", randomAnime.watch_links.tioanime)} 
                    ${generateWatchLink("JKAnime", randomAnime.watch_links.jkanime)}
                </div>
            </div>
        </div>
    `;
}

// Función para generar el enlace de visualización
function generateWatchLink(service, link) {
    if (link) {
        return `<a href="${link}" class="btn-${service.toLowerCase()}" target="_blank">Ver en ${service}</a>`;
    } else {
        return `<span class="btn-not-available">❌ link ${service}</span>`;
    }
}

// Llamada inicial para mostrar un anime aleatorio al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    showRandomAnime();
});

// Función para redirigir a lista.html
function redirectToLista() {
    window.location.href = 'lista.html';
}

function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    if (menuItems.style.display === 'block') {
        menuItems.style.display = 'none';
    } else {
        menuItems.style.display = 'block';
    }
}