import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { League } from './league.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LeaguesService {
  constructor(
    @InjectRepository(League)
    private leagueRepo: Repository<League>
  ) { }

  async all(): Promise<League[]> {
    return await this.leagueRepo.find();

  }
}
