import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsersModule } from '../users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guard/auth.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret, // We'll use this to share our key between the JWT signing and verifying steps.
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, { provide: APP_GUARD, useClass: AuthGuard }], // Registering "AuthGuard" as a global guard Nest will automatically bind "AuthGaurd" to all endpoint.
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
