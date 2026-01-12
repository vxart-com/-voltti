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
    },
    {
        titulo: "O Massacre da Serra Elétrica (2006)",
        capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN",
        videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J",
        tipo: "filme"
    },
    {
        titulo: "Sem Saída",
        capaID: "1rZhZrrh5d8LXqBtcI5MCBMJ5gHYbyFPH",
        videoID: "1pH_Hj9TxMI4rz3fV5xyF22cLTNqsyW8T",
        tipo: "filme"
    },
    {
        titulo: "Efeito Colateral",
        capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B",
        videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp",
        tipo: "filme"
    },
    {
        titulo: "Rambo 1",
        capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s",
        videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_",
        tipo: "filme"
    },
    {
        titulo: "SBT (Ao Vivo)",
        capaID: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/SBT_logo.svg/1200px-SBT_logo.svg.png",
        videoID: "https://www.youtube.com/embed/live_stream?channel=UC5mS6S_H63XzV9z5F0uS7_A", 
        tipo: "tv"
    },
    {
        titulo: "CNN Brasil (Ao Vivo)",
        capaID: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/CNN_Brasil_logo.svg/1200px-CNN_Brasil_logo.svg.png",
        videoID: "https://www.youtube.com/embed/live_stream?channel=UC7H_YlSAtGv33V3p68X-C-Q", 
        tipo: "tv"
    }
];

const catalogo = document.getElementById('catalogo');
const modal = document.getElementById('videoPlayer');
const iframe = document.getElementById('videoFrame');

// Função para renderizar o conteúdo
function carregarConteudo(filtro = 'todos') {
    catalogo.innerHTML = "";
    
    baseDeDados.forEach(item => {
        if (filtro === 'todos' || item.tipo === filtro) {
            const card = document.createElement('div');
            card.classList.add('card');
            
            // Lógica para carregar imagem do Drive ou link externo
            const urlCapa = item.capaID.startsWith('http') 
                ? item.capaID 
                : `https://lh3.googleusercontent.com/u/0/d/${item.capaID}`;
            
            card.innerHTML = `
                <img src="${urlCapa}" alt="${item.titulo}" onerror="this.src='https://via.placeholder.com/300x450?text=VOLTTI'">
                <h3>${item.titulo}</h3>
            `;
            
            card.onclick = () => abrirPlayer(item.videoID, item.tipo);
            catalogo.appendChild(card);
        }
    });
}

// Player Modal
function abrirPlayer(id, tipo) {
    let urlFinal = "";
    if (tipo === "filme") {
        urlFinal = `https://drive.google.com/file/d/${id}/preview`;
    } else {
        urlFinal = id;
    }

    iframe.src = urlFinal;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function fecharPlayer() {
    modal.style.display = "none";
    iframe.src = "";
    document.body.style.overflow = "auto";
}

window.onclick = (event) => { if (event.target == modal) fecharPlayer(); }

carregarConteudo();
