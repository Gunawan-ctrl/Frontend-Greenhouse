import { LocalStorage } from 'quasar'

const dataUser = LocalStorage.getItem('dataUser')

const createToken = () => {
  if (dataUser !== undefined) {
    return {
      headers: {
        Authorization: `Bearer ${dataUser.token}`
      }
    }
  }
  return {}
}

export default createToken
