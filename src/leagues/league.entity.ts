
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class League {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => User, user => user.leaguesAdministratorFor)
  admin: Promise<User>;

  @Column({ default: true })
  isActive: boolean;
}
