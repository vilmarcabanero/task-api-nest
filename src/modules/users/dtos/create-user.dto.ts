import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiModelProperty()
  firstName: string;
  @IsNotEmpty()
  @ApiModelProperty()
  lastName: string;
  @IsNotEmpty()
  @ApiModelProperty()
  email: string;
  @IsNotEmpty()
  @ApiModelProperty()
  password: string;
  salt: string;
  tokenCode: string;
}
