(function () {
    var form = document.getElementById("myForm");
    var primeiroNomeInput = document.getElementById("primeiro-nome");
    var segundoNomeInput = document.getElementById("segundo-nome");
    var emailInput = document.getElementById("email");
    var senhaInput = document.getElementById("senha");
    var confirmarSenhaInput = document.getElementById("confirmar-senha");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      validateForm();
    });
  
    form.addEventListener("input", function (event) {
      var target = event.target;
      if (target.tagName.toLowerCase() === "input") {
        removeError(target);
      }
    });
  
    function validateForm() {
      var primeiroNome = primeiroNomeInput.value;
      var segundoNome = segundoNomeInput.value;
      var email = emailInput.value;
      var senha = senhaInput.value;
      var confirmarSenha = confirmarSenhaInput.value;
  
      var isValid = true;
  
      if (!isInputValid(primeiroNome, 5) || primeiroNome.trim() === "") {
        showError(primeiroNomeInput, "Primeiro nome inválido. Deve ter no mínimo 5 caracteres.");
        isValid = false;
      }
  
      if (!isInputValid(segundoNome, 5) || segundoNome.trim() === "") {
        showError(segundoNomeInput, "Segundo nome inválido. Deve ter no mínimo 5 caracteres.");
        isValid = false;
      }
  
      if (!isInputValid(email, 5) || email.trim() === "" || !email.includes("@")) {
        showError(emailInput, "Email inválido. Deve ter no mínimo 5 caracteres e conter o caractere '@'.");
        isValid = false;
      }
  
      if (!isInputValid(senha, 6, 8) || senha.trim() === "") {
        showError(senhaInput, "Senha inválida. Deve ter no mínimo 6 caracteres e no máximo 8 caracteres.");
        isValid = false;
      }
  
      if (senha !== confirmarSenha) {
        showError(confirmarSenhaInput, "A confirmação de senha não corresponde à senha digitada.");
        isValid = false;
      }
  
      if (isValid) {
        form.submit();
      }
    }
  
    function isInputValid(value, minLength, maxLength) {
      value = value.trim();
      if (maxLength !== undefined) {
        return value.length >= minLength && value.length <= maxLength;
      }
      return value.length >= minLength;
    }
  
    function showError(inputElement, errorMessage) {
      inputElement.classList.add("error");
  
      var errorElementId = inputElement.id + "-error";
      var errorElement = document.getElementById(errorElementId);
  
      if (errorElement) {
        errorElement.textContent = errorMessage;
      }
    }
  
    function removeError(inputElement) {
      inputElement.classList.remove("error");
  
      var errorElementId = inputElement.id + "-error";
      var errorElement = document.getElementById(errorElementId);
  
      if (errorElement) {
        errorElement.textContent = "";
      }
    }
  })();
  