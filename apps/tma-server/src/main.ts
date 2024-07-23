import { NestFactory } from '@nestjs/core';
import { TmaServerModule } from './tma-server.module';

async function bootstrap() {
  const app = await NestFactory.create(TmaServerModule);
  await app.listen(3000);
}
bootstrap();
