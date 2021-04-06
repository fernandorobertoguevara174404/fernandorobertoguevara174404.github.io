function json()
{

    let valornombre;
    let valorapellido;
    let valoredad;
    let valorcorreo;

    valornombre = document.querySelector("#nombre").value;
    valorapellido = document.querySelector("#apellido").value;
    valoredad = document.querySelector("#edad").value;
    valorcorreo = document.querySelector("#correo").value;
    
    let obj = {
        nombre: valornombre,
        apellido: valorapellido,
        edad: valoredad,
        correo: valorcorreo
        };

    let myJSON = JSON.stringify(obj);
    console.log(JSON.stringify(obj));
    document.querySelector("#areajson").value = myJSON;

}

function js()
{

    let jsonstring = document.querySelector("#areajson").value;
    let objeto = JSON.parse(jsonstring);
    console.log(objeto);

    document.querySelector("#nombre").value = objeto.nombre;
    document.querySelector("#apellido").value = objeto.apellido;
    document.querySelector("#edad").value = objeto.edad;
    document.querySelector("#correo").value = objeto.correo;
    
}

document.querySelector("#btnjson").addEventListener("click",json);
document.querySelector("#btnjs").addEventListener("click",js);



