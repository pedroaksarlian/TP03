let h2 = document.getElementById("palabra");
let h3 = document.getElementById("intentos");
const palabraCambiar = document.getElementById("palabraAdivinar").value;
let mensaje = document.getElementById("mensaje");
let acumulador = "";
let intentos = 10; 
let intermedio = "";

console.log(palabraCambiar);

for(let i = 0; i < palabraCambiar.length; i++){
    acumulador += "_ ";
}
h2.innerHTML = acumulador;
h3.innerHTML = "Te quedan " + intentos + " intentos";

intermedio = acumulador;

function ArriesgarLetra(){
    let letra = document.getElementById("letra").value;
    letra = letra.toUpperCase();
    for(let i = 0;  i < palabraCambiar.length; i++){
        if(palabraCambiar[i] === letra){
            intermedio[i] = letra;
            h2.innerHTML = intermedio;
    }else{
        intentos -= 1;
        h3.innerHTML = "Te quedan " + intentos + " intentos";
    }
    }
}

if(intermedio === palabraCambiar)
{
    mensaje.innerHTML = "Ganaste!!";
}
else if(intentos == 0)
    {
        mensaje.innerHTML = "Has perdido";
    }
    else{
        
    }
