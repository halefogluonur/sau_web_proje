document.addEventListener("DOMContentLoaded", function() {
    
    // 1. GAME OF THRONES API
    fetch('https://thronesapi.com/api/v2/Characters')
        .then(res => res.json())
        .then(data => {
            const gotContainer = document.getElementById('got-container');
            gotContainer.innerHTML = '';
            data.slice(0, 52).forEach(char => {
                gotContainer.innerHTML += createCard(char.fullName, char.title, char.imageUrl, 'border-warning');
            });
        })
        .catch(err => console.error("GoT API Hatası:", err));

    // 2. HARRY POTTER API
    fetch('https://hp-api.onrender.com/api/characters')
        .then(res => res.json())
        .then(data => {
            const hpContainer = document.getElementById('hp-container');
            hpContainer.innerHTML = '';
            data.slice(0, 18).forEach(char => {
                const img = char.image || "https://via.placeholder.com/300x400?text=No+Image";
                hpContainer.innerHTML += createCard(char.name, char.house || "Büyücü", img, 'border-info');
            });
        })
        .catch(err => console.error("HP API Hatası:", err));

    // Ortak Kart Fonksiyonu
    function createCard(name, detail, img, borderColor) {
        return `
            <div class="col-md-3">
                <div class="card h-100 bg-dark text-white shadow ${borderColor}" style="border-width: 2px;">
                    <img src="${img}" class="card-img-top" style="height:300px; object-fit:cover;" alt="${name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text text-muted small">${detail}</p>
                    </div>
                </div>
            </div>
        `;
    }
});