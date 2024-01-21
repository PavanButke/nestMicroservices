import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class BookService{

    public books: Book[]=[];

    addBookService(book : Book):string{
        //book.id = uuidv4();
        this.books.push(book);
        return "Book added successfuly."
    }

    updateBookService(book : Book):string{
      let idx= this.books.findIndex(myBook=>{
            return myBook.id == book.id;
      })
      this.books[idx]=book;
      return "Book has been updated successfuly."
    }

    deleteBookService(bookId : number):string{
        this.books = this.books.filter((bk)=>
           {  bk.id !== bookId; 
            
        })
        return "Book has been deleted successfuly."
      }

      findBookbyIdService(bookId : number):Book{
        const foundBook = this.books.find((bk) => bk.id === bookId);
        return foundBook;
      }

      findAllBooks(): Book[]{
        return this.books;
      } 
}