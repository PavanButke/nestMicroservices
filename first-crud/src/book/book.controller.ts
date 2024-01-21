import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseFilters, UseGuards, UseInterceptors, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
import { BookException } from "./book.exception";
import { BookCustomExceptionFilter } from "./book.exception.filter";
import { BookGuard } from "./data/book.guard";
import { BookInterceptor } from "./book.interceptor";


@Controller('/book')
export class BookController{
    constructor(private bookServ: BookService ){}

    @Get('/findAll')
    getAllBooks(): Book[]{
        return this.bookServ.findAllBooks();
    }

    @Put('/update')
    updateBook(@Body() book: Book): string{
        return this.bookServ.updateBookService(book);
    }

    @Delete('/delete/:id')
    delteeBook(@Param("id" , ParseIntPipe) bookId: number): string{
        console.log( bookId ,typeof(bookId))
        return this.bookServ.deleteBookService(bookId);
    }
    @Get('/findBookbyId/:id')
    @UseFilters(BookCustomExceptionFilter)
    getBookbyId(@Param("id" , ParseIntPipe) bookId: number): Book{
        
        try{
            return this.bookServ.findBookbyIdService(bookId);
        }
        catch( BadRequestException)
        {
            throw new BadRequestException();
        }
    }

    @Post('/add')
    //@UseGuards(new BookGuard())
    @UseInterceptors(BookInterceptor)
    addNewBook(@Body(new ValidationPipe()) book : Book):string{
        return this.bookServ.addBookService(book);
    }

    @Post('/check')
    //@UseGuards(new BookGuard())
    @UseInterceptors(BookInterceptor)
    checkBook():string{
        return "Mic check 123 123";
    }
}