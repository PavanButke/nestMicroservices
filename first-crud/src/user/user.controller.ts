import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from "@nestjs/common";
import { User} from '../book/data/user.dto'
import { UserService } from "./user.service";
import { AuthGuard } from "@nestjs/passport";
import { ClientProxy } from "@nestjs/microservices";
@Controller('/user')
export class UserController{
    
    constructor(
        private userServ: UserService,
    ){}

    @Get('/findAll')
    getAllUsers(): User[]{
        return this.userServ.findAllUsers();
    }

    @Put('/update')
    updateUser(@Body() user: User): string{
        return this.userServ.updateUserService(user);
    }

    @Delete('/delete/:id')
    delteeUser(@Param("id") userId: string): string{
        return this.userServ.deleteUserService(userId);
    }
    @Get('/findUserbyId/:id')
    getUserbyId(@Param("id") userId: string): User{
        return this.userServ.findUserbyIdService(userId);
    }

    @Post('/add')
    addNewUser(@Body() user : User):string{
        return this.userServ.addUserService(user);
    }

    @Get('/analytics')
    getAnalytics(){
        return this.userServ.getAnalytics();
    }
}