let countDisplay = document.querySelector('#input');
let increment_btn = document.querySelector('.btn');
let decrement_btn = document.querySelector('.btn-2');

let count = 0;

updateDisplay();

increment_btn.addEventListener("click", () => {
    count += 1;
    updateDisplay();
});

decrement_btn.addEventListener("click", () => {
    count -= 1;
    updateDisplay();
});

function updateDisplay(){
    countDisplay.innerHTML = count;
    if (count < 0){
        alert("Negative numbers");    
        countDisplay.textContent = 0;
    } 
};

