import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsPhoneNumber, IsDateString, IsBoolean } from 'class-validator';

export class CreateNurseDto {
  @IsString()
  @ApiProperty({
    description: 'The name of the nurse',
    example: 'Darlene Kirk',
    required: true,
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'The email address of the nurse',
    example: 'kramerrachel@gmail.com',
    required: true,
  })
  email: string;

  @IsPhoneNumber(null, { message: 'Phone number must be valid' })
  @ApiProperty({
    description: 'The phone number of the nurse',
    example: '256.061.8936x7225',
    required: true,
  })
  phone: string;

  @IsDateString({}, { message: 'joinDate must be a valid ISO date string' })
  @ApiProperty({
    description: 'The date the nurse joined',
    example: '2023-11-02',
    required: true,
  })
  joinDate: string;

  @IsDateString({}, { message: 'licenseExpiryDate must be a valid ISO date string' })
  @ApiProperty({
    description: 'The date the nurse’s license expires',
    example: '2025-10-06',
    required: true,
  })
  licenseExpiryDate: string;

  @IsString()
  @ApiProperty({
    description: 'The status of the nurse (e.g., active, inactive)',
    example: 'active',
    required: true,
  })
  status: string;

  @IsString()
  @ApiProperty({
    description: 'The URL to the nurse’s document',
    example: 'http://hansen-johnson.com//uploads/with.pdf',
    required: true,
  })
  documentURL: string;

  @IsBoolean()
  @ApiProperty({
    description: 'Whether the nurse has a digital signature',
    example: true,
    required: true,
  })
  digitalSignature: boolean;
}
