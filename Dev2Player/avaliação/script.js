var uma_estrela = document.getElementById("1")
var duas_estrelas = document.getElementById("2")
var tres_estrelas = document.getElementById("3")
var quatro_estrelas = document.getElementById("4")
var cinco_estrelas = document.getElementById("5")
var cont_ext = document.getElementById("cont_ext")

var avaliacao = false
var qtdEstrelas = 0

var msg = document.getElementById("msg")

function avaliar(){
    avaliacao = true
    console.log(avaliacao)
    console.log(msg.value)
    msg.value = ""
    cont_ext.innerHTML = "<p style='font-size: 50px'> Avaliação enviada! </p>"
}

function estrela1(){
    qtdEstrelas = 1
    console.log(`Quantidade de estrelas: ${qtdEstrelas}`)
}

function estrela2(){
    qtdEstrelas = 2
    console.log(`Quantidade de estrelas: ${qtdEstrelas}`)
}

function estrela3(){
    qtdEstrelas = 3
    console.log(`Quantidade de estrelas: ${qtdEstrelas}`)
}

function estrela4(){
    qtdEstrelas = 4
    console.log(`Quantidade de estrelas: ${qtdEstrelas}`)
}

function estrela5(){
    qtdEstrelas = 5
    console.log(`Quantidade de estrelas: ${qtdEstrelas}`)
}