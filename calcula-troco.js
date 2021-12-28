const saida = document.querySelector("#saida")

 function principal(){
    const input = document.querySelector("#troco")
    const button = document.querySelector("button")
    button.addEventListener("click", (e)=>{
        var troco = input.value
        var notasTroco = calculaTroco(troco)
        saida.textContent = notasTroco
    })
}

const notas = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05]
var notasCliente = []

function calculaTroco(troco){
    console.log("chamou a função")
    var listaConstruida = false
    var indice = 0
    while(listaConstruida == false){
        console.log("entrou no while")
        if(notas[indice] <= troco){
            notasCliente.push(notas[indice])
            troco = (troco - notas[indice]).toFixed(2)
            if(notas[indice] <= troco){
                listaConstruida = false
            } else {
                indice += 1
                listaConstruida = false
            }
        } else {
            listaConstruida = true
            console.log(notasCliente)
            console.log(troco)
        }
    }
}

principal()