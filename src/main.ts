import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 9999;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`Server is Running PORT: ${port}`);
}
bootstrap();
