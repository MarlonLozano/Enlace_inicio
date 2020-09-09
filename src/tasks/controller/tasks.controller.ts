import { Controller, Get, Res, HttpStatus, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { Response, Request } from 'express';
import { TaskService } from '../service/tasks.service';
import { TaskDto } from '../model/dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(
        private taskService: TaskService
    ) { }
    @Get()
    getAllTask(@Res() response: Response) {
        this.taskService.getAllTask()
            .then(mensaje => {
                response.status(HttpStatus.OK).json(mensaje);
            })
            .catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: "Error al traer las tareas" });
            });
    }

    @Get(':id')
    getTask(@Res() response: Response, @Param('id') id: number) {
        this.taskService.getTask(id)
            .then(mensaje => {
                response.status(HttpStatus.OK).json(mensaje);
            })
            .catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: "Error al traer las tareas" });
            });
    }


    @Post()
    createTask(@Body() taskDto: TaskDto, @Res() response: Response) {
        this.taskService.createTask(taskDto)
            .then(mensaje => {
                response.status(HttpStatus.CREATED).json(mensaje);
            })
            .catch(() => {
                response.status(HttpStatus.CREATED).json({ mensaje: "Error al insertar una nueva tarea" });
            });
    }

    @Put(':id')
    updateTask(@Param('id') id: number, @Body() taskDto: TaskDto, @Res() response: Response) {
        this.taskService.updateTask(id, taskDto)
            .then(mensaje => {
                response.status(HttpStatus.CREATED).json(mensaje);
            })
            .catch(() => {
                response.status(HttpStatus.CREATED).json({ mensaje: "Error al actualizar una nueva tarea" });
            });
    }


    @Delete(':id')
    deleteTask(@Param('id') id: number, @Res() response: Response) {
        this.taskService.deleteTask(id)
            .then(mensaje => {
                response.status(HttpStatus.CREATED).json(mensaje);
            })
            .catch(() => {
                response.status(HttpStatus.CREATED).json({ mensaje: "Error al eliminar una nueva tarea" });
            });
    }

}
