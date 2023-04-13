import { group, sleep } from 'k6'
import { Options } from 'k6/options'
import { createUserScript } from './scripts/create-user-script.js'
import { getUserScript } from './scripts/get-user-scripts.js'

export let options: Options = {
  vus: 5,
  duration: '10s'
}

export default () => {
  group('create and get user', () => {
    const createUserResult = createUserScript()
    getUserScript(createUserResult.user.id)
  })
  sleep(1)
}
