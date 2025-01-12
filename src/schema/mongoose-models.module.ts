import {Global,Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Nurse, NurseSchema } from './nurse.schema'

import { User, UserSchema } from './user.schema'



const Models=[
    { name: Nurse.name, schema:NurseSchema},
    { name: User.name, schema:UserSchema}


]
@Global()
@Module({
    imports:[MongooseModule.forFeature(Models)],
    exports:[MongooseModule]
})
export class MongooseModelsModule{}