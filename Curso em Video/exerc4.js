var agora = new Date()
console.log(`Agora são ${agora} horas. ` )
    if (agora < 12) {
        console.log('Bom dia!')
    } else  if (agora > 12 || agora < 18) {
        console.log(`Boa tarde!`)
    } else {
        console.log('Boa noite!')
    }