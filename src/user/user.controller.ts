import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'
import { LoginUserDto } from './dto/Login-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService


  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {


    return this.userService.create(createUserDto);
  }

  @Post('login')
  async login(@Body() LoginUserDto: LoginUserDto) {



    return this.userService.login(LoginUserDto);
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
