var joaovictor = {
nome: "João Victor",
idade: 20,
cidade: "Boa Vista",
sobrenome: "Conde",
mostrarNomeCompleto: function() {
  return `${this.nome} ${this.sobrenome}`;
}
}


console.log(joaovictor.mostrarNomeCompleto());
console.log(joaovictor.idade);


var nomes = ["João", "Maria", "Pedro", "Ana"];// Adicionando um novo nome ao array;
console.log(nomes);
nomes.push("Cu");
console.log(nomes);