import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyUserService } from './my-user.service';
import { CreateMyUserDto } from './dto/create-my-user.dto';
import { UpdateMyUserDto } from './dto/update-my-user.dto';

@Controller('my-user')
export class MyUserController {
  constructor(private readonly myUserService: MyUserService) {}

  @Post('/add')
  create(@Body() createMyUserDto: CreateMyUserDto) {
    return this.myUserService.create(createMyUserDto);
  }

  @Get('/findAll')
  findAll() {
    return this.myUserService.findAll();
  }

  @Get('/findByUserId/:id')
  findOne(@Param('id') id: number) {
    return this.myUserService.findOne(+id);
  }

  // @Get('/findByUserAge/:age')
  // findByAge(@Param('age') age: number) {
  //   return this.myUserService.findByAge(Number(age));
  // }

  @Patch('updateByUserId/:id')
  update(@Param('id') id: string, @Body() updateMyUserDto: UpdateMyUserDto) {
    return this.myUserService.update(+id, updateMyUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myUserService.remove(+id);
  }
}
