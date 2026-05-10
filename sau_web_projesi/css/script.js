// script.js - API Entegrasyonu
// Game of Thrones, Harry Potter ve Oyun API'leri

document.addEventListener("DOMContentLoaded", function() {

    // ----- 1. Game of Thrones Karakterleri -----
    // thronesapi.com'dan tüm karakterleri çekiyorum
    fetch('https://thronesapi.com/api/v2/Characters')
        .then(res => res.json())
        .then(data => {
            const gotContainer = document.getElementById('got-container');
            gotContainer.innerHTML = '';
            // API çok fazla karakter döndürüyor, ilk 52'sini alıyorum
            data.slice(0, 52).forEach(char => {
                gotContainer.innerHTML += createCard(char.fullName, char.title, char.imageUrl, 'border-warning');
            });
        })
        .catch(err => console.error("GoT API Hatası:", err));

    // ----- 2. Harry Potter Karakterleri -----
    // hp-api.onrender.com'dan karakterleri çekiyorum
    fetch('https://hp-api.onrender.com/api/characters')
        .then(res => res.json())
        .then(data => {
            const hpContainer = document.getElementById('hp-container');
            hpContainer.innerHTML = '';
            // İlk 18 karakteri göstermek yeterli oluyor
            data.slice(0, 18).forEach(char => {
                // Resmi olmayan karakterler için placeholder görsel kullanıyorum
                const img = char.image || "https://via.placeholder.com/300x400?text=No+Image";
                hpContainer.innerHTML += createCard(char.name, char.house || "Büyücü", img, 'border-danger');
            });
        })
        .catch(err => console.error("HP API Hatası:", err));

    // ----- 3. Oyunlar (Wikipedia API) -----
    // Wikipedia'nın ücretsiz API'sinden oyun kapaklarını ve açıklamalarını çekiyorum
    const oyunlar = [
        { slug: 'Red_Dead_Redemption_2', label: 'Red Dead Redemption 2', tur: 'Açık Dünya / Macera' },
        { slug: 'Valorant', label: 'Valorant', tur: 'FPS / Takım Savaşı' },
        { slug: 'Battlefield_1', label: 'Battlefield 1', tur: 'FPS / Savaş' },
        { slug: 'Uncharted_4:_A_Thief\'s_End', label: 'Uncharted 4', tur: 'Aksiyon / Macera' },
        { slug: 'NBA_2K25', label: 'NBA 2K25', tur: 'Spor / Basketbol' },
        { slug: 'EA_Sports_FC_25', label: 'EA Sports FC 25', tur: 'Spor / Futbol' },
        { slug: 'Football_Manager_2024', label: 'Football Manager 2024', tur: 'Spor / Yönetim Simülasyonu' }
    ];

    const oyunContainer = document.getElementById('oyun-container');
    let yuklenen = 0;

    // Her oyun için Wikipedia'ya istek atıyorum
    oyunlar.forEach(oyun => {
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${oyun.slug}`)
            .then(res => res.json())
            .then(data => {
                // Wikipedia'dan gelen thumbnail varsa onu göster, yoksa placeholder kullan
                const img = data.thumbnail?.source || data.originalimage?.source || 'https://via.placeholder.com/400x200?text=G%C3%B6rsel+Yok';
                // Açıklamayı 250 karakterle sınırlandırıyorum, kart düzeni bozulmasın
                const desc = data.extract?.substring(0, 250) + '...' || 'Açıklama bulunamadı.';
                oyunContainer.innerHTML += `
                    <div class="col-md-6 col-lg-4">
                        <div class="card h-100 bg-dark text-white shadow border-success">
                            <img src="${img}" class="card-img-top" style="height: 280px; object-fit: contain; background: #111;" alt="${oyun.label}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-success">${oyun.label}</h5>
                                <p class="text-muted small">${oyun.tur}</p>
                                <p class="card-text flex-grow-1 text-muted small">${desc}</p>
                                <a href="${data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${oyun.slug}`}" target="_blank" class="btn btn-outline-success btn-sm mt-auto">Wikipedia'da Oku</a>
                            </div>
                        </div>
                    </div>
                `;
            })
            .catch(() => {
                // Wikipedia sayfası bulunamazsa fallback kart gösteriyorum
                oyunContainer.innerHTML += `
                    <div class="col-md-6 col-lg-4">
                        <div class="card h-100 bg-dark text-white shadow border-secondary">
                            <div class="card-body d-flex flex-column text-center">
                                <i class="fas fa-gamepad fs-1 text-muted mb-3"></i>
                                <h5 class="card-title text-success">${oyun.label}</h5>
                                <p class="text-muted small">${oyun.tur}</p>
                                <p class="card-text flex-grow-1 text-muted small">Wikipedia sayfası henüz mevcut değil.</p>
                            </div>
                        </div>
                    </div>
                `;
            })
            .finally(() => {
                // Tüm oyunlar yüklendiğinde loading animasyonunu kaldırıyorum
                yuklenen++;
                if (yuklenen === oyunlar.length) {
                    document.querySelector('#oyunlar .spinner-border')?.remove();
                }
            });
    });

    // ----- Ortak Kart Oluşturma Fonksiyonu -----
    // GoT ve HP karakterleri için Bootstrap kartı oluşturuyorum
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
