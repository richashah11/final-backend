import { Injectable } from '@nestjs/common';
import { CreateNurseDto } from './dto/create-nurse.dto';
import { UpdateNurseDto } from './dto/update-nurse.dto';
import { AddTotalNurseDataDto } from './dto/Excel-nurse-data.dto';
import { InjectModel } from '@nestjs/mongoose';
// import { Nurse } from 'src/schema/nurse.schema';
import { Nurse } from '../schema/nurse.schema'
import mongoose from 'mongoose';

@Injectable()
export class NurseService {

  constructor(
    @InjectModel(Nurse.name)
    private NurseModel: mongoose.Model<Nurse>,
 
  ) {}

  async  AddExcelNurseData(AddAllNurses:AddTotalNurseDataDto ) {

    const nurses = AddAllNurses.Items.map(async (nurseData) => {
      const res = await this.NurseModel.create({ ...nurseData });
    return res;

  
    });

    return await Promise.all(nurses); // This will add all nurses in parallel
    return 'This action adds a new nurse';
  }

  create(createNurseDto: CreateNurseDto) {
    return 'This action adds a new nurse';
  }

  findAll() {
    return `This action returns all nurse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nurse`;
  }

  update(id: number, updateNurseDto: UpdateNurseDto) {
    return `This action updates a #${id} nurse`;
  }

  remove(id: number) {
    return `This action removes a #${id} nurse`;
  }
}
