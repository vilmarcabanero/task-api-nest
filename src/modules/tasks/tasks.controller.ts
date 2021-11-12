import {
  Controller,
  Get,
  UseGuards,
  Param,
  Request,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TaskDto } from './dtos/task.dto';
import { TasksService } from './tasks.service';

@UseGuards(AuthGuard('jwt'))
@Controller()
export class TasksController {
  constructor(private readonly tasks: TasksService) {}

  @Get()
  async getTasks(@Request() req: any) {
    return this.tasks.getTasks(req.user._id);
  }

  @Get('active')
  async getActiveTasks() {
    return this.tasks.getActiveTasks();
  }

  @Get('complete')
  async getCompleteTasks() {
    return this.tasks.getCompleteTasks();
  }

  @Get(':id')
  async getTask(@Param('id') id: any) {
    return this.tasks.getTask(id);
  }

  @Post()
  async createTask(@Request() req: any, @Body() payload: TaskDto) {
    return this.tasks.createTask(req.user._id, payload);
  }

  @Patch('complete/:id')
  async makeCompleteTask(@Param('id') id: string) {
    return this.tasks.makeCompleteTask(id);
  }

  @Patch('incomplete/:id')
  async makeIncompleteTask(@Param('id') id: string) {
    return this.tasks.makeIncompleteTask(id);
  }

  @Patch('archive')
  async archiveCompleteTasks(): Promise<any> {
    return this.tasks.archiveCompleteTasks();
  }

  @Patch(':id')
  async updateTask(@Param('id') id: string, @Body() payload: TaskDto) {
    return this.tasks.updateTask(id, payload);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.tasks.deleteTask(id);
  }
}
