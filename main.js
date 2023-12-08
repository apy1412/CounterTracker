const count = document.querySelector(".count");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const saveBtn = document.querySelector(".save");
const message = document.querySelector(".message");

let countValue = 0;

increase.addEventListener("click", () => {
    countValue++;
    count.innerText = countValue;
});

decrease.addEventListener("click", () => {
    if(countValue === 0) {
        return;
    }else{

        countValue--;
        count.innerText = countValue;
    }
});

reset.addEventListener("click", () => {
    countValue = 0;
    count.innerText = countValue;
});

saveBtn.addEventListener("click", () => {
    message.textContent += " "+ countValue + " - ";
    countValue = 0;
    count.innerText = countValue;
    
});

