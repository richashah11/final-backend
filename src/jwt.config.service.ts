import { Injectable } from '@nestjs/common';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createJwtOptions(): JwtModuleOptions | Promise<JwtModuleOptions> {
    console.log(this.configService.get('JWT_SECRET'));  // For debugging

    console.log(
      {secret: this.configService.get('JWT_SECRET', 'fallback_secret_key'), // Retrieve JWT secret
        signOptions: {
          expiresIn: this.configService.get('JWT_EXPIRES_IN', '24h'), // Retrieve expiration time
        },}
    )
    return {
      secret: this.configService.get('JWT_SECRET', 'fallback_secret_key'), // Retrieve JWT secret
      signOptions: {
        expiresIn: this.configService.get('JWT_EXPIRES_IN', '24h'), // Retrieve expiration time
      },
    };
  }
}
