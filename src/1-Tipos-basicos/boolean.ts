let estaAtivo: boolean;

estaAtivo = false;


function usuarioAtivo(status:boolean){
    if(status){
        return `O usuário está ativo.`
    }else{
        return `O usuário NÃO está ativo.`
    }
}

usuarioAtivo(false);