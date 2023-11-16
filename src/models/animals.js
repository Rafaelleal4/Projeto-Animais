import { v4 as uuidv4 } from "uuid";

export class Animal {
    constructor (name, type, age, color, img, vacined) {
        this.id = uuidv4();
        this.name = name;
        this.type = type;
        this.age = age;
        this.color = color;
        this.img = img;
        this.vacined = vacined;
    }
}