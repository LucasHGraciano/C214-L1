const readline = require('readline');

const R = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

R.question('X: ', (n1) => {
  R.question('Y: ', (n2) => {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    if (isNaN(n1) || isNaN(n2)) {
      console.log('Valores inválidos');
      R.close();
    } else {
      console.log(`Soma: ${n1 + n2}`);
      console.log(`Subtração: ${n1 - n2}`);
      console.log(`Multiplicação: ${n1 * n2}`);
      console.log(`Divisão: ${n1 / n2}`);
      console.log(`Exponenciação: ${n1 ** n2}`);
      R.close();
    }
  });
});