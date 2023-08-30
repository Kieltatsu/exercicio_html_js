const form = document.getElementById('form-validar');
const mensagemElement = document.getElementById('mensagem');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = parseFloat(document.getElementById('campo-a').value);
    const campoB = parseFloat(document.getElementById('campo-b').value);

    if (campoB > campoA) {
        mensagemElement.textContent = 'Formulário válido. B é maior que A.';
        mensagemElement.style.color = 'green';
    } else {
        mensagemElement.textContent = 'Formulário inválido. B deve ser maior que A.';
        mensagemElement.style.color = 'red';
    }
});
