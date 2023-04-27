// Seleção dos eleentos
const form = document.getElementById("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");
const submitBtn = document.querySelector("button");
const progress = document.querySelector("#progress");

const modal = document.querySelector("#modal");
const modalContent = document.querySelector(".modal-content");
const closeButton = document.querySelector("#close-button");
const modalMessage = document.querySelector(".modal-message");




// Funções
function isEmailValid(email) {

    // regex que valida o email 
    const emailRegex = new RegExp(
        //usuario123@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

    if(emailRegex.test(email)) return true;
    
    return false;
}

function validatePassword(password, minDigits) {

    if (password.length >= minDigits) return true;
    
    return false;
}

// exibe modal
function showModal(msg) {
    modalMessage.textContent = msg;
    modal.style.display = "block";
}

// Eventos
form.addEventListener("submit", (e) => {
   
    e.preventDefault();

    // verifica se o nome está vazio
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        showModal('Por favor, preencha seu nome.');
        return;
    }

    // verifica se o email está preenchido e se é válido
    if(nameInput.value === "") {
        showModal('Por favor, preencha seu email.');
        return;
    }

    // verifica se a senha está preenchid e se é válido
    if(!validatePassword(passwordInput.value, 8)) {
        showModal('A senha precisa de no mínimo 8 digitos.');
        return;
    }

    // Verifica se a situação foi selecionada
    if(jobSelect.value === ""){
        showModal('Por favor, selecine a situação de trabalho.');
        return;
    }

  // Verifica se a mensagem está preenchida
    if(messageTextArea.value === ""){
    showModal('Por favor, escreva uma menagem.');
    return;
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o formulário.
    form.submit();

    progress.value = 0; // para envio assíncrono.
});

// Atualiza a barra de progresso ao preencher o fomulário
form.addEventListener("input", () => {
    
    const totalFields = form.elements.length - 1;
    let completedFields = 0;

    // conta o número de campos preenchidos
    for(let i = 0; i < totalFields; i++){

        if(form.elements[i].value) completedFields++;
    }


    // Atualiza o valor da barra de progresso
    progress.value = (completedFields / totalFields) * 100;
});

// Fecha Modal
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});