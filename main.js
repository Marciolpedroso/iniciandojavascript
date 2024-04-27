// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert('Hello World!')

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

alert("Vamos somar dois números.")
let firstNumber = prompt("Digite o primeiro número.")
let secondNumber = prompt("Digite o segundo número.")

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber

alert('A soma dos números é ' + sum)

// Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

alert("Vamos descobrir o é um número ou não.")
const valor = prompt("Digite um número: ");

 if (isNaN(valor)) {
    alert("O valor digitado não é um número válido.");
    } else {
    alert("O valor digitado é um número válido.");
    }

  // Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

  alert("Vamos descobrir se o argumento apresentado é uma string.")
  const isBoolean = prompt("Digite qualquer coisa.")

    if (typeof isBoolean == 'boolean') {
      alert("O argumento digitado é booleano");
    } else {
      alert("O argumento digitado não é booleano")
    }

  // Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

  alert("Vamos descobrir se o argumento apresentado é uma string.")
  const isString = prompt("Digite qualquer coisa.")

    if (typeof isString == 'string') {
      alert("O argumento digitado é uma string");
    } else {
      alert("O argumento digitado não é uma string")
    }



  // Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

  alert("Vamos subtrair dois números.")
  let primeiroNumber = prompt("Digite o primeiro número.")
  let segundoNumber = prompt("Digite o segundo número.")

  primeiroNumberNumber = Number(primeiroNumber);
  segundoNumber = Number(segundoNumber);

  const sub = primeiroNumber - segundoNumber

  alert('O resultado da subtração é ' + sub)

  // Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

  alert("Vamos multiplicar dois números.")
  let primeNumber = prompt("Digite o primeiro número.")
  let segunNumber = prompt("Digite o segundo número.")

  primeNumber = Number(primeNumber);
  segunNumber = Number(segunNumber);

  const multi = primeNumber * segunNumber

  alert('O resultado da multiplicação é ' + multi)

  // Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

  alert("Vamos dividir dois números.")
  let Numberfirst = prompt("Digite o primeiro número.")
  let NumberSecond = prompt("Digite o segundo número")

  Numberfirst = Number(Numberfirst);
  NumberSecond = Number(NumberSecond);

  const div = Numberfirst / NumberSecond

  alert('O resultado da divisão é ' + div)

  // Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

  const isEvenNumber = 4

if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const isOddNumber = 5

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}

  