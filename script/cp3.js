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

        primeiroNomeInput.addEventListener("input", function () {
            removeError(primeiroNomeInput);
        });

        segundoNomeInput.addEventListener("input", function () {
            removeError(segundoNomeInput);
        });

        emailInput.addEventListener("input", function () {
            removeError(emailInput);
        });

        senhaInput.addEventListener("input", function () {
            removeError(senhaInput);
        });

        confirmarSenhaInput.addEventListener("input", function () {
            removeError(confirmarSenhaInput);
        });

        function validateForm() {
            var primeiroNome = primeiroNomeInput.value;
            var segundoNome = segundoNomeInput.value;
            var email = emailInput.value;
            var senha = senhaInput.value;
            var confirmarSenha = confirmarSenhaInput.value;

            var isValid = true;

            if (primeiroNome.length < 5 || primeiroNome.trim() === "") {
                showError(primeiroNomeInput, "Primeiro nome inválido. Deve ter no mínimo 5 caracteres.");
                isValid = false;
            }

            if (segundoNome.length < 5 || segundoNome.trim() === "") {
                showError(segundoNomeInput, "Segundo nome inválido. Deve ter no mínimo 5 caracteres.");
                isValid = false;
            }

            if (email.length < 5 || email.trim() === "" || !email.includes("@")) {
                showError(emailInput, "Email inválido. Deve ter no mínimo 5 caracteres e conter o caractere '@'.");
                isValid = false;
            }

            if (senha.length < 6 || senha.length > 8 || senha.trim() === "") {
                showError(senhaInput, "Senha inválida. Deve ter no mínimo 6 caracteres e no máximo 8 caracteres.");
                isValid = false;
            }

            if (senha !== confirmarSenha) {
                showError(confirmarSenhaInput, "A confirmação de senha não corresponde à senha digitada.");
                isValid = false;
            }

            if (isValid) {
                // Submeter o formulário ou fazer qualquer outra ação desejada
                form.submit();
            }
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