let time = document.getElementById("time");
let iniciar = document.getElementById("iniciar");
let resetar = document.getElementById("resetar");
let contador = 25*60;
let min, seg, contagem;
let alarme = new Audio('../som/Gravação.m4a');

iniciar.onclick = () => {
    if(iniciar.innerHTML == 'Iniciar'){
        comecar();
        iniciar.innerHTML = 'Parar';
    }else if( iniciar.innerHTML == 'Parar'){
        clearInterval(contagem);
        resetar.style.display = 'inline';
        iniciar.innerHTML = 'Continuar';
    }else if( iniciar.innerHTML == 'Continuar'){
        comecar();
        iniciar.innerHTML = 'Parar';
        resetar.style.display = 'none';
    }else if( iniciar.innerHTML == "Voltar"){
        clearInterval(contagem);
        iniciar.innerHTML = 'Iniciar';
        contador = 25*60;
        time.innerHTML = '25:00';
        alarme.pause();
        alarme.currentTime = 0;
    }
};

resetar.onclick = ()=>{
    clearInterval(contagem);
    resetar.style.display = 'none';
    iniciar.innerHTML = 'Iniciar';
    contador = 25*60;
    time.innerHTML = '25:00';
}

let comecar = ()=>{
    contagem = setInterval( ()=>{
        regressiva();
    }, 1000);
}


let regressiva = ()=>{
    contador--;
        
    if( contador == 0){
        clearInterval(contagem);
        iniciar.innerHTML = "Voltar";
        alarme.play();

    }
    
    seg = contador%60;
    min = (contador-seg)/60;
    if( seg < 10 ){
        seg = '0'+seg;
    }
    
    if( min < 10){
        min = '0'+min;
    }

    time.innerHTML = min + ':' + seg;
}