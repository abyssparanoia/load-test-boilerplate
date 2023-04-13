import { sleep, check } from 'k6'
import { Options } from 'k6/options'
import http from 'k6/http'

import {
  randomString
  /* @ts-ignore */
} from 'https://jslib.k6.io/k6-utils/1.4.0/index.js'

export let options: Options = {
  vus: 5,
  duration: '10s'
}

export default () => {
  const res = http.post(`http://localhost:3001/users`, {
    displayName: `Jon${randomString(1, 'aeiou')}s`,
    email: `user_${randomString(10)}@example.com`
  })
  check(res, {
    'status is 201': () => res.status === 201
  })
  sleep(1)
}
