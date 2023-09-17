class Pessoa {
    constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    }
    
    apresentar() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

class UsuarioRedeSocial extends Pessoa {
    constructor(nome, idade, username) {
    super(nome, idade);
    this.username = username;
    }

    postarMensagem(mensagem) {
    console.log(`${this.nome} (@${this.username}) postou: ${mensagem}`);
    }
    }

class ResidenteCidade extends Pessoa {
    constructor(nome, idade, cidade) {
    super(nome, idade);
    this.cidade = cidade;
    }

    descreverCidade() {
    console.log(`${this.nome} mora na cidade de ${this.cidade}.`);
    }
}

class FuncionarioEmpresa extends Pessoa {
    constructor(nome, idade, cargo) {
    super(nome, idade);
    this.cargo = cargo;
    }

    apresentarCargo() {
    console.log(`${this.nome} trabalha como ${this.cargo}.`);
    }
}

const usuario1 = new UsuarioRedeSocial("Matheus", 30, "matheuspavanelo");
const residente1 = new ResidenteCidade("Carlos", 25, "São Paulo");
const funcionario1 = new FuncionarioEmpresa("Clarissa", 35, "Gerente de Vendas");

usuario1.apresentar();
usuario1.postarMensagem("Olá, seguidores!");

residente1.apresentar();
residente1.descreverCidade();

funcionario1.apresentar();
funcionario1.apresentarCargo();
