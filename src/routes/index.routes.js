import { Router } from "express";
import routeAnimals from "./animals.routes.js";

const routes = Router();

routes.use("/animals", routeAnimals);

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Server Okay!"});
})
export default routes;