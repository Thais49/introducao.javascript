var titulo = document.querySelector(".título");
titulo.textContent = "Aparecida Nutricionista";
		
/*  IMC - massa/altura^2    */
var paciente = document.querySelector("#primeiro-paciente");
var tdpeso = document.querySelector(".info-peso");
var peso = tdpeso.textContent;
var tdaltura = document.querySelector(".info-altura")
var altura = tdaltura.textContent;
var imc = peso / (altura*altura);

console.log(paciente); //tr
console.log(tdpeso); //td que tem peso
console.log(peso); //vaor do peso
console.log(altura); //valor da altura