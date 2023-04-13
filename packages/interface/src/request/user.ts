import { IUser } from '../entity'
import { Pagination } from './pagination'
import { CreateRequestType } from './base'

// GET /users
export type ListUsersRequest = CreateRequestType<
  null,
  {
    page?: number
    perPage?: number
  },
  null,
  'query'
>
export type ListUsersResponse = {
  users: IUser[]
  pagination: Pagination
}

// POST /users
export type CreateUserRequest = CreateRequestType<null, null, Pick<IUser, 'email' | 'displayName'>, 'body'>
export type CreateUserResponse = {
  user: IUser
}

// GET /users/{userId}
export type GetUserRequest = CreateRequestType<{ userId: string }, null, null, 'param'>
export type GetUserResponse = {
  user: IUser
}

// PATCH /users/{userId}
export type UpdateUserRequest = CreateRequestType<
  {
    userId: string
  },
  null,
  Partial<Pick<IUser, 'displayName' | 'email'>>,
  'param' | 'body'
>
export type UpdateUserResponse = {
  user: IUser
}

// DELETE /users/{userid}
export type DeleteUserRequest = CreateRequestType<
  {
    userId: string
  },
  null,
  null,
  'param'
>
export type DeleteUserResponse = void
