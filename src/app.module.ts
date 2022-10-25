import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MonitorRunner } from './commands/monitor.command';
import { MonitorService } from './service/monitor.service';
import { SFConnector } from './helpers/cometd';

const envModule = ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [envModule, SFConnector],
  providers: [MonitorRunner, MonitorService],
})
export class AppModule {}
