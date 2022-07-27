import { Movie } from "./Movie";
import * as fs from "fs";

class Imdb {
  public static DB_NAME = "imdbDDBB.json";
  public peliculas: Movie[];

  constructor(peliculas: Movie[]) {
    this.peliculas = peliculas;
  }

  public static escribirEnFicheroJSON(nombreFichero: string, obj: Imdb): void {
    fs.writeFileSync(nombreFichero, JSON.stringify(obj));
    console.log("registro añadido");
  }

  public static obtenerInstanciaIMDB(nombreFichero: string): Imdb {
    return JSON.parse(fs.readFileSync(nombreFichero).toString());
  }
}

export { Imdb }