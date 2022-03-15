import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { TimeTrackerDto } from './TimeTracker.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTimeTrackers() {
    return await this.appService.findAll();
  }

  @Post()
  async createNewTimeTracker(@Body() timeTrackerDto: TimeTrackerDto) {
    console.log({timeTrackerDto})
    return await this.appService.create(timeTrackerDto)
  }
}
