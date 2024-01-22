const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const countryCodeRegex = /^1\s?[\s-]?[(]?(\d\d\d)[)-]?[\s-]?(\d\d\d)[\s-]?(\d\d\d\d)$/;
const nromalNumberRegex = /^[\s-]?[(]?(\d\d\d)[)-]?[\s-]?(\d\d\d)[\s-]?(\d\d\d\d)$/;

const regexs = [countryCodeRegex, nromalNumberRegex];

const isValid = (msg) => regexs.some((regex) => regex.test(msg));
const resultOutput = () => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
    }
    testResult = isValid(userInput.value) ?  `<p class="valid">Valid US number: ${userInput.value}</p>` : `<p class="invalid">Invalid US number: ${userInput.value}</p>`;
    result.innerHTML += testResult;
    userInput.value = "";
}

checkBtn.addEventListener("click", resultOutput)

clearBtn.addEventListener("click", () => {
    result.innerHTML = "";
})

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        resultOutput();
    }
})