import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtConfigService } from './jwt.config.service';

@Module({
  imports: [
    ConfigModule.forRoot(),  // Ensure your environment variables are loaded
    JwtModule.registerAsync({
      imports: [ConfigModule],  // Import ConfigModule if not already imported
      useClass: JwtConfigService, // Use the JwtConfigService to configure the JwtModule
    }),
  ],
  providers: [JwtConfigService],  // Provide JwtConfigService in the module's providers
  exports: [JwtModule],  // Export JwtModule if you need to use it in other modules
})
export class AuthModule {}
