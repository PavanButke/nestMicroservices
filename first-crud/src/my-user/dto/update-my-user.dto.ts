import { PartialType } from '@nestjs/mapped-types';
import { CreateMyUserDto } from './create-my-user.dto';

export class UpdateMyUserDto extends PartialType(CreateMyUserDto) {
    firstName : string ;
    lastName : string;
    age : number;
}
