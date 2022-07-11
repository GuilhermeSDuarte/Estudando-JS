function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagemt')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'imgs/manhã.jpg'
    } else if (hora >= 12 && hora < 18){
        img.src = 'imgs/tarde.jpg'                
        document.body.style.background = '#F7DC6F'
    } else {
        img.src = 'imgs/noite.jpg'
        document.body.style.background = '#34495E '
    }
}