import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateNurseDto } from './create-nurse.dto'; // import nurse DTO
// import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';
import { CreateAdminDto } from '../../admin/dto/create-admin.dto';

import { Type } from 'class-transformer';

export class AddTotalNurseDataDto {

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAdminDto) // You can change this to NurseDto depending on the data type
  @ApiProperty({
    type: [CreateNurseDto], // List both DTOs
    description: 'List of products or nurses to add or update',
    required: true,
  })
  Items:(CreateNurseDto)[]; 
}
