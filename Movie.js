"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.setactors = function (actor) {
        this.actors = actor;
    };
    Movie.prototype.getactors = function () {
        return this.actors;
    };
    Movie.prototype.setwriter = function (writ) {
        this.writer = writ;
    };
    Movie.prototype.getwriter = function () {
        return this.writer;
    };
    Movie.prototype.setlanguage = function (lengua) {
        this.language = lengua;
    };
    Movie.prototype.getlanguage = function () {
        return this.language;
    };
    Movie.prototype.setplataform = function (plataforma) {
        this.plataform = plataforma;
    };
    Movie.prototype.getplataform = function () {
        return this.plataform;
    };
    Movie.prototype.setisMCU = function (MCU) {
        this.isMCU = MCU;
    };
    Movie.prototype.getisMCU = function () {
        return this.isMCU;
    };
    Movie.prototype.setmainCharacterName = function (CharacterName) {
        this.mainCharacterName = CharacterName;
    };
    Movie.prototype.getmainCharacterName = function () {
        return this.mainCharacterName;
    };
    Movie.prototype.setproducer = function (productor) {
        this.producer = productor;
    };
    Movie.prototype.getproducer = function () {
        return this.producer;
    };
    Movie.prototype.setdistributor = function (distribuidor) {
        this.distributor = distribuidor;
    };
    Movie.prototype.getdistributor = function () {
        return this.distributor;
    };
    Movie.prototype.printAll = function () {
        console.log(this.title, this.releaseYear, this.actors, this.nacionality, this.writer, this.language, this.plataform, this.isMCU, this.mainCharacterName, this.producer, this.distributor, this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
