import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.enableCors({
  //   origin: '*', // Allow all origins (you can restrict it to specific domains)
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   allowedHeaders: 'Content-Type, Accept',
  //   credentials: true,  // If you want to allow credentials like cookies or tokens
  // });

  app.enableCors({
    origin: ['http://localhost:3000'], // Restricts allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Keeps allowed methods
    allowedHeaders: 'Content-Type, Accept, Authorization', // Adds Authorization header
    credentials: true, // Allows credentials like cookies or tokens
  });
  const config = new DocumentBuilder()
    .setTitle('Nurse-Management')
    .setDescription(
      'A set of all the API`s required for  Makeup application',
    )
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'JWT',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);

}
bootstrap();
