// Nomes de Variaveis
/* 
- Os nomes podem iniciar com $, _ , ou letras (podem conter números, mas não iniciar com eles)
- Case sensitive (nome é diferente de Nome)
- Não utilizar palavras reservadas 
- Camel case (É comum nomearmos assim: abrirModal)
*/

var nome = 'Emília';
var idade = '35';
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = 'de Paula',
  cidade = 'São Paulo';

console.log(sobrenome, cidade);

var semDefinir;
console.log(semDefinir);

//Mudar Valor Atribuído:
/*
É possível mudar valor atribuído a variáveis declaradas com VAR e LET. Porém, não é possível modificar valores das declaradas com CONST. 
*/

var idade = 27;
idade = 29;
console.log(idade);

let preco = 50;
preco = 25;
console.log(preco);

const possuiFaculdade = true;
possuiFaculdade = false;
//Retorna um erro
console.log(possuiFaculdade);