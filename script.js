// Lista de Filmes, Séries e Canais
const baseDeDados = [
    {
        titulo: "A Morte Pede Carona (2007)",
        capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q",
        videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo",
        categoria: "filme"
    }
];

const catalogo = document.getElementById('catalogo');

function carregarConteudo() {
    catalogo.innerHTML = ""; 

    baseDeDados.forEach(item => {
        // Link direto para a imagem da capa
        const urlCapa = `https://lh3.googleusercontent.com/u/0/d/${item.capaID}`;
        
        // Link para o player do Google Drive
        const urlVideo = `https://drive.google.com/file/d/${item.videoID}/preview`;

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${urlCapa}" alt="${item.titulo}" onerror="this.src='https://via.placeholder.com/300x450?text=Erro+na+Capa'">
            <div class="filme-info">
                <h3>${item.titulo}</h3>
            </div>
        `;

        // Ao clicar, abre o vídeo em uma nova aba (por enquanto)
        card.onclick = () => {
            window.open(urlVideo, '_blank');
        };

        catalogo.appendChild(card);
    });
}

// Inicia o site
carregarConteudo();
