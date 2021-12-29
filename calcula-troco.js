const saida = document.querySelector("#saida")

 function principal(){
    const input = document.querySelector("#troco")
    const button = document.querySelector("button")
    button.addEventListener("click", (e)=>{
        var troco = input.value
        var notasTroco = calculaTroco(troco)
        saida.textContent = notasTroco
        const label = document.querySelector("#label")
        label.classList.add("bold")
        setTimeout(function(){
            label.classList.remove("bold")
        }, 2000)
    })
}

const notas = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05]
var notasCliente = []

function calculaTroco(troco){
    var listaConstruida = false
    var indice = 0
    while(listaConstruida == false){
        if(notas[indice] <= troco){
            notasCliente.push(notas[indice].toFixed(2))
            troco = (troco - notas[indice]).toFixed(2)
            if(notas[indice] <= troco){
                listaConstruida = false
            } else {
                indice += 1
                listaConstruida = false
            }
        } else {
            if(notas[indice] > troco && !(troco < 0.05)){
                indice += 1
                listaConstruida = false
            } else {
                listaConstruida = true
                var notasClienteFormatadas = notasCliente.join([separador = ", "])
                notasCliente = []
                return notasClienteFormatadas
            }
        }
    }
}

principal()