import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HousesService {
    async getAll(query = {}) {
        //REVIEW what is passed through the .populate()? what goes on the inside there??
        const houses = await dbContext.Houses.find(query).populate('creator', 'name picture')
        return houses
    }

    //REVIEW how is this a 'get' function with out it being a .get()??
    async getById(id) {
        const house = await dbContext.Houses.findById(id)
        //if NOT! car
        if (!house) {
            throw new BadRequest('Invalid House Id')
        } return house
    }

    //REVIEW this body that is passed through, what is it?? where did it come from?? Is it connected to anything?
    async create(body) {
        const house = await dbContext.Houses.create(body)
        return house
    }
}

export const housesService = new HousesService()