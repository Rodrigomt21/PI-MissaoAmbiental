document.getElementById('veja-mais').addEventListener('click', function() {
    var conteudoOculto = document.querySelector('.conteudo-oculto');

    if (conteudoOculto.classList.contains('mostrar')) {
        conteudoOculto.classList.remove('mostrar');
        this.innerHTML = 'Veja Mais';
    } else {
        conteudoOculto.classList.add('mostrar');
        this.innerHTML = 'Veja Menos';
    }
});