import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Response , Request, request } from 'express';

@Injectable()
export class BookInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        console.log("This is Book Interceptor!");
        const ctx = context.switchToHttp();
        const reqst = ctx.getRequest<Request>();
        reqst.body.tittle= "this is Pavan";
        reqst.body.author= "arestotle";
        return next.handle().pipe(map((data)=>{
            data= "Overlapping with Interceptor"
            return data;
        }));
    }


}