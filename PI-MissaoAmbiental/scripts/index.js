var posicaoOriginal;

document.getElementById('veja-mais').addEventListener('click', function() {
    var conteudoOculto = document.querySelector('.conteudo-oculto');

    if (conteudoOculto.classList.contains('mostrar')) {
        conteudoOculto.classList.remove('mostrar');
        this.innerHTML = 'Veja Mais';

        window.scrollTo(0, posicaoOriginal);
    } else {
        conteudoOculto.classList.add('mostrar');
        this.innerHTML = 'Veja Menos';

        posicaoOriginal = window.pageYOffset;
    }
});





