const heroi = [
  {nome: "Einar", xp:10000},
];

let nivel = "";
if(heroi[0].xp<1001){nivel = "Ferro"}
else if(heroi[0].xp<2001){nivel = "Bronze"}
else if(heroi[0].xp<5001){nivel = "Prata"}
else if(heroi[0].xp<7001){nivel = "Ouro"}
else if(heroi[0].xp<8001){nivel = "Platina"}
else if(heroi[0].xp<9001){nivel = "Ascendente"}
else if(heroi[0].xp<10001){nivel = "Imortal"}
else{nivel = "Radiante"}


console.log(`O heroi ${heroi[0].nome} está no nivel ${nivel}`)
