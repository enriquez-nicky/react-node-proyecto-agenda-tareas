import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para permitir conexión desde el frontend
  app.enableCors();

  // Valida automáticamente los DTOs
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000); // Puedes cambiar el puerto si usas Docker con otro mapeo
  console.log(`Servidor corriendo en http://localhost:3000`);
}
bootstrap();
