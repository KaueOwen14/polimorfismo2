class Personagem {
    constructor(nome, papel) {
        this.nome = nome;
        this.papel = papel;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e sou um ${this.papel}.`);
    }
}
class Guarda extends Personagem {
    constructor(nome) {
        super(nome, 'Guarda');
    }
    saudacao() {
        console.log(`Guarda ${this.nome}: Pare!`);
    }
}
class Rei extends Personagem {
    constructor(nome) {
        super(nome, 'Rei');
    }
    saudacao() {
        console.log(`Rei ${this.nome}: Bem-vindo ao meu reino!`);
    }
}
function apresentarPersonagem(personagem) {
    personagem.saudacao();
}
const guardaJohn = new Guarda('John');
const reiArthur = new Rei('Arthur');
apresentarPersonagem(guardaJohn);
apresentarPersonagem(reiArthur);