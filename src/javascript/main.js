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

// Validação dos campos

function validarCPF (cpf) {
    cpf = cpf.replace(/[^\d]+/g,''); //remove os caracteres não númericos
    if (cpf == '') return false; //verifica se o campo cpf está vazio

    if(cpf.length != 11 || /^(\d)\1+$/.test(cpf)) return false;

    var soma = 0
    var resto;

    for(var i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10)) ) return false;
    soma = 0;

    for (var i = 1; i <=10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false;

    return true;
}
