import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);
  server.setGlobalPrefix('api')

  await server.listen(3000);
}

bootstrap();