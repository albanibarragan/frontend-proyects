const buttonAumentar = document.getElementById("aumentar");
const parrafo = document.getElementById("contador");
const buttonReset = document.getElementById("reiniciar")
const buttonDisminuir = document.getElementById("disminuir")

let contador = 0;

buttonAumentar.addEventListener('click', () =>{
    contador++;
    parrafo.textContent = contador;
})

buttonReset.addEventListener('click', () =>{
    contador = 0;      
    parrafo.textContent = contador;
})

buttonDisminuir.addEventListener('click', () =>{
    if(contador > 0){
        contador--; 
        parrafo.textContent = contador;
    }
         
    
})