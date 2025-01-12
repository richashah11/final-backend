import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, Types } from 'mongoose';

@Schema({
    timestamps: true,
})
export class User {
    @Prop({ type: String })
    email: string

    @Prop({ type: String })
    password: string
    @Prop({
        type: Number,
        enum: [1, 2, 3],    // Only allow 1, 2, or 3
        default: 2
    })
    userTye: number
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
