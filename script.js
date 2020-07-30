// Declaração do objeto "Stack" que contém duas propriedades: values (array contendo os valores adicionados pelo usuário) 
// e a função que retorna o menor valor que ainda está presente na Stack.

var stack = {
    values: [],
    values_sorted: [],
    lowerValue: function () {
        return this.values_sorted[0];
    }
};

// Evento de clique para o botão "Adicionar à pilha"
// checa se o valor digitado é um inteiro e, se for, invoca a função addToStack(), que adiciona o valor à pilha.

document.getElementById("btnAddToStack").onclick = function () {
    if (document.getElementById("addingValue").value.length >= 1) {   // Checa se o campo "input" possui um valor válido
        let value = Number(document.getElementById("addingValue").value);
        if (Number.isInteger(value)) {
            addToStack(value);
        } else {
            alert("Pontos flutuantes não são aceitos.")
        }
        document.getElementById("addingValue").value = "";
        document.getElementById("stack").innerHTML = stack.values.toString();
    } else {
        alert("Insira um valor antes de adicioná-lo.")
    }

}

function addToStack(value) {
    stack.values.push(value);
    stack.values_sorted.push(value);
    stack.values_sorted.sort();
}

// Evento de clique para o botão "Remover da Pilha"
// Verifica se ainda há valores na Stack e, caso haja, remove o que foi adicionado por último.

document.getElementById("removeFromStack").onclick = function () {
    if (stack.values.length > 0) {
        removeFromStack();
        document.getElementById("stack").innerHTML = stack.values.toString();
    } else {
        alert("Não há mais valores na pilha.");
    }
}

function removeFromStack() {
    stack.values.pop();
    stack.values_sorted = stack.values.sort();
}


// Evento de clique para o botão "Retornar menor valor"
// Verifica se ainda há valores na Stack e, caso haja, invoca a função "lowerValue()" que retorna
// o menor valor dentro da pilha e mostra-o para o usuário.

document.getElementById("returnLower").onclick = function () {
    if (stack.values.length > 0) {
        alert("O menor valor dentro da pilha é "+ stack.lowerValue());
    } else {
        alert("A pilha está vazia.");
    }
}