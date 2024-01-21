import { CanActivate, ExecutionContext } from "@nestjs/common";
import { request } from "express";
import { Observable } from "rxjs";


export class RolesGuard implements CanActivate{
    private rolePassed : string
    constructor(private  role: string){
        this.rolePassed =role;
    }
    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const reqst: any= ctx.getRequest<Request>();

        return this.rolePassed == reqst.user.role;
    }
}