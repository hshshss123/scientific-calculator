function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        alert("Invalid Input");
    }
}
// Handle square root
function handleSquareRoot() {
    let displayValue = document.getElementById('display').value;
    let result = Math.sqrt(displayValue);
    document.getElementById('display').value = result;
}
