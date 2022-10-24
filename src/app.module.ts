import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const envModule = ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [envModule],
})
export class AppModule {}
