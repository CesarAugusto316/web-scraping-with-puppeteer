import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const PORT = process.env.PORT ?? 3000;
const HOST = process.env.HOST ?? 'localhost';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');

  await app.listen(PORT, HOST, () => {
    console.log(`[server⚡] running on http://${HOST}:${PORT}/api/v1`);
  });
}
bootstrap();
