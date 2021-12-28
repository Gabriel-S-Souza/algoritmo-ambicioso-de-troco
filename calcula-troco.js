
const saida = document.querySelector("#saida")
var notasTrocoCopy = []

 function main(){
    const input = document.querySelector("#troco")
    const button = document.querySelector("button")
    button.addEventListener("click", (e)=>{
        var troco = input.value
        calculaTroco(troco)
        saida.textContent = notasTrocoCopy
    })
}

const notas = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05]
var notasTroco = []

function calculaTroco(troco, indice = 0){
    if(notas[indice] <= troco){
        console.log([indice, notas.length, indice + 1 < notas.length])
        notasTroco.push(notas[indice])
        troco = (troco - notas[indice]).toFixed(2)
        if(notas[indice] <= troco) calculaTroco(troco, indice)
        else if(indice + 1 < notas.length) calculaTroco(troco, indice + 1)
        else {
            console.log(notasTroco)
            notasTrocoCopy = notasTroco
            notasTroco = []
        } 
    } else if(indice + 1 < notas.length){
        console.log([indice, notas.length, indice + 1 < notas.length])
        calculaTroco(troco, indice + 1)
    } else {
        console.log(notasTroco)
        notasTrocoCopy = [...notasTroco]
        notasTroco = []
    } 
}

main()
