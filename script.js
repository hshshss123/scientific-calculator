// Add value to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Calculate the result
function calculateResult() {
    let displayValue = document.getElementById('display').value;
    try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = "Error";
    }
}

// Handle square root
function handleSquareRoot() {
    let displayValue = document.getElementById('display').value;
    let result = Math.sqrt(displayValue);
    document.getElementById('display').value = result;
}
