import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NurseModule } from './nurse/nurse.module';
import { DatabaseModule } from './infra/moongose/daatabse.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModelsModule } from './schema/mongoose-models.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from './jwt.config.service';

@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      JwtModule.registerAsync({
        useClass: JwtConfigService, // Use dynamic configuration
        // inject: [ConfigService],
      }),
      JwtModule,
      DatabaseModule,
      MongooseModelsModule,
    NurseModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
