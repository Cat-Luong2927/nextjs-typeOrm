/* eslint-disable prettier/prettier */
import { Entity, Column, ManyToOne, PrimaryColumn} from 'typeorm';
import { UserEntity } from '../userEntity/user.entity';

@Entity()
export class Role {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => UserEntity, user => user.roles)
  user: UserEntity;

}
