import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { TimeTracker, TimeTrackerSchema  } from './TimeTracker.entity';

const mongodb_url = "mongodb+srv://Amin123:0000@cluster0.s3ueu.mongodb.net/TimeTracker?retryWrites=true&w=majority"

@Module({
  imports: [
    MongooseModule.forRoot(mongodb_url),
    MongooseModule.forFeature([{ name: TimeTracker.name, schema: TimeTrackerSchema  }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

