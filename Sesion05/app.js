/**
 * 1 .- traer el boton
 * 2.- OnClick buscar los inputs
 * 3.- Sumar los valores
 * 4.- Imprimir el resultado en el tag
 */
function sumar() {
    var btn = document.getElementById('add');

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        var input1 = document.getElementById("number-one");
        var input2 = document.getElementById("number-two");
        var input3 = document.getElementById("number-tree");

        var sumResult = +input1.value + +input2.value + +input3.value;

        var result = document.getElementById("result");

        result.textContent = sumResult;
    });
}
sumar();

function restar() {
    var btn = document.getElementById('subtraction');

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        var input1 = document.getElementById("number-one");
        var input2 = document.getElementById("number-two");
        var input3 = document.getElementById("number-tree");

        var sumResult = +input1.value - +input2.value - +input3.value;

        var result = document.getElementById("result");

        result.textContent = sumResult;
    });
}
restar();

function multiplicar() {
    var btn = document.getElementById('multiplication');

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        var input1 = document.getElementById("number-one");
        var input2 = document.getElementById("number-two");
        var input3 = document.getElementById("number-tree");

        var sumResult = +input1.value * +input2.value * +input3.value;

        var result = document.getElementById("result");

        result.textContent = sumResult;
    });
}
multiplicar();

function dividir() {
    var btn = document.getElementById('division');

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        var input1 = document.getElementById("number-one");
        var input2 = document.getElementById("number-two");
        var input3 = document.getElementById("number-tree");

        var sumResult = +input1.value / +input2.value / +input3.value;

        var result = document.getElementById("result");

        result.textContent = sumResult;
    });
}
dividir();