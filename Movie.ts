import {Professional} from "./Professional";

class Movie {

    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public writer: Professional[];
    public language: string;
    public plataform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: Professional[];
    public distributor: string;
    public genre: string;

    constructor (title:string, releaseYear:number, nacionality: string, genre:string)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre

    }

    public printAll (){
        
        for (let prop in this) {
            if (prop != "print") {
              console.log(`${prop} - ${eval("this." + prop)}`);
            }
          }
          console.log('');
        }
   

}

export {Movie}