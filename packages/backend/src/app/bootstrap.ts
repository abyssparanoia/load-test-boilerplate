require('dotenv').config()

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '../pipes/validation'
// import { Logger } from './logger/logger.service'
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked'
import { environment } from '../environment'

initializeTransactionalContext()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // const app = await NestFactory.create(AppModule, { logger: false })

  app.enableCors({
    origin: '*',
    allowedHeaders: '*'
  })
  // app.useLogger(app.get(Logger))
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(environment.PORT)
}
bootstrap().catch(err => {
  console.error(err)
})
