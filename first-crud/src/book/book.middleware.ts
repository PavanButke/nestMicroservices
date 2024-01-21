import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response,  NextFunction } from "express";

@Injectable()
export class BookMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        //console.log("This is class based Book Middleware")
        let protocol = req.protocol;
        let host = req.get("host");
        let method = req.method;
        console.log(protocol , host , method);
        next();
    }
    
}