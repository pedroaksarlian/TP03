let h2 = document.getElementById("palabra");
let h3 = document.getElementById("intentos");
let palabraCambiar = document.getElementById("palabraAdivinar").value;
let mensaje = document.getElementById("mensaje");
let acumulador = "";
let intentos = 10; 
let intermedio = "";

console.log(palabraCambiar);

for(let i = 0; i < palabraCambiar.length; i++){
    acumulador += "-";
}
h2.innerHTML = acumulador;
h3.innerHTML = "Te quedan " + intentos + " intentos";

intermedio = acumulador;

function ArriesgarLetra(){
    let letra = document.getElementById("letra").value;
    letra = letra.toUpperCase();
    let nuevoIntermedio = "";
    let encontrada = false;
    for(let i = 0;  i < palabraCambiar.length; i++){
        if(palabraCambiar[i] === letra){
            nuevoIntermedio += letra;
            encontrada = true;
    }else{
        nuevoIntermedio += intermedio[i];
    }
}
if(encontrada === false)
{
    intentos = intentos - 1;
    h3.innerHTML = "Te quedan " + intentos + " intentos";
}

intermedio = nuevoIntermedio;
console.log(intermedio);
h2.innerHTML = intermedio;

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

}