function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let display = document.getElementById("display");
    display.value = eval(display.value);
}
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        document.getElementById("display").value =
            document.getElementById("display").value.slice(0, -1);
    }
});
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function percentage() {
    let display = document.getElementById("display");
    display.value = parseFloat(display.value) / 100;
}
