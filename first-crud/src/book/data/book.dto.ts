// export interface Book{
//     //id : string ;
//     id : number,
//     tittle : string;
//     author : string;
//     published : string;
// }

import { IsInt, IsString } from "class-validator";

export class Book {
    @IsInt()
    id: number;

    @IsString()
    title: string; // Corrected property name

    @IsString()
    author: string;

    @IsString()
    published: string;
}
