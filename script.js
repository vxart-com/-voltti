const conteudos = [
    // --- SÉRIES & DORAMAS ---
    { 
        titulo: "La Casa de Papel (2017)", 
        capaID: "10ZcHAcPOC0TmNU1qBi31LD7cZoNNdj6G", 
        tipo: "serie", 
        genero: "Séries",
        episodios: [
            { nome: "T1: Episódio 01", videoID: "1JtZ4dIdU3svU8lpPnAt5Y-SMb41vhX4D" }
        ]
    },
    { 
        titulo: "A Má Mãe (2023)", 
        capaID: "1_NY-gbUM21gbOdsBf56zVjNtm8KUDYoi", 
        tipo: "dorama", 
        genero: "Dorama",
        episodios: [
            { nome: "Episódio 01", videoID: "1_tOC-zRf2hIDxrmZiHd3gpImrj0yIWzV" }
        ]
    },

    // --- MARVEL & DC ---
    { titulo: "Homem-Aranha (2002)", capaID: "1AGL2UODMNhyDgcTLfUlrnIhSVtk5lj9g", videoID: "14_rg35NNhW2-j1Dd-wvsIEAw7Xne4qgW", tipo: "filme", genero: "Marvel" },
    { titulo: "Homem-Aranha 2 (2004)", capaID: "1Gl_6MaoAAwFbWjxoZN0U-fG6xJ9w2RIa", videoID: "1zyICfFjX6e1U4hbK0K3B46g0DvDn00qx", tipo: "filme", genero: "Marvel" },
    { titulo: "Homem-Aranha 3 (2007)", capaID: "1FGqIrabwUGZGC5WXgw-Y3Njg7lcS2Ppe", videoID: "159I7b5jsB88ijAAxNyV-ZBlF8VWIOGkm", tipo: "filme", genero: "Marvel" },
    { titulo: "Os Vingadores (2012)", capaID: "17wlZ3X3JNtwve-iUhDErUcS4hxlfozU", videoID: "1lfiSg14g7uFfMFGPGjlFJA3tAVrKqMiY", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Era de Ultron (2015)", capaID: "1NR94XINMjQI5RAq6GAB5rrMog-3Uojzc", videoID: "1-C0vOq5Xp4gDmlCpmitbGNNLf_D4y-ne", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Guerra Infinita (2018)", capaID: "1aEaxbcYemiRC25xrXMgGD5-6vfSKCHJK", videoID: "1sQ3RZ4-mJ3n5pt8TW16R0E1FO5NuDfzs", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Ultimato (2019)", capaID: "1cmosS5uvNBgppGGkO4uLbytXyDu4WXmo", videoID: "1hpPF4WTbbjYNjLigkh0GTtLYviUR3s0s", tipo: "filme", genero: "Marvel" },
    { titulo: "Guardiões da Galáxia 3 (2023)", capaID: "1jdPGdCiBD_DtezlZsX7Tt5Vw4V9VOwed", videoID: "1W9JyabNWp03s4TK9a61fzd_ZHSgWIVLx", tipo: "filme", genero: "Marvel" },
    { titulo: "Batman (2022)", capaID: "1Vy1puloGjrUYpu7VxXayjwmcRG4-pmGE", videoID: "1wWriwVp7tvYyd41qeGeAxD1N6oVpSajk", tipo: "filme", genero: "DC" },

    // --- COMÉDIA ---
    { titulo: "Gente Grande (2010)", capaID: "1yy_A_OREbP01NwK_P9-3cpdJMnjslb_j", videoID: "19px6-CfTTjn7dPOINSgBcc0Y53MzmHO9", tipo: "filme", genero: "Comédia" },
    { titulo: "Gente Grande 2 (2013)", capaID: "1mXb9TqIXJ6NmTMPXpYsqIGjbfMXcl2DD", videoID: "15ZaZatHBEkvuAjKYSoTLJRsbX3HPBKx5", tipo: "filme", genero: "Comédia" },
    { titulo: "Uma Noite no Museu (2006)", capaID: "12DPh9Ck0vDK0y-wsghKgO0V5ALOjPERz", videoID: "1CwPlyAQhamfkEp-JN3yeQIgPcPvnszRg", tipo: "filme", genero: "Comédia" },
    { titulo: "Uma Noite no Museu 2 (2009)", capaID: "1ta4H5bAOZ1932KTsbwqxDNRIDdhahAOX", videoID: "1Yx_A9Nqh4oqWyYKrOYLD4QVGDe8HuY5w", tipo: "filme", genero: "Comédia" },
    { titulo: "Uma Noite no Museu 3 (2014)", capaID: "1tYDi0LU-9-YwAklLGvZ9iDqgFwrIQhKc", videoID: "1jJhpl29jNIQaZQ0w9h9jNFJIiR1dOMsc", tipo: "filme", genero: "Comédia" },
    { titulo: "As Branquelas (2004)", capaID: "1IeImEkGmnVVKsVQMH9ZaEu3SfGPR1Hhm", videoID: "1PBlfX6f8trvtxgLqo4G4kN8LiOZ0lob1", tipo: "filme", genero: "Comédia" },
    { titulo: "Vovó... Zona (2000)", capaID: "1e3pW_ZUznvwZFhS_K1ciTm-8jcUmf8oB", videoID: "1E-SZy85PhQVJNyHvaEXIle7EU4ZbF0Is", tipo: "filme", genero: "Comédia" },

    // --- AÇÃO ---
    { titulo: "Maze Runner 1 (2014)", capaID: "1QVTx5Oq-Jq9xQbJv-eIHVvNDzhFDS_HP", videoID: "10JiLPtB8sCbqmRYAtfM6Vo1FaER20Nie", tipo: "filme", genero: "Ação" },
    { titulo: "Maze Runner 2 (2015)", capaID: "1Tw-uyztkyNG7o8BxTP8zh8WqkCCBHaYp", videoID: "1K_wAhYMGm6-BSpQL0CSX3-hmXkrPCQeW", tipo: "filme", genero: "Ação" },
    { titulo: "Maze Runner 3 (2018)", capaID: "1DHD2SLdwB7GwpkPDKRZm29kYflvsi-KJ", videoID: "1lX4uC9A5zRhIyMcmMK6HLdUNnJTv2gJL", tipo: "filme", genero: "Ação" },
    { titulo: "Cão de Briga (2005)", capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0", videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH", tipo: "filme", genero: "Ação" },
    { titulo: "Rambo 1 (1982)", capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s", videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_", tipo: "filme", genero: "Ação" },
    { titulo: "Sr. e Sra. Smith (2005)", capaID: "1-4cdytmAMaCGOW0UfSsLhXHcvLph49nK", videoID: "1nC3JSFyGd4uLaaUaDBZcyDRSj0Yglcak", tipo: "filme", genero: "Ação" },
    { titulo: "Efeito Colateral (2002)", capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B", videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp", tipo: "filme", genero: "Ação" },

    // --- FICÇÃO ---
    { titulo: "Círculo de Fogo (2013)", capaID: "1d8Ry-4wvhPXzJwZmzjmOGjFLv7izjFeV", videoID: "1f3M4OfxyMCW-6B1dEFFZWCwIc4y9qkz1", tipo: "filme", genero: "Ficção" },
    { titulo: "Círculo de Fogo 2 (2018)", capaID: "1J6Vxek_zwy6qult3bcFsXTXF9PxHnC8Y", videoID: "1FxnuMp6GFXBk8VjNK6ZL_l3jCVQlTIn6", tipo: "filme", genero: "Ficção" },
    { titulo: "Ghostbusters (2024)", capaID: "1OnhMByoRobT59CAlg7dKyUFNyuTRFmMq", videoID: "1vwFVDp4Dy9sDYt3IIE2FFNFlhxquke_3", tipo: "filme", genero: "Ficção" },
    { titulo: "Divergente (2014)", capaID: "1HgbFXLvcaueu3CYg5QoKJ4snUJrteqWm", videoID: "1R4870Drhcd_RMLtpeiOcXE3NkvKN21Sb", tipo: "filme", genero: "Ficção" },
    { titulo: "Insurgente (2015)", capaID: "1cASAmTsjz6DFy7oPhWnwubPceJX7Fj8c", videoID: "1O12xtSQ8co35B8d-FFL6aqlMeNzBwP_L", tipo: "filme", genero: "Ficção" },
    { titulo: "De Volta Para O Futuro (1985)", capaID: "1ywJfcead5moOJcZwvZnpIydolmoja0dg", videoID: "1zlj4HUOI9VlUJXAvycIop4NEMyIVswwn", tipo: "filme", genero: "Ficção" },
    { titulo: "De Volta Para O Futuro 2 (1989)", capaID: "1eZzvuIK_JoyEXd0U7OZ1pfDfgYO5KMcW", videoID: "1lorWd0OtE1VLttH1xTS7-vtq9R3QZl2u", tipo: "filme", genero: "Ficção" },

    // --- DRAMA ---
    { titulo: "A Culpa é das Estrelas (2014)", capaID: "1xkA2xCy76G8P0O7vEt4lBkeU9DklDak1", videoID: "1dwni5OTZmAo_HtdbT3iJBiYt3ka3xL95", tipo: "filme", genero: "Drama" },
    { titulo: "O Menino do Pijama Listrado (2008)", capaID: "1RSoG6tRL3cegXOz7-o2-GUSstpZjDiP0", videoID: "1hgv7uIupbJIcsiQoTq0_De_05Erd8Ple", tipo: "filme", genero: "Drama" },
    { titulo: "A 5 Passos de Você (2019)", capaID: "1Yvh4YJ5MgXqOQkT2dA4QpZ7-9G8ZSDTX", videoID: "1zbGDdhY83bEcAn7bdYmt4WlQgKFgQbfj", tipo: "filme", genero: "Drama" },
    { titulo: "A Vida Depois (2021)", capaID: "1td-M-4A2NwidJcYnrOXrpMrU4UF0WCzE", videoID: "1jY807j1irBq8nBr4cJCi_hWWadhIPtXU", tipo: "filme", genero: "Drama" },

    // --- TERROR ---
    { titulo: "Fale Comigo (2023)", capaID: "1p2lUzOnne2BNu1u0q1d-EhxPjCApsR5Q", videoID: "1Votr_rDT47o3I0S2L0Q27NODiNZV3wou", tipo: "filme", genero: "Terror" },
    { titulo: "Resident Evil 2 (2004)", capaID: "1UxZ1YcXDTr4z5WJDniBlzI3DC6JpLWFo", videoID: "1deLjAdjbblDb40gTzd7KA0gPSHsXfWQr", tipo: "filme", genero: "Terror" },
    { titulo: "O Massacre da Serra Elétrica (2003)", capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN", videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J", tipo: "filme", genero: "Terror" },
    { titulo: "A Morte Pede Carona (2007)", capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q", videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo", tipo: "filme", genero: "Terror" },

    // --- ROMANCE & SUSPENSE ---
    { titulo: "Crepúsculo: Amanhecer (2011)", capaID: "1Dh-Rr4GX0SF775MM1nwXjY8HP7fmoWeK", videoID: "1ja1P_ckNanuacbCZEb3AdtKygfB_mKA9", tipo: "filme", genero: "Romance" },
    { titulo: "After (2019)", capaID: "1SM2PN1hPWL0Z_mQRFTVvMoPBwtqD9rtB", videoID: "1RZE1S_UCi9DA-Q-9DZIKTyQmuBNSPHQ_", tipo: "filme", genero: "Romance" },
    { titulo: "After 2 (2020)", capaID: "1CROr0ySxN7qjeMXr70nFEdqxG_XCelsz", videoID: "1WL6DAD7y0qJz7gU2Tri1DLgk7Dbhimus", tipo: "filme", genero: "Romance" },
    { titulo: "After 3 (2021)", capaID: "1Z7TTYmECxz9QDotu3fRfOiQhsOO8MFjx", videoID: "1TNmCJVNQCEUChOtZ69Ono4hsD61PUGl4", tipo: "filme", genero: "Romance" },
    { titulo: "Sem Saída (2008)", capaID: "1rZhZrrh5d8LXqBtcI5MCBMJ5gHYbyFPH", videoID: "1pH_Hj9TxMI4rz3fV5xyF22cLTNqsyW8T", tipo: "filme", genero: "Suspense" },
    { titulo: "Vigiados (2020)", capaID: "18WxrSzD-ilSbtqF3ZCJ0Pumw1PsEbIGG", videoID: "1szU70220U5BeAKrq3nKQJfXEUSiE3Uhb", tipo: "filme", genero: "Suspense" },

    // --- INFANTIL ---
    { titulo: "Os Incríveis 2 (2018)", capaID: "1e6Bl-HEJo4UnsJyBwqX0YfHYlnJZtwXd", videoID: "1KY21irLfkWynX3yY0RlnGG48helhCPKX", tipo: "filme", genero: "Infantil" }
];

const grid = document.getElementById('movie-grid');
const modal = document.getElementById('player-modal');
const player = document.getElementById('main-player');
const videoTitle = document.getElementById('video-title');
const listaEpsContainer = document.getElementById('lista-eps');

function darPlay(id, titulo) {
    player.src = "https://drive.google.com/file/d/" + id + "/preview";
    videoTitle.innerText = titulo;
    modal.style.display = "flex";
    if (listaEpsContainer) listaEpsContainer.style.display = "none";
    document.body.style.overflow = "hidden";
}

function fecharPlayer() {
    player.src = "";
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function validarChave() {
    const chave = "VOLTTI5";
    if (localStorage.getItem("voltti_chave") === chave) return true;
    const senha = prompt("Chave:");
    if (senha === chave) { localStorage.setItem("voltti_chave", chave); return true; }
    alert("Incorreta!"); return false;
}

function renderizar(lista) {
    grid.innerHTML = "";
    const generos = [...new Set(lista.map(item => item.genero))];
    generos.forEach(gen => {
        const secao = document.createElement('div');
        secao.className = 'genero-secao';
        secao.innerHTML = `<div class="genero-titulo">${gen}</div><div class="genero-linha"></div>`;
        const linha = secao.querySelector('.genero-linha');
        lista.filter(i => i.genero === gen).forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img src="https://drive.google.com/thumbnail?id=${item.capaID}"><p>${item.titulo}</p>`;
            card.onclick = () => { 
                if(validarChave()) { 
                    if(item.episodios) { 
                        abrirMenuSerie(item); 
                    } else { 
                        darPlay(item.videoID, item.titulo); 
                    } 
                } 
            };
            linha.appendChild(card);
        });
        grid.appendChild(secao);
    });
}

function abrirMenuSerie(serie) {
    videoTitle.innerText = serie.titulo;
    player.src = "";
    modal.style.display = "flex";
    listaEpsContainer.style.display = "flex";
    listaEpsContainer.innerHTML = `<h3 style="width:100%; padding:10px; font-size:14px;">Episódios:</h3>`;
    serie.episodios.forEach(ep => {
        const btn = document.createElement('button');
        btn.innerText = ep.nome; btn.className = "btn-episodio";
        btn.onclick = () => darPlay(ep.videoID, serie.titulo + " - " + ep.nome);
        listaEpsContainer.appendChild(btn);
    });
}

function executarBusca() {
    const termo = document.getElementById('inputBusca').value.toLowerCase();
    renderizar(conteudos.filter(i => i.titulo.toLowerCase().includes(termo) || i.genero.toLowerCase().includes(termo)));
}

renderizar(conteudos);