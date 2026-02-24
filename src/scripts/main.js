const btnSortear = document.getElementById('btn-sortear');
const inputMaximo = document.getElementById('numero-maximo');
const resultado = document.getElementById('resultado');
const numeroSorteado = document.getElementById('numero-sorteado');
const erro = document.getElementById('erro');

btnSortear.addEventListener('click', function () {
    const maximo = parseInt(inputMaximo.value);

    if (!maximo || maximo < 1) {
        erro.classList.add('visivel');
        resultado.classList.remove('visivel');
        return;
    }

    erro.classList.remove('visivel');
    const numero = Math.floor(Math.random() * maximo) + 1;
    numeroSorteado.textContent = numero;
    resultado.classList.add('visivel');
});

inputMaximo.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        btnSortear.click();
    }
});
