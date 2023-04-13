import { group, sleep } from 'k6'
import { Options } from 'k6/options'
import { createUserScript } from './scripts/create-user-script.js'

export let options: Options = {
  vus: 5,
  duration: '10s'
}

export default () => {
  group('create user', () => {
    createUserScript()
  })
  sleep(1)
}
