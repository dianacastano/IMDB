export class Professional {

    public name: string;
    public age: number;
    public genre: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor(name: string, age: number, genre: string, weight: number,
        height: number, hairColor: string, eyeColor: string, race: string,
        isRetired: boolean, nationality: string, oscarNumber: number, profession: string) {

        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarNumber;
        this.profession = profession;
    }

    public getprofessional(): void {

        console.log("Name - " + this.name + " Age - " + this.age + " Genre - " + this.genre + " Weight - " + this.weight +
            " Height - " + this.height + " Hair Color - " + this.hairColor + " Eye Color - " + this.eyeColor +
            " Race - " + this.race + " Is Retired - " + this.isRetired + " Nationality - " + this.nationality +
            " Oscars Numbers - " + this.oscarsNumber + " Profession - " + this.profession);
        // console.log(JSON.stringify(Professional));
    }


}

let a = new Professional("juan", 33, "terror", 89, 190, "azul", "verdes", ".", false, "japones", 1, "actor");
let b = new Professional("pedro", 19, "accion", 55, 169, "castaño", "verdes", ".", false, "aleman", 0, "actor");
let c = new Professional("maria", 55, "sci-fi", 88, 192, "rubio", "marron", ".", true, "americano", 2, "director");
let d = new Professional("rebeca", 33, "accion", 59, 175, "rubio", "azul", ".", false, "mejicana", 0, "actor")
a.getprofessional()