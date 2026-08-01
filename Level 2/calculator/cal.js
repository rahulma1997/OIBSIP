const display = document.getElementById("res");

function Solve(value) {
    display.value += value;
}

function Result() {
    try {
        if (display.value === "") return;

        display.value = eval(display.value);
    } catch {
        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1200);
    }
}

function Clear() {
    display.value = "";
}

function Back() {
    display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", (e) => {

    if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
        display.value += e.key;
    }

    if (e.key === "Enter") {
        e.preventDefault();
        Result();
    }

    if (e.key === "Backspace") {
        Back();
    }

    if (e.key === "Escape") {
        Clear();
    }
});
