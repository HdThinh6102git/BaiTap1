import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
})
export class AppModule {}
