// BANCO DE DADOS DO VOLTTI
const baseDeDados = [
    {
        titulo: "A Morte Pede Carona (2007)",
        capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q",
        videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo",
        tipo: "filme"
    },
    {
        titulo: "Cão de Briga (2005)",
        capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0",
        videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH",
        tipo: "filme"
    }
];

const catalogo = document.getElementById('catalogo');
const modal = document.getElementById('videoPlayer');
const iframe = document.getElementById('videoFrame');

// Função para mostrar os filmes no site
function carregarConteudo(filtro = 'todos') {
    catalogo.innerHTML = "";
    
    baseDeDados.forEach(item => {
        if (filtro === 'todos' || item.tipo === filtro) {
            const card = document.createElement('div');
            card.classList.add('card');
            
            // Link que transforma o ID do Drive em imagem visível
            const urlCapa = `https://lh3.googleusercontent.com/u/0/d/${item.capaID}`;
            
            card.innerHTML = `
                <img src="${urlCapa}" alt="${item.titulo}" onerror="this.src='https://via.placeholder.com/300x450?text=Capa+Indisponível'">
                <div class="card-info">
                    <h3>${item.titulo}</h3>
                </div>
            `;
            
            card.onclick = () => abrirPlayer(item.videoID);
            catalogo.appendChild(card);
        }
    });
}

// Abre o player dentro do site
function abrirPlayer(id) {
    const urlVideo = `https://drive.google.com/file/d/${id}/preview`;
    iframe.src = urlVideo;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Trava o scroll do site ao assistir
}

// Fecha o player e para o vídeo
function fecharPlayer() {
    modal.style.display = "none";
    iframe.src = "";
    document.body.style.overflow = "auto";
}

// Fecha o player se clicar fora da tela do vídeo
window.onclick = function(event) {
    if (event.target == modal) {
        fecharPlayer();
    }
}

// Inicia o site carregando tudo
carregarConteudo();
