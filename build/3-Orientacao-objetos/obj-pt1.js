"use strict";
//classes interfaces e herança modificadora de acesso
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//classes e funções
var Usuario = /** @class */ (function () {
    function Usuario(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    return Usuario;
}());
//static
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(nome, idade, jogo) {
        var _this = _super.call(this, nome, idade) || this;
        _this.jogo = jogo;
        return _this;
    }
    Player.prototype.nomeDoJogo = function () {
        return "Estou na pala jogando " + this.jogo;
    };
    Player.horario = function () {
        return Date();
    };
    return Player;
}(Usuario));
var jogador = new Player('Anna', 25, 'Tomb Raider');
console.log(jogador.nomeDoJogo());
console.log(Player.horario());
//private, protected, public
var jogo = /** @class */ (function () {
    function jogo(nome) {
        this.nome = nome;
    }
    return jogo;
}());
var Tomb = new jogo('Tomb Raider');
console.log(Tomb.nome);
