function actualizartiempo()
    {
    var date=new Date();
    var horas = date.getHours();
    var minutos = date.getMinutes();
    var segundos = date.getSeconds();
    var formato = "AM"
    
    if(horas == 0)
    {
        hora = 12;
    }

    if(horas > 12)
    {
        horas = horas -12;
        formato = "PM"
    }

    horas = (horas<10) ? "0" + horas : horas;
    minutos = (minutos<10) ? "0" + minutos : minutos;
    segundos = (segundos<10) ? "0" + segundos : segundos;
    

    document.querySelector("#horas").textContent = horas;
    document.querySelector("#minutos").textContent = minutos;
    document.querySelector("#segundos").textContent = segundos;
    document.querySelector("#forma").textContent = formato;
    

    
}

document.querySelector("#iniciar").addEventListener("click",cronometrar);
document.querySelector("#pausar").addEventListener("click",detener);
document.querySelector("#reiniciar").addEventListener("click",reiniciar);
hr = 0;
min = 0;
sen = 0;
document.getElementById("crono").innerHTML="00:00:00";
function inicio()
{

}

function cronometrar()
{
    contar();
    id = setInterval(contar,1000);
    document.querySelector("#iniciar").removeEventListener("click",cronometrar);
}
function contar(){
    var hAux, mAux, sAux;
    sen++;
    if (sen > 59)
    {
        min++;
        sen = 0;
    }
    
    if (min > 59) 
    {
        hr++;
        min = 0;
    }
    if (hr > 24)
    {
        hr = 0;
    }

    if (sen<10)
    {
        sAux = "0" + sen;
    }
    else
    {
        sAux = sen;
    }

    if (min<10)
    {
        mAux = "0" + min;
    }
    else
    {
        mAux = min;
    }
    
    if (hr<10)
    {
        hAux ="0"+ hr;
    }
    else
    {
        hAux = hr;
    }

    document.getElementById("crono").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function detener()
{
    clearInterval(id);
    document.querySelector("#iniciar").addEventListener("click",cronometrar);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("crono").innerHTML="00:00:00";
    hr = 0;
    min = 0;
    sen = 0;
    document.querySelector("#iniciar").addEventListener("click",cronometrar);
}
setInterval(actualizartiempo, 1000);