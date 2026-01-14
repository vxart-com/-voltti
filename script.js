const conteudos = [
    // --- AÇÃO ---
    { titulo: "Cão de Briga (2005)", capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0", videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH", tipo: "filme", genero: "Ação" },
    { titulo: "Efeito Colateral", capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B", videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp", tipo: "filme", genero: "Ação" },
    { titulo: "Rambo 1", capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s", videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_", tipo: "filme", genero: "Ação" },
    { titulo: "Sr. e Sra. Smith", capaID: "1-4cdytmAMaCGOW0UfSsLhXHcvLph49nK", videoID: "1nC3JSFyGd4uLaaUaDBZcyDRSj0Yglcak", tipo: "filme", genero: "Ação" },

    // --- SUSPENSE / TERROR ---
    { titulo: "A Morte Pede Carona (2007)", capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q", videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo", tipo: "filme", genero: "Terror" },
    { titulo: "O Massacre da Serra Elétrica", capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN", videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J", tipo: "filme", genero: "Terror" },
    { titulo: "Sem Saída", capaID: "1rZhZrrh5d8LXqBtcI5MCBMJ5gHYbyFPH", videoID: "1pH_Hj9TxMI4rz3fV5xyF22cLTNqsyW8T", tipo: "filme", genero: "Suspense" },
    { titulo: "Vigiados", capaID: "18WxrSzD-ilSbtqF3ZCJ0Pumw1PsEbIGG", videoID: "1szU70220U5BeAKrq3nKQJfXEUSiE3Uhb", tipo: "filme", genero: "Suspense" },

    // --- MARVEL / HERÓIS ---
    { titulo: "Os Vingadores (2012)", capaID: "17wlZ3X3JNtwvve-iUhDErUcS4hxlfozU", videoID: "1lfiSg14g7uFfMFGPGjlFJA3tAVrKqMiY", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Era de Ultron", capaID: "1NR94XINMjQI5RAq6GAB5rrMog-3Uojzc", videoID: "1-C0vOq5Xp4gDmlCpmitbGNNLf_D4y-ne", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Guerra Infinita", capaID: "1aEaxbcYemiRC25xrXMgGD5-6vfSKCHJK", videoID: "1sQ3RZ4-mJ3n5pt8TW16R0E1FO5NuDfzs", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Ultimato", capaID: "1cmosS5uvNBgppGGkO4uLbytXyDu4WXmo", videoID: "1hpPF4WTbbjYNjLigkh0GTtLYviUR3s0s", tipo: "filme", genero: "Marvel" },

    // --- INFANTIL ---
    { titulo: "Os Incríveis 2", capaID: "1e6Bl-HEJo4UnsJyBwqX0YfHYlnJZtwXd", videoID: "1KY21irLfkWynX3yY0RlnGG48helhCPKX", tipo: "filme", genero: "Infantil" },

    // --- ROMANCE / DRAMA ---
    { titulo: "After", capaID: "1SM2PN1hPWL0Z_mQRFTVvMoPBwtqD9rtB", videoID: "1RZE1S_UCi9DA-Q-9DZIKTyQmuBNSPHQ_", tipo: "filme", genero: "Romance" },
    { titulo: "After 2", capaID: "1CROr0ySxN7qjeMXr70nFEdqxG_XCelsz", videoID: "1WL6DAD7y0qJz7gU2Tri1DLgk7Dbhimus", tipo: "filme", genero: "Romance" },
    { titulo: "After 3", capaID: "1Z7TTYmECxz9QDotu3fRfOiQhsOO8MFjx", videoID: "1TNmCJVNQCEUChOtZ69Ono4hsD61PUGl4", tipo: "filme", genero: "Romance" },

    // --- DORAMAS ---
    { 
        titulo: "A Má Mãe", 
        capaID: "1_NY-gbUM21gbOdsBf56zVjNtm8KUDYoi", 
        tipo: "dorama",
        genero: "Dorama",
        episodios: [
            { nome: "Episódio 01", videoID: "1_tOC-zRf2hIDxrmZiHd3gpImrj0yIWzV" },
            { nome: "Ep 02 (Breve)", videoID: "" }
        ]
    }
];

const grid = document.getElementById('movie-grid');
const player = document.getElementById('main-player');
const titleDisplay = document.getElementById('video-title');
const listaEpsContainer = document.getElementById('lista-eps');

function validarChave() {
    const chaveCorreta = "VOLTTI5";
    let chaveSalva = null;
    try { chaveSalva = localStorage.getItem("voltti_chave"); } catch (e) {}
    if (chaveSalva === chaveCorreta) return true;
    const senha = prompt("🔒 ACESSO RESTRITO\nInsira a chave:");
    if (senha === chaveCorreta) {
        try { localStorage.setItem("voltti_chave", chaveCorreta); } catch (e) {}
        return true;
    }
    alert("Chave incorreta!");
    return false;
}

function darPlay(id, titulo) {
    player.src = `https://drive.google.com/file/d/${id}/preview`;
    titleDisplay.innerText = titulo;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function renderizar(lista) {
    grid.innerHTML = "";
    
    // Pega todos os gêneros únicos da lista
    const generos = [...new Set(lista.map(item => item.genero))];

    generos.forEach(gen => {
        // Cria o título da seção (Ex: Ação)
        const secao = document.createElement('div');
        secao.className = 'genero-secao';
        secao.innerHTML = `<h3 class="genero-titulo">${gen}</h3><div class="genero-linha"></div>`;
        const linha = secao.querySelector('.genero-linha');

        // Filtra os filmes desse gênero
        const filmesDoGenero = lista.filter(i => i.genero === gen);

        filmesDoGenero.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            const linkImagem = `https://drive.google.com/thumbnail?authuser=0&sz=w400&id=${item.capaID}`;
            card.innerHTML = `<img src="${linkImagem}"><p>${item.titulo}</p>`;
            card.onclick = () => {
                if (item.tipo === "dorama") {
                    gerarListaEpisodios(item);
                } else {
                    listaEpsContainer.innerHTML = "";
                    if (validarChave()) darPlay(item.videoID, item.titulo);
                }
            };
            linha.appendChild(card);
        });
        grid.appendChild(secao);
    });
}

function gerarListaEpisodios(serie) {
    titleDisplay.innerText = `${serie.titulo} - Escolha o Episódio:`;
    listaEpsContainer.innerHTML = ""; 
    serie.episodios.forEach(ep => {
        const btn = document.createElement('button');
        btn.innerText = ep.nome;
        btn.className = ep.videoID === "" ? "btn-episodio btn-indisponivel" : "btn-episodio";
        btn.onclick = () => {
            if (ep.videoID !== "" && validarChave()) darPlay(ep.videoID, `${serie.titulo} - ${ep.nome}`);
        };
        listaEpsContainer.appendChild(btn);
    });
}

function filtrar(tipo) {
    if(tipo === 'todos') return renderizar(conteudos);
    renderizar(conteudos.filter(i => i.tipo === tipo));
}

renderizar(conteudos);