import { Controller, Get, UseGuards, Param, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getUser(@Request() req: any) {
    return this.usersService.findById(req.user._id);
  }
}
