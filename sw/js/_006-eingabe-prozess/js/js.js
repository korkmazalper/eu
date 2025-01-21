        const userInput = document.getElementById("user-input");
        const reverseBtn = document.getElementById("reverse-btn");
        const uppercaseBtn = document.getElementById("uppercase-btn");
        const wordCountBtn = document.getElementById("word-count-btn");
        const removeVowelsBtn = document.getElementById("remove-vowels-btn");
        const outputBox = document.getElementById("output-box");

        function convertToUppercase() {
            const inputValue = userInput.value.trim();
            if (inputValue === "") {
                outputBox.textContent = "Bitte etwas eingeben!";
                outputBox.style.backgroundColor = "#cccccc";
            } else {
                const uppercasedValue = inputValue.toUpperCase();
                outputBox.textContent = `Großbuchstaben: ${uppercasedValue}`;
                outputBox.style.backgroundColor = "#cccccc";
            }
        }














        function reverseText() {
            const inputValue = userInput.value.trim();

            if (inputValue === "") {
                outputBox.textContent = "Bitte etwas eingeben!";
                outputBox.style.backgroundColor = "#ffcccb";
            } else {
                const reversedValue = inputValue.split("").reverse().join("");
                outputBox.textContent = `Umgekehrt: ${reversedValue}`;
                outputBox.style.backgroundColor = "#999999";
            }
        }






















        























        function countWords() {
            const inputValue = userInput.value.trim();

            if (inputValue === "") {
                outputBox.textContent = "Bitte etwas eingeben!";
                outputBox.style.backgroundColor = "#ffcccb";
            } else {
                const wordCount = inputValue.split(" ").length;
                outputBox.textContent = `Wörteranzahl: ${wordCount}`;
                outputBox.style.backgroundColor = "#cccccc";
            }
        }

        function removeVowels() {
            const inputValue = userInput.value.trim();

            if (inputValue === "") {
                outputBox.textContent = "Bitte etwas eingeben!";
                outputBox.style.backgroundColor = "#ffcccb";
            } else {
                const withoutVowels = deleteVowelsFromText(inputValue);
                outputBox.textContent = `Ohne Vokale: ${withoutVowels}`;
                outputBox.style.backgroundColor = "#cccccc";
            }
        }
        function deleteVowelsFromText(inputValue) {
            const vowels = "aeiouAEIOUäöüÄÖÜ";
            let result = "";
        
            for (let i = 0; i < inputValue.length; i++) {
            if (!vowels.includes(inputValue[i])) {
                result += inputValue[i];
            }
            }
            return result;
        }

        function validate(input) {
            
        }
        reverseBtn.addEventListener("click", reverseText);
        uppercaseBtn.addEventListener("click", convertToUppercase);
        wordCountBtn.addEventListener("click", countWords);
        removeVowelsBtn.addEventListener("click", removeVowels);