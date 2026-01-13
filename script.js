const conteudos = [
    { titulo: "A Morte Pede Carona (2007)", capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q", videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo", tipo: "filme", genero: "Terror", sinopse: "Uma viagem vira pesadelo na estrada." },
    { titulo: "Cão de Briga (2005)", capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0", videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH", tipo: "filme", genero: "Ação", sinopse: "Um homem treinado para lutar busca sua liberdade." },
    { titulo: "O Massacre da Serra Elétrica", capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN", videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J", tipo: "filme", genero: "Terror", sinopse: "As origens de Leatherface." },
    { titulo: "Sem Saída", capaID: "1rZhZrrh5d8LXqBtcI5MCBMJ5gHYbyFPH", videoID: "1pH_Hj9TxMI4rz3fV5xyF22cLTNqsyW8T", tipo: "filme", genero: "Suspense", sinopse: "Luta pela sobrevivência." },
    { titulo: "Efeito Colateral", capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B", videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp", tipo: "filme", genero: "Ação", sinopse: "Vingança contra terroristas." },
    { titulo: "Rambo 1", capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s", videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_", tipo: "filme", genero: "Ação", sinopse: "Guerrilha contra xerife." },
    { titulo: "Os Vingadores (2012)", capaID: "17wlZ3X3JNtwvve-iUhDErUcS4hxlfozU", videoID: "1lfiSg14g7uFfMFGPGjlFJA3tAVrKqMiY", tipo: "filme", genero: "Ação", sinopse: "Heróis se unem contra Loki." },
    { titulo: "Vingadores: Era de Ultron", capaID: "1NR94XINMjQI5RAq6GAB5rrMog-3Uojzc", videoID: "1-C0vOq5Xp4gDmlCpmitbGNNLf_D4y-ne", tipo: "filme", genero: "Ação", sinopse: "Luta contra IA maligna." },
    { titulo: "Vingadores: Guerra Infinita", capaID: "1aEaxbcYemiRC25xrXMgGD5-6vfSKCHJK", videoID: "1sQ3RZ4-mJ3n5pt8TW16R0E1FO5NuDfzs", tipo: "filme", genero: "Ação", sinopse: "O confronto contra Thanos." },
    { titulo: "Vingadores: Ultimato", capaID: "1cmosS5uvNBgppGGkO4uLbytXyDu4WXmo", videoID: "1hpPF4WTbbjYNjLigkh0GTtLYviUR3s0s", tipo: "filme", genero: "Ação", sinopse: "O desfecho épico." }
];

const gridFilmes = document.getElementById('grid-filmes');
const modal = document.getElementById("video-modal");
const player = document.getElementById("video-player");
const closeBtn = document.querySelector(".close-btn");

// Função para renderizar os cards
function carregarFilmes() {
    conteudos.forEach(item => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        // Link de imagem direta do Google Drive
        const urlCapa = `https://lh3.googleusercontent.com/u/0/d/${item.capaID}`;
        
        card.innerHTML = `
            <img src="${urlCapa}" alt="${item.titulo}" onerror="this.src='https://via.placeholder.com/200x300?text=Capa+Indisponível'">
            <div class="movie-info">
                <h3>${item.titulo}</h3>
                <p>${item.genero}</p>
            </div>
        `;
        
        card.onclick = () => abrirPlayer(item.videoID);
        gridFilmes.appendChild(card);
    });
}

function abrirPlayer(id) {
    // Modo preview do Drive para o player interno
    player.src = `https://drive.google.com/file/d/${id}/preview`;
    modal.style.display = "flex";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
    player.src = "";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        player.src = "";
    }
};

carregarFilmes();