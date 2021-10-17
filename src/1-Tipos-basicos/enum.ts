enum permissoes{
    admin = 'ADMIN',
    editor = 'EDITOR',
    comum = 'COMUM'
}
const usuario = {
    nivel: permissoes.comum
    //nível admin = 0, nível editor = 1, nível comum = 2
}
console.log(usuario)