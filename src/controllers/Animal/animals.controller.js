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
        quantity: 20,
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

    if(!name || !type || !age || !color || !img  ) {
        return res.status(400).send({
            message: `Invalid data`,
            origem: `Controller`
        })
    }
    if(name.length < 3) {
        return res.status(400).send({
            message: `Invalid data name`,
            origem: `Controller`
        })
    }

    if(age <= 0) {
        return res.status(400).send({
            message: `Invalid data age`,
            origem: `Controller`
        })
    }
    
    if(typeof vacined !== 'boolean') {
        return res.status(400).send({
            message: `Invalid data vacined`,
            origem: `Controller`
        })
    }

    if(!isURLValida(img)) {
        return res.status(400).send({
            message: `Invalid data img`,
            origem: `Controller`
        })
    }
    if(type.length >= 30 ) {
        return res.status(400).send({
            message: `limit of characters`,
            origem: `Controller`
        })
    }

    if(color.length >= 20 ) {
        return res.status(400).send({
            message: `limit of characters`,
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

    const animal = list.updateAnimalByID(id);

    if(!name || !type || !age || !color || !img) {
        return res.status(400).send({
            message: `Invalid data`,
            origem: `Controller`
        })
    }
    if(name.length < 3) {
        return res.status(400).send({
            message: `Invalid data name`,
            origem: `Controller`
        })
    }

    if(age <= 0) {
        return res.status(400).send({
            message: `Invalid data age`,
            origem: `Controller`
        })
    }
    
    if(typeof vacined !== 'boolean') {
        return res.status(400).send({
            message: `Invalid data vacined`,
            origem: `Controller`
        })
    }

    if(!isURLValida(img)) {
        return res.status(400).send({
            message: `Invalid data img`,
            origem: `Controller`
        })
    }

    list.updateAnimalByID(id, name, type, age, color, img, vacined);

    return res.status(200).send({
        message: `Animal with ID: ${id}, updated from PUT Route`,
        origem: `Controller`,
        data: animal
    });
};

export const removeAnimalByID = (req, res) => {
    const {id} = req.params;

    return res.status(200).send({
        message: `Animal with ID: ${id}, from Delete Route`,
        origem: `Controller`
    });
};

const isURLValida = (url) => {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
};