var posicaoOriginal;

document.getElementById('veja-mais').addEventListener('click', function() {
    var conteudoOculto = document.querySelector('.conteudo-oculto');

    if (conteudoOculto.classList.contains('mostrar')) {
        conteudoOculto.classList.remove('mostrar');
        this.innerHTML = 'Veja Mais';

        // Rolar de volta para a posição original
        window.scrollTo(0, posicaoOriginal);
    } else {
        conteudoOculto.classList.add('mostrar');
        this.innerHTML = 'Veja Menos';

        // Armazenar a posição original antes de expandir o conteúdo
        posicaoOriginal = window.pageYOffset;
    }
});





