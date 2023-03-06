const paginaDeSlide = document.querySelector('.pagina__de__slides');
const primeiroBotaoProximo = document.querySelector('.primeiro__proximo');
const primeiroBotaoVoltar = document.querySelector('.voltar__1');
const segundoBotaoProximo = document.querySelector('.proximo__1');
const segundoBotaoVoltar = document.querySelector('.voltar__2');
const textoDeProgresso = document.querySelectorAll('.nome__etapa p');
const numeroDaEtapa = document.querySelectorAll('.numero__etapa span');
const botaoEnviar = document.querySelector('.submit');
const numeroEtapa = document.querySelectorAll('.nome__etapa .numero__etapa');
let atual = 1;

primeiroBotaoProximo.addEventListener('click', function (event) {
    event.preventDefault();
    paginaDeSlide.style.marginLeft = '-25%';
    numeroEtapa[atual - 1].classList.add('ativo');
    textoDeProgresso[atual - 1].classList.add('ativo');
    numeroDaEtapa[atual - 1].classList.add('ativo');
    atual += 1;
});

segundoBotaoProximo.addEventListener('click', function (event) {
    event.preventDefault();
    paginaDeSlide.style.marginLeft = '-50%';
    numeroEtapa[atual - 1].classList.add('ativo');
    textoDeProgresso[atual - 1].classList.add('ativo');
    numeroDaEtapa[atual - 1].classList.add('ativo');
    atual += 1;
});

botaoEnviar.addEventListener('click', function () {
    numeroEtapa[atual - 1].classList.add('ativo');
    textoDeProgresso[atual - 1].classList.add('ativo');
    numeroDaEtapa[atual - 1].classList.add('ativo');
    atual += 1;
    setTimeout(function () {
        alert('Seu formulário foi enviado com Sucesso!');
        location.reload();
    }, 800);
});

primeiroBotaoVoltar.addEventListener('click', function(event){
    event.preventDefault();
    paginaDeSlide.style.marginLeft = '0%';
    numeroEtapa[atual - 2].classList.remove('ativo');
    textoDeProgresso[atual - 2].classList.remove('ativo');
    numeroDaEtapa[atual - 2].classList.remove('ativo');
    atual -= 1
});

segundoBotaoVoltar.addEventListener('click', function(event){
    event.preventDefault();
    paginaDeSlide.style.marginLeft = '-25%';
    numeroEtapa[atual - 2].classList.remove('ativo');
    textoDeProgresso[atual - 2].classList.remove('ativo');
    numeroDaEtapa[atual - 2].classList.remove('ativo');
    atual -= 1
});


