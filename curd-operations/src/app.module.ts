import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperHerosModule } from './super-heros/super-heros.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestjs-Crud'),
    SuperHerosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
