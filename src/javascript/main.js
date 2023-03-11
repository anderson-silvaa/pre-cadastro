const paginaDeSlide = document.querySelector('.pagina__de__slides');
const primeiroBotaoProximo = document.querySelector('.primeiro__proximo');
const primeiroBotaoVoltar = document.querySelector('.voltar__1');
const segundoBotaoProximo = document.querySelector('.proximo__1');
const segundoBotaoVoltar = document.querySelector('.voltar__2');
const textoDeProgresso = document.querySelectorAll('.nome__etapa p');
const numeroDaEtapa = document.querySelectorAll('.numero__etapa span');
const botaoEnviar = document.querySelector('.submit');
const numeroEtapa = document.querySelectorAll('.nome__etapa .numero__etapa');
const formulario = document.querySelector('#form');
const inputNome = document.querySelector('#primeiroNome');
const inputSobrenome = document.querySelector('#sobrenome')
const inputCidade = document.querySelector('#cidade')
const inputBairro = document.querySelector('#bairro')
let inputCPF = document.querySelector('#cpf');
let atual = 1;

primeiroBotaoProximo.addEventListener('click', function (event) {
    event.preventDefault();
    if (validarCPF(inputCPF.value) == true && validarNome(inputNome.value) == true && validarNome(inputSobrenome.value) == true) {
        paginaDeSlide.style.marginLeft = '-25%';
        numeroEtapa[atual - 1].classList.add('ativo');
        textoDeProgresso[atual - 1].classList.add('ativo');
        numeroDaEtapa[atual - 1].classList.add('ativo');
        atual += 1;
    } if (validarNome(inputNome.value) == false) {
        alert('O campo nome é inválido')
    } if (validarNome(inputSobrenome.value) == false) {
        alert('O campo sobrenome é inválido')
    } if (validarCPF(inputCPF.value) == false) {
        alert('Cpf inválido')
    }
});

segundoBotaoProximo.addEventListener('click', function (event) {
    event.preventDefault();
    if (validarEndereco(inputCidade.value, inputBairro.value) == true)
        paginaDeSlide.style.marginLeft = '-50%';
    numeroEtapa[atual - 1].classList.add('ativo');
    textoDeProgresso[atual - 1].classList.add('ativo');
    numeroDaEtapa[atual - 1].classList.add('ativo');
    atual += 1;
    if (validarEndereco(inputCidade.value) == false) {
        alert('O campo cidade é inválido')
    } if (validarEndereco(inputBairro.value) == false) {
        alert('O campo bairro é inválido')
    }
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

primeiroBotaoVoltar.addEventListener('click', function (event) {
    event.preventDefault();
    paginaDeSlide.style.marginLeft = '0%';
    numeroEtapa[atual - 2].classList.remove('ativo');
    textoDeProgresso[atual - 2].classList.remove('ativo');
    numeroDaEtapa[atual - 2].classList.remove('ativo');
    atual -= 1
});

segundoBotaoVoltar.addEventListener('click', function (event) {
    event.preventDefault();
    paginaDeSlide.style.marginLeft = '-25%';
    numeroEtapa[atual - 2].classList.remove('ativo');
    textoDeProgresso[atual - 2].classList.remove('ativo');
    numeroDaEtapa[atual - 2].classList.remove('ativo');
    atual -= 1
});

// Validação dos campos

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); //remove os caracteres não númericos
    if (cpf == '') return false; //verifica se o campo cpf está vazio

    if (cpf.length != 11 || /^(\d)\1+$/.test(cpf)) return false;

    var soma = 0
    var resto;

    for (var i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;

    for (var i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;

    return true;
}

function validarNome(inputNome, inputSobrenome) {
    if (!inputNome || inputNome.length < 3 && !inputSobrenome || inputSobrenome < 3) {
        return false; // retorna false se o nome estiver vazio ou tiver menos de 3 caracteres
    }
    return true; // retorna true se o nome tiver 3 ou mais caracteres
}

function validarEndereco(inputCidade, inputBairro) {
    if (!inputCidade || inputCidade.length < 3 && !inputBairro || inputBairro < 3) {
        return false; // retorna false se o nome estiver vazio ou tiver menos de 3 caracteres
    }
    return true; // retorna true se o nome tiver 3 ou mais caracteres
}