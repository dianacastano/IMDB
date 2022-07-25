import {Professional} from "./Professional";
import {Movie} from "./Movie";

let a = new Professional("juan", 33, "terror", 89, 190, "azul", "verdes", ".", false, "japones", 1, "actor");
let b = new Professional("pedro", 19, "accion", 55, 169, "castaño", "verdes", ".", false, "aleman", 0, "actor");
let c = new Professional("maria", 55, "sci-fi", 88, 192, "rubio", "marron", ".", true, "americano", 2, "director");
let d = new Professional("rebeca", 33, "accion", 59, 175, "rubio", "azul", ".", false, "mejicana", 0, "actor")
a.getprofessional()

let professional1 = [a, b, c, d]

let Movie1= new Movie ("Encanto", 2, "española", "terror");

console.log(Movie1.printAll());


