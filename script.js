function convertirF()
{
    let entrada = document.querySelector("#entrada1");
    console.log(entrada.value);
    let valor =  Number(entrada.value);
    valor = (valor * (9/5))+32;
    console.log(valor);
    entrada.value = valor;

}

function convertirK()
{
    let entrada = document.querySelector("#entrada2");
    console.log(entrada.value);
    let valor =  Number(entrada.value);
    valor = valor + 273.15;
    console.log(valor);
    entrada.value = valor;

}

function convertirmm()
{
    let entrada = document.querySelector("#entrada3");
    console.log(entrada.value);
    let valor =  Number(entrada.value);
    valor = valor * 1000;
    console.log(valor);
    entrada.value = valor;

}

function convertircm()
{
    let entrada = document.querySelector("#entrada4");
    console.log(entrada.value);
    let valor =  Number(entrada.value);
    valor = valor * 100;
    console.log(valor);
    entrada.value = valor;

}


let boton1=document.querySelector("#boton1");
boton1.addEventListener('click',convertirF);

let boton2=document.querySelector("#boton2");
boton2.addEventListener('click',convertirK);

let boton3=document.querySelector("#boton3");
boton3.addEventListener('click',convertirmm);

let boton4=document.querySelector("#boton4");
boton4.addEventListener('click',convertircm);
