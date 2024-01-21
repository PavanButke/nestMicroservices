import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/book/data/user.dto";

@Injectable()
export class AuthService{
    constructor(private readonly jwtService : JwtService)
    {

    }

    generateToken(payload : User){
        return this.jwtService.sign(payload);
    }
}