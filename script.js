const conteudos = [
    { titulo: "A Morte Pede Carona (2007)", capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q", videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo", tipo: "filme" },
    { titulo: "Cão de Briga (2005)", capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0", videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH", tipo: "filme" },
    { titulo: "O Massacre da Serra Elétrica", capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN", videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J", tipo: "filme" },
    { titulo: "Sem Saída", capaID: "1rZhZrrh5d8LXqBtcI5MCBMJ5gHYbyFPH", videoID: "1pH_Hj9TxMI4rz3fV5xyF22cLTNqsyW8T", tipo: "filme" },
    { titulo: "Efeito Colateral", capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B", videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp", tipo: "filme" },
    { titulo: "Rambo 1", capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s", videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_", tipo: "filme" },
    { titulo: "Os Vingadores (2012)", capaID: "17wlZ3X3JNtwvve-iUhDErUcS4hxlfozU", videoID: "1lfiSg14g7uFfMFGPGjlFJA3tAVrKqMiY", tipo: "filme" },
    { titulo: "Vingadores: Era de Ultron", capaID: "1NR94XINMjQI5RAq6GAB5rrMog-3Uojzc", videoID: "1-C0vOq5Xp4gDmlCpmitbGNNLf_D4y-ne", tipo: "filme" },
    { titulo: "Vingadores: Guerra Infinita", capaID: "1aEaxbcYemiRC25xrXMgGD5-6vfSKCHJK", videoID: "1sQ3RZ4-mJ3n5pt8TW16R0E1FO5NuDfzs", tipo: "filme" },
    { titulo: "Vingadores: Ultimato", capaID: "1cmosS5uvNBgppGGkO4uLbytXyDu4WXmo", videoID: "1hpPF4WTbbjYNjLigkh0GTtLYviUR3s0s", tipo: "filme" }
];

const grid = document.getElementById('movie-grid');
const player = document.getElementById('main-player');
const titleDisplay = document.getElementById('video-title');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

// Função para desenhar os filmes na tela
function renderizar(lista) {
    grid.innerHTML = "";
    lista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        const linkImagem = `https://drive.google.com/uc?export=view&id=${item.capaID}`;
        
        card.innerHTML = `
            <img src="${linkImagem}" alt="${item.titulo}">
            <p>${item.titulo}</p>
        `;
        
        card.onclick = () => {
            player.src = `https://drive.google.com/file/d/${item.videoID}/preview`;
            titleDisplay.innerText = item.titulo;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        grid.appendChild(card);
    });
}

// Filtro do Menu
function filtrar(tipo) {
    navMenu.classList.remove('active'); // Fecha o menu mobile ao clicar
    if(tipo === 'todos') return renderizar(conteudos);
    const filtrados = conteudos.filter(i => i.tipo === tipo);
    renderizar(filtrados);
}

// Abrir/Fechar Menu Mobile
mobileMenu.onclick = () => {
    navMenu.classList.toggle('active');
};

// Iniciar site
renderizar(conteudos);