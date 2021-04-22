import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', 'client'));
  await app.listen( process.env.PORT || 3000);
}
bootstrap();
