
function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}

function insert(num) {
    document.getElementById("result").value += num;
}

function calculate() {
    let result = document.getElementById("result").value;
    if (result) {
        try {
            document.getElementById("result").value = eval(result);
        } catch (e) {
            document.getElementById("result").value = "Error";
        }
    }
}
