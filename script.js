// Declaração de variáveis

var n1;
var n2;

n1=parseFloat(document.getElementById("n1").value)
    console.log(n1)

n2=parseFloat(document.getElementById("n2").value)
    console.log(n2)

// Função para Soma
function Soma(){
    document.getElementById("resultado").value = n1 + n2
}
    // Função para subtração
function Sub(){
    document.getElementById("resultado").value = n1 -n2
}
    // Função para Multiplicação
function Multi(){
    document.getElementById("resultado").value = n1 * n2
}
    // Função para Divisão
function Divi(){
    document.getElementById("resultadoS4").value = n1/n2
}

    // Função AC
function LimparCampos() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("resultado").value = "";
}
