let valorPorcentaje = document.querySelector('.inner-box');

let valor = parseInt(valorPorcentaje.innerText);

let circulo = document.querySelector('circle')



circulo.style.strokeDashoffset = 500-((500 * valor) / 100);