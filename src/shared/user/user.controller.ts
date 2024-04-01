import { Controller, Get, Request } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  me(@Request() request: any) {
    console.log({ meId: request.userId });
    return this.userService.getUserById('userId');
  }
}
