// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
//e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar


const a = 7;
const b = -3


q = parseInt(a / b);

r = a - b * q;

if (r < 0) {
  r += Math.abs(b);
  
  q = (a - r) / b   ;    //escreva sua lógica aqui
}

print(q + " " + r);

console.log(q + " " + r)