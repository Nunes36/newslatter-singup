const form = document.querySelector('#form')
const validaEmail = document.querySelector('#email')
const mensagemErro = document.querySelector('#mensagem_erro')
const button = document.querySelector('#button')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(validaEmail.value === "" || isEmailValid(validaEmail.value)) {
        mensagemErro.innerHTML = "Por favor, preencha seu email"
        return;
    }else {
        window.location = "http://127.0.0.1:5500/obrigado.html"
    }

})

//validação email 
function isEmailValid(email) {
    const emailRegex = new RegExp (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }
    return false;
    
}
