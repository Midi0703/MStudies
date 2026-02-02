class Heroi {
   constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque(){
        const ataques = {
         guerreiro: "espada",
         mago: "magia",
         monge: "artes marciais",
         ninja: "shuriken"
         }

         console.log(`O ${this.tipo} atacou usando ${ataques[this.tipo]}`)
    }
};

const heroi1 = new Heroi("Thors", 42, "guerreiro")
heroi1.ataque()
const heroi2 = new Heroi("Will", 39, "mago")
heroi2.ataque()
const heroi3 = new Heroi("Kung Lao", 30, "monge")
heroi3.ataque()
const heroi4 = new Heroi("Takeda", 45, "ninja")
heroi4.ataque()