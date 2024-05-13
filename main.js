const form = document.getElementById("form-atividade");
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaLinha();
});

function adicionaLinha() {

    const inputNameAtividade = document.getElementById('name-contato');
    const inputNumberAtividade = document.getElementById('number-contato');

    if (nomes.includes(inputNameAtividade.value)) {
        alert(`O contato: ${inputNameAtividade.value} já foi inserido`);
    } else {

        nomes.push(inputNameAtividade.value);
        numeros.push(parseFloat(inputNumberAtividade.value));

        let linha = '<tr>' ;
        linha += `<td>${inputNameAtividade.value}</td>`;
        linha += `<td>${inputNumberAtividade.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNameAtividade.value = '';
    inputNumberAtividade.value = '';
}

function atualizaLinha() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
