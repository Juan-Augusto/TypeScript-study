"use strict";
var estaAtivo;
estaAtivo = false;
function usuarioAtivo(status) {
    if (status) {
        return "O usu\u00E1rio est\u00E1 ativo.";
    }
    else {
        return "O usu\u00E1rio N\u00C3O est\u00E1 ativo.";
    }
}
usuarioAtivo(false);
