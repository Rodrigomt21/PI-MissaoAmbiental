document.getElementById('veja-mais').addEventListener('click', function() {
    var conteudoOculto = document.querySelector('.conteudo-oculto');

    if (conteudoOculto.style.display === 'none') {
        conteudoOculto.style.display = 'block';
        this.innerHTML = 'Veja Menos';
    } else {
        conteudoOculto.style.display = 'none';
        this.innerHTML = 'Veja Mais';
    }
});