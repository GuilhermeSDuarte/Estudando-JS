function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)   
        var genero = ''
        if(fsex[0].checked){
            genero = 'Masculino'
        } else {
            genero = 'Feminino'
        }

        if(idade < 14){
            res.innerHTML = `Idade Calculada ${idade} / Você é uma criança do genero ${genero}.`
        } else if (idade >= 14 && idade < 26){
            res.innerHTML = `Idade Calculada ${idade} / Você é um adolescente do genero ${genero}.`
        } else if (idade >= 26 && idade < 61){
            res.innerHTML = `Idade Calculada ${idade} / Você é um adulto do genero ${genero}.`
        } else {
            res.innerHTML = `Idade Calculada ${idade} / Você é um idoso do genero ${genero}.`
        }
    }
}