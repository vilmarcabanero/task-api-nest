import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class TaskDto {
  @IsNotEmpty()
  @ApiModelProperty()
  task: string;
}
