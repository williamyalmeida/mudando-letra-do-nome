
let nome = prompt(`Digite o seu nome:`)

let confirmacao = confirm(`Deseja mudar alguma letra?`);{

    if(confirmacao){
        let mudarCaracter = prompt(`Qual letra deseja mudar?`)
        if(mudarCaracter){
            let nomeNove = ''
            let novoCaracter = prompt(`para Qual deseja mudar?`)
            if(novoCaracter){
                for(let pos = 0; pos < nome.length;pos++){
                    if(nome[pos] == mudarCaracter){
                        nomeNove += novoCaracter
                    } else {
                        nomeNove += nome[pos]
                    }
                }
                alert(`o Novo nome é ${nomeNove}`)
            } else {
                alert(`Letra não definida volte ao inicio!`)    
            }
        } else {
            alert(`Letra não definida volte ao inicio!`)
        }
    } else {
        alert(`o seu nome é ${nome}`)
    }
}