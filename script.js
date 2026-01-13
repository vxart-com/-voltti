const conteudos = [
    // === NOVOS (LANÇAMENTOS 2020+) ===
    { titulo: "Love Between Lines", capaID: "1_29_kH8L86vVv9Fk5-j9_930p_eD7-6L", videoID: "ID_DO_VIDEO", tipo: "Cdrama", ano: 2023 },
    
    // === SEUS FILMES ATUAIS ===
    { titulo: "A Morte Pede Carona", capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q", videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo", tipo: "filme", ano: 2007 },
    { titulo: "Cão de Briga", capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0", videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH", tipo: "filme", ano: 2005 },
    { titulo: "O Massacre da Serra Elétrica", capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN", videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J", tipo: "filme", ano: 2003 },
    { titulo: "Sem Saída", capaID: "1rZhZrrh5d8LXqBtcI5MCBMJ5gHYbyFPH", videoID: "1pH_Hj9TxMI4rz3fV5xyF22cLTNqsyW8T", tipo: "filme", ano: 2012 },
    { titulo: "Efeito Colateral", capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B", videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp", tipo: "filme", ano: 2002 },
    { titulo: "Rambo 1", capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s", videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_", tipo: "filme", ano: 1982 },
    { titulo: "Os Vingadores (2012)", capaID: "17wlZ3X3JNtwvve-iUhDErUcS4hxlfozU", videoID: "1lfiSg14g7uFfMFGPGjlFJA3tAVrKqMiY", tipo: "filme", ano: 2012 },
    { titulo: "Vingadores: Era de Ultron", capaID: "1NR94XINMjQI5RAq6GAB5rrMog-3Uojzc", videoID: "1-C0vOq5Xp4gDmlCpmitbGNNLf_D4y-ne", tipo: "filme", ano: 2015 },
    { titulo: "Vingadores: Guerra Infinita", capaID: "1aEaxbcYemiRC25xrXMgGD5-6vfSKCHJK", videoID: "1sQ3RZ4-mJ3n5pt8TW16R0E1FO5NuDfzs", tipo: "filme", ano: 2018 },
    { titulo: "Vingadores: Ultimato", capaID: "1cmosS5uvNBgppGGkO4uLbytXyDu4WXmo", videoID: "1hpPF4WTbbjYNjLigkh0GTtLYviUR3s0s", tipo: "filme", ano: 2019 }
];

const containerGeral = document.getElementById('conteudo-geral');
const player = document.getElementById('main-player');
const titleDisplay = document.getElementById('video-title');

function toggleMenu() { document.getElementById('nav-menu').classList.toggle('active'); }

function criarCard(item) {
    const linkImagem = `https://drive.google.com/thumbnail?authuser=0&sz=w400&id=${item.capaID}`;
    return `
        <div class="card" onclick="playVideo('${item.videoID}', '${item.titulo}')">
            <div class="badge">${item.tipo.toUpperCase()}</div>
            <img src="${linkImagem}" alt="${item.titulo}">
            <div class="card-info"><p>${item.titulo}</p></div>
        </div>`;
}

function playVideo(id, titulo) {
    player.src = `https://drive.google.com/file/d/${id}/preview`;
    titleDisplay.innerText = titulo;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderizarTudo() {
    // Agora a lógica está segura: Se não for dorama e for < 2020, VAI para nostalgia.
    const lancamentos = conteudos.filter(i => i.ano >= 2020);
    const doramas = conteudos.filter(i => i.tipo.toLowerCase().includes('drama') || i.tipo.toLowerCase().includes('série'));
    const nostalgia = conteudos.filter(i => i.ano < 2020 && !i.tipo.toLowerCase().includes('drama'));

    let htmlFinal = "";

    if(lancamentos.length > 0) {
        htmlFinal += `<div class="section-title">Lançamentos 2020+</div><div class="grid">${lancamentos.map(criarCard).join('')}</div>`;
    }
    if(doramas.length > 0) {
        htmlFinal += `<div class="section-title">Séries e Doramas</div><div class="grid">${doramas.map(criarCard).join('')}</div>`;
    }
    if(nostalgia.length > 0) {
        htmlFinal += `<div class="section-title">Filmes Nostálgicos</div><div class="grid">${nostalgia.map(criarCard).join('')}</div>`;
    }

    containerGeral.innerHTML = htmlFinal;
}

function filtrar(tipo) {
    let filtrados;
    if(tipo === 'dorama') {
        filtrados = conteudos.filter(i => i.tipo.toLowerCase().includes('drama') || i.tipo.toLowerCase().includes('série'));
    } else {
        filtrados = conteudos.filter(i => i.tipo === 'filme');
    }
    containerGeral.innerHTML = `<div class="section-title">${tipo}s</div><div class="grid">${filtrados.map(criarCard).join('')}</div>`;
    toggleMenu();
}

renderizarTudo();