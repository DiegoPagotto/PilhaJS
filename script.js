// Declaração do objeto "Stack" que contém duas propriedades: values (array contendo os valores adicionados pelo usuário) 
// e a função que retorna o menor valor que ainda está presente na Stack.

var stack = {
    values: [],
    lowerValue: function () {
        return Math.min.apply(null, this.values);
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
}


// Evento de clique para o botão "Retornar menor valor"
// Verifica se ainda há valores na Stack e, caso haja, invoca a função "lowerValue()" que retorna
// o menor valor dentro da pilha e mostra-o para o usuário.

document.getElementById("returnLower").onclick = function () {
    if (stack.values.length > 0) {
        //alert("O menor valor dentro da pilha é "+ stack.lowerValue());
        var antes = Date.now();
        stack.lowerValue()
        var duracao = Date.now() - antes;
        console.log("levou " + duracao + "ms")
    } else {
        alert("A pilha está vazia.");
    }
}

// Função que verifica quanto tempo levou a execução da função lowerValue()

function executionLatency(){
    var start = Date.now();
    stack.lowerValue()
    var duration = Date.now() - start;
    console.log("lowerValue() function was executed in "+ duration+"ms.")
}