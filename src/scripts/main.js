document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let nMaximo = document.getElementById('numero-maximo').value;
        nMaximo = parseInt(nMaximo);

        let nAleatorio = Math.random()*nMaximo;
        nAleatorio = Math.floor(nAleatorio + 1);

        document.getElementById('resultado-valor').innerText = nAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})