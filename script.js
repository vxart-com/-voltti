// Lista de filmes (depois vamos alimentar isso com o Google Drive)
const meusFilmes = [
    {
        titulo: "Bem-vindo ao VOLTTI",
        capa: "https://via.placeholder.com/300x450?text=Capa+do+Filme",
        link: "#"
    }
];

const catalogo = document.getElementById('catalogo');

// Função para exibir os filmes na tela
function carregarFilmes() {
    catalogo.innerHTML = ""; // Limpa o texto de "carregando"
    
    meusFilmes.forEach(filme => {
        const html = `
            <div class="card">
                <img src="${filme.capa}" alt="${filme.titulo}">
                <h3>${filme.titulo}</h3>
            </div>
        `;
        catalogo.innerHTML += html;
    });
}

// Executa a função ao abrir o site
carregarFilmes();
