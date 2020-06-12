import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) { }

  @Get('all')
  all(): Promise<any> {
    return this.usersService.getAll();
  }
}
