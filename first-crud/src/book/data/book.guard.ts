import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class BookGuard implements CanActivate{

    public username: string ="QWER12345"
    public password: string ="zxcv1234"

    canActivate(context: ExecutionContext): boolean   {
        const ctx = context.switchToHttp();
        const reqst = ctx.getRequest<Request>();
        if(reqst.header("username") !== undefined && reqst.header("username")=== this.username)
        {
            return true;
        } 
        else  if(reqst.header("password") !== undefined && reqst.header("password")=== this.password)
        {
            return true;
        } 
        else{
            return false;
        }

        return true;
    }
}