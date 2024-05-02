let display = document.querySelector(".display-io-op");
let inputs = document.querySelectorAll(".input");

let op = "";

Array.from(inputs).forEach((input) => {
    input.addEventListener('click', (e) =>{
        if(e.target.value === '='){
            display.innerHTML = eval(op);
        } else if(e.target.value === 'AC'){
            display.innerHTML = "0";
        }else{
            op = op + e.target.value;
            display.innerHTML = op;
        }
    });
});