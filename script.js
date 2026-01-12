const baseDeDados = [
    {
        titulo: "A Morte Pede Carona (2007)",
        capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q",
        videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo",
        tipo: "filme",
        sinopse: "Uma viagem tranquila se transforma em um pesadelo sangrento quando dois estudantes dão carona a um estranho perigoso em uma estrada deserta."
    },
    {
        titulo: "Cão de Briga (2005)",
        capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0",
        videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH",
        tipo: "filme",
        sinopse: "Criado como um escravo e treinado para lutar como um cão, um homem descobre sua humanidade através do amor e da música."
    },
    {
        titulo: "O Massacre da Serra Elétrica (2006)",
        capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN",
        videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J",
        tipo: "filme",
        sinopse: "O prelúdio da clássica história de horror revela as origens do maníaco Leatherface e de sua família canibal no Texas."
    },
    {
        titulo: "Sem Saída",
        capaID: "1rZhZrrh5d8LXqBtcI5MCBMJ5gHYbyFPH",
        videoID: "1pH_Hj9TxMI4rz3fV5xyF22cLTNqsyW8T",
        tipo: "filme",
        sinopse: "Um final de semana romântico em um lago isolado se torna uma luta brutal pela sobrevivência contra uma gangue de adolescentes sádicos."
    },
    {
        titulo: "Efeito Colateral",
        capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B",
        videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp",
        tipo: "filme",
        sinopse: "Um bombeiro busca vingança contra o terrorista que matou sua família em um atentado a bomba em Los Angeles."
    },
    {
        titulo: "Rambo 1",
        capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s",
        videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_",
        tipo: "filme",
        sinopse: "Um veterano da Guerra do Vietnã usa suas habilidades de guerrilha para sobreviver à perseguição de um xerife autoritário."
    }
];

const catalogo = document.getElementById('catalogo');
const detModal = document.getElementById('detalhesModal');
const vidModal = document.getElementById('videoPlayer');
const iframe = document.getElementById('videoFrame');

function carregarConteudo(filtro = 'todos') {
    catalogo.innerHTML = "";
    baseDeDados.forEach(item => {
        if (filtro === 'todos' || item.tipo === filtro) {
            const card = document.createElement('div');
            card.classList.add('card');
            const urlCapa = `https://lh3.googleusercontent.com/d/${item.capaID}`;
            card.innerHTML = `<img src="${urlCapa}"><h3>${item.titulo}</h3>`;
            card.onclick = () => abrirDetalhes(item);
            catalogo.appendChild(card);
        }
    });
}

function abrirDetalhes(item) {
    document.getElementById('detalheCapa').src = `https://lh3.googleusercontent.com/d/${item.capaID}`;
    document.getElementById('detalheTitulo').innerText = item.titulo;
    document.getElementById('detalheSinopse').innerText = item.sinopse;
    document.getElementById('btnPlay').onclick = () => abrirPlayer(item.videoID);
    detModal.style.display = "block";
}

function abrirPlayer(id) {
    detModal.style.display = "none";
    iframe.src = `https://drive.google.com/file/d/${id}/preview`;
    vidModal.style.display = "block";
}

function fecharDetalhes() { detModal.style.display = "none"; }
function fecharPlayer() { vidModal.style.display = "none"; iframe.src = ""; }

function buscarFilme() {
    const termo = document.getElementById('searchInput').value.toLowerCase();
    catalogo.innerHTML = "";
    baseDeDados.forEach(item => {
        if (item.titulo.toLowerCase().includes(termo)) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<img src="https://lh3.googleusercontent.com/d/${item.capaID}"><h3>${item.titulo}</h3>`;
            card.onclick = () => abrirDetalhes(item);
            catalogo.appendChild(card);
        }
    });
}

carregarConteudo();
