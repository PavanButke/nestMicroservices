import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response , Request, request } from 'express';



export class BookCustomExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const respns    = context.getResponse<Response>();
        const request   = context.getRequest<Request>();
        const status    = exception.getStatus();
        respns.status(status).json(
            {
                statusCode: status,
                timeStamp : new Date().toISOString(),
                url: request.url,
                host: request.get("host")
            }
        )
    }
    
}