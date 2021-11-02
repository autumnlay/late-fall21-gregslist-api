export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get("/", this.getAll)
            .get("/:id/", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }

    async
}