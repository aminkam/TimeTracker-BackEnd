import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TimeTracker, TimeTrackerDocument } from './TimeTracker.entity';
import { TimeTrackerDto } from './TimeTracker.dto';

 
@Injectable()
export class AppService {
  constructor(@InjectModel(TimeTracker.name) private TimeTrackerModel: Model<TimeTrackerDocument>) {}
  async findAll(): Promise<TimeTracker[]> {
    return this.TimeTrackerModel.find().exec();
  }
  async create(timeTrackerDto: TimeTrackerDto): Promise<TimeTracker> {
    return await new this.TimeTrackerModel({
      ...timeTrackerDto,
        }).save();
  }
}


// FRONT - (DTO) -  BACK - (MODEL) - MONGO