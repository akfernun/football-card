import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { League } from "src/leagues/league.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async totalCount(): Promise<number> {
    return await this.usersRepository.count();
  }

  async getAll(): Promise<League[]> {
    const user = await this.usersRepository.findOne(2);
    return await user.leaguesAdministratorFor;
  }

}
