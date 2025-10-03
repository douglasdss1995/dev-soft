const form = document.getElementById('formEvento');
const tbody = document.querySelector('#tabelaEventos tbody');

function adicionarEvento(titulo, data, local) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${titulo}</td>
        <td>${data}</td>
        <td>${local}</td>
    `;
    tbody.appendChild(tr);
}

function limparFormulario() {
    form.reset();
    form.classList.remove('was-validated');
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    const titulo = form.titulo.value.trim();
    const data = form.data.value;
    const local = form.local.value.trim();

    adicionarEvento(titulo, data, local);
    limparFormulario();
});