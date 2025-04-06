import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Superpower } from "./Superpower";

@Entity()
export class Hero {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  apellido!: string;

  @OneToMany(() => Superpower, superpower => superpower.hero, { cascade: true })
  superpowers: Superpower[] = [];
}
