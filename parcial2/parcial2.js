function cargar(){
    let obj = {
        Texto: "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom. ",
        Autor: "Marcel Proust",
        SenderName: "",
        Senderlink: "",
        Quotelink: "http://forismatic.com/en/3fe08c5b2e/"
      };
    
    let json1 = JSON.stringify(obj);
    console.log(json1);

    let json2 = json1;
    let json3 = JSON.parse(json2);
    console.log(json3);
    console.log(json3.Autor);
    console.log(json3.Texto);
    document.querySelector("#text").innerHTML = `Texto: ` + json3.Texto;
    document.querySelector("#autor").innerHTML = `Autor: ` + json3.Autor;
    
}


let boton1 = document.querySelector("#btncita");
boton1.addEventListener('click',cargar)