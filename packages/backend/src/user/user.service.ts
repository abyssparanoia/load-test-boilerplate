import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, IsNull } from 'typeorm'
import { Transactional } from 'typeorm-transactional-cls-hooked'
import { calcPaginationParam, datetime, generateEncodedUuid } from '../util'
import { User, UserRepository } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository
  ) {}

  async get(id: string) {
    return this.userRepository.findOneOrFail(id, { where: { deletedAt: IsNull() } }).catch(_ => {
      throw new NotFoundException(`this user does not found`)
    })
  }

  @Transactional()
  async list(param: { page?: number; perPage?: number }) {
    const { skip, take } = calcPaginationParam(param.page, param.perPage)
    const where: FindManyOptions<User>['where'] = {
      deletedAt: IsNull()
    }

    const users = await this.userRepository.find({ take, skip, where })
    const ttlCnt = await this.userRepository.count({ where })
    return { users, ttlCnt }
  }

  @Transactional()
  async create(param: Pick<User, 'displayName' | 'email'>) {
    const user = await this.userRepository.findOne(undefined, {
      where: { email: param.email, deletedAt: IsNull() }
    })
    if (user) {
      throw new ConflictException('Already exists user')
    }

    const now = datetime.nowUnixTimestampSec()

    const newUser = new User()
    newUser.id = generateEncodedUuid()
    newUser.displayName = param.displayName
    newUser.email = param.email
    newUser.createdAt = now
    newUser.updatedAt = now

    await this.userRepository.insert(newUser)

    return newUser
  }

  @Transactional()
  async update(
    param: Partial<Pick<User, 'displayName' | 'email'>> & {
      id: string
    }
  ) {
    const user = await this.userRepository.findOneOrFail(param.id, { where: { deletedAt: IsNull() } }).catch(_ => {
      throw new NotFoundException(`this user does not found`)
    })

    if (param.displayName) user.displayName = param.displayName

    user.updatedAt = datetime.nowUnixTimestampSec()

    if (param.email) {
      user.email = param.email
    }

    return this.userRepository.save(user)
  }

  @Transactional()
  async delete(param: { id: string }) {
    await this.userRepository.findOneOrFail(param.id, { where: { deletedAt: IsNull() } }).catch(_ => {
      throw new NotFoundException(`this user does not found`)
    })

    await this.userRepository.delete(param.id)
    return
  }
}
