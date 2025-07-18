import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,
  ) {}

  findAll() {
    return this.taskRepo.find();
  }

  findOne(id: number) {
    return this.taskRepo.findOneBy({ id });
  }

  create(data: CreateTaskDto) {
    const task = this.taskRepo.create(data);
    return this.taskRepo.save(task);
  }

  async update(id: number, data: UpdateTaskDto) {
    await this.taskRepo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.taskRepo.delete(id);
  }
}
