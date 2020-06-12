import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { League } from 'src/leagues/league.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  authServiceIdentifier: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(type => League, league => league.admin)
  leaguesAdministratorFor: Promise<League[]>;
}
