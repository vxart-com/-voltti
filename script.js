const baseDeDados = [
    { titulo: "A Morte Pede Carona (2007)", capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q", videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo", tipo: "filme", genero: "Terror", sinopse: "Uma viagem vira pesadelo quando carona perigosa entra no carro." },
    { titulo: "Cão de Briga (2005)", capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0", videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH", tipo: "filme", genero: "Ação", sinopse: "Um homem criado como um escravo de luta busca sua liberdade." },
    { titulo: "O Massacre da Serra Elétrica", capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN", videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J", tipo: "filme", genero: "Terror", sinopse: "As origens do maníaco Leatherface e sua família canibal no Texas." },
    { titulo: "Sem Saída", capaID: "1rZhZrrh5d8LXqBtcI5MCBMJ5gHYbyFPH", videoID: "1pH_Hj9TxMI4rz3fV5xyF22cLTNqsyW8T", tipo: "filme", genero: "Suspense", sinopse: "Um casal isolado é aterrorizado por uma gangue sádica." },
    { titulo: "Efeito Colateral", capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B", videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp", tipo: "filme", genero: "Ação", sinopse: "Um bombeiro busca vingança contra terroristas." },
    { titulo: "Rambo 1", capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s", videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_", tipo: "filme", genero: "Ação", sinopse: "Veterano do Vietnã usa guerrilha contra xerife autoritário." },
    { titulo: "Os Vingadores (2012)", capaID: "17wlZ3X3JNtwvve-iUhDErUcS4hxlfozU", videoID: "1lfiSg14g7uFfMFGPGjlFJA3tAVrKqMiY", tipo: "filme", genero: "Ação", sinopse: "Heróis se unem para parar Loki e seu exército alienígena." },
    { titulo: "Vingadores: Era de Ultron", capaID: "1NR94XINMjQI5RAq6GAB5rrMog-3Uojzc", videoID: "1-C0vOq5Xp4gDmlCpmitbGNNLf_D4y-ne", tipo: "filme", genero: "Ação", sinopse: "A equipe deve deter uma inteligência artificial que quer extinguir a raça humana." },
    { titulo: "Vingadores: Guerra Infinita", capaID: "1aEaxbcYemiRC25xrXMgGD5-6vfSKCHJK", videoID: "1sQ3RZ4-mJ3n5pt8TW16R0E1FO5NuDfzs", tipo: "filme", genero: "Ação", sinopse: "Thanos busca as joias do infinito para dizimar metade do universo." },
    { titulo: "Vingadores: Ultimato", capaID: "1cmosS5uvNBgppGGkO4uLbytXyDu4WXmo", videoID: "1hpPF4WTbbjYNjLigkh0GTtLYviUR3s0s", tipo: "filme", genero: "Ação", sinopse: "O confronto final para desfazer o caos causado por Thanos." }
];

const catalogo = document.getElementById('catalogo');
const detModal = document.getElementById('detalhesModal');
const vidModal = document.getElementById('videoPlayer');
const iframe = document.getElementById('videoFrame');

function carregarConteudo(filtro = 'todos') {
    catalogo.innerHTML = "";
    baseDeDados.forEach(item => {
        if (filtro === 'todos' || item.tipo === filtro) renderizarCard(item);
    });
}

function filtrarPorGenero(genero) {
    catalogo.innerHTML = "";
    baseDeDados.forEach(item => {
        if (genero === 'todos' || item.genero === genero) renderizarCard(item);
    });
}

function renderizarCard(item) {
    const card = document.createElement('div');
    card.classList.add('card');
    const urlCapa = `https://lh3.googleusercontent.com/d/$${item.capaID}`;
    card.innerHTML = `<img src="${urlCapa}"><h3>${item.titulo}</h3>`;
    card.onclick = () => abrirDetalhes(item);
    catalogo.appendChild(card);
}

function abrirDetalhes(item) {
    document.getElementById('detalheCapa').src = `https://lh3.googleusercontent.com/d/$${item.capaID}`;
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
        if (item.titulo.toLowerCase().includes(termo)) renderizarCard(item);
    });
}

carregarConteudo();
