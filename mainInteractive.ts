import { stdin, stdout } from "process";
import { Movie } from "./Movie";
import { Imdb } from "./Imdb";
import * as rl from "readline-sync";
import * as fs from "fs";

let prompt = " --> ";

let title: string;
let releaseYear: number;
let nationality: string;
let genre: string;

let movie: Movie;
let commit;

function createResgister(): void {
  
  console.log("           NUEVO REGISTRO          "); 
  console.log("\n\n");

  title = rl.question("Title" + prompt);
  releaseYear = rl.question("Release Year" + prompt);
  nationality = rl.question("Nationality" + prompt);
  genre = rl.question("Genre" + prompt);

  movie = new Movie(title, releaseYear, nationality, genre);

  commit = rl.question("Is this correct? : (Y/n)");

  if (commit != "n") {
    editarDB();
  } else {
    createResgister();
  }
}

function editarDB(): void {
    let tmp:Imdb;

    if(fs.existsSync(Imdb.DB_NAME)){
        tmp = Imdb.obtenerInstanciaIMDB(Imdb.DB_NAME);
        tmp.peliculas.push(movie);
        Imdb.escribirEnFicheroJSON(Imdb.DB_NAME, tmp);
    }else{
        tmp = new Imdb([movie])
        Imdb.escribirEnFicheroJSON(Imdb.DB_NAME, tmp);

    }
}

// main //

createResgister();