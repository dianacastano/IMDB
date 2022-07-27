"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.escribirEnFicheroJSON = function (nombreFichero, obj) {
        fs.writeFileSync(nombreFichero, JSON.stringify(obj));
        console.log("registro añadido");
    };
    Imdb.obtenerInstanciaIMDB = function (nombreFichero) {
        return JSON.parse(fs.readFileSync(nombreFichero).toString());
    };
    Imdb.DB_NAME = "imdbDDBB.json";
    return Imdb;
}());
exports.Imdb = Imdb;
