const form = document.querySelector('#form');
let preencher = document.getElementById('espaco');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = form.querySelector('#email').value; // Use 'form' para encontrar os elementos dentro do formulário
    const senha = form.querySelector('#senha').value;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (regexEmail.test(email) && /\d/.test(senha)) {
        preencher.innerHTML = 'Acesso permitido!';
            setTimeout(function() {
                window.location.href = 'https://lucasshira.github.io/snake-game/'
            }, 3000);
    } else if(email === '' && senha === ''){
        preencher.innerHTML = 'Insira um endereço de e-mail e senha.';
    } else if(email !== '' && senha === ''){
        preencher.innerHTML = 'Insira uma senha.';
    } else if(email === '' && senha !== ''){
        preencher.innerHTML = 'Insira um endereço de e-mail.';
    } else {
        preencher.innerHTML = 'Preencha os dados com e-mail e senha válidos.'
    }
});