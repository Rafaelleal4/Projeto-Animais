export class AnimalsList {
    constructor() {
        this.animals = [];
    }

getAllAnimals() {
    return this.animals;
}

getAnimalByID(id) {
    return this.animals.
    find((animal) => animal.id === id);
}

createAnimals(animal) {
    this.animals.push(animal)
}

updateAnimalByID(id, name, type, age, color, img, vacined) {
    const animal = this.getAnimalByID(id)

    if(!animal) {
        return null;
    }

        this.name = name;
        this.type = type;
        this.age = age;
        this.color = color;
        this.img = img;
        this.vacined = vacined;

        return animal
}

removeAnimalByID(animalId) {
    this.animals = this.animals.
    filter((animal) => animal.id !== animalId)
}

}