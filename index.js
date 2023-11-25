const form = document.querySelector('#form');
const erroEmail = document.getElementById('errorEmail');
const erroSenha = document.getElementById('errorSenha');
const loading = document.getElementById('loading');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = form.querySelector('#email').value;
    const senha = form.querySelector('#senha').value;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (regexEmail.test(email) && /\d/.test(senha)) {
        enviarBtn.remove();
        erroEmail.remove();
        erroSenha.remove();
        
        loading.classList.add('loading-show');
            setTimeout(function() {
                window.location.href = 'https://lucasshira.github.io/snake-game/'
            }, 2000);
    } else {

        if (email === ''){
            erroEmail.innerHTML = 'Insira um endereço de e-mail.';
        } else if (!regexEmail.test(email)){
            erroEmail.innerHTML = 'Insira um e-mail válido.';
        } else {
            erroEmail.remove();
        }

        if (senha === ''){
            erroSenha.innerHTML = 'Insira uma senha.';
        } else if (!/\d/.test(senha)) {
            erroSenha.innerHTML = 'A senha deve conter pelo menos um número.';
        } else {
            erroSenha.remove();
        }
    }
});
