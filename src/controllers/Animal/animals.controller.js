import { Animal } from "../../models/animals.js";
import { AnimalsList } from "../../models/animals.list.js";

const list = new AnimalsList()

export const getAllAnimals = (req, res) => {
    const animals = list.getAllAnimals();

    if(!animals.length) {
        return res.status(404).send({
            message: `Any animal registered!`,
            status: `Not found`
        })
    }
    return res.status(200).send({
        message: `All animals from controller`,
        status: `Okay`,
        data: animals
    });
};

export const getAnimalByID = (req, res) => {
    const {id} = req.params;
    const animal = list.getAnimalByID(id)

    if(!animal) {
        return res.status(404).send({
            message: `Any animal founded`
        })
    }
    return res.status(200).send({
        message: `Animal with ID ${id}`,
        origem: `Controller`
    });
};

export const createAnimals = (req, res) => {
    const { name, type, age, color, img, vacined } = req.body;

    if(!name || !type || !age || !color || !img || !vacined) {
        return res.status(400).send({
            message: `Invalid data`,
            origem: `Controller`
        })
    }
    const animal = new Animal(name, type, age, color, img, vacined)
    list.createAnimals(animal);
    return res.status(201).send({
        message: `Animal created POST Route`,
        data: animal
    });
};

export const updateAnimalByID = (req, res) => {
    const {id} = req.params;
    const { name, type, age, color, img, vacined} = req.body;

    if(!name || !type || !age || !color || !img || !vacined) {
        return res.status(400).send({
            message: `Invalid data`,
            origem: `Controller`
        })
    }
    return res.status(200).send({
        message: `Animal with ID: ${id}, updated from PUT Route`,
        origem: `Controller`
    });
};

export const removeAnimalByID = (req, res) => {
    const {id} = req.params;

    return res.status(200).send({
        message: `Animal with ID: ${id}, from Delete Route`,
        origem: `Controller`
    });
};