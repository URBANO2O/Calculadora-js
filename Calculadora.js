function pegarNumeros() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    return { numero1, numero2 };
}

function mostrarResultado(valor) {
    document.getElementById("resultado").innerText = "Resultado: " + valor;
}

function somar() {
    let { numero1, numero2 } = pegarNumeros();
    mostrarResultado(numero1 + numero2);
}

function subtrair() {
    let { numero1, numero2 } = pegarNumeros();
    mostrarResultado(numero1 - numero2);
}

function multiplicar() {
    let { numero1, numero2 } = pegarNumeros();
    mostrarResultado(numero1 * numero2);
}

function dividir() {
    let { numero1, numero2 } = pegarNumeros();

    if (numero2 === 0) {
        mostrarResultado("Erro: não pode dividir por zero");
    } else {
        mostrarResultado(numero1 / numero2);
    }
}