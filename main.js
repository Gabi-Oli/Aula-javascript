function clicou(){
    document.getElementById("agradecimento")
    .Innerhtml = "Obrigada por clicar";
    console.log(document.getElementById("agradecimento"));
    alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://globalacademy.globalsys.com.br/");
    window.location.href = "https://globalacademy.globalsys.com.br/";
}


function trocar(){
    document .getElementById("mousemove")
    .Innerhtml = "Obrigada por passar o mouse";

    alert("troca o texto");
}

function voltar(){
document .getElementById("mousemove")
.Innerhtml ="Passar o mouse";

}


function load(){
alert("Página carregada");
}

function funçaochange(elemento){
    console.log(elemento.value);
}


function validaIdade(idade){
    var validar;
    if (idade = 18) {
validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

alert(soma(5,10));

function soma(n1,n2){
    return n1 + n2;
}


var d = newDate();
alert(d.getMonth());
alert(d.getDay());
alert(d.getMinutes());
alert(d.getHours());

var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count = count + 1;
    ou count ++;
}

var idade = prompt("Qual a sua idade");
var idade
if(idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade")
};

//var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
//console.log(frutas);
//alert(frutas[0].cor);

/*
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");*/
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));



/*
var nome = "gabriela oliveira";
var idade = 25;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));*/