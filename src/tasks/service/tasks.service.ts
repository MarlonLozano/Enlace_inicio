import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../model/entities/task.entity';
import { TaskDto } from '../model/dto/task.dto';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    ) { }

    async getAllTask(): Promise<Task[]> {
        return await this.taskRepository.find();
        // return 'hola mundo';
    }

    async getTask(id: number): Promise<Task> {
        return await this.taskRepository.findOne(id);
    }

    async createTask(task: TaskDto): Promise<Task> {
        const newTask = new Task();

        newTask.name = task.name;
        newTask.description = task.description;
        newTask.createdAt = new Date();
        newTask.updatedAt = new Date();

        return this.taskRepository.save(newTask);
    }

    async updateTask(id: number, task: TaskDto): Promise<Task> {
        const updateTask = await this.taskRepository.findOne(id);
        updateTask.name = task.name;
        updateTask.description = task.description;
        updateTask.createdAt = task.createdAt;
        updateTask.updatedAt = new Date();
        return this.taskRepository.save(updateTask);
    }

    async deleteTask(id: number) {
        return await this.taskRepository.delete(id);
    }



}
