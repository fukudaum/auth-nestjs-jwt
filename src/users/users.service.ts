import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {}

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return await this.prismaService.user.create({
            data
        });        
    }

    async updateUser(userId: number, data: Prisma.UserUpdateInput): Promise<User> {
        return await this.prismaService.user.update({
            data,
            where: {
                id: userId
            }
        })
    }

    async deleteUser(userId: number) {
        return await this.prismaService.user.delete({
            where: {
                id: userId
            }
        })
    }

    async getUser(userId: number): Promise<User> {
        return await this.prismaService.user.findUnique({
            where: {
                id: userId
            }
        })
    }
}
