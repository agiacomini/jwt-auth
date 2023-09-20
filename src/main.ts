import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Definisco come le API vengono presentate al mondo esterno
  const options = new DocumentBuilder()
    .setTitle('Firebase')
    .setDescription('The Firebase API')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // Definisce il path dove posizionato lo Swagger UI
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
