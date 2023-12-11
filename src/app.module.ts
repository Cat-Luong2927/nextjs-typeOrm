import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserservicesModule } from './userservices/userservices.module';

@Module({
  imports: [UserModule, UserservicesModule],
})
export class AppModule {}
