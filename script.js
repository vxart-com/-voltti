// Banco de dados do VOLTTI
const baseDeDados = [
    {
        titulo: "A Morte Pede Carona (2007)",
        // Pegamos o ID da sua capa e usamos o link de exportação direta do Google
        capa: "https://lh3.googleusercontent.com/d/13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q",
        videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo",
        tipo: "filme"
    }
];

const catalogo = document.getElementById('catalogo');
const modal = document.getElementById('videoPlayer');
const iframe = document.getElementById('videoFrame');

// Função para renderizar os filmes na tela
function carregarConteudo(filtro = 'todos') {
    catalogo.innerHTML = "";
    
    baseDeDados.forEach(item => {
        if (filtro === 'todos' || item.tipo === filtro) {
            const card = document.createElement('div');
            card.classList.add('card');
            
            // Estrutura do Card
            card.innerHTML = `
                <img src="${item.capa}" alt="${item.titulo}" onerror="this.src='https://via.placeholder.com/300x450?text=Carregando...'">
                <div class="card-info">
                    <h3>${item.titulo}</h3>
                </div>
            `;
            
            // Ação de clique para abrir o player
            card.onclick = () => abrirPlayer(item.videoID, item.tipo);
            catalogo.appendChild(card);
        }
    });
}

// Função para abrir o Player Modal
function abrirPlayer(id, tipo) {
    let urlFinal = "";
    
    if (tipo === "filme") {
        // Link de preview do Drive (mais estável para players)
        urlFinal = `https://drive.google.com/file/d/${id}/preview`;
    } else {
        urlFinal = id; // Para links externos de TV
    }

    iframe.src = urlFinal;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Trava o scroll da página atrás
}

// Função para fechar o Player
function fecharPlayer() {
    modal.style.display = "none";
    iframe.src = ""; // Mata o processo do vídeo
    document.body.style.overflow = "auto"; // Libera o scroll
}

// Fecha o player se clicar fora do vídeo
window.onclick = function(event) {
    if (event.target == modal) {
        fecharPlayer();
    }
}

// Inicia o site
carregarConteudo();
