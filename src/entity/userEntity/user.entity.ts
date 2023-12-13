/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsEmail, IsNotEmpty } from 'class-validator';
import { BaseEntity } from '../../common/base.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Exclude} from 'class-transformer';
import { Role } from '../roleEntity/role.entity';

@Entity()
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    @IsNotEmpty()
    password: string;

    @Column()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @OneToMany(type => Role, roles => roles.id)
    roles: Role[];
}