import { HttpException, HttpStatus } from "@nestjs/common";


export class BookException extends HttpException{
    constructor(){
        super('This is Custom Exception using Class Based Exception ', 
        HttpStatus.BAD_REQUEST);
    }
}