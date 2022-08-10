import createToken from 'src/helpers/create_token'
import { api } from 'src/boot/axios'

const listService = {
  getByIdTanaman () {
    return api.get('/getByIdTanaman', createToken())
  }
}
export {
  listService
}
