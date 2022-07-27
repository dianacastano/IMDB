"use strict";
exports.__esModule = true;
var Movie_1 = require("./Movie");
var Imdb_1 = require("./Imdb");
var rl = require("readline-sync");
var fs = require("fs");
var prompt = " --> ";
var title;
var releaseYear;
var nationality;
var genre;
var movie;
var commit;
function createResgister() {
    console.log("           NUEVO REGISTRO          ");
    console.log("\n\n");
    title = rl.question("Title" + prompt);
    releaseYear = rl.question("Release Year" + prompt);
    nationality = rl.question("Nationality" + prompt);
    genre = rl.question("Genre" + prompt);
    movie = new Movie_1.Movie(title, releaseYear, nationality, genre);
    commit = rl.question("Is this correct? : (Y/n)");
    if (commit != "n") {
        editarDB();
    }
    else {
        createResgister();
    }
}
function editarDB() {
    var tmp;
    if (fs.existsSync(Imdb_1.Imdb.DB_NAME)) {
        tmp = Imdb_1.Imdb.obtenerInstanciaIMDB(Imdb_1.Imdb.DB_NAME);
        tmp.peliculas.push(movie);
        Imdb_1.Imdb.escribirEnFicheroJSON(Imdb_1.Imdb.DB_NAME, tmp);
    }
    else {
        tmp = new Imdb_1.Imdb([movie]);
        Imdb_1.Imdb.escribirEnFicheroJSON(Imdb_1.Imdb.DB_NAME, tmp);
    }
}
// main //
createResgister();
