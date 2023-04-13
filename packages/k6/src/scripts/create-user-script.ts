import { check } from 'k6'
import {
  randomString
  /* @ts-ignore */
} from 'https://jslib.k6.io/k6-utils/1.4.0/index.js'
import { CreateUserRequestBody, CreateUserResponse } from '../generated'
import http from 'k6/http'

export const createUserScript = (): CreateUserResponse => {
  const body: CreateUserRequestBody = {
    displayName: `Jon${randomString(1, 'aeiou')}s`,
    email: `user_${randomString(10)}@example.com`
  }
  // eslint-disable-next-line no-undef
  const res = http.post(`${__ENV.API_HOST}/users`, body as any)
  check(res, {
    'status is 201': () => res.status === 201
  })

  return res.json() as unknown as CreateUserResponse
}
