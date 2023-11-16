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

routeAnimals.get("/:id", getAnimalByID);

routeAnimals.post("/", createAnimals);

routeAnimals.put("/:id", updateAnimalByID);

routeAnimals.delete("/:id", removeAnimalByID);

export default routeAnimals;