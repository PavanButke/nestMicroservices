import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserService } from './../user/user.service';
import { User } from "src/book/data/user.dto";

@Injectable()
export class AuthLocalPaassportStrategy extends  PassportStrategy(Strategy){
    constructor(private readonly userService : UserService){
        super();
    }

     validate(username: string , password:string): User{
        const user = this.userService.findUserbyNameService(username);
        try{
            if(user !== undefined && user.password === password)
            {
                return user;
            }
        }
        catch(UnauthorizedException){
            throw new UnauthorizedException();
        }
    }
}