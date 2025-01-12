import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NurseService } from './nurse.service';
import { CreateNurseDto } from './dto/create-nurse.dto';
import { UpdateNurseDto } from './dto/update-nurse.dto';
import { ApiTags } from '@nestjs/swagger';
import { AddTotalNurseDataDto } from './dto/Excel-nurse-data.dto';

@Controller('nurse')
export class NurseController {
  constructor(private readonly nurseService: NurseService) {}
  @ApiTags('AddExcelDataNurse')

  @Post('ExcelData')
 async create(@Body() AddAllNurseDto: AddTotalNurseDataDto) {

    return this.nurseService.AddExcelNurseData(AddAllNurseDto);
  }

  @Get()
  findAll() {
    return this.nurseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nurseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNurseDto: UpdateNurseDto) {
    return this.nurseService.update(+id, updateNurseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nurseService.remove(+id);
  }
}
