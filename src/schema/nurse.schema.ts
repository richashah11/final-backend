import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Nurse {
    @Prop({ type: String, required: true })
    name: string;
  
    @Prop({ type: String, required: true, unique: true })
    email: string;
  
    @Prop({ type: String })
    phone: string;
  
    @Prop({ type: Date })
    joinDate: Date;
  
    @Prop({ type: Date })
    licenseExpiryDate: Date;
  
    @Prop({ type: String })
    status: string;
  
    @Prop({ type: String })
    documentURL: string;
  
    @Prop({ type: Boolean })
    digitalSignature: boolean;
 

 
}

export type NurseDocument = Nurse & Document;
export const NurseSchema = SchemaFactory.createForClass(Nurse);
