import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TimeTrackerDocument = TimeTracker & Document;

@Schema()
export class TimeTracker {
  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;
}

export const TimeTrackerSchema = SchemaFactory.createForClass(TimeTracker);