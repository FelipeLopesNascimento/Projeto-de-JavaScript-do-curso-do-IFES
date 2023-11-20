const prompt = require('prompt-sync')();
var array_veiculos = [];

do {
  console.log("Sistema de Cadastro de Veículos");
  console.log("1 - Inserir Veículo");
  console.log("2 - Excluir Veículo");
  console.log("3 - Listar Veículo");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Cliente...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let modelo = prompt("Digite o modelo: ");
    let cor = prompt("Digite a cor: ");
    let potencia = prompt("Digite a potência do motor : ");
    let valor = prompt("Digite o valor: ");

    // Neste trecho estamos declarando um objeto
    const veiculo = {
      codigo: codigo,
      modelo: modelo,
      cor: cor,
      potencia: potencia,
      valor: valor
    }
    // Chamar a função inserir
    inserir_veiculo(veiculo);

  } else if (opcao == 2) {
    console.log("\n\nExcluindo Veículo...\n");
    let codigo = prompt("Digite o código do Veículo: ");
    // Chamar a função excluir
    excluir_veiculo(codigo);


  } else if (opcao == 3) {
    console.log("\n\nListando Veículos...\n");
    // Chamar a função listar
    listar_veiculos();


  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_veiculo(veiculo) {
  // Implementar corpo da função
  array_veiculos.push(veiculo);
}

function excluir_veiculo(codigo) {
  // Implementar corpo da função
  var c = array_veiculos.findIndex(veiculo => veiculo.codigo === codigo);
  array_veiculos.splice(c, 1);

}

function listar_veiculos() {
  // Implementar corpo da função
  array_veiculos.forEach(veiculo => {
    console.log(veiculo.codigo, " : ", veiculo.modelo, " - ", veiculo.cor, " - ", veiculo.potencia, " - ", veiculo.valor)
  });


}



