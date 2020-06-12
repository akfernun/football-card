import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async totalCount(): Promise<number> {
    return await this.usersRepository.count();
  }

  async getAll(): Promise<User[]> {
    return await this.usersRepository.findByIds([2]);
  }
}
