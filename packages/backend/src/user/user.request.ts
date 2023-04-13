import { ApiProperty } from '@nestjs/swagger'
import {
  IUser,
  CreateUserRequest,
  ExtractPropertyType,
  UpdateUserRequest,
  ListUsersRequest
} from '@typescript-plane-boilerplate/interface'
import { IsString, IsOptional } from 'class-validator'
import { PaginationQuery, UnixTimestamp } from '../base/bose.request'

export abstract class User extends UnixTimestamp implements IUser {
  @ApiProperty({
    description: 'Firebase UUID',
    example: 'ac916d92-9e6f-4711-a6f1-1dad15f65e65'
  })
  @IsString()
  id: string

  @ApiProperty({ description: 'display name', example: 'Yamada Tarou' })
  @IsString()
  displayName: string

  @ApiProperty({ description: 'email address', example: 'taro@sample.com' })
  @IsString()
  email: string
}

export abstract class ListUsersRequestQuery
  extends PaginationQuery
  implements ExtractPropertyType<ListUsersRequest, 'query'> {}

export abstract class CreateUserRequestBody implements ExtractPropertyType<CreateUserRequest, 'body'> {
  @ApiProperty({ description: 'display name', example: 'Yamada Tarou' })
  @IsString()
  displayName: string

  @ApiProperty({ description: 'email address', example: 'taro@sample.com' })
  @IsString()
  email: string
}

export abstract class UpdateUserRequestBody implements ExtractPropertyType<UpdateUserRequest, 'body'> {
  @ApiProperty({ description: 'display name', example: 'Yamada Tarou', required: false })
  @IsOptional()
  @IsString()
  displayName?: string

  @ApiProperty({ description: 'email address', example: 'taro@sample.com', required: false })
  @IsOptional()
  @IsString()
  email?: string
}
