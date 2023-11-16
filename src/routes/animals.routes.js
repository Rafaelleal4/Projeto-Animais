import { Router } from "express";
import { 
    getAllAnimals,
    getAnimalByID,
    createAnimals,
    updateAnimalByID,
    removeAnimalByID
 } from "../controllers/Animal/animals.controller.js";


const routeAnimals = Router();

routeAnimals.get("/", getAllAnimals);

routeAnimals.get("/", getAnimalByID);

routeAnimals.post("/", createAnimals);

routeAnimals.put("/", updateAnimalByID);

routeAnimals.delete("/", removeAnimalByID);

export default routeAnimals;