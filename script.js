<script>
function trocarAba(idAba, elemento) {
    // 1. Esconder todas as abas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });

    // 2. Mostrar a aba clicada
    document.getElementById(idAba).style.display = 'block';

    // 3. Mudar a cor do ícone no menu
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    elemento.classList.add('active');
}

// Lógica simples de busca
document.getElementById('searchInput')?.addEventListener('input', function(e) {
    let termo = e.target.value.toLowerCase();
    let resultados = document.getElementById('searchResult');
    
    if(termo.length > 2) {
        // Aqui depois vamos conectar com sua lista de filmes real
        resultados.innerHTML = `<p>A pesquisar por: ${termo}...</p>`;
    }
});
</script>
