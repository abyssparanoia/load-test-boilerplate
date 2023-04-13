import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
// import { APP_INTERCEPTOR } from '@nestjs/core'
// import { LoggerModule } from './logger/logger.module'
// import { QueryLogger } from './logger/logger.typeorm'
// import { LoggerInterceptor } from './logger/logger.interceptor'
import typeOrmOptions from '../type-orm.option'
import { UserModule } from '../user/user.module'

@Module({
  // providers: [
  //   {
  //     provide: APP_INTERCEPTOR,
  //     useClass: LoggerInterceptor
  //   }
  // ],
  imports: [ConfigModule, TypeOrmModule.forRoot(typeOrmOptions), UserModule]
})
export class AppModule implements NestModule {
  configure(_: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
