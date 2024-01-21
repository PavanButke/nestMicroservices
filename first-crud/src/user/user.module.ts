import { Controller, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { ConfigService } from "@nestjs/config";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module(
    {
        imports: [          
            ClientsModule.register([{
            name: "COMMUNICATION",
            transport: Transport.TCP,
          },
          {
            name: "ANALYTICS",
            transport: Transport.TCP,
            options:{port: 82}
          }
          ])
          ,],
        controllers: [UserController],
        providers: [UserService],
        exports: [UserService]
    }
)
export class UserModule{
    constructor(private readonly configServ: ConfigService
    )
    {
        console.log("This is from UserModule "+ configServ.get<Number>("PORT"))
        console.log("This is from UserModule "+configServ.get<Number>("LOGGING"))
    }
}