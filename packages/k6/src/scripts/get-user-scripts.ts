import { check } from 'k6'
import http from 'k6/http'
import { User } from '../generated'

export const getUserScript = (id: string): User => {
  // eslint-disable-next-line no-undef
  const res = http.get(`${__ENV.API_HOST}/users/${id}`)
  check(res, {
    'status is 200': () => res.status === 200
  })

  return res.json() as unknown as User
}
