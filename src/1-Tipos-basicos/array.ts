const nomeDogs: string[] = [
    'Tuco',
    'Thell'
]
function exibeDogs(nomeDogs: string[]){
    return `Os dogs são: ${nomeDogs.join(' , ')}`
}
console.log(exibeDogs(nomeDogs))