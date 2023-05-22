function validateForm() {
    var primeiroNome = document.getElementById("primeiro-nome").value;
    var segundoNome = document.getElementById("segundo-nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmar-senha").value;

    if (primeiroNome.length < 5 || primeiroNome.trim() === "") {
        alert("Primeiro nome inválido. Deve ter no mínimo 5 caracteres.");
        return false;
    }

    if (segundoNome.length < 5 || segundoNome.trim() === "") {
        alert("Segundo nome inválido. Deve ter no mínimo 5 caracteres.");
        return false;
    }

    if (email.length < 5 || email.trim() === "" || !email.includes("@")) {
        alert("Email inválido. Deve ter no mínimo 5 caracteres e conter o caractere '@'.");
        return false;
    }

    if (senha.length < 6 || senha.length > 8 || senha.trim() === "") {
        alert("Senha inválida. Deve ter no mínimo 6 caracteres e no máximo 8 caracteres.");
        return false;
    }

    if (senha !== confirmarSenha) {
        alert("A confirmação de senha não corresponde à senha digitada.");
        return false;
    }

    return true;
}