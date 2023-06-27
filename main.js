const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador ++){

    const instrumento = '#som_' + listaDeTeclas[contador].classList[1];

    listaDeTeclas[contador].onclick = function () {
        tocaSom(instrumento)
    };
}

function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}
