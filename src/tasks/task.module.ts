import { Module } from '@nestjs/common';

import { TasksController } from './controller/tasks.controller';
import { TaskService } from './service/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './model/entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TaskModule { }
