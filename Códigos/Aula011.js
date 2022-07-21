let num = [5,8,3,1]
num[3] = 6
num.push(7) //O .push adiciona um valor no proximo vetor.
num.sort() //O .sort coloca os numeros em ordem.
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(let ad=0; ad < num.length; ad ++){
    console.log(`O numero no vetor ${ad} é ${num[ad]}`)
}

num.indexOf(7)

console.log(`O valor 7 está na posição ${num.indexOf(7)}`)