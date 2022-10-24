import { NestFactory } from '@nestjs/core';
import { monitor } from './commands/monitor';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['warn', 'error', 'debug'],
  });
  // load monitor
  monitor();
}

bootstrap();
