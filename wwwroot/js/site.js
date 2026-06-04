const h2 = document.getElementById("palabra");
const palabraCambiar = document.getElementById("palabraAdivinar").value;
let acumulador = "";
let intentos = 10; 

for(let i = 0; i < palabraCambiar.length; i++){
    acumulador += "_ ";
}
h2.innerHTML = acumulador;

function ArriesgarLetra(){
    const letra = document.getElementById("letra").value;
    letra = letra.toUpperCase();
    for(let i = 0;  i < palabraCambiar.length; i++){
        if(palabraCambiar[i]=== letra){
             
    }
    }
}   