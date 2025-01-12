import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtConfigService } from '../jwt.config.service';
// import { JwtConfigService } from 'src/jwt.config.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useClass: JwtConfigService,  // Use the JwtConfigService to load the JWT options
    }),
  ],
  controllers: [UserController],
  providers: [UserService,JwtConfigService],
})
export class UserModule {}
