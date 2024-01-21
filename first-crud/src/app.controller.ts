import { Controller, Get, Inject, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from 'src/book/data/user.dto';
import { AuthService } from "./auth/auth.service";
import { RolesGuard } from "./role.guard";
import { CONSTATNTS } from "./constants";
import { ClientProxy } from "@nestjs/microservices";

@Controller('/app')
export class AppController{
    constructor(
        private readonly authService: AuthService,
        ){

    }

    @Get('/auth')
    @UseGuards(AuthGuard('local'))
    getUserbyName(@Request() req): string{

        return  this.authService.generateToken(req.user);
    }

    @Get('/auth/authorize')
    @UseGuards(AuthGuard('jwt'))
    getAuthbyName(): string{

        return  "You are authorized to access!";
    }

    @Get('/auth/admin')
    @UseGuards(AuthGuard('jwt'), new RolesGuard(CONSTATNTS.ROLES.ADMIN))
    isAdminRole(@Request() req): string{

        return  "You are authorized to access! " +JSON.stringify(req.user);
    }

    @Get('/auth/user')
    @UseGuards(AuthGuard('jwt'), new RolesGuard(CONSTATNTS.ROLES.USER))
    isUserRole(@Request() req): string{

        return  "You are authorized to access! "+JSON.stringify(req.user);
    }
}