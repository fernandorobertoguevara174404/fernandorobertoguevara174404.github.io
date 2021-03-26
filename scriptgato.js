let tablero=["", "", "","", "", "","", "", ""];
let turno="X";

function clickcasilla(evt)
{

    let id = Number(evt.target.id[1])-1;
    if(tablero[id]==="")
    {
        tablero[id] = turno;
        evt.target.classList.add(turno);
        if( turno === "X")
        {
            turno="O";

        }else
        {
            turno="X";
        }
    }
    ganador();
    
}

function verifX()
{
    let span = document.getElementById("MarcadorX");
    let valor = Number(span.textContent);
    valor = valor + 1;
    span.textContent = valor;

    let casillas = document.querySelectorAll(".casilla");
    tablero=["", "", "","", "", "","", "", ""];
    for(var i=0; i<9;i++){
        casillas[i].classList.remove("X", "O");
    } 
}

function verifO()
{
    let span = document.getElementById("MarcadorO");
    console.log(span.textContent);
    let valor = Number(span.textContent);
    valor = valor + 1;
    console.log(valor);
    span.textContent = valor;

    let casillas = document.querySelectorAll(".casilla");
    tablero=["", "", "","", "", "","", "", ""];
    for(var i=0; i<9;i++){
        casillas[i].classList.remove("X", "O");
    } 
}

function ganador()
{
    //X
    if(tablero[0] == "X" && tablero[1] =="X" && tablero[2] == "X")
    {
        verifX()
    }

    if(tablero[3] == "X" && tablero[4] =="X" && tablero[5] == "X")
    {
        verifX()
    }

    if(tablero[6] == "X" && tablero[7] =="X" && tablero[8] == "X")
    {
        verifX()
    }
    if(tablero[0] == "X" && tablero[3] =="X" && tablero[6] == "X")
    {

        verifX()
    }
    if(tablero[1] == "X" && tablero[4] =="X" && tablero[7] == "X")
    {
        verifX()
    }
    if(tablero[2] == "X" && tablero[5] =="X" && tablero[8] == "X")
    {

        verifX()
    }
    if(tablero[0] == "X" && tablero[4] =="X" && tablero[8] == "X")
    {

        verifX()
    }
    if(tablero[2] == "X" && tablero[4] =="X" && tablero[6] == "X")
    {

        verifX()
    }

    //O
    if(tablero[0] == "O" && tablero[1] =="O" && tablero[2] == "O")
    {
        verifO()
    }

    if(tablero[3] == "O" && tablero[4] =="O" && tablero[5] == "O")
    {
        verifO()
    }

    if(tablero[6] == "O" && tablero[7] =="O" && tablero[8] == "O")
    {
        verifO()
    }
    if(tablero[0] == "O" && tablero[3] =="O" && tablero[6] == "O")
    {

        verifO()
    }
    if(tablero[1] == "O" && tablero[4] =="O" && tablero[7] == "O")
    {
        verifO()
    }
    if(tablero[2] == "O" && tablero[5] =="O" && tablero[8] == "O")
    {

        verifO()
    }
    if(tablero[0] == "O" && tablero[4] =="O" && tablero[8] == "O")
    {

        verifO()
    }
    if(tablero[2] == "O" && tablero[4] =="O" && tablero[6] == "O")
    {

        verifO()
    }
    if(tablero[0]  && tablero[1]  && tablero[2] && tablero[3]  && tablero[4]&& tablero[5]  && tablero[6]&& tablero[7]  && tablero[8])
    {
        let casillas = document.querySelectorAll(".casilla");
        tablero=["", "", "","", "", "","", "", ""];
        for(var i=0; i<9;i++){
            casillas[i].classList.remove("X", "O");
        } 
    }
    

}

function reiniciar()
{
    let casillas = document.querySelectorAll(".casilla");
    tablero=["", "", "","", "", "","", "", ""];
    for(var i=0; i<9;i++)
    {
        casillas[i].classList.remove("X", "O");
    }
    
    let span = document.getElementById("MarcadorX");
    let span1 = document.getElementById("MarcadorO");
    let valor = Number(span.textContent);
    valor = 0;
    span.textContent = valor;
    span1.textContent = valor;
    
}

let casillas = document.querySelectorAll(".casilla");
for(var i=0; i<9;i++){
    casillas[i].addEventListener('click',clickcasilla);
}

document.querySelector("#reiniciar").addEventListener('click',reiniciar);


