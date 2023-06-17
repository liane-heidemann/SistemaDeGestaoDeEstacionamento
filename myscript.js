let placaX = document.getElementById("placa") //item 
let modeloX = document.getElementById("modelo") //item 
let corX = document.getElementById("cor") //item 
let queryBox = document.getElementById("query-box") // query-box 
let botaoMostrarVeiculos = document.getElementById("botaoMostrarCarros")
let botaoLimpar = document.getElementById("botaoLimpar")
let botaoAddVeiculo = document.getElementById("addVeiculo")
let buscarPlaca = document.getElementById("buscarPlaca") //item 
let botaoBuscarVeiculo = document.getElementById("botaoBuscarPlaca")
let carrosEstacionados = [{
    placa: "1542-XXXX",
    modelo: "Volkvagen",
    cor: "Vermelho",
    dia: "10/04/2023",
    hora: "00",
    minutos: "55"
}, {
    placa: "5145-XXXX",
    modelo: "Sedan",
    cor: "Branco",
    dia: "10/04/2023",
    hora: "00",
    minutos: "15"
}, {
    placa: "8742-XXXX",
    modelo: "Fox",
    cor: "Azul",
    dia: "10/04/2023",
    hora: "00",
    minutos: "01"
}]
// TAXAS E CALCULO 
let queryBox2 = document.getElementById("query-box2") // query-box 
let taxaMinutoX = document.getElementById("taxaMinuto")
let taxaHoraX = document.getElementById("taxaHora")
let taxaExtraX = document.getElementById("taxaExtra")
let botaoAlterarTaxas = document.getElementById("botaoAlterarTaxas")
let taxas = [0.25, 15, 0]
let valorPagar = 0



function addQueryBox(input) {
    queryBox.value = input
}

function addQueryBox2(input) {
    queryBox2.value = input
}

function elementosEntrada() {
    data = new Date
    let horaAgora = ("0" + data.getHours()).slice(-2);
    let minutosAgora = ("0" + data.getMinutes()).slice(-2);
    return {
        placa: placaX.value,
        modelo: modeloX.value,
        cor: corX.value,
        dia: ("0" + data.getDate()).slice(-2) + "/" + ("0" + (data.getMonth() + 1)).slice(-2) + "/" + data
        .getFullYear(),
        hora: ("0" + data.getHours()).slice(-2),
        minutos: ("0" + data.getMinutes()).slice(-2)
    }
}

function listaProdutos() {
    let exibirItens = ""
    for (var i = 0; i < carrosEstacionados.length; i++) {
        exibirItens += (i + 1) + "] - Placa: " + carrosEstacionados[i].placa + ", Modelo: " + carrosEstacionados[i]
            .modelo + ", Cor: " + carrosEstacionados[i].cor + ", Data: " + carrosEstacionados[i].dia + ", Hora: " +
            carrosEstacionados[i].hora + ":" + carrosEstacionados[i].minutos + "\n"
    }
    return exibirItens
}

function buscarVeiculo() {
    dataX = new Date
    let veiculoEncontrado = ""
    for (var i = 0; i < carrosEstacionados.length; i++) {
        if (carrosEstacionados[i].placa == buscarPlaca.value) {
            let minhasHoras = dataX.getHours() - carrosEstacionados[i].hora //hora tatual - hora que estacionou 
            let meusMinutos = 0
            if (dataX.getMinutes() < carrosEstacionados[i].minutos) { // minuto atual - minuto que estacionou  OU  
                meusMinutos = (60 - carrosEstacionados[i].minutos) + dataX.getMinutes()
                minhasHoras--
            }
            else {
                meusMinutos = dataX.getMinutes() - carrosEstacionados[i].minutos
            }
            valorPagar = (taxas[0] * meusMinutos) + (taxas[1] * minhasHoras) + Number(taxas[2])
            veiculoEncontrado += (i + 1) + "] - Placa: " + carrosEstacionados[i].placa + ", Modelo: " +
                carrosEstacionados[i].modelo + ", Cor: " + carrosEstacionados[i].cor + ", Data: " + carrosEstacionados[
                    i].dia + ", Hora: " + carrosEstacionados[i].hora + ":" + carrosEstacionados[i].minutos + "h\n" +
                "Hora de Entrada: " + carrosEstacionados[i].hora + ":" + carrosEstacionados[i].minutos + "h\n" +
                "Hora Atual:      " + ("0" + dataX.getHours()).slice(-2) + ":" + ("0" + dataX.getMinutes()).slice(-2) +
                "h\n" + "Tempo Decorrido: " + ("0" + minhasHoras).slice(-2) + " horas e " + ("0" + meusMinutos).slice(-
                    2) + " minutos\n\n" + "[PREÇO A PAGAR]:  R$" + valorPagar
            return veiculoEncontrado
        }
    }
    return "Placa de Veiculo não Cadastrado \nou \nDados Inseridos Estão Incorretos"
}
botaoMostrarVeiculos.addEventListener("click", function() {
    addQueryBox("")
    addQueryBox(listaProdutos())
})
botaoLimpar.addEventListener("click", function() {
    addQueryBox("")
})
botaoAddVeiculo.addEventListener("click", function() {
    carrosEstacionados.push(elementosEntrada());
    addQueryBox(listaProdutos())
})
botaoBuscarVeiculo.addEventListener("click", function() {
    addQueryBox("")
    addQueryBox(buscarVeiculo())
})
//let taxas = [ 0.25 , 15 , 0] 
botaoAlterarTaxas.addEventListener("click", function() {
    if (taxaMinutoX.value != "") {
        taxas[0] = taxaMinutoX.value
    }
    if (taxaHoraX.value != "") {
        taxas[1] = taxaHoraX.value
    }
    if (taxaExtraX.value != "") {
        taxas[2] = taxaExtraX.value
    }
    addQueryBox("Taxas alteradas!")
    addQueryBox2("Taxa Minuto = R$" + taxas[0] + " / Taxa Hora = R$" + taxas[1] + " / Taxa Extra: R$" + taxas[
        2])
}) let placaX = document.getElementById("placa") //item 
let modeloX = document.getElementById("modelo") //item 
let corX = document.getElementById("cor") //item 
let queryBox = document.getElementById("query-box") // query-box 
let botaoMostrarVeiculos = document.getElementById("botaoMostrarCarros")
let botaoLimpar = document.getElementById("botaoLimpar")
let botaoAddVeiculo = document.getElementById("addVeiculo")
let buscarPlaca = document.getElementById("buscarPlaca") //item 
let botaoBuscarVeiculo = document.getElementById("botaoBuscarPlaca")
let carrosEstacionados = [{
    placa: "1542-XXXX",
    modelo: "Volkvagen",
    cor: "Vermelho",
    dia: "10/04/2023",
    hora: "00",
    minutos: "55"
}, {
    placa: "5145-XXXX",
    modelo: "Sedan",
    cor: "Branco",
    dia: "10/04/2023",
    hora: "00",
    minutos: "15"
}, {
    placa: "8742-XXXX",
    modelo: "Fox",
    cor: "Azul",
    dia: "10/04/2023",
    hora: "00",
    minutos: "01"
}]
// TAXAS E CALCULO 
let queryBox2 = document.getElementById("query-box2") // query-box 
let taxaMinutoX = document.getElementById("taxaMinuto")
let taxaHoraX = document.getElementById("taxaHora")
let taxaExtraX = document.getElementById("taxaExtra")
let botaoAlterarTaxas = document.getElementById("botaoAlterarTaxas")
let taxas = [0.25, 15, 0]
let valorPagar = 0

function addQueryBox(input) {
    queryBox.value = input
}

function addQueryBox2(input) {
    queryBox2.value = input
}

function elementosEntrada() {
    data = new Date
    let horaAgora = ("0" + data.getHours()).slice(-2);
    let minutosAgora = ("0" + data.getMinutes()).slice(-2);
    return {
        placa: placaX.value,
        modelo: modeloX.value,
        cor: corX.value,
        dia: ("0" + data.getDate()).slice(-2) + "/" + ("0" + (data.getMonth() + 1)).slice(-2) + "/" + data
        .getFullYear(),
        hora: ("0" + data.getHours()).slice(-2),
        minutos: ("0" + data.getMinutes()).slice(-2)
    }
}

function listaProdutos() {
    let exibirItens = ""
    for (var i = 0; i < carrosEstacionados.length; i++) {
        exibirItens += (i + 1) + "] - Placa: " + carrosEstacionados[i].placa + ", Modelo: " + carrosEstacionados[i]
            .modelo + ", Cor: " + carrosEstacionados[i].cor + ", Data: " + carrosEstacionados[i].dia + ", Hora: " +
            carrosEstacionados[i].hora + ":" + carrosEstacionados[i].minutos + "\n"
    }
    return exibirItens
}

function buscarVeiculo() {
    dataX = new Date
    let veiculoEncontrado = ""
    for (var i = 0; i < carrosEstacionados.length; i++) {
        if (carrosEstacionados[i].placa == buscarPlaca.value) {
            let minhasHoras = dataX.getHours() - carrosEstacionados[i].hora //hora tatual - hora que estacionou 
            let meusMinutos = 0
            if (dataX.getMinutes() < carrosEstacionados[i].minutos) { // minuto atual - minuto que estacionou  OU  
                meusMinutos = (60 - carrosEstacionados[i].minutos) + dataX.getMinutes()
                minhasHoras--
            }
            else {
                meusMinutos = dataX.getMinutes() - carrosEstacionados[i].minutos
            }
            valorPagar = (taxas[0] * meusMinutos) + (taxas[1] * minhasHoras) + Number(taxas[2])
            veiculoEncontrado += (i + 1) + "] - Placa: " + carrosEstacionados[i].placa + ", Modelo: " +
                carrosEstacionados[i].modelo + ", Cor: " + carrosEstacionados[i].cor + ", Data: " + carrosEstacionados[
                    i].dia + ", Hora: " + carrosEstacionados[i].hora + ":" + carrosEstacionados[i].minutos + "h\n" +
                "Hora de Entrada: " + carrosEstacionados[i].hora + ":" + carrosEstacionados[i].minutos + "h\n" +
                "Hora Atual:      " + ("0" + dataX.getHours()).slice(-2) + ":" + ("0" + dataX.getMinutes()).slice(-2) +
                "h\n" + "Tempo Decorrido: " + ("0" + minhasHoras).slice(-2) + " horas e " + ("0" + meusMinutos).slice(-
                    2) + " minutos\n\n" + "[PREÇO A PAGAR]:  R$" + valorPagar
            return veiculoEncontrado
        }
    }
    return "Placa de Veiculo não Cadastrado \nou \nDados Inseridos Estão Incorretos"
}
botaoMostrarVeiculos.addEventListener("click", function() {
    addQueryBox("")
    addQueryBox(listaProdutos())
})
botaoLimpar.addEventListener("click", function() {
    addQueryBox("")
})
botaoAddVeiculo.addEventListener("click", function() {
    carrosEstacionados.push(elementosEntrada());
    addQueryBox(listaProdutos())
})
botaoBuscarVeiculo.addEventListener("click", function() {
    addQueryBox("")
    addQueryBox(buscarVeiculo())
})
//let taxas = [ 0.25 , 15 , 0] 
botaoAlterarTaxas.addEventListener("click", function() {
    if (taxaMinutoX.value != "") {
        taxas[0] = taxaMinutoX.value
    }
    if (taxaHoraX.value != "") {
        taxas[1] = taxaHoraX.value
    }
    if (taxaExtraX.value != "") {
        taxas[2] = taxaExtraX.value
    }
    addQueryBox("Taxas alteradas!")
    addQueryBox2("Taxa Minuto = R$" + taxas[0] + " / Taxa Hora = R$" + taxas[1] + " / Taxa Extra: R$" + taxas[
        2])
})