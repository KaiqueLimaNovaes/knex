var database = require("./database");

var dados = {
    nome: "kaique",
    sobrenome: "Lima Novaes",
    dataNascimento: "30/01/1995",
    email: "kaiqueteste@teste.com",
    tipo: "Parceiro",
    senha: "12345",
    endereco: "rua b",
    complemento: "casa 25",
    cidade: "Guarulhos",
    estado: "SP",
    cep: "07130000"
}

database.insert(dados).into("usuario").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

