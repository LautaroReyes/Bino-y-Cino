let n1 = prompt("Ingrese numero");
let contadorMult2 = 0;
let contadorMult3 = 0;
let contadorMult4 = 0;
let contadorMult5 = 0;


console.log(n1);

n1 = n1.split(" ");
let n2 = [];
for (let i = 0; i < n1.length; i++) {
    n2[i] = parseInt(n1[i]);    
    if(n2[i]%2==0) {
        ContarMultiplosde2();
    }else if(n2[i]%3==0){
        ContarMultiplosde3();
    }else if(n2[i]%4==0){
        ContarMultiplosde4();

    }else if(n2[i]%5==0){
        ContarMultiplosde5();
    }
    
} 
document.write("Multiplos de 2: " + contadorMult2 + "<br>");
document.write("Multiplos de 3: " + contadorMult3 + "<br>");
document.write("Multiplos de 4: " + contadorMult4 + "<br>");
document.write("Multiplos de 5: " + contadorMult5 + "<br>");


function ContarMultiplosde2(){
    contadorMult2++;
}
function ContarMultiplosde3(){
    contadorMult3++;
}
function ContarMultiplosde4(){
    contadorMult4++;
}
function ContarMultiplosde5(){
    contadorMult5++;
}
