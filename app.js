
let nomesDosParticipantes = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Pega o valor do input e remove espaços extras

    if (nome === "") {
        alert("Digite um nome antes de adicionar!");
        return;
    }

    // Adiciona o nome ao array
    nomesDosParticipantes.push(nome);

    // Atualiza a lista de amigos na tela
    atualizarLista();

    // Limpa o campo de input
    input.value = "";
}

// Atualiza a exibição da lista de nomes na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista para evitar duplicações

    // Adiciona cada nome do array como um item da lista
    nomesDosParticipantes.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome;
        
    // style dos nomes da lista
        li.style.color="black";
        document.body.style.fontFamily = "Spicy Rice, sans-serif";


        //Este cria um espaçamento entre o  texto e botão de apagar
        li.style.display="flex";
        li.style.alignItems="center";
        li.style.gap="10px";
    
        
        // Botão para remover um nome da lista
        let btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.onclick = () => removerNome(index);


        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

// Remove um nome da lista
function removerNome(index) {
    nomesDosParticipantes.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (nomesDosParticipantes.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let sorteado = nomesDosParticipantes[Math.floor(Math.random() * nomesDosParticipantes.length)];
    
    // Exibe o nome sorteado na tela
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo sorteado foi: ${sorteado} 🎉`;
}
