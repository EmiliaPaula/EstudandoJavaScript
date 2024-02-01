var nome = 'Emília';
var idade = 27;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = 'Emília';
var sobrenome = ' De Paula';
var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

//var gols = 1000;
//var frase = 'Romário fez ' + gols + ' gols';
//console.log(typeof frase);


//Template String
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = 'Romário fez ${gols} gols'; //Utilizando Template String
console.log(frase2);