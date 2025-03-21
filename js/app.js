document.addEventListener("DOMContentLoaded", function () {
    document.body.style.zoom = "50%";
});
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(index) {
    campos[index].style.border = '4px solid #DC2626';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if(campos[0].value.length < 8) 
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function emailValidate() {
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function clearForm() {

    let inputs = document.querySelectorAll("form input, form select");

    inputs.forEach(input => {
        if (!input.disabled) {
            if (input.type === "file") {
                input.value = "";
                let span = input.previousElementSibling.querySelector("span");
                if (span) span.textContent = "Clique aqui para selecionar o arquivo";
            } else if (input.type === "checkbox" || input.type === "radio") {
                input.checked = false;
            } else {
                input.value = "";
            }
        }
    });

    let select = document.getElementById("sex");
    if (select) select.selectedIndex = 0;

    window.location.href = "index.html";
}

function checkForm() {
    let name = document.getElementById("username");
    let date = document.getElementById("date");
    let cpf = document.getElementById("cpf");
    let sex = document.getElementById("sex");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let cep = document.getElementById("cep");
    let street = document.getElementById("street");
    let city = document.getElementById("city");
    let houseNumber = document.getElementById("houseNumber");
    let state = document.getElementById("state");

    if (!name.value.trim() || !date.value.trim() || !cpf.value.trim() || !sex.value.trim() || !email.value.trim() || !phone.value.trim()|| !cep.value.trim() || !street.value.trim() || !city.value.trim()|| !houseNumber.value.trim() || !state.value.trim()) {
        alert("Antes de prosseguir precisamos que você preencha todos os campos como solicitado.");
        return;
    } else {
        let agreeIsChecked = document.getElementById("agreeCheckBox");
    
        if (!agreeIsChecked.checked) {
            alert("Precisamos que concorde com os termos e condições para finalizarmos sua finalizarmos sua inscrição corretamente.");
            return;
        } else {
            alert("Um email foi enviado para realizar a verificação da conta, verifique a conta pelo link do email recebido e depois clique no ok para seguir.");
        }
    }
}