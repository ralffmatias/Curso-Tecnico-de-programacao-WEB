function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let input_ano = document.getElementById('ano')
    let resultado = document.querySelector('div#resultado')

    if(input_ano.value.lenght == 0 || Number(input_ano.value) > ano){
        window.alert('Verifique os dados inseridos')
    } else{
        var input_sexo = document.getElementsByName('nm_sexo')
        var idade = ano - Number(input_ano.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')
        if(input_sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 12){
                img.setAttribute('src','img/menino.png')
            }else {
                img.setAttribute('src','img/masculino.jpg')
            }
        }else{
            if(input_sexo[1].checked){
                    genero = 'Mulher'
                    if(idade >= 0 && idade <= 12){
                        img.setAttribute('src','img/menina.jpg')
                    }else {
                        img.setAttribute('src','img/feminino.jpg')
                    }
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos de idade!`
        resultado.appendChild(img)
    }
    
}