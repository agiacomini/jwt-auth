import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { Andr3aModule } from './andr3a/andr3a.module';
import { Andr3aController } from './andr3a/andr3a.controller';
import { Andr3aService } from './andr3a/andr3a.service';

@Module({
  imports: [UsersModule, AuthModule, Andr3aModule],
  controllers: [AppController, AuthController, Andr3aController],
  providers: [AppService, AuthService, Andr3aService],
})
export class AppModule {}
