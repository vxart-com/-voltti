const baseDeDados = [
    {
        titulo: "A Morte Pede Carona (2007)",
        capa: "https://lh3.googleusercontent.com/d/13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q",
        videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo",
        tipo: "filme"
    },
    {
        titulo: "SBT (Ao Vivo)",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/SBT_logo.svg/1200px-SBT_logo.svg.png",
        videoID: "https://www.sbt.com.br/ao-vivo", // Exemplo de TV
        tipo: "tv"
    }
];

const catalogo = document.getElementById('catalogo');
const modal = document.getElementById('videoPlayer');
const iframe = document.getElementById('videoFrame');

function carregarConteudo(filtro = 'todos') {
    catalogo.innerHTML = "";
    
    baseDeDados.forEach(item => {
        if (filtro === 'todos' || item.tipo === filtro) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${item.capa}" alt="${item.titulo}" onerror="this.src='https://via.placeholder.com/300x450?text=Sem+Capa'">
                <h3>${item.titulo}</h3>
            `;
            
            card.onclick = () => abrirPlayer(item.videoID, item.tipo);
            catalogo.appendChild(card);
        }
    });
}

function abrirPlayer(id, tipo) {
    let urlFinal = "";
    
    if (tipo === "filme") {
        urlFinal = `https://drive.google.com/file/d/${id}/preview`;
    } else {
        urlFinal = id; // Para links de TV aberta
    }

    iframe.src = urlFinal;
    modal.style.display = "block";
}

function fecharPlayer() {
    modal.style.display = "none";
    iframe.src = "";
}

// Inicia o site mostrando tudo
carregarConteudo();
