
class hero{
    constructor(type, name, age ){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    fight(){
        let attack = "";

        switch(this.type){
            case "Mago": 
                attack =  "Magia"
                break;
            case "Guerreiro":
                attack = "Espada"
                break;
            case "Monge": 
                attack = "Artes Marciais"
                break;
            case "Ninja": 
                attack = "Shuriken"
                break;
        }
        console.log(`O ${this.type} ${this.name} atacou usando ${attack}`)
    }
}

let mensagem = new hero("Guerreiro", "Rob", 25)

mensagem.fight()