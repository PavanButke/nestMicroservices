import { Controller, Module } from "@nestjs/common";
import { AuthLocalPaassportStrategy } from "./passport.local.strategy";
import { UserModule } from "src/user/user.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";


@Module(
    {
        imports: [PassportModule, UserModule,
            JwtModule.register({
                secret:"complexKey",
                signOptions:{
                    expiresIn: "60s"
                }
            }),   
        ],
        controllers: [],
        providers: [AuthLocalPaassportStrategy, JwtStrategy, AuthService],
        exports: [AuthService]
    }
)
export class AuthModule{



}