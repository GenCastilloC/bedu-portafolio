/**
 * 1 .- traer el boton
 * 2.- OnClick buscar los inputs
 * 3.- Sumar los valores
 * 4.- Imprimir el resultado en el tag
 */
function calculator() {
    var btn = document.getElementById('calculate');

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        var input1 = document.getElementById("number-one");
        var input2 = document.getElementById("number-two");

        var sumResult = +input1.value + +input2.value;

        var result = document.getElementById("result");

        result.textContent = sumResult;
    });
}
calculator();