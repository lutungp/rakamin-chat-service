import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secret: 'thisismykickasssecretthatiwilltotallychangelater',
      signOptions: {
        expiresIn: 3600
      }
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    JwtStrategy
  ]
})
export class AuthModule {}