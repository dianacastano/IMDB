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

    public setactors(actor: Professional[]):void {
        this.actors = actor;
    }

    public getactors(){
        return this.actors;
    }

    public setwriter(writ: Professional[]):void {
        this.writer= writ;
    }

    public getwriter(){
        return this.writer;
    }

    public setlanguage(lengua: string):void {
        this.language= lengua;
    }

    public getlanguage(){
        return this.language;
    }

    public setplataform(plataforma: string):void {
        this.plataform = plataforma;
    }

    public getplataform(){
        return this.plataform;
    }

    public setisMCU(MCU: boolean):void {
        this.isMCU = MCU;
    }

    public getisMCU(){
        return this.isMCU;
    }

    public setmainCharacterName(CharacterName: string):void {
        this.mainCharacterName = CharacterName;
    }

    public getmainCharacterName(){
        return this.mainCharacterName;
    }

    public setproducer(productor: Professional[]):void {
        this.producer = productor;
    }

    public getproducer(){
        return this.producer;
    }

    public setdistributor(distribuidor: string):void {
        this.distributor = distribuidor;
    }

    public getdistributor(){
        return this.distributor;
    }

    public printAll (): void{
        console.log( this.title, this.releaseYear, this.actors, this.nacionality, this.writer,
             this.language, this.plataform, this.isMCU, this.mainCharacterName, this.producer, 
             this.distributor, this.genre );
       }
   

}

export {Movie}