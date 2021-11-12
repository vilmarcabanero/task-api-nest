import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TASKS } from '@schemas';
import { Model, ObjectId } from 'mongoose';
import { ITask } from './interfaces/tasks.interface';
import { TaskDto } from './dtos/task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(TASKS.name) private readonly tasks: Model<ITask>) {}

  async getTasks(userId: string) {
    const filter = { userId };
    const tasks = this.tasks.find(filter);

    return tasks;
  }

  async getTask(_id: string) {
    const task = this.tasks.findById(_id);

    return task;
  }

  async getActiveTasks() {
    const filter = { isActive: true };
    const tasks = await this.tasks.find(filter);

    return tasks;
  }

  async getCompleteTasks() {
    const filter = { complete: true };
    const tasks = await this.tasks.find(filter);

    return tasks;
  }

  async createTask(userId: string, payload: TaskDto) {
    const task = await this.tasks.create({ userId, task: payload.task });

    return task;
  }

  async makeCompleteTask(_id: string) {
    const task = await this.tasks.findByIdAndUpdate(_id, { complete: true });

    return task;
  }

  async makeIncompleteTask(_id: string) {
    const task = await this.tasks.findByIdAndUpdate(_id, { complete: false });

    return task;
  }

  async updateTask(_id: string, payload: TaskDto) {
    const task = await this.tasks.findByIdAndUpdate(_id, {
      task: payload.task,
    });

    return task;
  }

  async archiveCompleteTasks(): Promise<any> {
    const res = await this.tasks.updateMany(
      { complete: true },
      { isActive: false },
    );

    return res;
  }

  async deleteTask(_id: string) {
    const task = await this.tasks.findOneAndDelete({ _id });

    return {
      message: 'Delete successful.',
      data: task,
    };
  }
}
