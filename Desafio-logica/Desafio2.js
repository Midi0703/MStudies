let saldRanked = rankedPart(23, 3)
let nivel = ""

function rankedPart(vitorias, derrotas){
    return vitorias - derrotas  
}

if(saldRanked<=10){nivel = "Ferro"}
else if(saldRanked<=20){nivel = "Bronze"}
else if(saldRanked<=50){nivel = "Prata"}
else if(saldRanked<=80){nivel = "Ouro"}
else if(saldRanked<=90){nivel = "Diamante"}
else if(saldRanked<=100){nivel = "Lendário"}
else{nivel = "Imortal"}

console.log(`O Heroi tem um saldo de ${saldRanked} pontos, e seu nível é ${nivel}`)