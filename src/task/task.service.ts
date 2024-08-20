import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FindAllParameters, TaskDto, TaskStatusEnum } from './task.dto';
import { v4 as uuid } from 'uuid'
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/db/entities/task.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
@Injectable()
export class TaskService {
    constructor(@InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>) { }
    private tasks: TaskDto[] = [];
    async create(task: TaskDto) {

        const taskToSave: TaskEntity = {
            title: task.title,
            description: task.description,
            expirationDate: task.expirationDate,
            status: TaskStatusEnum.TO_DO
        }

        const createdTask = await this.taskRepository.save(taskToSave);
        return this.mapEntityToDto(createdTask)

    }

    async findAll(params: FindAllParameters): Promise<TaskDto[]> {

        const searchParams: FindOptionsWhere<TaskEntity> = {}

        if (params.title) {
            searchParams.title = Like(`%${params.title}%`)
        }
        if (params.status) {
            searchParams.status = Like(`%${params.status}%`)
        }
        const taskFound = await this.taskRepository.find({ where: searchParams })

        return taskFound.map(taskEntity => this.mapEntityToDto(taskEntity));
    }

    async findById(id: string): Promise<TaskDto> {
        const foundTask = await this.taskRepository.findOne({ where: { id } })
        if (!foundTask) {
            throw new HttpException(`Task id ${id}not Found`, HttpStatus.NOT_FOUND)
        }
        return this.mapEntityToDto(foundTask)
    }

    async update(id: string, task: TaskDto) {

        const foundTask = await this.taskRepository.findOne({ where: { id } })
        if (!foundTask) {
            throw new HttpException(`Task With id: ${task.id} not Found`, HttpStatus.BAD_REQUEST);
        }
          await this.taskRepository.update(id, this.mapDtoToEntity(task)) 
    }
   async remove(id: string) {
         const result = await this.taskRepository.delete(id)
         if(!result.affected){
             throw new HttpException(`Task With id: ${id} not Found`, HttpStatus.BAD_REQUEST)
         }
         
    }

    private mapEntityToDto(tasnkEntity: TaskEntity) {
        return {
            id: tasnkEntity.id,
            title: tasnkEntity.title,
            description: tasnkEntity.description,
            expirationDate: tasnkEntity.expirationDate,
            status: TaskStatusEnum[tasnkEntity.status]
        }
    }

    private mapDtoToEntity(taskDto: TaskDto): Partial<TaskEntity> {
        return {
            title: taskDto.title,
            description: taskDto.description,
            expirationDate: taskDto.expirationDate,
            status: taskDto.status.toString()
        }
    }
}
