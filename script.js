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

const grid = document.getElementById('movie-grid');
const player = document.getElementById('main-player');
const titleDisplay = document.getElementById('video-title');

// Função para exibir os cards na tela
function renderizarCatalogo(lista) {
    grid.innerHTML = ""; // Limpa a grade antes de mostrar
    lista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        // Link direto da imagem do Google Drive usando o capaID
        const linkImagem = `https://lh3.googleusercontent.com/u/0/d/${item.capaID}`;
        
        card.innerHTML = `
            <img src="${linkImagem}" alt="${item.titulo}" onerror="this.src='https://via.placeholder.com/150x225?text=Sem+Capa'">
            <p>${item.titulo}</p>
        `;
        
        card.onclick = () => {
            // Player embutido sem abrir nova aba
            const embedUrl = `https://drive.google.com/file/d/${item.videoID}/preview`;
            player.src = embedUrl;
            titleDisplay.innerText = item.titulo;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        grid.appendChild(card);
    });
}

// Função de Filtro para o Menu
function filtrar(categoria) {
    if (categoria === 'todos') {
        renderizarCatalogo(conteudos);
    } else {
        const filtrados = conteudos.filter(item => item.tipo === categoria);
        renderizarCatalogo(filtrados);
    }
}

// Inicializa o site com tudo
renderizarCatalogo(conteudos);