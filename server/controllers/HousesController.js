import { housesService } from '../services/HousesService'
import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController.js'

export class HousesController extends BaseController {
  constructor() {
    // in the super is the extention of the URL
    super('api/houses')
    this.router
      .get('', this.getAll)
      .get('/:id/', this.getById)
    // NOTE everything after the .use requires authorization
    // REVIEW is the .use part of a middleware thing or no?
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
    // .put("/:id", this.edit)
    // .delete("/:id", this.remove)
  }

  async getAll(req, res, next) {
    try {
      const query = req.query
      const houses = await housesService.getAll(query)
      res.send(houses)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      // NOTE req.params.___ , its grabbing that part of the URL, ususally ____ is id
      const house = await housesService.getById(req.params.id)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // REVIEW what is this calling to or from??
      // well, this is how we say to not trust the user
      req.body.creatorId = req.userInfo.id
      const house = await housesService.create(req.body)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }

  // async edit(req, res, next) {
  //     try {
  //         req.body.creatorId = req.userInfo.id
  //         req.body.id = req.params.id
  //         const house = await housesService.edit(req.body)
  //         return res.send(house)
  //     } catch (error) {
  //         next(error)
  //     }
  // }

  // async remove(req, res, next) {
  //     try {
  //         const userId = req.userInfo.id
  //         const houseId = req.params.id
  //         await housesService.remove(houseId, userId)
  //         res.send('Successfully Deleted')
  //     } catch (error) {
  //         next(error)
  //     }
  // }
}
