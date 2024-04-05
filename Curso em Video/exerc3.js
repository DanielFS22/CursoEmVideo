var idade = 66
console.log(`Sua idade é: ${idade}`)
if (idade < 16) {
    console.log('você não vota!')
} else if (idade < 18 || idade > 65) {
    console.log ('voto opcional')
} else {
    console.log('Seu voto é obrigatório!')
}