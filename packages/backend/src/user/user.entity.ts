import { Entity, Column, PrimaryColumn, EntityRepository } from 'typeorm'
import { BaseRepository } from 'typeorm-transactional-cls-hooked'
import { BaseEntity } from '../base/base.entity'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column({ name: 'display_name', length: 36 })
  displayName: string

  @Column({ name: 'email', length: '127', unique: true })
  email: string
}

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {}
