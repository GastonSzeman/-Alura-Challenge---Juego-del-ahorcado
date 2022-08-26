//Proyecto usando video de YT sumado a lo que he aprendido.

String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 

const palabras = [
    'Ahorcado',
    'Alura',
    'Latam',
    'Oracle',
    'JavaScript',
    'Java',
    'HTML',
    'CSS',
];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let contador = 0;
let palabraConGuiones = palabra.replace(/./g, "_ ");

const nombreImg = " ";
let nombreArchivo = " ";

document.querySelector(".btnDatos").addEventListener('click', () => {
    
    const letra = document.querySelector("#entrada").value;

    let fallo = true;
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2,letra);
            document.querySelector(".palabraElegida").innerHTML = palabraConGuiones;
            fallo = false; 
            console.log(palabraConGuiones);
            console.log(palabra);
        }
    }
    if(fallo){
        contador++;
        nombreArchivo = "img" + contador + ".jpg";
        console.log(nombreArchivo);     
        document.querySelector(".juego").src = ".././img/" + nombreArchivo;
    }else if(!fallo){
        if(palabraConGuiones.indexOf("_")<0){
            alert("Ganaste!");
        }
    }
    if(contador == 4){
        console.log("has perdido");
        contador = 0;
        fallo = true;
    }
    document.querySelector('#entrada').value = "";
    document.querySelector('#entrada').focus();

});
