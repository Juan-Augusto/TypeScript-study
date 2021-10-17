"use strict";
var permissoes;
(function (permissoes) {
    permissoes["admin"] = "ADMIN";
    permissoes["editor"] = "EDITOR";
    permissoes["comum"] = "COMUM";
})(permissoes || (permissoes = {}));
var usuario = {
    nivel: permissoes.comum
    //nível admin = 0, nível editor = 1, nível comum = 2
};
console.log(usuario);
