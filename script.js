const conteudos = [
    // --- FILMES (Seus 17 títulos anteriores) ---
    { titulo: "A Morte Pede Carona (2007)", capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q", videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo", tipo: "filme" },
    { titulo: "Cão de Briga (2005)", capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0", videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH", tipo: "filme" },
    { titulo: "O Massacre da Serra Elétrica", capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN", videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J", tipo: "filme" },
    { titulo: "Sem Saída", capaID: "1rZhZrrh5d8LXqBtcI5MCBMJ5gHYbyFPH", videoID: "1pH_Hj9TxMI4rz3fV5xyF22cLTNqsyW8T", tipo: "filme" },
    { titulo: "Efeito Colateral", capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B", videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp", tipo: "filme" },
    { titulo: "Rambo 1", capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s", videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_", tipo: "filme" },
    { titulo: "Os Vingadores (2012)", capaID: "17wlZ3X3JNtwvve-iUhDErUcS4hxlfozU", videoID: "1lfiSg14g7uFfMFGPGjlFJA3tAVrKqMiY", tipo: "filme" },
    { titulo: "Vingadores: Era de Ultron", capaID: "1NR94XINMjQI5RAq6GAB5rrMog-3Uojzc", videoID: "1-C0vOq5Xp4gDmlCpmitbGNNLf_D4y-ne", tipo: "filme" },
    { titulo: "Vingadores: Guerra Infinita", capaID: "1aEaxbcYemiRC25xrXMgGD5-6vfSKCHJK", videoID: "1sQ3RZ4-mJ3n5pt8TW16R0E1FO5NuDfzs", tipo: "filme" },
    { titulo: "Vingadores: Ultimato", capaID: "1cmosS5uvNBgppGGkO4uLbytXyDu4WXmo", videoID: "1hpPF4WTbbjYNjLigkh0GTtLYviUR3s0s", tipo: "filme" },
    { titulo: "Os Incríveis 2", capaID: "1e6Bl-HEJo4UnsJyBwqX0YfHYlnJZtwXd", videoID: "1KY21irLfkWynX3yY0RlnGG48helhCPKX", tipo: "filme" },
    { titulo: "Resident Evil 2", capaID: "1UxZ1YcXDTr4z5WJDniBlzI3DC6JpLWFo", videoID: "1deLjAdjbblDb40gTzd7KA0gPSHsXfWQr", tipo: "filme" },
    { titulo: "Sr. e Sra. Smith", capaID: "1-4cdytmAMaCGOW0UfSsLhXHcvLph49nK", videoID: "1nC3JSFyGd4uLaaUaDBZcyDRSj0Yglcak", tipo: "filme" },
    { titulo: "Vigiados", capaID: "18WxrSzD-ilSbtqF3ZCJ0Pumw1PsEbIGG", videoID: "1szU70220U5BeAKrq3nKQJfXEUSiE3Uhb", tipo: "filme" },
    { titulo: "After", capaID: "1SM2PN1hPWL0Z_mQRFTVvMoPBwtqD9rtB", videoID: "1RZE1S_UCi9DA-Q-9DZIKTyQmuBNSPHQ_", tipo: "filme" },
    { titulo: "After 2", capaID: "1CROr0ySxN7qjeMXr70nFEdqxG_XCelsz", videoID: "1WL6DAD7y0qJz7gU2Tri1DLgk7Dbhimus", tipo: "filme" },
    { titulo: "After 3", capaID: "1Z7TTYmECxz9QDotu3fRfOiQhsOO8MFjx", videoID: "1TNmCJVNQCEUChOtZ69Ono4hsD61PUGl4", tipo: "filme" },

    // --- DORAMAS ---
    { 
        titulo: "A Má Mãe", 
        capaID: "1_NY-gbUM21gbOdsBf56zVjNtm8KUDYoi", 
        tipo: "dorama",
        episodios: [
            { nome: "Episódio 01", videoID: "1_tOC-zRf2hIDxrmZiHd3gpImrj0yIWzV" },
            { nome: "Episódio 02 (Brevemente)", videoID: "" },
            { nome: "Episódio 03 (Brevemente)", videoID: "" }
        ]
    }
];

const grid = document.getElementById('movie-grid');
const player = document.getElementById('main-player');
const titleDisplay = document.getElementById('video-title');
const navMenu = document.getElementById('nav-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Função para validar a chave
function validarChave() {
    const senha = prompt("🔒 ACESSO RESTRITO\nInsira a chave de acesso:");
    if (senha === "VOLTTI5") return true;
    alert("Chave incorreta! Adquira o seu acesso no menu.");
    return false;
}

// Função para dar o play
function darPlay(id, titulo) {
    player.src = `https://drive.google.com/file/d/${id}/preview`;
    titleDisplay.innerText = titulo;
    document.getElementById('player-section').scrollIntoView({ behavior: 'smooth' });
}

function renderizar(lista) {
    grid.innerHTML = "";
    lista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        const linkImagem = `https://drive.google.com/thumbnail?authuser=0&sz=w400&id=${item.capaID}`;
        
        card.innerHTML = `<img src="${linkImagem}"><p>${item.titulo}</p>`;
        
        card.onclick = () => {
            if (item.tipo === "dorama") {
                gerarListaEpisodios(item);
            } else {
                if (validarChave()) darPlay(item.videoID, item.titulo);
            }
        };
        grid.appendChild(card);
    });
}

// NOVA FUNÇÃO: Gera botões para os episódios
function gerarListaEpisodios(serie) {
    titleDisplay.innerHTML = `<strong>${serie.titulo}</strong> - Escolha o Episódio:<br><div id="lista-eps" style="margin-top:10px;"></div>`;
    const containerEps = document.getElementById('lista-eps');

    serie.episodios.forEach(ep => {
        const btn = document.createElement('button');
        btn.innerText = ep.nome;
        btn.style.cssText = "background:#e50914; color:#fff; border:none; padding:10px; margin:5px; border-radius:5px; cursor:pointer; font-weight:bold;";
        
        btn.onclick = () => {
            if (ep.videoID === "") {
                alert("Este episódio ainda não está disponível.");
            } else {
                if (validarChave()) darPlay(ep.videoID, `${serie.titulo} - ${ep.nome}`);
            }
        };
        containerEps.appendChild(btn);
    });
    document.getElementById('player-section').scrollIntoView({ behavior: 'smooth' });
}

function filtrar(tipo) {
    navMenu.classList.remove('active');
    if(tipo === 'todos') return renderizar(conteudos);
    const filtrados = conteudos.filter(i => i.tipo === tipo);
    renderizar(filtrados);
}

mobileMenu.onclick = () => { navMenu.classList.toggle('active'); };
renderizar(conteudos);
