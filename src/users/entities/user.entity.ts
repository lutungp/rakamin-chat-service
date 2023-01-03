import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, Unique, Index } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Index(['email'], { unique: true })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  // @BeforeUpdate()
  // @BeforeInsert()
  // async setPassword(password: string): Promise<void> {
  //   const salt = await bcrypt.genSalt();
  //   this.password = await bcrypt.hash(password || this.password, salt);
  // }
}