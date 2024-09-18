/*14. Manipulando Objetos Complexos
Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.*/

const empresa = {
    departamentos: [
        {
            nome: "Marketing",
            funcionarios: ["Eduardo", "Sofia", "Lucas"]
        },
        {
            nome: "Tecnologia",
            funcionarios: ["Gabriel", "Rafaela", "Mariana"]
        },
        {
            nome: "Vendas",
            funcionarios: ["Isabela", "Tiago", "Felipe"]
        }
    ]
}

for (const departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`);
  for (const funcionario of departamento.funcionarios) {
    console.log(`- Funcionário: ${funcionario}`);
  }
  console.log('');
}