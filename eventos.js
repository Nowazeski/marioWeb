const mario = document.querySelector('.mario');

const jump = ()=>{
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);
}
const esquerda = () =>{
    
}
const direita = () =>{
    
}
const cima = () =>{

}
const baixo = () =>{

}



document.addEventListener('keypress', function (event) {
    console.log(event);

    if(event.key === "Enter"){
        
    }else if(event.key === "a"){

    }else if(event.key === "w"){

    }else if(event.key === "d"){

    }else if(event.key === "s"){

    }else if(event.key === ' '){
        jump();
    }

    

  });