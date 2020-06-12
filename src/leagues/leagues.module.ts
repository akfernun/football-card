import { Module } from '@nestjs/common';
import { LeaguesController } from './leagues.controller';
import { LeaguesService } from './leagues.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { League } from './league.entity';

@Module({
  imports: [TypeOrmModule.forFeature([League])],
  controllers: [LeaguesController],
  providers: [LeaguesService]
})
export class LeaguesModule {}
