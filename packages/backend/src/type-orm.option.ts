import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { environment } from './environment'

const typeOrmOptions = ((): TypeOrmModuleOptions => {
  switch (environment.NODE_ENV) {
    case 'development':
      return {
        type: 'mysql',
        host: environment.DB_HOST,
        port: environment.DB_PORT,
        username: environment.DB_USER,
        password: environment.DB_PASSWORD,
        database: 'maindb',
        migrations: ['./**/migration/**/*.ts'],
        entities: ['./**/*.entity{.ts,.js}'],
        logging: environment.DB_DEBUG_LOG,
        keepConnectionAlive: true,
        cli: {
          migrationsDir: './src/migration'
        }
      }
    case 'production':
      return {
        type: 'mysql',
        host: environment.DB_HOST,
        extra: {
          socketPath: environment.DB_HOST
        },
        username: environment.DB_USER,
        password: environment.DB_PASSWORD,
        database: 'maindb',
        logging: process.env.MIGRATION_ENV === 'ci' ? true : false,
        entities: process.env.MIGRATION_ENV === 'ci' ? ['./**/*.entity{.ts,.js}'] : ['./dist/**/*.entity{.ts,.js}'],
        keepConnectionAlive: true,
        migrations: process.env.MIGRATION_ENV === 'ci' ? ['./**/migration/**/*.ts'] : ['./dist/migration/**{.ts,.js}'],
        cli: {
          migrationsDir: process.env.MIGRATION_ENV === 'ci' ? './src/migration' : './dist/migration'
        }
      }
    default:
      console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
      throw new Error('no match case')
  }
})()

export default typeOrmOptions
