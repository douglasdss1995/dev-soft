const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const resultadoDiv = document.getElementById("resultado");
const btnEnviar = document.getElementById("btnEnviar");

resultadoDiv.textContent = "Preencha os campos e clique em 'Enviar' para ver as mensagens.";

// Evento 'input' no campo nome: mostra texto enquanto o usuário digita
nomeInput.addEventListener("input", () => {
    resultadoDiv.textContent = `Você digitou no nome: "${nomeInput.value}"`;
});

// Evento 'click' no botão: previne envio padrão e exibe os dados digitados
btnEnviar.addEventListener("click", (event) => {
    event.preventDefault(); // evita recarregar a página
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();

    if (nome === "" || email === "") {
        resultadoDiv.textContent = "Por favor, preencha ambos os campos antes de enviar.";
        return;
    }

    resultadoDiv.textContent = `Formulário enviado!\nNome: ${nome}\nE-mail: ${email}`;

    // Opcional: limpar campos após envio
    nomeInput.value = "";
    emailInput.value = "";
});