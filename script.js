const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculation1');

const input2 = document.querySelector('#calculation2');

const btn = document.querySelector('#btnCalculation');

const pResult = document.querySelector('#result');

btn.addEventListener('click', btnClicked);

function btnClicked() {
    const sumaInput = input1.value + input2.value;

    pResult.innerText = "Result: " + sumaInput;
}