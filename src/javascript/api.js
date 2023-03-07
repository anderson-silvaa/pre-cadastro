const formulario = document.querySelector('#form');



const enviarForm = (event) => {
    event.preventDefault();

    const primeiroNome = document.querySelector('#primeiroNome').value;
    const sobrenome = document.querySelector('#sobrenome').value;
    const cpf = document.querySelector('#cpf').value;
    const cidade = document.querySelector('#cidade').value;
    const bairro = document.querySelector('#bairro').value;
    const email = document.querySelector('#email').value;
    const telefone = document.querySelector('#telefone').value;

    fetch('https://api.sheetmonkey.io/form/kgzzX31iXfBSwgWbc3g5XZ', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({primeiroNome, sobrenome, cpf, cidade, bairro, email, telefone})
    })
}

formulario.addEventListener('submit', enviarForm);
