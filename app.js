let numero = prompt("Ingrese un numero");
numero = numero.split(" ");
let n = [];
let n1;
for (let i = 0; i < numero.length ; i++) {
       n[i] = parseInt(numero[i]);
       n1 = Math.pow(n[i],2);
       console.log(n1);
}
