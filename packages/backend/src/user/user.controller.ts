import {
  DeleteUserResponse,
  GetUserResponse,
  ListUsersResponse,
  UpdateUserResponse,
  newPagination
} from '@load-test-boilerplate/interface'
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateUserRequestBody, ListUsersRequestQuery, UpdateUserRequestBody, CreateUserResponse } from './user.request'
import { UserService } from './user.service'

@ApiTags('UserService')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get a user' })
  @Get(':userId')
  async get(@Param('userId') id: string): Promise<GetUserResponse> {
    return { user: await this.userService.get(id) }
  }

  @ApiOperation({ summary: 'List users' })
  @Get()
  async list(@Query() params: ListUsersRequestQuery): Promise<ListUsersResponse> {
    const { users, ttlCnt } = await this.userService.list({
      page: params.page || 1,
      perPage: params.perPage || 10
    })
    const pagination = newPagination({
      page: params.page || 1,
      perPage: params.perPage || 10,
      ttlCnt
    })
    return { users, pagination }
  }

  @ApiOperation({ summary: 'Create a new user' })
  @Post()
  @ApiResponse({ status: 201, type: CreateUserResponse })
  async create(@Body() param: CreateUserRequestBody): Promise<CreateUserResponse> {
    return {
      user: await this.userService.create({ ...param })
    }
  }

  @ApiOperation({ summary: 'Update a user' })
  @Patch(':userId')
  async update(@Param(':userId') id: string, @Body() param: UpdateUserRequestBody): Promise<UpdateUserResponse> {
    return {
      user: await this.userService.update({ id, ...param })
    }
  }

  @ApiOperation({ summary: 'Delete a user' })
  @Delete(':userId')
  async deactivate(@Param(':userId') id: string): Promise<DeleteUserResponse> {
    return this.userService.delete({ id })
  }
}
