let inputField = document.querySelector("input"); 
let buttons = document.querySelectorAll("button"); 
buttons.forEach(function(button) {
    if (!button.classList.contains("equal") && !button.classList.contains("clear")) {
        button.addEventListener("click", function() {
            inputField.value += button.textContent; 
        });
    }
});
let equalButton = document.querySelector("button.equal"); 
equalButton.addEventListener("click", function() {
    inputField.value = eval(inputField.value); 
});
let clearButton = document.querySelector("button.clear");

clearButton.addEventListener("click", function() {
    inputField.value = '';  
});


