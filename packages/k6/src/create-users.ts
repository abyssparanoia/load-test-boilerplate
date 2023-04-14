import { group, sleep } from 'k6'
import { Options } from 'k6/options'
import { createUserScript } from './scripts/create-user-script.js'
/* @ts-ignore */
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js'

export let options: Options = {
  vus: 5,
  duration: '10s'
}

export default () => {
  group('create users', () => {
    createUserScript()
  })
  sleep(1)
}

export function handleSummary(data: any) {
  return {
    '../k6-report/src/create-users.html': htmlReport(data)
  }
}
