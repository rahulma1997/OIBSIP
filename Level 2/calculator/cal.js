const display = document.getElementById("res");

function Solve(value) {
    display.value += value;
}

function Result() {
    try {
        if (display.value.trim() === "") return;
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(() => {
            display.value = "";
        }, 1000);
    }
}

function Clear() {
    display.value = "";
}

function Back() {
    display.value = display.value.slice(0, -1);
}

// Keyboard Support
document.addEventListener("keydown", function (e) {

    if ((e.key >= "0" && e.key <= "9") ||
        ["+", "-", "*", "/", "%", "."].includes(e.key)) {
        display.value += e.key;
    }

    if (e.key === "Enter") {
        e.preventDefault();
        Result();
    }

    if (e.key === "Backspace") {
        e.preventDefault();
        Back();
    }

    if (e.key === "Escape") {
        Clear();
    }
});
