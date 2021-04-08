
/*
http://www.7timer.info/bin/civillight.php?lon=22.22&lat=-97.86&ac=0&unit=metric&output=json&tzshift=0
*/

let requestURL = "http://www.7timer.info/bin/civillight.php?lon=22.22&lat=-97.86&ac=0&unit=metric&output=json&tzshift=0";
let request = new XMLHttpRequest();
request.open("GET",requestURL);
request.responseType="json";
request.send();

function formatofecha(fecha)
{
    
    let anio = fecha.substring(0,4);
    let mes = fecha.substring(4,6);
    let dia = fecha.substring(6,8);
    return `<i class="bi bi-calendar"></i> ${dia}/${mes}/${anio}`
}

function formatoclima(clima)
{
    //<i class="bi bi-brightness-high"></i>
    switch (clima) {
        case 'clear':
            return `<i class="bi bi-brightness-high"></i> Despejado`
        case 'ts':
            return `<i class="bi bi-cloud-lightning"></i> Tormenta Electrica`
        case 'pcloudy':
            return `<i class="bi bi-cloud-sun"></i> Parcialmente nublado`
        case 'cloudy':
            return `<i class="bi bi-cloudy"></i> Nublado`
        case 'humid':
            return `<i class="bi bi-droplet"></i> Humedo`                            
        case 'rain':
            return `<i class="bi bi-cloud-drizzle"></i> Lluvioso`                            
        
        default:
            return `<i class="bi bi-question-circle"></i> Desconocido`
    }

}

function formatoviento(viento)
{
    //<i class="bi bi-brightness-high"></i>
    switch (viento) {
        case 1:
            return `<i class="bi bi-wind"></i> Calmado`
        case 2:
            return `<i class="bi bi-wind"></i> Ligero`
        case 3:
            return `<i class="bi bi-wind"></i> Moderado`
        case 4:
            return `<i class="bi bi-wind"></i> Fresco`
        case 5:
            return `<i class="bi bi-wind"></i> Fuerte`
        case 6:
            return `<i class="bi bi-wind"></i> Vendaval`
        case 7:
            return `<i class="bi bi-wind"></i> Tormenta`
        case 8:
            return `<i class="bi bi-wind"></i> Huracan`
        default:
            return `<i class="bi bi-wind"></i> Desconocido`
    }

}

request.onload = function()
{
    console.log(request.response);
    let respuesta = request.response;
    let tablapronostico = document.querySelector("#pronostico");
    for(let valor of respuesta.dataseries)
    {
        let contenedor = document.createElement("div");
        contenedor.classList.add("prediccion");
        contenedor.innerHTML=`
            <span>${formatofecha(""+valor.date)}</span>
            <span><i class="bi bi-thermometer-low"></i>${valor.temp2m.max}</span>
            <span><i class="bi bi-thermometer-high"></i>${valor.temp2m.min}</span>
            <span class="clima">${formatoclima(valor.weather)}</span>
            <span>${formatoviento(valor.wind10m_max)}</span>
        `;
        tablapronostico.appendChild(contenedor);
    }
}