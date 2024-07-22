import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    // Validation
    app.useGlobalPipes(new ValidationPipe());

    const configService = app.get(ConfigService);
    const nestConfig = configService.get('nest');
    const corsConfig = configService.get('cors');

    // Cors
    if (corsConfig.enabled) {
      app.enableCors();
    }

    const port = process.env.PORT || nestConfig.port || 5000;
    await app.listen(port);
    console.log(`Application is running on: ${await app.getUrl()}`);
  } catch (error) {
    console.error('Application failed to start:', error);
    process.exit(1); // Exit with failure
  }
}

bootstrap();
