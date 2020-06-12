import { Controller, Get } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { League } from './league.entity';

@Controller('leagues')
export class LeaguesController {
  constructor(private leagueService: LeaguesService) { }

  @Get('')
  async all(): Promise<League[]> {
    return this.leagueService.all()

  }
}
