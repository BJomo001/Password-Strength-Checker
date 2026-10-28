function checkPassword() {
            let password = document.getElementById("password").value;
            let result = document.getElementById("result");
            let strengthBar = document.getElementById("strengthBar");
            let strengthLabel = document.getElementById("strengthLabel");

            let hasLength = password.length >= 8;
            let hasUppercase = /[A-Z]/.test(password);
            let hasLowercase = /[a-z]/.test(password);
            let hasNumber = /[0-9]/.test(password);
            let hasSymbol = /[^A-Za-z0-9]/.test(password);

            updateRequirement("length", hasLength, "At least 8 characters");
            updateRequirement("uppercase", hasUppercase, "An uppercase letter (A-Z)");
            updateRequirement("lowercase", hasLowercase, "A lowercase letter (a-z)");
            updateRequirement("number", hasNumber, "A number (0-9)");
            updateRequirement("symbol", hasSymbol, "A special character (!@#$)");

            let score = 0;

            if (hasLength) score++;
            if (hasUppercase) score++;
            if (hasLowercase) score++;
            if (hasNumber) score++;
            if (hasSymbol) score++;

            strengthBar.style.width = (score * 20) + "%";

            if (score <= 2) {
                result.textContent = "Weak password";
                result.className = "weak";
                strengthBar.style.backgroundColor = "#dc2626";
                strengthLabel.textContent = "Strength: Weak";
                strengthLabel.style.color = "#dc2626";
            } else if (score <= 4) {
                result.textContent = "Medium password";
                result.className = "medium";
                strengthBar.style.backgroundColor = "#f59e0b";
                strengthLabel.textContent = "Strength: Medium";
                strengthLabel.style.color = "#f59e0b";
            } else {
                result.textContent = "Strong password";
                result.className = "strong";
                strengthBar.style.backgroundColor = "#16a34a";
                strengthLabel.textContent = "Strength: Strong";
                strengthLabel.style.color = "#16a34a";
            }
        }

        function updateRequirement(id, passed, description) {
            let item = document.getElementById(id);

            if (passed) {
                item.textContent = "✓ " + description;
                item.className = "passed";
            } else {
                item.textContent = "✗ " + description;
                item.className = "failed";
            }
        }

        function togglePassword(button) {
            let password = document.getElementById("password");

            if (password.type === "password") {
                password.type = "text";
                button.textContent = "Hide Password";
            } else {
                password.type = "password";
                button.textContent = "Show Password";
            }
        }