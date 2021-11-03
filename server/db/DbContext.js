import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { CarSchema } from '../models/Car'
import { HouseSchema } from '../models/House'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  //had to add this part in!!
  Houses = mongoose.model('House', HouseSchema)
  Cars = mongoose.model('Car', CarSchema)
  // Profiles is the same collection as account and therefore acts as a 'reducer'
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
