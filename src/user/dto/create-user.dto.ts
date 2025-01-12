import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, IsNumber, IsIn } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'jigar.m.surati@doyenhub.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'Kem6o@123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'The user type, can be 1, 2, or 3. Default is 2.',
    example: 2,
    enum: [1, 2, 3],
    default: 2,
  })
  @IsNumber()
  @IsIn([1, 2, 3])
  userType: number;
}
