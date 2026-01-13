const conteudos = [
    { titulo: "A Morte Pede Carona (2007)", capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q", videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo", tipo: "filme", genero: "Terror" },
    { titulo: "Cão de Briga (2005)", capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0", videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH", tipo: "filme", genero: "Ação" },
    { titulo: "O Massacre da Serra Elétrica", capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN", videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J", tipo: "filme", genero: "Terror" },
    { titulo: "Sem Saída", capaID: "1rZhZrrh5d8LXqBtcI5MCBMJ5gHYbyFPH", videoID: "1pH_Hj9TxMI4rz3fV5xyF22cLTNqsyW8T", tipo: "filme", genero: "Suspense" },
    { titulo: "Efeito Colateral", capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B", videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp", tipo: "filme", genero: "Ação" },
    { titulo: "Rambo 1", capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s", videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_", tipo: "filme", genero: "Ação" },
    { titulo: "Os Vingadores (2012)", capaID: "17wlZ3X3JNtwvve-iUhDErUcS4hxlfozU", videoID: "1lfiSg14g7uFfMFGPGjlFJA3tAVrKqMiY", tipo: "filme", genero: "Ação" },
    { titulo: "Vingadores: Era de Ultron", capaID: "1NR94XINMjQI5RAq6GAB5rrMog-3Uojzc", videoID: "1-C0vOq5Xp4gDmlCpmitbGNNLf_D4y-ne", tipo: "filme", genero: "Ação" },
    { titulo: "Vingadores: Guerra Infinita", capaID: "1aEaxbcYemiRC25xrXMgGD5-6vfSKCHJK", videoID: "1sQ3RZ4-mJ3n5pt8TW16R0E1FO5NuDfzs", tipo: "filme", genero: "Ação" },
    { titulo: "Vingadores: Ultimato", capaID: "1cmosS5uvNBgppGGkO4uLbytXyDu4WXmo", videoID: "1hpPF4WTbbjYNjLigkh0GTtLYviUR3s0s", tipo: "filme", genero: "Ação" }
];

// Elementos
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const modal = document.getElementById("video-modal");
const player = document.getElementById("video-player");
const closeBtn = document.querySelector(".close-btn");

// Menu Mobile
menuToggle.onclick = () => {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('active');
};

// Renderizar Conteúdo
function renderizar() {
    conteudos.forEach(item => {
        const grid = document.getElementById(`grid-${item.tipo}`);
        if(grid) {
            const card = document.createElement('div');
            card.className = 'movie-card';
            // Link direto para imagem do Drive
            const capaUrl = `https://lh3.googleusercontent.com/u/0/d/${item.capaID}`;
            
            card.innerHTML = `
                <div class="img-container">
                    <img src="${capaUrl}" alt="${item.titulo}" loading="lazy">
                    <div class="play-overlay"><i class="fas fa-play-circle"></i></div>
                </div>
                <div class="movie-info">
                    <h3>${item.titulo}</h3>
                    <p>${item.genero}</p>
                </div>
            `;
            card.onclick = () => abrirPlayer(item.videoID);
            grid.appendChild(card);
        }
    });
}

function abrirPlayer(id) {
    player.src = `https://drive.google.com/file/d/${id}/preview`;
    modal.style.display = "flex";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
    player.src = "";
};

// Fecha o menu ao clicar num link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.onclick = () => {
        navList.classList.remove('active');
        menuToggle.classList.remove('active');
    };
});

window.onload = renderizar;