import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Prisma, User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @ApiOperation({
        summary: "Get user by id."
    })
    @ApiResponse({ status: 200, description: "Success"})
    @ApiResponse({ status: 400, description: "Bad Request"})
    @ApiResponse({ status: 500, description: "Internal Server Error"})
    async getUser(@Query("userId") userId: string): Promise<User> {
        try {
            return await this.usersService.getUser(+userId);
        } catch (error) {
            console.error(error)
        }
    }

    @Post()
    @ApiOperation({
        summary: "Create an user."
    })
    @ApiResponse({ status: 200, description: "Success"})
    @ApiResponse({ status: 400, description: "Bad Request"})
    @ApiResponse({ status: 500, description: "Internal Server Error"})
    async createUser(@Body() params: Prisma.UserCreateInput) {
        try {
            return this.usersService.createUser(params);
        } catch (error) {
            console.error(error)
        }
    }

    @Put("/:userId")
    @ApiOperation({
        summary: "Update an user."
    })
    @ApiResponse({ status: 200, description: "Success"})
    @ApiResponse({ status: 400, description: "Bad Request"})
    @ApiResponse({ status: 500, description: "Internal Server Error"})
    async updateUser(@Body() params: Prisma.UserUpdateInput, @Param("userId") userId: string ) {
        try {
            return this.usersService.updateUser(+userId, params);
        } catch (error) {
            console.error(error)
        }
    }

    @Delete("/:userId")
    @ApiOperation({
        summary: "Delete an user."
    })
    @ApiResponse({ status: 200, description: "Success"})
    @ApiResponse({ status: 400, description: "Bad Request"})
    @ApiResponse({ status: 500, description: "Internal Server Error"})
    async deleteUser(@Param("userId") userId: string ) {
        try {
            return this.usersService.deleteUser(+userId);
        } catch (error) {
            console.error(error)
        }
    }
}
