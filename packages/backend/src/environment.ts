import { cleanEnv, str, bool, num } from 'envalid'

export const environment = cleanEnv(process.env, {
  NODE_ENV: str(),
  DB_HOST: str(),
  DB_PORT: num(),
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_DEBUG_LOG: bool({ default: true }),
  PORT: num({ default: 3001 })
})
