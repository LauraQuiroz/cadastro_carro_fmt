// Definir uma classe para representar um carro
class Carro {
    constructor(marca, ano, cor, placa) {
      this.marca = marca;
      this.ano = ano;
      this.cor = cor;
      this.placa = placa;
    }
  }
  
  // Função para solicitar a entrada de dados e registrar um novo carro
  function registrarCarro() {
    // Pedir informações ao usuário pelo console
    let marca = prompt("Digite a marca do carro:");
    let ano = prompt("Digite o ano do carro:");
    let cor = prompt("Digite a cor do carro");
    let placa = prompt("Digite a placa do carro:");
  
    // Criar uma instância da classe Carro com as informações fornecidas
    let novoCarro = new Carro(marca, ano, cor, placa);
  
    // Mostrar uma mensagem confirmando o registro do carro
    console.log("Carro registrado com sucesso:");
    console.log("Marca: " + novoCarro.marca);
    console.log("Ano: " + novoCarro.ano);
    console.log("Cor: " + novoCarro.cor);
    console.log("Placa: " + novoCarro.placa);
  
    // Você pode armazenar a instância `novoCarro` em um array ou em uma estrutura de dados conforme suas necessidades.
  }
  
  // Chamar a função para registrar um carro ao iniciar o programa
  registrarCarro();
  